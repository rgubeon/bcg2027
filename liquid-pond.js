/* Liquid pond — fixed WebGL surface: a fluid mesh gradient (five drifting
   colour points + one that follows the cursor), a circular magnifying lens
   at the pointer, film grain, and soft relief ripples dropped by content. */
(function () {
  if (window.LiquidPond) return;
  var N = 12, SCALE = 0.12, frames = 0, hard = 0, fast = 0;
  var VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  var FS = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform float uFlow;
uniform vec2 uMouse; uniform float uMouseAmt;
uniform vec2 uLens; uniform float uLensR; uniform float uLensAmt;
uniform vec3 uCol[5];
uniform vec4 uRip[12]; uniform float uRipOn; uniform float uGlow; uniform float uGrain;
vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0); m=m*m; m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5); vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
float rip(vec2 P){
  vec2 D=uRes/min(uRes.x,uRes.y); float h=0.0;
  for(int i=0;i<12;i++){
    vec4 r=uRip[i];
    if(r.w<=0.0) continue;
    float t=uTime-r.z;
    if(t<0.0||t>9.0) continue;
    float d=length(P-r.xy*D);
    float x=d-(0.04+t*0.16);
    float w=0.05+0.035*t;
    float env=exp(-(x*x)/(w*w));
    float fade=0.7*exp(-t*0.5)*smoothstep(9.0,6.0,t)*smoothstep(0.0,0.3,t);
    h+=sin(x*46.0-t*1.4)*env*fade*r.w/(1.0+d*3.0);
  }
  return h;
}
vec3 mesh(vec2 p, vec2 D){
  float t=uFlow;
  p+=0.24*vec2(snoise(p*0.8+vec2(t*0.55,0.0)), snoise(p*0.8+vec2(3.1,7.4)-vec2(0.0,t*0.45)));
  p.y+=0.085*sin(p.x*3.6+t*1.6)+0.045*sin(p.x*7.1-t*1.1+p.y*2.0);
  p.x+=0.07*sin(p.y*4.4-t*1.3)+0.03*sin(p.y*9.0+t*0.8);
  float d2[5]; float dmin=1e4;
  for(int i=0;i<5;i++){
    float fi=float(i);
    vec2 c=D*vec2(0.5+0.48*sin(t*(0.9+fi*0.23)+fi*1.7), 0.5+0.5*cos(t*(0.7+fi*0.19)+fi*2.3));
    vec2 d=p-c; d2[i]=dot(d,d); dmin=min(dmin,d2[i]);
  }
  vec3 acc=vec3(0.0); float ws=0.0;
  for(int i=0;i<5;i++){ float w=exp(-(d2[i]-dmin)*8.4); acc+=uCol[i]*w; ws+=w; }
  vec2 m=uMouse*D; vec2 dm=p-m;
  float wm=1.6*uMouseAmt*uMouseAmt*exp(clamp(8.4*dmin-14.0*dot(dm,dm),-60.0,60.0));
  acc+=uCol[2]*wm; ws+=wm;
  vec3 c=clamp(acc/max(ws,1.0),0.0,1.0);
  float rib=sin((p.x*1.3+p.y*2.1)*5.0+t*2.2+sin(p.x*2.3-t)*1.5);
  c*=1.0+0.035*rib;
  return c;
}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes; float mn=min(uRes.x,uRes.y); vec2 D=uRes/mn; float asp=D.x/D.y;
  vec2 P=uv*D;
  vec2 g=vec2(0.0); float e=2.0/mn;
  if(uRipOn>0.5){ g=vec2(rip(P+vec2(e,0.0))-rip(P-vec2(e,0.0)), rip(P+vec2(0.0,e))-rip(P-vec2(0.0,e)))/(2.0*e*46.0); }
  P+=g*0.03;
  vec2 L=uLens*D; vec2 dl=P-L; float dist=length(dl);
  float R=max(uLensR,0.001);
  float inL=(1.0-smoothstep(R-2.0/mn,R,dist))*uLensAmt;
  float k=clamp(dist/R,0.0,1.0);
  vec2 S=mix(P, L+dl*(0.38+0.62*k*k), inL);
  vec3 col=mesh(S,D);
  col+=vec3(0.02,-0.01,0.03)*k*k*k*inL;
  col=mix(vec3(dot(col,vec3(0.299,0.587,0.114))),col,uGlow);
  vec3 n=normalize(vec3(-g*0.8,1.0)); vec3 Ld=normalize(vec3(-0.5,0.65,0.6));
  col+=(dot(n,Ld)-Ld.z)*0.32;
  col+=pow(max(dot(reflect(-Ld,n),vec3(0.0,0.0,1.0)),0.0),70.0)*smoothstep(0.0,0.03,length(g))*0.25;
  vec2 lq=dl/R-vec2(-0.38,0.38);
  col+=exp(-dot(lq,lq)*4.0)*inL*0.07;
  col+=smoothstep(R*0.8,R,dist)*inL*0.05;
  col-=smoothstep(R*1.45,R,dist)*(1.0-inL)*uLensAmt*0.045;
  
  col+=(hash(floor(gl_FragCoord.xy))-0.5)*uGrain;
  col*=0.965+0.035*smoothstep(1.4,0.3,length((uv-0.5)*vec2(asp*0.7,1.0)));
  gl_FragColor=vec4(col,1.0);
}`;

  var S = {
    gl: null, cv: null, u: {}, rips: new Float32Array(N * 4), ri: 0, col: new Float32Array(15),
    t0: performance.now(), flow: 0, last: 0, cur: null, tgt: null,
    mouse: [0.5, 0.5], mT: [0.5, 0.5], mAmt: 0, mAmtT: 0,
    lens: [0.5, 0.5], lensR: 44, lensRT: 44, press: 1, pressC: 1, lensAmt: 0, lensOn: false, lensVis: false,
    speed: 1, k: 1, glow: 1, grain: 0.016, trail: false, lastTrail: 0, lastPos: null
  };

  function hex(h) { h = h.replace('#', ''); return [parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255]; }
  function now() { return (performance.now() - S.t0) / 1000; }

  function compile(gl, type, src) {
    var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn('[pond]', gl.getShaderInfoLog(s)); return null; }
    return s;
  }

  function resize() {
    if (!S.cv) return;
    var w = Math.max(2, Math.round(window.innerWidth * SCALE)), h = Math.max(2, Math.round(window.innerHeight * SCALE));
    if (S.cv.width !== w || S.cv.height !== h) { S.cv.width = w; S.cv.height = h; }
    if (S.gl) S.gl.viewport(0, 0, w, h);
  }

  function ripple(x, y, amp) {
    var a = (amp == null ? 1 : amp) * S.k;
    if (a <= 0) return;
    var i = (S.ri++ % N) * 4;
    S.rips[i] = x / window.innerWidth; S.rips[i + 1] = 1 - y / window.innerHeight; S.rips[i + 2] = now(); S.rips[i + 3] = a;
  }

  function onMove(ev) {
    var x = ev.clientX, y = ev.clientY, first = !S.lensVis;
    S.mT = [x / window.innerWidth, 1 - y / window.innerHeight];
    S.mAmtT = 1; S.lensVis = true;
    if (first) S.lens = S.mT.slice();
    if (!S.trail) return;
    var t = performance.now(), lp = S.lastPos, d = lp ? Math.hypot(x - lp[0], y - lp[1]) : 999;
    if (d > 70 && t - S.lastTrail > 110) { S.lastTrail = t; S.lastPos = [x, y]; ripple(x, y, 0.08); }
  }

  function loop() {
    requestAnimationFrame(loop);
    var gl = S.gl; if (!gl || !S.cur || S.paused) { S.last = now(); return; }
    if (window.innerWidth > 0 && S.cv.width !== Math.max(2, Math.round(window.innerWidth * SCALE))) resize();
    var t = now(), raw = t - S.last, dt = Math.min(0.1, raw); S.last = t; frames++;
    if (raw > 0.08) hard++; else hard = 0;
    if (raw < 0.02) fast++; else fast = 0;
    
    if (frames > 2 && hard >= 2 && SCALE > 0.1) { hard = 0; SCALE = Math.max(0.1, SCALE * 0.55); resize(); }
    if (SCALE <= 0.1 && raw > 0.12 && (frames % 3)) return;
    var act = 0; for (var k = 0; k < N; k++) if (S.rips[k * 4 + 3] > 0 && t - S.rips[k * 4 + 2] < 9) act = 1;
    S.flow += dt * 0.08 * S.speed;
    for (var c = 0; c < 5; c++) for (var j = 0; j < 3; j++) { S.cur[c][j] += (S.tgt[c][j] - S.cur[c][j]) * 0.02; S.col[c * 3 + j] = S.cur[c][j]; }
    S.mouse[0] += (S.mT[0] - S.mouse[0]) * 0.035; S.mouse[1] += (S.mT[1] - S.mouse[1]) * 0.035;
    S.lens[0] += (S.mT[0] - S.lens[0]) * 0.2; S.lens[1] += (S.mT[1] - S.lens[1]) * 0.2;
    S.pressC += (S.press - S.pressC) * 0.2;
    S.lensR += (S.lensRT * S.pressC - S.lensR) * 0.12;
    S.mAmt += (S.mAmtT - S.mAmt) * 0.03;
    S.lensAmt += (((S.lensOn && S.lensVis) ? 1 : 0) - S.lensAmt) * 0.12;
    var u = S.u;
    gl.uniform2f(u.uRes, S.cv.width, S.cv.height);
    gl.uniform1f(u.uTime, t); gl.uniform1f(u.uFlow, S.flow);
    gl.uniform2f(u.uMouse, S.mouse[0], S.mouse[1]); gl.uniform1f(u.uMouseAmt, S.mAmt);
    gl.uniform2f(u.uLens, S.lens[0], S.lens[1]); gl.uniform1f(u.uLensR, S.lensR / Math.min(window.innerWidth, window.innerHeight)); gl.uniform1f(u.uLensAmt, S.lensAmt);
    gl.uniform3fv(u.uCol, S.col);
    gl.uniform4fv(u.uRip, S.rips); gl.uniform1f(u.uRipOn, act);
    gl.uniform1f(u.uGlow, S.glow); gl.uniform1f(u.uGrain, SCALE < 0.3 ? 0.0 : S.grain);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function mount(el) {
    if (!el || S.cv) return;
    var cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    var gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: true });
    if (!gl) return;
    var vs = compile(gl, gl.VERTEX_SHADER, VS), fs = compile(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;
    var pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { console.warn('[pond]', gl.getProgramInfoLog(pr)); return; }
    gl.useProgram(pr);
    var soft = false;
    try { var rn = ''; var dbg = gl.getExtension('WEBGL_debug_renderer_info'); rn = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER); soft = /swiftshader|llvmpipe|software|basic render/i.test(String(rn)); } catch (e) {}
    SCALE = soft ? 0.12 : 0.5;
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    ['uRes', 'uTime', 'uFlow', 'uMouse', 'uMouseAmt', 'uLens', 'uLensR', 'uLensAmt', 'uRipOn', 'uGlow', 'uGrain'].forEach(function (n) { S.u[n] = gl.getUniformLocation(pr, n); });
    S.u.uRip = gl.getUniformLocation(pr, 'uRip[0]');
    S.u.uCol = gl.getUniformLocation(pr, 'uCol[0]');
    S.gl = gl; S.cv = cv;
    cv.addEventListener('webglcontextlost', function (e) { e.preventDefault(); });
    el.appendChild(cv);

    if (!S.cur) setPalette(['#f3eeea', '#d9fddb', '#46f86f', '#9ef7b1', '#ffffff']);
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', function () { S.mAmtT = 0; S.lensVis = false; });
    S.last = now();
    requestAnimationFrame(loop);
  }

  function setPalette(arr) {
    var a = arr.slice(0, 5); while (a.length < 5) a.push(a[a.length - 1]);
    S.tgt = a.map(hex);
    if (!S.cur) S.cur = S.tgt.map(function (c) { return c.slice(); });
  }

  window.LiquidPond = {
    mount: mount, ripple: ripple, setPalette: setPalette,
    setSpeed: function (v) { S.speed = v; },
    setIntensity: function (v) { S.k = v; },
    setGlow: function (v) { S.glow = v; },
    setGrain: function (v) { S.grain = v; },
    setTrail: function (v) { S.trail = !!v; },
    setPaused: function (v) { S.paused = !!v; },
    setLens: function (o) {
      if (o.on != null) S.lensOn = !!o.on;
      if (o.r != null) S.lensRT = o.r;
      if (o.press != null) S.press = o.press;
      if (o.vis != null) S.lensVis = !!o.vis;
    },
    cursor: function () {
      return { x: S.lens[0] * window.innerWidth, y: (1 - S.lens[1]) * window.innerHeight, r: S.lensR, a: S.lensAmt };
    }
  };
})();
