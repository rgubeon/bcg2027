/* @ds-bundle: {"format":4,"namespace":"BCGBeonWWOMDesignSystem_0a75c3","components":[{"name":"BeonMark","sourcePath":"components/brand/BeonMark.jsx"},{"name":"SlideHeader","sourcePath":"components/brand/SlideHeader.jsx"},{"name":"StripeField","sourcePath":"components/brand/StripeField.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ArrowList","sourcePath":"components/core/ArrowList.jsx"},{"name":"DataTable","sourcePath":"components/core/DataTable.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"InfoCard","sourcePath":"components/core/InfoCard.jsx"},{"name":"NumberPlate","sourcePath":"components/core/NumberPlate.jsx"},{"name":"OrgNode","sourcePath":"components/core/OrgNode.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"PullQuote","sourcePath":"components/core/PullQuote.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"SpecList","sourcePath":"components/core/SpecList.jsx"},{"name":"Accordion","sourcePath":"components/web/Accordion.jsx"},{"name":"ActivityCard","sourcePath":"components/web/ActivityCard.jsx"},{"name":"Button","sourcePath":"components/web/Button.jsx"},{"name":"FilterBar","sourcePath":"components/web/FilterBar.jsx"},{"name":"FormField","sourcePath":"components/web/FormField.jsx"},{"name":"Lightbox","sourcePath":"components/web/Lightbox.jsx"},{"name":"PageHero","sourcePath":"components/web/PageHero.jsx"},{"name":"PasswordGate","sourcePath":"components/web/PasswordGate.jsx"},{"name":"ProgressRail","sourcePath":"components/web/ProgressRail.jsx"},{"name":"Reveal","sourcePath":"components/web/Reveal.jsx"},{"name":"SectionBand","sourcePath":"components/web/SectionBand.jsx"},{"name":"SiteFooter","sourcePath":"components/web/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/web/SiteNav.jsx"},{"name":"TextLink","sourcePath":"components/web/TextLink.jsx"},{"name":"VenueMap","sourcePath":"components/web/VenueMap.jsx"}],"sourceHashes":{"components/brand/BeonMark.jsx":"56d2d0eac1bd","components/brand/SlideHeader.jsx":"7c66bfffb08e","components/brand/StripeField.jsx":"fd19b41e8ae2","components/brand/Wordmark.jsx":"be01e8e796a9","components/core/ArrowList.jsx":"65a235d2bf69","components/core/DataTable.jsx":"9894d2419612","components/core/Eyebrow.jsx":"d657b0dfe2c7","components/core/InfoCard.jsx":"3d321eb61d01","components/core/NumberPlate.jsx":"e9c8f929156d","components/core/OrgNode.jsx":"94d23acf9ba3","components/core/Panel.jsx":"85a40e459dd6","components/core/PhotoFrame.jsx":"47e958a1b215","components/core/Pill.jsx":"d5b10044b247","components/core/PullQuote.jsx":"ae1b38136470","components/core/SectionTitle.jsx":"0eba70029dfc","components/core/SpecList.jsx":"3a8da561edf1","components/web/Accordion.jsx":"216e116eece0","components/web/ActivityCard.jsx":"a0eb45b87047","components/web/Button.jsx":"62f792c46665","components/web/FilterBar.jsx":"4ba6fc4a007c","components/web/FormField.jsx":"b4e8b3224673","components/web/Lightbox.jsx":"c76da1c10c43","components/web/PageHero.jsx":"dfe80bc601c7","components/web/PasswordGate.jsx":"7c32fb189c43","components/web/ProgressRail.jsx":"39ba71d6ab9a","components/web/Reveal.jsx":"4fe8af86d5c0","components/web/SectionBand.jsx":"9d56a04965d9","components/web/SiteFooter.jsx":"248beec12206","components/web/SiteNav.jsx":"d53454c22f48","components/web/TextLink.jsx":"49997b5faeac","components/web/VenueMap.jsx":"5a7b2bacc468","ui_kits/concept-deck/screens.jsx":"61c73ef6004a","ui_kits/proposal-deck/screens.jsx":"f60f17146d1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BCGBeonWWOMDesignSystem_0a75c3 = window.BCGBeonWWOMDesignSystem_0a75c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BeonMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = p => p || typeof window !== 'undefined' && window.DS_ASSET_BASE || 'assets/';
const FILES = {
  black: 'logos/beon-worldwide-black.svg',
  white: 'logos/beon-worldwide-white.svg'
};
function BeonMark({
  tone = 'black',
  height = 54,
  assetBase,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base(assetBase) + (FILES[tone] || FILES.black),
    alt: "beon. worldwide",
    style: {
      height: height + 'px',
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { BeonMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BeonMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/StripeField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RAMP = {
  green: 'repeating-linear-gradient(45deg, #46f86f 0 2px, transparent 2px 9px)',
  soft: 'repeating-linear-gradient(45deg, rgba(70,248,111,.45) 0 2px, transparent 2px 11px)',
  cream: 'repeating-linear-gradient(45deg, rgba(0,39,11,.05) 0 2px, transparent 2px 10px)',
  ink: 'repeating-linear-gradient(45deg, rgba(0,39,11,.55) 0 2px, transparent 2px 9px)'
};
const FADE = {
  'bottom-left': 'linear-gradient(45deg, #000 0%, rgba(0,0,0,.35) 55%, transparent 80%)',
  'top-right': 'linear-gradient(225deg, #000 0%, rgba(0,0,0,.35) 55%, transparent 80%)',
  'top-left': 'linear-gradient(135deg, #000 0%, rgba(0,0,0,.35) 55%, transparent 80%)',
  'bottom-right': 'linear-gradient(315deg, #000 0%, rgba(0,0,0,.35) 55%, transparent 80%)'
};
const POS = {
  'bottom-left': {
    left: 0,
    bottom: 0
  },
  'top-right': {
    right: 0,
    top: 0
  },
  'top-left': {
    left: 0,
    top: 0
  },
  'bottom-right': {
    right: 0,
    bottom: 0
  }
};
function StripeField({
  tone = 'green',
  corner = 'bottom-left',
  width = 320,
  height = 150,
  style,
  ...rest
}) {
  const mask = FADE[corner] || FADE['bottom-left'];
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      width: width + 'px',
      height: height + 'px',
      backgroundImage: RAMP[tone] || RAMP.green,
      WebkitMaskImage: mask,
      maskImage: mask,
      ...(POS[corner] || POS['bottom-left']),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { StripeField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StripeField.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = p => p || typeof window !== 'undefined' && window.DS_ASSET_BASE || 'assets/';
const FILES = {
  green: 'logos/bcg-wordmark-green.svg',
  white: 'logos/bcg-wordmark-white.svg',
  black: 'logos/bcg-wordmark-black.svg'
};
function Wordmark({
  tone = 'green',
  height = 26,
  assetBase,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base(assetBase) + (FILES[tone] || FILES.green),
    alt: "BCG",
    style: {
      height: height + 'px',
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ink: {
    text: 'var(--green-ink)',
    mark: 'var(--green-mid)'
  },
  light: {
    text: 'var(--white)',
    mark: 'var(--green-signal)'
  },
  accentGround: {
    text: 'var(--green-ink)',
    mark: 'var(--green-ink)'
  }
};
function ArrowList({
  items = [],
  marker = '\u2192',
  tone = 'ink',
  size = 13,
  gap = 7,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.ink;
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: gap + 'px',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '14px 1fr',
      gap: '8px',
      font: '400 ' + size + 'px/1.38 var(--font-sans)',
      color: t.text
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: t.mark,
      fontWeight: 700
    }
  }, marker), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { ArrowList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowList.jsx", error: String((e && e.message) || e) }); }

// components/core/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  zebra = true,
  size = 11,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--cream-deep)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: '400 ' + size + 'px/1.3 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      background: 'var(--green-ink)',
      color: 'var(--white)',
      font: '700 ' + size + 'px/1.2 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      textAlign: c.align || 'left',
      padding: '9px 12px',
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: zebra && ri % 2 ? 'var(--mint-200)' : 'var(--cream)'
    }
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: '8px 12px',
      textAlign: c.align || 'left',
      borderTop: '1px solid rgba(0,39,11,.08)'
    }
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ink: 'var(--green-ink)',
  deep: 'var(--green-deep)',
  accent: 'var(--green-signal)',
  light: 'var(--white)',
  muted: 'var(--sage)'
};
function Eyebrow({
  children,
  tone = 'deep',
  size = 13,
  spaced = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      font: '700 ' + size + 'px/1.2 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: spaced ? 'var(--tracking-caps-wide)' : 'var(--tracking-caps)',
      color: TONES[tone] || TONES.deep,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/InfoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    background: 'var(--cream)',
    color: 'var(--green-ink)',
    border: '1px solid var(--cream-deep)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-ink)'
  },
  mint: {
    background: 'var(--mint-300)',
    color: 'var(--green-deep)',
    border: '1px solid var(--mint-300)'
  },
  ink: {
    background: 'var(--green-ink)',
    color: 'var(--white)',
    border: '1px solid var(--green-ink)'
  },
  accent: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-signal)'
  }
};
function InfoCard({
  title,
  children,
  tone = 'paper',
  align = 'left',
  pad = 16,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  const heading = tone === 'ink' ? 'var(--green-signal)' : 'var(--green-deep)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pad + 'px',
      textAlign: align,
      ...t,
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1.25 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: heading,
      marginBottom: '8px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-sans)'
    }
  }, children));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberPlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumberPlate({
  number,
  project,
  year,
  assetBase,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-deep)',
      borderRadius: 'var(--radius-plate)',
      minWidth: '150px',
      padding: '18px 34px',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 66px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: 'var(--green-forest)'
    }
  }, number)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-forest)',
      borderRadius: 'var(--radius-plate)',
      padding: '18px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "white",
    height: 34,
    assetBase: assetBase
  }), project ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1.2 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--green-signal)'
    }
  }, project, year ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--white)'
    }
  }, ' ' + year) : null) : null));
}
Object.assign(__ds_scope, { NumberPlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberPlate.jsx", error: String((e && e.message) || e) }); }

// components/core/OrgNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  lead: {
    background: 'var(--green-ink)',
    color: 'var(--white)',
    border: '1px solid var(--green-ink)'
  },
  node: {
    background: 'var(--white)',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-ink)'
  },
  leaf: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-signal)'
  },
  quiet: {
    background: 'var(--mint-200)',
    color: 'var(--green-deep)',
    border: '1px solid var(--mint-200)'
  }
};
function OrgNode({
  name,
  role,
  variant = 'node',
  width = 150,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.node;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-pill)',
      padding: role ? '7px 16px' : '6px 14px',
      width: width ? width + 'px' : undefined,
      textAlign: 'center',
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 9px/1.25 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, name), role ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 8px/1.3 var(--font-sans)',
      opacity: .85
    }
  }, role) : null);
}
Object.assign(__ds_scope, { OrgNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/OrgNode.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  cream: {
    background: 'var(--cream)',
    color: 'var(--green-ink)'
  },
  paper: {
    background: 'var(--panel)',
    color: 'var(--green-ink)'
  },
  white: {
    background: 'var(--white)',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-signal)'
  },
  mint: {
    background: 'var(--mint-300)',
    color: 'var(--green-deep)'
  },
  ink: {
    background: 'var(--green-ink)',
    color: 'var(--white)'
  },
  forest: {
    background: 'var(--green-forest)',
    color: 'var(--white)'
  },
  accent: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)'
  }
};
const CORNERS = {
  'bottom-right': 3,
  'bottom-left': 2,
  'top-right': 1,
  'top-left': 0,
  none: -1
};
function Panel({
  children,
  tone = 'cream',
  signature = 'bottom-right',
  radius = 56,
  pad = 30,
  grain = false,
  style,
  ...rest
}) {
  const r = Array(4).fill(radius + 'px');
  const idx = CORNERS[signature];
  if (idx >= 0) r[idx] = 'var(--radius-signature)';
  const t = TONES[tone] || TONES.cream;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: pad + 'px',
      borderRadius: r.join(' '),
      ...t,
      backgroundImage: grain ? 'var(--paper-grain)' : undefined,
      backgroundBlendMode: grain ? 'multiply' : undefined,
      backgroundSize: grain ? 'cover' : undefined,
      backgroundPosition: grain ? 'center' : undefined,
      backgroundRepeat: grain ? 'no-repeat' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  radius = 14,
  caption,
  float = false,
  objectPosition = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: radius + 'px',
      overflow: 'hidden',
      background: 'var(--cream-deep)',
      boxShadow: float ? 'var(--shadow-photo)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition,
      display: 'block'
    }
  })), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: '400 8px/1.3 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--sage)',
      marginTop: '6px'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  outline: {
    background: 'transparent',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-ink)'
  },
  'outline-light': {
    background: 'transparent',
    color: 'var(--green-signal)',
    border: '1px solid var(--green-signal)'
  },
  ink: {
    background: 'var(--green-ink)',
    color: 'var(--white)',
    border: '1px solid var(--green-ink)'
  },
  accent: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)',
    border: '1px solid var(--green-signal)'
  },
  mint: {
    background: 'var(--mint-300)',
    color: 'var(--green-deep)',
    border: '1px solid var(--mint-300)'
  }
};
const SIZES = {
  sm: {
    font: '700 9px/1 var(--font-sans)',
    padding: '4px 10px'
  },
  md: {
    font: '700 11px/1 var(--font-sans)',
    padding: '6px 14px'
  },
  lg: {
    font: '700 13px/1 var(--font-sans)',
    padding: '8px 18px'
  }
};
function Pill({
  children,
  variant = 'outline',
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      whiteSpace: 'nowrap',
      ...(SIZES[size] || SIZES.md),
      ...(VARIANTS[variant] || VARIANTS.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/brand/SlideHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    mark: 'green',
    pill: 'outline',
    arrow: '#00270b'
  },
  dark: {
    mark: 'white',
    pill: 'outline-light',
    arrow: '#46f86f'
  },
  accent: {
    mark: 'black',
    pill: 'outline',
    arrow: '#00270b'
  }
};
function SlideHeader({
  project,
  tone = 'paper',
  arrow = '\u2197',
  markHeight = 22,
  assetBase,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: t.mark,
    height: markHeight,
    assetBase: assetBase
  }), project ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    variant: t.pill
  }, project) : null, arrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '400 15px/1 var(--font-sans)',
      color: t.arrow
    }
  }, arrow) : null);
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SlideHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PullQuote({
  quote,
  label,
  tone = 'ink',
  size = 26,
  style,
  ...rest
}) {
  const color = tone === 'light' ? 'var(--white)' : 'var(--green-ink)';
  const rule = tone === 'light' ? 'var(--green-signal)' : 'var(--green-ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: '20px',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + Math.round(size * .78) + 'px/1.05 var(--font-serif)',
      color: color,
      alignSelf: 'center',
      whiteSpace: 'pre-line'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      background: rule,
      opacity: .5
    }
  })) : null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: '400 ' + size + 'px/1.2 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: color
    }
  }, quote));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ink: {
    title: 'var(--green-ink)',
    sub: 'var(--sage)',
    rule: 'var(--green-signal)',
    kicker: 'deep'
  },
  light: {
    title: 'var(--white)',
    sub: 'var(--mint-300)',
    rule: 'var(--green-signal)',
    kicker: 'accent'
  },
  accentGround: {
    title: 'var(--green-ink)',
    sub: 'var(--green-deep)',
    rule: 'var(--green-ink)',
    kicker: 'ink'
  }
};
function SectionTitle({
  kicker,
  title,
  sub,
  size = 34,
  rule = true,
  ruleWidth = '100%',
  tone = 'ink',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.ink;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), kicker ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: t.kicker,
    size: 13,
    style: {
      marginBottom: '10px'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 ' + size + 'px/1.14 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: t.title,
      margin: 0
    }
  }, title, sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.sub
    }
  }, ' ' + sub) : null), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: ruleWidth,
      height: '2px',
      background: t.rule,
      marginTop: '14px'
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecList({
  items = [],
  tone = 'ink',
  columns = 1,
  style,
  ...rest
}) {
  const label = tone === 'light' ? 'var(--green-signal)' : 'var(--green-deep)';
  const value = tone === 'light' ? 'var(--white)' : 'var(--green-ink)';
  const mark = tone === 'light' ? 'var(--green-signal)' : 'var(--green-mid)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))',
      gap: '14px 28px',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px/1.2 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: label,
      marginBottom: '4px'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '14px 1fr',
      gap: '6px',
      font: '400 12px/1.35 var(--font-sans)',
      color: value
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: mark,
      fontWeight: 700
    }
  }, '\u2192'), /*#__PURE__*/React.createElement("span", null, it.value)))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/web/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  multiple = false,
  tone = 'paper',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : multiple ? [...o, i] : [i]);
  const dark = tone === 'dark';
  const line = dark ? 'rgba(70,248,111,.35)' : 'rgba(0,39,11,.14)';
  const fg = dark ? 'var(--white)' : 'var(--green-ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid ' + line,
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid ' + line
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": on,
      style: {
        width: '100%',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'baseline',
        gap: '18px',
        textAlign: 'left',
        padding: '22px 4px',
        minHeight: '44px'
      }
    }, it.meta ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 var(--text-web-label)/1.2 var(--font-sans)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: dark ? 'var(--green-signal)' : 'var(--green-mid)',
        minWidth: '92px'
      }
    }, it.meta) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: '400 var(--text-web-h3)/1.2 var(--font-serif)',
        letterSpacing: 'var(--tracking-display)',
        color: fg
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        font: '400 18px/1 var(--font-sans)',
        color: dark ? 'var(--green-signal)' : 'var(--green-mid)',
        transform: on ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-brand)'
      }
    }, '\u2198')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-brand)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 26px',
        font: '400 var(--text-web-body)/1.5 var(--font-sans)',
        color: fg,
        maxWidth: '72ch'
      }
    }, it.body))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/web/ActivityCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ActivityCard({
  title,
  kicker,
  photo,
  category,
  timing,
  facts = [],
  onOpen,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      cursor: onOpen ? 'pointer' : 'default',
      background: 'var(--cream)',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-photo)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-brand), box-shadow var(--dur-base) var(--ease-brand)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--cream-deep)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '12px',
      top: '12px',
      display: 'flex',
      gap: '6px'
    }
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    variant: "ink",
    size: "sm"
  }, category) : null, timing ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    variant: "accent",
    size: "sm"
  }, timing) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '400 var(--text-web-h3)/1.15 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--green-ink)'
    }
  }, title), kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--text-web-label)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-mid)'
    }
  }, kicker) : null, facts.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '12px',
      borderTop: '1px solid rgba(0,39,11,.12)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 18px'
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: '400 var(--text-web-small)/1.3 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-mid)',
      fontWeight: 700
    }
  }, '\u2192 '), f))) : null));
}
Object.assign(__ds_scope, { ActivityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/ActivityCard.jsx", error: String((e && e.message) || e) }); }

// components/web/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--green-signal)',
      color: 'var(--green-ink)',
      border: '1px solid var(--green-signal)'
    },
    hover: {
      background: 'var(--state-accent-hover)',
      borderColor: 'var(--state-accent-hover)'
    },
    press: {
      background: 'var(--state-accent-press)',
      color: 'var(--white)',
      borderColor: 'var(--state-accent-press)'
    }
  },
  secondary: {
    rest: {
      background: 'transparent',
      color: 'var(--green-ink)',
      border: '1px solid var(--green-ink)'
    },
    hover: {
      background: 'var(--green-ink)',
      color: 'var(--white)'
    },
    press: {
      background: 'var(--green-forest)',
      color: 'var(--white)',
      borderColor: 'var(--green-forest)'
    }
  },
  onDark: {
    rest: {
      background: 'transparent',
      color: 'var(--green-signal)',
      border: '1px solid var(--green-signal)'
    },
    hover: {
      background: 'var(--green-signal)',
      color: 'var(--green-ink)'
    },
    press: {
      background: 'var(--state-accent-press)',
      color: 'var(--white)',
      borderColor: 'var(--state-accent-press)'
    }
  },
  quiet: {
    rest: {
      background: 'transparent',
      color: 'var(--green-ink)',
      border: '1px solid transparent'
    },
    hover: {
      background: 'var(--state-tint-hover)'
    },
    press: {
      background: 'var(--mint-300)'
    }
  }
};
const SIZES = {
  sm: {
    font: '700 12px/1 var(--font-sans)',
    padding: '10px 16px'
  },
  md: {
    font: '700 13px/1 var(--font-sans)',
    padding: '14px 22px'
  },
  lg: {
    font: '700 14px/1 var(--font-sans)',
    padding: '17px 28px'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow,
  as = 'button',
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      cursor: disabled ? 'default' : 'pointer',
      textDecoration: 'none',
      minHeight: '44px',
      transition: 'background var(--dur-fast) var(--ease-brand), color var(--dur-fast) var(--ease-brand), border-color var(--dur-fast) var(--ease-brand)',
      opacity: disabled ? .4 : 1,
      ...(SIZES[size] || SIZES.md),
      ...v.rest,
      ...(hover && !disabled ? v.hover : null),
      ...(press && !disabled ? v.press : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: '400 14px/1 var(--font-sans)',
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-brand)'
    }
  }, arrow === true ? '\u2192' : arrow) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/Button.jsx", error: String((e && e.message) || e) }); }

// components/web/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterBar({
  groups = [],
  value = {},
  onChange,
  resultCount,
  style,
  ...rest
}) {
  const set = (key, option) => {
    const cur = value[key];
    onChange && onChange({
      ...value,
      [key]: cur === option ? null : option
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '20px 28px',
      ...style
    }
  }, rest), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 var(--text-web-label)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-mid)'
    }
  }, g.label), g.options.map(o => {
    const on = value[g.key] === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => set(g.key, o),
      "aria-pressed": on,
      style: {
        font: '700 12px/1 var(--font-sans)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        padding: '11px 16px',
        minHeight: '44px',
        cursor: 'pointer',
        background: on ? 'var(--green-ink)' : 'transparent',
        color: on ? 'var(--white)' : 'var(--green-ink)',
        border: '1px solid ' + (on ? 'var(--green-ink)' : 'rgba(0,39,11,.35)'),
        transition: 'background var(--dur-fast) var(--ease-brand), color var(--dur-fast) var(--ease-brand)'
      }
    }, o);
  }))), typeof resultCount === 'number' ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: '400 var(--text-web-small)/1 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, resultCount, " activities") : null);
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/web/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  options,
  hint,
  error,
  tone = 'paper',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  const fg = dark ? 'var(--white)' : 'var(--green-ink)';
  const border = error ? 'var(--green-mid)' : dark ? 'rgba(70,248,111,.55)' : 'rgba(0,39,11,.35)';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '48px',
    background: dark ? 'transparent' : 'var(--white)',
    color: fg,
    font: '400 var(--text-web-body)/1.3 var(--font-sans)',
    border: '1px solid ' + border,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 14px',
    outline: 'none',
    boxShadow: focus ? dark ? 'var(--focus-ring-dark)' : 'var(--focus-ring)' : 'none',
    transition: 'box-shadow var(--dur-fast) var(--ease-brand), border-color var(--dur-fast) var(--ease-brand)'
  };
  const common = {
    name,
    value,
    placeholder,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 var(--text-web-label)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: dark ? 'var(--green-signal)' : 'var(--green-deep)'
    }
  }, label) : null, options ? /*#__PURE__*/React.createElement("select", common, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 4
  }, common, {
    style: {
      ...field,
      minHeight: '112px',
      resize: 'vertical'
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)), hint && !error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--text-web-small)/1.35 var(--font-sans)',
      color: dark ? 'var(--mint-300)' : 'var(--sage)'
    }
  }, hint) : null, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 var(--text-web-small)/1.35 var(--font-sans)',
      color: dark ? 'var(--green-signal)' : 'var(--green-mid)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/FormField.jsx", error: String((e && e.message) || e) }); }

// components/web/Lightbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Lightbox({
  images = [],
  index = 0,
  onClose,
  onIndex,
  style,
  ...rest
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') onIndex && onIndex((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onIndex && onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, onClose, onIndex]);
  if (!images.length) return null;
  const img = images[index];
  const nav = d => e => {
    e.stopPropagation();
    onIndex && onIndex((index + d + images.length) % images.length);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 70,
      background: 'var(--overlay-scrim)',
      display: 'grid',
      placeItems: 'center',
      padding: '40px var(--container-pad)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      maxWidth: '1100px',
      width: '100%'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: img.alt || '',
    style: {
      width: '100%',
      maxHeight: '74vh',
      objectFit: 'contain',
      borderRadius: 'var(--radius-photo)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginTop: '14px',
      font: '700 var(--text-web-label)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-signal)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--white)'
    }
  }, img.alt), /*#__PURE__*/React.createElement("button", {
    onClick: nav(-1),
    "aria-label": "Previous",
    style: {
      background: 'transparent',
      border: '1px solid var(--green-signal)',
      color: 'var(--green-signal)',
      borderRadius: 'var(--radius-pill)',
      minHeight: '44px',
      padding: '10px 16px',
      cursor: 'pointer',
      font: 'inherit'
    }
  }, '\u2190'), /*#__PURE__*/React.createElement("span", null, index + 1, " / ", images.length), /*#__PURE__*/React.createElement("button", {
    onClick: nav(1),
    "aria-label": "Next",
    style: {
      background: 'transparent',
      border: '1px solid var(--green-signal)',
      color: 'var(--green-signal)',
      borderRadius: 'var(--radius-pill)',
      minHeight: '44px',
      padding: '10px 16px',
      cursor: 'pointer',
      font: 'inherit'
    }
  }, '\u2192'))));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/web/PageHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GROUNDS = {
  cream: {
    background: 'var(--cream)',
    color: 'var(--green-ink)',
    kicker: 'deep',
    rule: 'var(--green-signal)'
  },
  paper: {
    background: 'var(--paper)',
    color: 'var(--green-ink)',
    kicker: 'deep',
    rule: 'var(--green-signal)'
  },
  accent: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)',
    kicker: 'ink',
    rule: 'var(--green-ink)'
  },
  ink: {
    background: 'var(--green-ink)',
    color: 'var(--white)',
    kicker: 'accent',
    rule: 'var(--green-signal)'
  },
  gradient: {
    backgroundImage: 'var(--hero-gradient)',
    color: 'var(--green-ink)',
    kicker: 'ink',
    rule: 'var(--green-ink)'
  }
};
function PageHero({
  kicker,
  title,
  lead,
  ground = 'cream',
  photo,
  children,
  minHeight = 420,
  style,
  ...rest
}) {
  const g = GROUNDS[ground] || GROUNDS.cream;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...g,
      ...style
    }
  }, rest), photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px var(--container-pad) 64px',
      minHeight: minHeight + 'px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: '18px'
    }
  }, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: g.kicker,
    size: 12
  }, kicker) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 var(--text-web-hero)/1.02 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: g.color,
      maxWidth: '18ch'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '320px',
      maxWidth: '60%',
      height: '2px',
      background: g.rule
    }
  }), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 var(--text-web-lead)/1.4 var(--font-sans)',
      color: g.color,
      maxWidth: '58ch'
    }
  }, lead) : null, children));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/web/PasswordGate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PasswordGate({
  project = '',
  code = '',
  title = 'This proposal is private',
  note,
  onUnlock,
  assetBase,
  style,
  ...rest
}) {
  const [entry, setEntry] = React.useState('');
  const [error, setError] = React.useState(null);
  const submit = e => {
    e.preventDefault();
    if (!code || entry.trim().toLowerCase() === code.toLowerCase()) {
      setError(null);
      onUnlock && onUnlock();
    } else setError('That code is not recognised. Check your invitation.');
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'var(--green-ink)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--container-pad)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '46%',
      height: '52%',
      backgroundImage: 'var(--stripes-green-soft)',
      WebkitMaskImage: 'linear-gradient(45deg,#000,transparent 78%)',
      maskImage: 'linear-gradient(45deg,#000,transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: '420px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "white",
    height: 26,
    assetBase: assetBase
  }), project ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--text-web-label)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-signal)'
    }
  }, project) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 var(--text-web-h2)/1.1 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--white)'
    }
  }, title), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 var(--text-web-small)/1.5 var(--font-sans)',
      color: 'var(--mint-300)'
    }
  }, note) : null, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    tone: "dark",
    label: "Access code",
    type: "password",
    value: entry,
    onChange: e => setEntry(e.target.value),
    error: error
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    arrow: true,
    onClick: submit
  }, "Enter")));
}
Object.assign(__ds_scope, { PasswordGate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/PasswordGate.jsx", error: String((e && e.message) || e) }); }

// components/web/ProgressRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRail({
  items = [],
  current = 0,
  onJump,
  tone = 'paper',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Section progress",
    style: {
      position: 'sticky',
      top: 'calc(var(--nav-h) + 28px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = i === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onJump && onJump(i);
      },
      style: {
        display: 'grid',
        gridTemplateColumns: '26px 1fr',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 0',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: '2px',
        background: on ? 'var(--green-signal)' : dark ? 'rgba(255,255,255,.35)' : 'rgba(0,39,11,.25)',
        width: on ? '26px' : '14px',
        transition: 'width var(--dur-base) var(--ease-brand), background var(--dur-base) var(--ease-brand)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 var(--text-web-label)/1.2 var(--font-sans)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: on ? dark ? 'var(--white)' : 'var(--green-ink)' : dark ? 'rgba(255,255,255,.6)' : 'var(--sage)'
      }
    }, it));
  }));
}
Object.assign(__ds_scope, { ProgressRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/ProgressRail.jsx", error: String((e && e.message) || e) }); }

// components/web/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Reveal({
  children,
  delay = 0,
  rise = 10,
  as = 'div',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: .12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(' + rise + 'px)',
      transition: 'opacity var(--reveal-dur) var(--ease-brand) ' + delay + 'ms, transform var(--reveal-dur) var(--ease-brand) ' + delay + 'ms',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/web/SectionBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GROUNDS = {
  paper: {
    background: 'var(--paper)',
    color: 'var(--green-ink)',
    kicker: 'deep'
  },
  cream: {
    background: 'var(--cream)',
    color: 'var(--green-ink)',
    kicker: 'deep'
  },
  mint: {
    background: 'var(--mint-100)',
    color: 'var(--green-deep)',
    kicker: 'deep'
  },
  accent: {
    background: 'var(--green-signal)',
    color: 'var(--green-ink)',
    kicker: 'ink'
  },
  ink: {
    background: 'var(--green-ink)',
    color: 'var(--white)',
    kicker: 'accent'
  }
};
function SectionBand({
  id,
  kicker,
  title,
  lead,
  ground = 'paper',
  panel = false,
  signature = 'bottom-right',
  narrow = false,
  stripes = false,
  children,
  style,
  ...rest
}) {
  const g = GROUNDS[ground] || GROUNDS.paper;
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: g.kicker,
    size: 12
  }, kicker) : null, title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 var(--text-web-h2)/1.12 var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: g.color,
      maxWidth: '24ch'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '280px',
      maxWidth: '55%',
      height: '2px',
      background: ground === 'accent' ? 'var(--green-ink)' : 'var(--green-signal)'
    }
  })) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 var(--text-web-lead)/1.45 var(--font-sans)',
      color: g.color,
      maxWidth: '58ch'
    }
  }, lead) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px'
    }
  }, children) : null);
  const radii = ['56px', '56px', '56px', '56px'];
  const idx = {
    'top-left': 0,
    'top-right': 1,
    'bottom-right': 2,
    'bottom-left': 3
  }[signature];
  if (typeof idx === 'number') radii[idx] = 'var(--radius-signature)';
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      position: 'relative',
      ...g,
      padding: 'var(--section-gap) var(--container-pad)',
      ...style
    }
  }, rest), stripes ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '260px',
      height: '170px',
      backgroundImage: ground === 'accent' ? 'var(--stripes-ink)' : ground === 'ink' ? 'var(--stripes-green-soft)' : 'var(--stripes-cream)',
      WebkitMaskImage: 'linear-gradient(225deg,#000,transparent 80%)',
      maskImage: 'linear-gradient(225deg,#000,transparent 80%)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container)',
      margin: '0 auto'
    }
  }, panel ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: ground === 'ink' ? 'var(--green-forest)' : 'var(--cream)',
      backgroundImage: ground === 'ink' ? undefined : 'var(--paper-grain)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: ground === 'ink' ? undefined : 'multiply',
      borderRadius: radii.join(' '),
      padding: 'clamp(24px, 4vw, 48px)'
    }
  }, inner) : inner));
}
Object.assign(__ds_scope, { SectionBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SectionBand.jsx", error: String((e && e.message) || e) }); }

// components/web/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  services = 'Events \u00b7 Communication \u00b7 Creativity \u00b7 Production \u00b7 Technology \u00b7 Entertainment',
  countries = 'Germany \u00b7 France \u00b7 Spain \u00b7 Italy \u00b7 Portugal \u00b7 USA \u00b7 Middle East',
  legal,
  children,
  assetBase,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--green-ink)',
      color: 'var(--white)',
      padding: '72px var(--container-pad) 56px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '22px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BeonMark, {
    tone: "white",
    height: 84,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--text-web-label)/1.4 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-signal)'
    }
  }, services), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--text-web-label)/1.4 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, countries), children, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '420px',
      height: '1px',
      background: 'rgba(70,248,111,.4)',
      marginTop: '10px'
    }
  }), legal ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '780px',
      font: '400 var(--text-web-legal)/1.7 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)'
    }
  }, legal) : null));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/web/SiteNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteNav({
  project = '',
  items = [],
  current,
  onNavigate,
  tone = 'paper',
  cta,
  assetBase,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const dark = tone === 'dark';
  const bg = dark ? 'var(--green-ink)' : 'rgba(251,250,249,.92)';
  const fg = dark ? 'var(--white)' : 'var(--green-ink)';
  const go = it => {
    setOpen(false);
    onNavigate && onNavigate(it);
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: bg,
      backdropFilter: 'saturate(140%) blur(8px)',
      borderBottom: '1px solid ' + (dark ? 'rgba(70,248,111,.35)' : 'rgba(0,39,11,.12)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: narrow ? 'var(--nav-h-sm)' : 'var(--nav-h)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: dark ? 'white' : 'green',
    height: 22,
    assetBase: assetBase
  }), project && !narrow ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    variant: dark ? 'outline-light' : 'outline',
    size: "sm"
  }, project) : null, !narrow ? /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '22px'
    }
  }, items.map(it => {
    const on = it === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(it);
      },
      style: {
        font: '700 var(--text-web-label)/1 var(--font-sans)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-caps)',
        color: fg,
        textDecoration: 'none',
        paddingBottom: '4px',
        borderBottom: '2px solid ' + (on ? 'var(--green-signal)' : 'transparent')
      }
    }, it);
  }), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'onDark' : 'primary',
    size: "sm",
    arrow: true
  }, cta) : null) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: '1px solid ' + fg,
      borderRadius: 'var(--radius-pill)',
      color: fg,
      font: '700 12px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '12px 16px',
      minHeight: '44px',
      cursor: 'pointer'
    }
  }, open ? 'Close' : 'Menu')), narrow && open ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--green-forest)' : 'var(--cream)',
      borderTop: '1px solid rgba(0,39,11,.12)',
      padding: '8px var(--container-pad) 20px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(it);
    },
    style: {
      display: 'block',
      font: '700 14px/1 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: fg,
      textDecoration: 'none',
      padding: '16px 0',
      borderBottom: '1px solid ' + (dark ? 'rgba(70,248,111,.25)' : 'rgba(0,39,11,.10)')
    }
  }, it === current ? '\u2192 ' : '', it)), cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'onDark' : 'primary',
    size: "md",
    arrow: true
  }, cta)) : null) : null);
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/web/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = '#',
  tone = 'ink',
  arrow = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const c = tone === 'light' ? 'var(--white)' : 'var(--green-ink)';
  const line = tone === 'light' ? 'var(--green-signal)' : hover ? 'var(--green-ink)' : 'var(--green-signal)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: c,
      textDecoration: 'none',
      borderBottom: '1px solid ' + line,
      paddingBottom: '1px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      font: '400 var(--text-web-body)/1.4 var(--font-sans)',
      transition: 'border-color var(--dur-fast) var(--ease-brand)',
      ...style
    }
  }, rest), children, arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: tone === 'light' ? 'var(--green-signal)' : 'var(--green-mid)',
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-brand)'
    }
  }, '\u2192') : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/web/VenueMap.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VenueMap({
  mapSrc,
  markers = [],
  active,
  onSelect,
  ratio = '16 / 9',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      background: 'var(--mint-100)',
      aspectRatio: ratio,
      ...style
    }
  }, rest), mapSrc ? /*#__PURE__*/React.createElement("img", {
    src: mapSrc,
    alt: "Map of venues",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--text-web-label)/1.3 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-mid)'
    }
  }, "Map artwork required"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--text-web-small)/1.5 var(--font-sans)',
      color: 'var(--green-ink)',
      marginTop: '8px',
      maxWidth: '46ch'
    }
  }, "Supply the city map used in the deck (or a generated basemap) as ", /*#__PURE__*/React.createElement("code", null, "mapSrc"), ". Markers position themselves over it."))), markers.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.label,
    onClick: () => onSelect && onSelect(m),
    style: {
      position: 'absolute',
      left: m.x + '%',
      top: m.y + '%',
      transform: 'translate(-50%,-50%)',
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    variant: active === m.label ? 'accent' : 'ink',
    size: "sm"
  }, m.label))));
}
Object.assign(__ds_scope, { VenueMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/VenueMap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/concept-deck/screens.jsx
try { (() => {
/* Concept-deck (editorial template) screens. Classic Babel script — no
   import/export; primitives come from the compiled bundle on window. */
const DS = window.BCGBeonWWOMDesignSystem_0a75c3 || {};
const {
  Wordmark,
  BeonMark,
  SlideHeader,
  StripeField,
  Pill,
  Eyebrow,
  SectionTitle,
  ArrowList,
  PhotoFrame,
  PullQuote,
  InfoCard
} = DS;
const IMG = '../../assets/imagery/';
const ASSETS = '../../assets/';
const PROJECT = 'WWOM Lisbon Evening Events';
const page = {
  position: 'relative',
  width: '1280px',
  height: '720px',
  overflow: 'hidden',
  fontFamily: 'var(--font-sans)'
};
const pad = {
  position: 'absolute',
  left: 42,
  right: 42
};
function CoverScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--cover-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    tone: "accent",
    arrow: '\u2197',
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'absolute',
      left: 42,
      bottom: 96,
      margin: 0,
      font: '400 68px/1.02 var(--font-serif)',
      letterSpacing: '-.012em',
      color: 'var(--green-ink)',
      maxWidth: 780
    }
  }, "WWOM Lisbon", /*#__PURE__*/React.createElement("br", null), "Evening Events"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 56,
      bottom: 74
    }
  }, /*#__PURE__*/React.createElement(BeonMark, {
    tone: "black",
    height: 58,
    assetBase: ASSETS
  })));
}
function ContentsScreen({
  onJump
}) {
  const toc = [['Project update', '01.', 1], ['Concept 01', '02.', 2], ['Concept 02', '03.', 2], ['Concept 03', '04.', 2], ['Organisational chart', '05.', 6]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement(StripeField, {
    tone: "soft",
    corner: "top-left",
    width: 330,
    height: 190,
    style: {
      left: 340
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "dark",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Summary")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      bottom: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 80px'
    }
  }, toc.map(([t, n, target]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    onClick: () => onJump && onJump(target),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      borderBottom: '1px solid rgba(70,248,111,.35)',
      padding: '14px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px/1.2 var(--font-sans)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--green-signal)',
      flex: 1
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px/1.2 var(--font-sans)',
      color: 'var(--green-signal)'
    }
  }, n)))));
}
function SectionScreen({
  number = '02.',
  label = 'Concept 01'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + 'brand/cover-gradient-green.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "dark",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 172,
      textAlign: 'center',
      font: '700 15px/1 var(--font-sans)',
      letterSpacing: '.06em',
      color: 'var(--green-signal)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      right: 56,
      bottom: 120,
      font: '700 96px/1 var(--font-sans)',
      letterSpacing: '-.02em',
      textTransform: 'uppercase',
      color: 'rgba(0,39,11,.62)'
    }
  }, label));
}
function RationaleScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(StripeField, {
    tone: "cream",
    corner: "top-right",
    width: 420,
    height: 320
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "paper",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 104
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    kicker: "Concept 01",
    title: "Concept Rationale",
    size: 40,
    rule: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 230,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: 26,
    label: 'Tile\nStories',
    quote: '\u201cA single tile is beautiful. Thousands of them make up Lisbon.\u201d'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 370,
      width: 600,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.38 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, "Throughout Lisbon, tiles are much more than mere decorative elements. Each piece has its own pattern, colour and identity, but it is only when they come together that they reveal a complete work. ", /*#__PURE__*/React.createElement("strong", null, "This principle forms the basis of Tile Stories.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.38 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, "Inspired by the collaborative spirit of ", /*#__PURE__*/React.createElement("strong", null, "WWOM"), ", the experience unfolds throughout the venue via architecture, art, gastronomy and Portuguese craftsmanship, revealing new chapters from the moment guests arrive until they depart.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 42,
      top: 150,
      width: 330,
      height: 470
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'azulejo-tiles.png',
    ratio: "330 / 470",
    alt: "Azulejo installation"
  })));
}
function JourneyScreen() {
  const chapters = [['Chapter I', 'The First Tile', ['The First Tile', 'Discovering Tile Stories', 'Connecting with Lisbon']], ['Chapter II', 'Patterns Unfold', ['A Taste of Lisbon', 'The BCG Living Mosaic', 'Live Tile Atelier', 'Contemporary Fado Moments']], ['Chapter III', 'Discovering Lisbon', ['AI Lisbon Journey', 'Sounds of Lisbon', 'The Scent of Lisbon', 'Poetry of Lisbon']], ['Chapter IV', 'The Last Tile', ['A Piece of Lisbon', 'Pessoa’s Tile']]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-signal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "accent",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 104,
      width: 300
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    kicker: "Concept 01",
    title: 'Guest Experience Journey & Signature Moments',
    size: 30,
    tone: "accentGround",
    ruleWidth: 240
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1.4 var(--font-sans)',
      color: 'var(--green-ink)',
      marginTop: 16
    }
  }, "A story that unfolds, tile by tile. Like a Portuguese mosaic, the experience is revealed gradually."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "ink",
    size: "sm"
  }, "Convento do Beato"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 400,
      right: 42,
      top: 110,
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: '22px 24px'
    }
  }, chapters.map(([c, t, items]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1.2 var(--font-sans)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--green-ink)',
      paddingTop: 4
    }
  }, c), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 18px/1.2 var(--font-serif)',
      color: 'var(--green-ink)',
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement(ArrowList, {
    marker: '\u2198',
    tone: "accentGround",
    size: 12,
    gap: 4,
    items: items
  }))))));
}
function ChapterScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-signal)'
    }
  }, /*#__PURE__*/React.createElement(StripeField, {
    tone: "ink",
    corner: "top-left",
    width: 420,
    height: 280
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      top: 90,
      right: 60,
      display: 'grid',
      gridTemplateColumns: '250px 290px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'wine-toast.png',
    ratio: "250 / 300",
    alt: "Guests toasting"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'convento-detail-1.png',
    ratio: "290 / 300",
    alt: "Venue interior"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.38 var(--font-sans)',
      color: 'var(--green-ink)',
      paddingTop: 6
    }
  }, "As guests step inside the Convento do Beato, the narrative of ", /*#__PURE__*/React.createElement("strong", null, "Tile Stories"), " begins to unfold throughout the entire event. ", /*#__PURE__*/React.createElement("strong", null, "Each space reveals a new interpretation of Lisbon\u2019s cultural identity, where Portuguese craftsmanship, gastronomy, music and contemporary art come together."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Rather than presenting a succession of separate installations, each space has been conceived as a new chapter in the story.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      bottom: 88,
      font: '400 95px/1 var(--font-serif)',
      fontStyle: 'italic',
      letterSpacing: '-.012em',
      color: '#0b8b33'
    }
  }, "CHAPTER II"));
}
function MomentsScreen() {
  const moments = [['Contemporary Fado Moments', 'Location: Refeitório', 'A contemporary fado singer moves through the space accompanied by a lone guitarist, celebrating Lisbon’s emotional identity through a refined and modern interpretation.', 'mood-installation-1.png'], ['Art in Progress', 'Location: Cloister', 'A Portuguese artist creates a large-scale contemporary painting inspired by the features of the Atlantic, moving water and ceramic geometries.', 'mood-installation-3.png']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(StripeField, {
    tone: "cream",
    corner: "top-right",
    width: 250,
    height: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "paper",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 104
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "ink"
  }, "Concept 01 / Guest experience journey & signature moments"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Chapter II.",
    sub: "Patterns Unfold",
    ruleWidth: 360
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 260,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 34
    }
  }, moments.map(([t, loc, body, photo]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 230px',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 20px/1.2 var(--font-serif)',
      color: 'var(--green-ink)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: 9
  }, loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.38 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + photo,
    ratio: "230 / 280",
    alt: t
  }))))));
}
function VenueScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-signal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pad,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(SlideHeader, {
    project: PROJECT,
    tone: "accent",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 42,
      top: 104,
      width: 480
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "ink"
  }, "Concept 01 / New venues recommendations"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "8 Marvila",
    size: 34,
    tone: "accentGround",
    ruleWidth: 280
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0 14px'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "ink",
    size: "sm"
  }, "Option 02")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, "A 17,000 m\xB2 industrial complex built in the early 20th century by businessman Abel Pereira da Fonseca and designed by architect Manuel Joaquim Norte J\xFAnior, now housed as warehouses, wine cellars and workshops.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Today, this landmark site in Marvila is entering a new phase, transforming into a unique venue for culture, events, parties, lectures and leisure activities."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Capacity",
    size: 22,
    rule: false,
    tone: "accentGround"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      borderTop: '1px solid rgba(0,39,11,.35)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: 10,
    tone: "ink"
  }, "Standing reception / cocktail"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--green-ink)',
      marginTop: 4
    }
  }, "Over 1,500 standing guests comfortably."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 42,
      top: 104,
      width: 600,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '250px 250px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / span 2'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'marvila-venue.png',
    ratio: "600 / 250",
    alt: "8 Marvila facade",
    objectPosition: "center 30%"
  })), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'convento-detail-2.png',
    ratio: "1 / 1",
    alt: "Interior"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'mood-installation-2.png',
    ratio: "1 / 1",
    alt: "Installation reference"
  })));
}
function ClosingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 150,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(BeonMark, {
    tone: "white",
    height: 104,
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 330,
      textAlign: 'center',
      font: '700 13px/1.2 var(--font-sans)',
      letterSpacing: '.06em',
      color: 'var(--green-signal)'
    }
  }, "Events \xB7 Communication \xB7 Creativity \xB7 Production \xB7 Technology \xB7 Entertainment"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 360,
      textAlign: 'center',
      font: '400 11px/1.2 var(--font-sans)',
      letterSpacing: '.06em',
      color: 'var(--white)'
    }
  }, "Germany \xB7 France \xB7 Spain \xB7 Italy \xB7 Portugal \xB7 USA \xB7 Middle East"));
}
Object.assign(window, {
  CoverScreen,
  ContentsScreen,
  SectionScreen,
  RationaleScreen,
  JourneyScreen,
  ChapterScreen,
  MomentsScreen,
  VenueScreen,
  ClosingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/concept-deck/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal-deck/screens.jsx
try { (() => {
/* Proposal-deck screens. Loaded as a classic Babel script (no import/export):
   components come off the compiled design-system bundle on window. */
const DS = window.BCGBeonWWOMDesignSystem_0a75c3 || {};
const {
  Wordmark,
  BeonMark,
  Pill,
  Eyebrow,
  SectionTitle,
  ArrowList,
  SpecList,
  PhotoFrame,
  DataTable,
  NumberPlate,
  OrgNode,
  Panel,
  InfoCard
} = DS;
const IMG = '../../assets/imagery/';
const ASSETS = '../../assets/';
const page = {
  position: 'relative',
  width: '1280px',
  height: '720px',
  background: 'var(--paper)',
  overflow: 'hidden',
  fontFamily: 'var(--font-sans)'
};
const panelBase = {
  position: 'absolute',
  inset: '14px'
};
function LogoTab({
  tone = 'paper'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      background: tone === 'paper' ? 'var(--paper)' : 'transparent',
      borderBottomLeftRadius: 18,
      padding: '12px 18px 14px 22px'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "green",
    height: 22,
    assetBase: ASSETS
  }));
}
function Breadcrumb({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      bottom: 26
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "outline",
    size: "sm"
  }, children));
}
function CoverScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement(Panel, {
    tone: "cream",
    grain: true,
    style: {
      ...panelBase,
      borderRadius: '56px 56px 190px 56px'
    },
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      top: 128,
      display: 'flex',
      gap: 26,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-forest)',
      borderRadius: 20,
      padding: '20px 30px'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "white",
    height: 40,
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/1.05 var(--font-serif)',
      letterSpacing: '-.012em',
      color: 'var(--green-ink)'
    }
  }, "Global WWOM"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 330,
      height: 2,
      background: 'var(--green-signal)',
      margin: '10px 0 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.1 var(--font-sans)',
      color: 'var(--green-ink)'
    }
  }, "Lisbon 2027"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 20px/1.1 var(--font-serif)',
      color: 'var(--green-ink)'
    }
  }, "Activities")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 36,
      bottom: 60,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 330,
      height: 230
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'lisbon-view.png',
    ratio: "330 / 230",
    alt: "Lisbon from the Tagus"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 200,
      marginLeft: -14
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + 'lisbon-monument.png',
    ratio: "150 / 200",
    alt: "Padr\xE3o dos Descobrimentos"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 150,
      marginLeft: -26,
      background: 'var(--green-forest)',
      borderRadius: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 120,
      bottom: 120
    }
  }, /*#__PURE__*/React.createElement(BeonMark, {
    tone: "black",
    height: 58,
    assetBase: ASSETS
  }))));
}
function DividerScreen({
  number = '01',
  title = 'Starting point'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...panelBase,
      inset: '20px',
      background: 'var(--mint-100)',
      border: '1px solid var(--green-signal)',
      borderRadius: 56,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 26,
      height: 74,
      background: 'var(--green-signal)',
      borderRadius: '0 14px 14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      top: 150
    }
  }, /*#__PURE__*/React.createElement(NumberPlate, {
    number: number,
    project: "Global WWOM Lisbon",
    year: "2027",
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      right: 150,
      top: 380,
      background: 'var(--white)',
      border: '1px solid var(--green-signal)',
      borderRadius: 20,
      padding: '26px 34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 36px/1.14 var(--font-serif)',
      letterSpacing: '-.012em',
      color: 'var(--green-ink)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      bottom: 74,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "mint",
    size: "sm"
  }, "Briefing"), /*#__PURE__*/React.createElement(Pill, {
    variant: "outline",
    size: "sm"
  }, number, " / 07"))));
}
function ActivityScreen({
  activity
}) {
  const a = activity;
  return /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement(Panel, {
    tone: "cream",
    grain: true,
    style: panelBase,
    pad: 0
  }, /*#__PURE__*/React.createElement(LogoTab, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      top: 46,
      width: 560
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: a.title,
    ruleWidth: 420
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, a.kicker)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.38 var(--font-sans)',
      color: 'var(--green-ink)',
      marginTop: 12
    }
  }, a.body), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What is included?")), /*#__PURE__*/React.createElement(ArrowList, {
    size: 12,
    items: a.includes
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 52,
      top: 46,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "ink",
    size: "sm"
  }, a.category), /*#__PURE__*/React.createElement(Pill, {
    variant: "accent",
    size: "sm"
  }, a.timing)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 52,
      top: 110,
      width: 480,
      height: 330
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: IMG + a.photo,
    ratio: "480 / 330",
    alt: a.title
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 52,
      top: 470,
      width: 480
    }
  }, /*#__PURE__*/React.createElement(SpecList, {
    columns: 2,
    items: a.specs
  })), /*#__PURE__*/React.createElement(Breadcrumb, null, a.breadcrumb)));
}
function BriefingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...panelBase,
      background: 'var(--white)',
      borderRadius: '56px 56px 150px 56px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(LogoTab, {
    tone: "clear"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      top: 52
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Briefing",
    ruleWidth: 200
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      right: 52,
      top: 170
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    size: 12,
    columns: [{
      key: 'what',
      label: 'What'
    }, {
      key: 'when',
      label: 'When'
    }, {
      key: 'where',
      label: 'Where'
    }, {
      key: 'who',
      label: 'Who',
      align: 'right'
    }],
    rows: [{
      what: 'Networking Day',
      when: 'Sunday 7 – Friday 11 June',
      where: 'Lisbon, city-wide',
      who: '500 pax / day'
    }, {
      what: 'SO Programme',
      when: 'Tuesday – Thursday',
      where: 'Offsite & in-lounge',
      who: '100 pax / session'
    }, {
      what: 'SO Lounge',
      when: '7 – 11 June',
      where: 'InterContinental / Four Seasons',
      who: '~400 SOs'
    }, {
      what: 'SO Workshops',
      when: 'Full day',
      where: 'SO Lounge',
      who: 'By registration'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      right: 52,
      top: 430,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    title: "Attendees"
  }, "2,100 managing directors & partners, ~400 spouses / significant others."), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Dates"
  }, "7 \u2013 11 June 2027, Lisbon, Portugal."), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Scope"
  }, "Networking Day activities, SO programme, SO Lounge staffing.")), /*#__PURE__*/React.createElement(Breadcrumb, null, "Starting point")));
}
function TeamScreen() {
  const tier2 = ['Production', 'Creative & content', 'Logistics & transport', 'Technology'];
  const tier3 = ['On-site hosts', 'Venue leads', 'Suppliers', 'AV & technical', 'Registration'];
  return /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...panelBase,
      background: 'var(--white)',
      borderRadius: '56px 56px 150px 56px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(LogoTab, {
    tone: "clear"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 52,
      top: 46
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    kicker: "Our team",
    title: "Global WWOM Lisbon 2027",
    size: 30,
    ruleWidth: 260
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 230,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(OrgNode, {
    variant: "lead",
    name: "Account Director \xB7 SPOC",
    width: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 34,
      background: 'var(--green-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 720,
      height: 1,
      background: 'var(--green-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 720,
      justifyContent: 'space-between'
    }
  }, tier2.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 170
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 26,
      background: 'var(--green-ink)'
    }
  }), /*#__PURE__*/React.createElement(OrgNode, {
    variant: "node",
    name: n,
    width: 170
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 38
    }
  }, tier3.map(n => /*#__PURE__*/React.createElement(OrgNode, {
    key: n,
    variant: "leaf",
    name: n,
    width: 0
  })))), /*#__PURE__*/React.createElement(Breadcrumb, null, "Our team")));
}
function ClosingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      background: 'var(--green-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 150,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(BeonMark, {
    tone: "white",
    height: 104,
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 330,
      textAlign: 'center',
      font: '700 13px/1.2 var(--font-sans)',
      letterSpacing: '.06em',
      color: 'var(--green-signal)'
    }
  }, "Events \xB7 Communication \xB7 Creativity \xB7 Production \xB7 Technology \xB7 Entertainment"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 360,
      textAlign: 'center',
      font: '400 11px/1.2 var(--font-sans)',
      letterSpacing: '.06em',
      color: 'var(--white)'
    }
  }, "Germany \xB7 France \xB7 Spain \xB7 Italy \xB7 Portugal \xB7 USA \xB7 Middle East"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 200,
      right: 200,
      top: 440,
      textAlign: 'center',
      font: '400 8px/1.7 var(--font-sans)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)'
    }
  }, "This document, its content, and the project here described are the property of beon worldwide. Therefore, the full or partial reproduction of this document, or the commercial use of any of the activities here contained and described is expressly forbidden."));
}
const ACTIVITIES = [{
  id: 'winemaker',
  nav: 'The Winemaker’s Private Reserve',
  category: 'Leisure',
  timing: 'PM',
  title: 'The Winemaker’s Private Reserve',
  kicker: 'Bespoke blending experience',
  photo: 'wine-toast.png',
  body: 'Guests step into the role of a master winemaker. Working with single-varietal Portuguese wines, they use professional laboratory equipment to measure, test and engineer their own signature blend, then bottle, cork, label and wax-seal their bespoke creation to take home.',
  includes: ['Full privatization of an upscale urban wine cellar or historic palace room in Lisbon.', 'English-speaking senior sommelier and technical hosting staff.', 'All laboratory equipment, base wines, bottles, natural corks, custom labels and wax.', 'Dedicated beon. host on site.', 'Return transfers from hotels.'],
  specs: [{
    label: 'Distance from SO Lounge',
    value: '15 min drive.'
  }, {
    label: 'Activity duration',
    value: '2.5 hours.'
  }, {
    label: 'Minimum / maximum pax',
    value: '12 – 60 guests.'
  }, {
    label: 'Price / pax',
    value: '€300 per person (min. 15–20 pax).'
  }],
  breadcrumb: 'Networking Day Activities'
}, {
  id: 'sintra',
  nav: 'The Kingdom of Sintra',
  category: 'Cultural',
  timing: 'Full day',
  title: 'The Kingdom of Sintra',
  kicker: 'Private heritage journey',
  photo: 'pena-palace.png',
  body: 'A private ascent into the Serra de Sintra, where palaces sit above the cloud line. Guests move between the Pena Palace terraces and a privatized quinta for lunch, guided by a heritage historian rather than a tour operator.',
  includes: ['Privatized access windows at Pena Palace.', 'Heritage historian guiding each group of ten.', 'Lunch at a privatized quinta with regional pairing.', 'Dedicated beon. host on site.', 'Return transfers from hotels.'],
  specs: [{
    label: 'Distance from SO Lounge',
    value: '40 min drive.'
  }, {
    label: 'Activity duration',
    value: '6 hours.'
  }, {
    label: 'Group size',
    value: '10 guests per guide.'
  }, {
    label: 'Price / pax',
    value: '€340 per person.'
  }],
  breadcrumb: 'Networking Day Activities'
}, {
  id: 'tagus',
  nav: 'Tagus Tall Ship Regatta',
  category: 'Active',
  timing: 'AM / PM',
  title: 'Tagus Tall Ship Regatta',
  kicker: 'Crewed race on the river',
  photo: 'sailing-tagus.png',
  body: 'Not a catamaran cruise. A fleet of classic tall ships and traditional Portuguese wooden vessels is chartered on the Tagus; guests are divided into crews and race each other under the 25 de Abril bridge with a professional skipper aboard each boat.',
  includes: ['Traditional regatta fleet with professional skippers.', 'Hands-on sailing briefing before the start.', 'Live race commentary from a chase boat.', 'Dockside trophy ceremony with Portuguese wine and petiscos.', 'Return transfers from hotels.'],
  specs: [{
    label: 'Distance from SO Lounge',
    value: '20 min drive.'
  }, {
    label: 'Activity duration',
    value: '3 hours.'
  }, {
    label: 'Minimum / maximum pax',
    value: '24 – 90 guests.'
  }, {
    label: 'Price / pax',
    value: '€285 per person.'
  }],
  breadcrumb: 'Networking Day Activities'
}];
Object.assign(window, {
  CoverScreen,
  DividerScreen,
  ActivityScreen,
  BriefingScreen,
  TeamScreen,
  ClosingScreen,
  ACTIVITIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal-deck/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BeonMark = __ds_scope.BeonMark;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

__ds_ns.StripeField = __ds_scope.StripeField;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ArrowList = __ds_scope.ArrowList;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.NumberPlate = __ds_scope.NumberPlate;

__ds_ns.OrgNode = __ds_scope.OrgNode;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ActivityCard = __ds_scope.ActivityCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.PasswordGate = __ds_scope.PasswordGate;

__ds_ns.ProgressRail = __ds_scope.ProgressRail;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionBand = __ds_scope.SectionBand;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.VenueMap = __ds_scope.VenueMap;

})();
