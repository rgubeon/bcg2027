/* Zen soundscape — generative and bright: a warm major-9 pad drifting through
   four open chords, a soft pentatonic pluck melody, a light air bed, and
   bells when the pond ripples. v3: chimes only — the ambient pad and melody are silenced (music comes from the playlist). */
(function () {
  if (window.ZenAudio) return;
  var ctx, master, pad, filt, revIn, on = false, voices = [], step = 0, suspendT = null, lastChime = 0, melT = null;
  var CH = [
    [146.83, 220.00, 277.18, 329.63, 369.99],
    [196.00, 246.94, 293.66, 369.99, 440.00],
    [164.81, 196.00, 246.94, 293.66, 369.99],
    [220.00, 277.18, 329.63, 369.99, 493.88]
  ];
  var PENTA = [587.33, 659.25, 739.99, 880.00, 987.77, 1174.66, 1318.51, 1479.98];

  function impulse(sec, decay) {
    var r = ctx.sampleRate, n = Math.floor(r * sec), b = ctx.createBuffer(2, n, r);
    for (var c = 0; c < 2; c++) { var d = b.getChannelData(c); for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
    return b;
  }
  function lfo(rate, depth, param) {
    var o = ctx.createOscillator(); o.frequency.value = rate;
    var g = ctx.createGain(); g.gain.value = depth; o.connect(g); g.connect(param); o.start(); return o;
  }
  function voice(f, i) {
    var base = 0.05 / (1 + i * 0.28);
    var g = ctx.createGain(); g.gain.value = base;
    var o1 = ctx.createOscillator(); o1.type = 'sine'; o1.frequency.value = f;
    var o2 = ctx.createOscillator(); o2.type = 'triangle'; o2.frequency.value = f * 1.002;
    var g2 = ctx.createGain(); g2.gain.value = 0.42;
    o1.connect(g); o2.connect(g2); g2.connect(g); g.connect(pad);
    o1.start(); o2.start();
    lfo(0.05 + i * 0.017, base * 0.55, g.gain);
    return { o1: o1, o2: o2 };
  }
  function nextChord() {
    if (!ctx) return;
    step = (step + 1) % CH.length; var t = ctx.currentTime;
    CH[step].forEach(function (f, i) { var v = voices[i]; if (!v) return; v.o1.frequency.setTargetAtTime(f, t, 1.6); v.o2.frequency.setTargetAtTime(f * 1.002, t, 1.6); });
  }
  function air() {
    var n = ctx.sampleRate * 4, b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    var s = ctx.createBufferSource(); s.buffer = b; s.loop = true;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 0.8;
    var g = ctx.createGain(); g.gain.value = 0;
    s.connect(bp); bp.connect(g); g.connect(master); g.connect(revIn);
     lfo(0.03, 900, bp.frequency);
    s.start();
  }
  function tone(f, amp, dur, pan, wet) {
    var t = ctx.currentTime;
    var out = ctx.createGain();
    var dest = out;
    if (ctx.createStereoPanner) { var p = ctx.createStereoPanner(); p.pan.value = pan; out.connect(p); dest = p; }
    var dry = ctx.createGain(); dry.gain.value = 1 - wet * 0.5; dest === out ? out.connect(dry) : dest.connect(dry); dry.connect(master);
    var send = ctx.createGain(); send.gain.value = wet; dest === out ? out.connect(send) : dest.connect(send); send.connect(revIn);
    [[1, 1, dur], [2, 0.22, dur * 0.5], [3, 0.06, dur * 0.3]].forEach(function (q) {
      var o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * q[0];
      var g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(amp * q[1], t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + q[2]);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + q[2] + 0.1);
    });
  }
  function melody() {
    clearTimeout(melT);
    if (!on || !ctx) return;
    if (Math.random() < 0.72) {
      var f = PENTA[Math.floor(Math.random() * PENTA.length)];
      tone(f, 0.022, 1.8, (Math.random() - 0.5) * 1.1, 0.55);
      if (Math.random() < 0.25) setTimeout(function () { if (on) tone(f * (Math.random() < 0.5 ? 1.25 : 1.5), 0.015, 1.6, (Math.random() - 0.5) * 1.1, 0.6); }, 220);
    }
    melT = setTimeout(melody, 1400 + Math.random() * 2200);
  }
  function init() {
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0;
    var comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3;
    master.connect(comp); comp.connect(ctx.destination);
    var rev = ctx.createConvolver(); rev.buffer = impulse(3.6, 3.2);
    revIn = ctx.createGain(); revIn.connect(rev);
    var wet = ctx.createGain(); wet.gain.value = 0.42; rev.connect(wet); wet.connect(master);
    pad = ctx.createGain(); pad.gain.value = 0;
    filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 2000; filt.Q.value = 0.3;
    pad.connect(filt);
    var dry = ctx.createGain(); dry.gain.value = 0.7; filt.connect(dry); dry.connect(master);
    var send = ctx.createGain(); send.gain.value = 0.45; filt.connect(send); send.connect(revIn);
    lfo(0.03, 600, filt.frequency);
    CH[0].forEach(function (f, i) { voices.push(voice(f, i)); });
    air();
    setInterval(nextChord, 12000);
    return true;
  }
  function start() {
    if (!ctx && !init()) return;
    clearTimeout(suspendT);
    if (ctx.state === 'suspended') ctx.resume();
    var was = on; on = true;
    var t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t); master.gain.setTargetAtTime(0.42, t, 0.6);
    
  }
  function stop() {
    on = false; clearTimeout(melT); if (!ctx) return;
    var t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t); master.gain.setTargetAtTime(0, t, 0.35);
    suspendT = setTimeout(function () { if (!on) ctx.suspend(); }, 2200);
  }
  function chime(x, amp) {
    if (!on || !ctx) return;
    var nowMs = performance.now(); if (nowMs - lastChime < 380) return; lastChime = nowMs;
    amp = Math.min(1.6, amp || 1);
    var f = PENTA[Math.floor(Math.random() * 5)] * 2;
    tone(f, 0.03 * amp, 3.2, Math.max(-0.8, Math.min(0.8, (x - 0.5) * 1.6)), 0.75);
  }
  document.addEventListener('visibilitychange', function () { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (on) ctx.resume(); });
  window.ZenAudio = { start: start, stop: stop, chime: chime, isOn: function () { return on; } };
})();
