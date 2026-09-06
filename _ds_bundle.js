/* @ds-bundle: {"format":4,"namespace":"MidnightLimeDesignSystem_905bad","components":[{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"MediaFrame","sourcePath":"components/cards/MediaFrame.jsx"},{"name":"PricingCard","sourcePath":"components/cards/PricingCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LimeKeyword","sourcePath":"components/core/LimeKeyword.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"SelectViolet","sourcePath":"components/forms/SelectViolet.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SquiggleDivider","sourcePath":"components/navigation/SquiggleDivider.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"Starfield","sourcePath":"components/surfaces/Starfield.jsx"}],"sourceHashes":{"components/cards/FeatureCard.jsx":"2c35a2502730","components/cards/MediaFrame.jsx":"cfc39018f3ef","components/cards/PricingCard.jsx":"a422db0929fa","components/core/Button.jsx":"01d273836b46","components/core/CodeBlock.jsx":"66cf3680dce4","components/core/Icon.jsx":"5531340badce","components/core/LimeKeyword.jsx":"5251fe52cbca","components/core/Pill.jsx":"4411ad824fbd","components/core/TextLink.jsx":"73e326a8ad10","components/forms/SelectViolet.jsx":"1bc8f9d453a0","components/forms/TextInput.jsx":"25f5bd95b659","components/navigation/NavBar.jsx":"44a2e84fa4c4","components/navigation/SiteFooter.jsx":"3287a29a17c1","components/navigation/SquiggleDivider.jsx":"e2133813bbd7","components/surfaces/SectionHeading.jsx":"853f0ab8a239","components/surfaces/Starfield.jsx":"4c69afca5785"},"inlinedExternals":[],"unexposedExports":[]} */
/* Note: this bundle previously also inlined a stale, self-executing copy of
   ui_kits/portfolio/* (including an eager ReactDOM.createRoot().render() that
   ran before PROFILE/NAV_ITEMS/etc existed, always throwing a caught-but-silent
   error). Removed — the shared bundle should only carry the 16 reusable
   components above; ui_kits/portfolio/index.html loads the page's own .jsx
   files directly and doesn't need or use this bundle's copies of them. */

(() => {

const __ds_ns = (window.MidnightLimeDesignSystem_905bad = window.MidnightLimeDesignSystem_905bad || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Large feature-band card. Dark polarity uses `night`; `spotlight` uses the deep violet fill. */
function FeatureCard({
  tone = 'night',
  eyebrow,
  title,
  children,
  media,
  style,
  ...rest
}) {
  const tones = {
    night: {
      background: 'var(--color-ink-deep)',
      border: '1px solid var(--border-card-dark)'
    },
    spotlight: {
      background: 'var(--surface-card-spotlight)',
      border: '1px solid var(--color-accent-violet)'
    },
    light: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)'
    }
  };
  const onDark = tone !== 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...tones[tone],
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      borderRadius: 'var(--radius-media)',
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-micro-cap-size)',
      fontWeight: 'var(--type-micro-cap-weight)',
      lineHeight: 'var(--type-micro-cap-lh)',
      letterSpacing: 'var(--type-micro-cap-ls)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--type-heading-lg-size)',
      fontWeight: 'var(--type-heading-lg-weight)',
      lineHeight: 'var(--type-heading-lg-lh)',
      color: 'inherit'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      lineHeight: 'var(--leading-ui)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, children) : null, media);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Window-chrome frame for product UI mocks and imagery. Optionally tilted +/-2-3 degrees off axis. */
function MediaFrame({
  tilt = 0,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-media)',
      overflow: 'hidden',
      border: '1px solid var(--border-card-dark)',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      background: 'var(--color-surface-night)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-ui)',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-sm)',
  textDecoration: 'none',
  transition: 'var(--transition-fill)'
};
const caps = {
  fontSize: 'var(--type-button-cap-size)',
  fontWeight: 'var(--type-button-cap-weight)',
  lineHeight: 'var(--type-button-cap-lh)',
  letterSpacing: 'var(--type-button-cap-ls)'
};
const capsLight = {
  fontSize: 'var(--type-button-cap-light-size)',
  fontWeight: 'var(--type-button-cap-light-weight)',
  lineHeight: 'var(--type-button-cap-light-lh)',
  letterSpacing: 'var(--type-button-cap-light-ls)'
};
const variants = {
  primary: {
    ...caps,
    background: 'var(--action-fill)',
    color: 'var(--action-label)',
    padding: 'var(--space-md) var(--space-lg)',
    borderRadius: 'var(--radius-button)'
  },
  inverted: {
    ...caps,
    background: 'var(--action-fill-inverted)',
    color: 'var(--action-label-inverted)',
    padding: 'var(--space-md) var(--space-lg)',
    borderRadius: 'var(--radius-button)',
    boxShadow: 'var(--shadow-button-inverted)'
  },
  ghostOnDark: {
    ...caps,
    background: 'var(--fill-ghost-on-dark)',
    color: 'var(--color-on-primary)',
    padding: 'var(--space-sm)',
    borderRadius: 'var(--radius-xl)'
  },
  violetToken: {
    ...capsLight,
    background: 'var(--tag-fill)',
    color: 'var(--color-on-primary)',
    padding: 'var(--space-sm) var(--space-lg)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--color-accent-violet-deep)'
  }
};
const pressed = {
  primary: {
    background: 'var(--action-fill-pressed)',
    color: 'var(--action-label-pressed)'
  },
  inverted: {
    background: 'var(--color-surface-press-light)',
    color: 'var(--action-label-pressed)',
    boxShadow: 'var(--shadow-pressed)'
  },
  ghostOnDark: {
    background: 'var(--color-on-dark-faint)',
    color: 'var(--color-on-primary)'
  },
  violetToken: {
    background: 'var(--color-accent-violet-deep)',
    color: 'var(--color-on-primary)'
  }
};

/**
 * The system's single-primary CTA. Polarity flips with the canvas:
 * `primary` on light, `inverted` on dark.
 */
function Button({
  variant = 'primary',
  href,
  disabled = false,
  isPressed = false,
  halo = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...v,
    ...(isPressed ? pressed[variant] || {} : null),
    ...(halo ? {
      boxShadow: 'var(--shadow-cta-halo)'
    } : null),
    ...(disabled ? {
      background: 'var(--action-fill-disabled)',
      color: 'var(--color-on-dark-muted)',
      cursor: 'not-allowed',
      boxShadow: 'none'
    } : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...style
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: s
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tier card. The featured tier inverts to the dark canvas rather than gaining an accent border. */
function PricingCard({
  title,
  price,
  period,
  blurb,
  features = [],
  ctaLabel = 'Get started',
  onCta,
  featured = false,
  style,
  ...rest
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--surface-card-dark)' : 'var(--surface-card)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      border: dark ? '1px solid var(--border-card-dark)' : '1px solid var(--border-card)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--type-heading-md-size)',
      fontWeight: 'var(--type-heading-md-weight)',
      lineHeight: 'var(--type-heading-md-lh)',
      color: 'inherit'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-large-size)',
      fontWeight: 'var(--type-display-large-weight)',
      lineHeight: 'var(--type-display-large-lh)'
    }
  }, price), period ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      opacity: 0.72
    }
  }, period) : null), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      lineHeight: 'var(--leading-ui)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, blurb) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      fontSize: 'var(--type-body-md-size)',
      lineHeight: 'var(--leading-ui)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, features.map((ft, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--color-accent-lime)'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, ft)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'inverted' : 'primary',
    fullWidth: true,
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Code / install snippet. Barely lifted off dark canvas — only the deeper fill differentiates it. */
function CodeBlock({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("pre", _extends({
    style: {
      background: 'var(--code-surface)',
      color: 'var(--color-on-primary)',
      fontFamily: 'var(--font-code)',
      fontSize: 'var(--type-code-size)',
      fontWeight: 'var(--type-code-weight)',
      lineHeight: 'var(--type-code-lh)',
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-md)',
      margin: 0,
      overflowX: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("code", null, children));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thin wrapper over the Lucide CDN icon set (substituted — the source material
 * shipped no icon assets). Renders a placeholder box until lucide has hydrated.
 */
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      if (window.lucide && ref.current) window.lucide.createIcons({
        nameAttr: 'data-lucide',
        icons: window.lucide.icons,
        attrs: {},
        root: ref.current
      });
    };
    draw();
    const t = setTimeout(draw, 300);
    return () => clearTimeout(t);
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      strokeWidth
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/LimeKeyword.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The signature inline highlight chip that wraps a single keyword in a display headline. */
function LimeKeyword({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      background: 'var(--highlight-chip)',
      color: 'var(--highlight-chip-text)',
      borderRadius: 'var(--radius-chip)',
      padding: '0 var(--space-md)',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { LimeKeyword });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LimeKeyword.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category pill. Dark fill on dark canvas, hairline-bordered on light. */
function Pill({
  tone = 'dark',
  children,
  style,
  ...rest
}) {
  const tones = {
    dark: {
      background: 'var(--color-surface-night)',
      color: 'var(--color-on-primary)',
      border: '1px solid var(--color-hairline-violet)'
    },
    light: {
      background: 'var(--color-surface-canvas-light)',
      color: 'var(--color-ink-deep)',
      border: '1px solid var(--border-card)'
    },
    violet: {
      background: 'var(--tag-fill)',
      color: 'var(--color-on-primary)',
      border: '1px solid var(--color-accent-violet-deep)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
      lineHeight: 'var(--type-caption-lh)',
      padding: 'var(--space-xs) var(--space-sm)',
      borderRadius: 'var(--radius-xs)',
      display: 'inline-block',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline body link. The persistent underline is the entire affordance — no color change. */
function TextLink({
  onDark = false,
  href,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      color: onDark ? 'var(--color-on-primary)' : 'var(--color-ink-deep)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectViolet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dropdown used inside dark contact panels. Reads as a brand surface, not a plain input. */
function SelectViolet({
  label,
  id,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      color: 'var(--text-on-dark)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    style: {
      background: 'var(--color-accent-violet-deep)',
      color: 'var(--color-on-primary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      lineHeight: 'var(--leading-ui)',
      padding: 'var(--space-sm) var(--space-lg)',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      minHeight: '44px',
      width: '100%',
      appearance: 'none',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { SelectViolet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectViolet.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Contact-form field. Focus adds an inset shadow rather than an outer ring. */
function TextInput({
  label,
  id,
  hint,
  multiline = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    background: 'var(--color-surface-canvas-light)',
    color: 'var(--color-ink-deep)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--type-body-md-size)',
    fontWeight: 'var(--type-body-md-weight)',
    lineHeight: 'var(--leading-ui)',
    padding: 'var(--space-sm) var(--space-md)',
    borderRadius: 'var(--radius-field)',
    border: '1px solid var(--border-field)',
    width: '100%',
    minHeight: '44px',
    outline: 'none',
    boxShadow: focused ? 'var(--shadow-field-focus)' : 'none',
    ...style
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-body-md-size)',
      fontWeight: 'var(--type-body-md-weight)',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    style: fieldStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-accent-violet-mid)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top navigation. Same structure on both polarities; only fills and CTA variant flip.
 * Below 768px the link list collapses behind a hamburger toggle (see responsive.css). */
function NavBar({
  wordmark = 'Your Name',
  items = [],
  activeItem,
  onNavigate,
  ctaLabel = 'Download Resume',
  ctaHref,
  onCta,
  ctaAddon,
  polarity = 'light',
  themeMode,
  onToggleTheme,
  style,
  ...rest
}) {
  const dark = polarity === 'dark';
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleNavigate = label => {
    setMenuOpen(false);
    if (onNavigate) onNavigate(label);
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: dark ? 'var(--canvas-dark)' : 'var(--canvas-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      padding: 'var(--pad-nav)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-xl)',
      borderBottom: dark ? '1px solid var(--border-card-dark)' : '1px solid var(--border-card)',
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-heading-sm-size)',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'inherit'
    }
  }, wordmark), /*#__PURE__*/React.createElement("nav", {
    className: "ml-navbar-links",
    "data-open": menuOpen ? 'true' : 'false',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      background: dark ? 'var(--canvas-dark)' : 'var(--canvas-light)',
      borderBottom: dark ? '1px solid var(--border-card-dark)' : '1px solid var(--border-card)'
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    const active = activeItem === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: href || '#',
      onClick: onNavigate ? e => {
        e.preventDefault();
        handleNavigate(label);
      } : undefined,
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--type-body-md-size)',
        fontWeight: 'var(--type-body-md-weight)',
        textDecoration: 'none',
        color: dark ? active ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)' : active ? 'var(--text-heading)' : 'var(--color-accent-violet-mid)',
        paddingBottom: '2px',
        borderBottom: active ? `2px solid var(--color-accent-lime)` : '2px solid transparent'
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }
  }, onToggleTheme ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": (themeMode || (dark ? 'dark' : 'light')) === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    onClick: onToggleTheme,
    style: {
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'inherit',
      border: dark ? '1px solid var(--border-card-dark)' : '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: (themeMode || (dark ? 'dark' : 'light')) === 'dark' ? 'sun' : 'moon',
    size: 16
  })) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'inverted' : 'primary',
    href: ctaHref,
    onClick: onCta
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "download",
    size: 16
  }), ctaLabel), ctaAddon || null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ml-navbar-toggle",
    "aria-label": menuOpen ? 'Close menu' : 'Open menu',
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o),
    style: {
      display: 'none',
      width: 34,
      height: 34,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'inherit',
      border: dark ? '1px solid var(--border-card-dark)' : '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: menuOpen ? 'x' : 'menu',
    size: 18
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SquiggleDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The lime squiggle that sits above the footer, replacing a 1px hairline rule. */
function SquiggleDivider({
  height = 18,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1200 20",
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      width: '100%',
      height,
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10 T 450 10 T 500 10 T 550 10 T 600 10 T 650 10 T 700 10 T 750 10 T 800 10 T 850 10 T 900 10 T 950 10 T 1000 10 T 1050 10 T 1100 10 T 1150 10 T 1200 10",
    fill: "none",
    stroke: "var(--color-accent-lime)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { SquiggleDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SquiggleDivider.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site-wide footer: three or four link columns, social strip, legal row. */
function SiteFooter({
  wordmark = 'Your Name',
  columns = [],
  socials = [],
  legal,
  polarity = 'light',
  style,
  ...rest
}) {
  const dark = polarity === 'dark';
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: dark ? 'var(--canvas-dark)' : 'var(--canvas-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SquiggleDivider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-xxl) var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-xxl)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-heading-sm-size)',
      fontWeight: 700
    }
  }, wordmark), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      minWidth: '140px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-micro-cap-size)',
      fontWeight: 'var(--type-micro-cap-weight)',
      letterSpacing: 'var(--type-micro-cap-ls)',
      lineHeight: 'var(--type-micro-cap-lh)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-accent-violet-mid)'
    }
  }, col.title), (col.links || []).map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      fontSize: 'var(--type-caption-size)',
      lineHeight: 'var(--type-caption-lh)',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      lineHeight: 'var(--type-caption-lh)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-accent-violet-mid)'
    }
  }, legal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href || '#',
    "aria-label": s.label || s.icon,
    style: {
      color: 'inherit',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 20
  })))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + display headline pair used to open every page band. */
function SectionHeading({
  eyebrow,
  children,
  size = 'large',
  polarity = 'dark',
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    hero: {
      fontSize: 'var(--type-display-hero-size)',
      fontWeight: 'var(--type-display-hero-weight)',
      lineHeight: 'var(--type-display-hero-lh)'
    },
    large: {
      fontSize: 'var(--type-display-large-size)',
      fontWeight: 'var(--type-display-large-weight)',
      lineHeight: 'var(--type-display-large-lh)'
    },
    xl: {
      fontSize: 'var(--type-heading-xl-size)',
      fontWeight: 'var(--type-heading-xl-weight)',
      lineHeight: 'var(--type-heading-xl-lh)'
    }
  };
  const dark = polarity === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 'var(--type-eyebrow-weight)',
      lineHeight: 'var(--type-eyebrow-lh)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-accent-violet-mid)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0,
      textWrap: 'pretty',
      ...sizes[size]
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Starfield.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Atmospheric hero canvas. The source implements the starfield as a background
 * image asset; none was provided, so this is a CSS pinprick approximation.
 */
function Starfield({
  children,
  polarity = 'dark',
  style,
  ...rest
}) {
  const stars = 'radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.55) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 78% 14%, rgba(255,255,255,0.4) 50%, transparent 51%),' + 'radial-gradient(1.5px 1.5px at 44% 62%, rgba(255,255,255,0.35) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 88% 74%, rgba(255,255,255,0.5) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 26% 82%, rgba(255,255,255,0.3) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 62% 34%, rgba(255,255,255,0.45) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 6% 54%, rgba(255,255,255,0.28) 50%, transparent 51%),' + 'radial-gradient(1px 1px at 94% 44%, rgba(255,255,255,0.32) 50%, transparent 51%)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: polarity === 'dark' ? 'var(--canvas-dark)' : 'var(--canvas-light)',
      color: polarity === 'dark' ? 'var(--text-on-dark)' : 'var(--text-heading)',
      ...style
    }
  }, rest), polarity === 'dark' ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: stars,
      backgroundSize: '520px 420px',
      backgroundRepeat: 'repeat',
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Starfield });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Starfield.jsx", error: String((e && e.message) || e) }); }


__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LimeKeyword = __ds_scope.LimeKeyword;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.SelectViolet = __ds_scope.SelectViolet;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SquiggleDivider = __ds_scope.SquiggleDivider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Starfield = __ds_scope.Starfield;

})();
