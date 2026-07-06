/* @ds-bundle: {"format":3,"namespace":"SchieferdeckerDesignSystem_e8aade","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"ProductTile","sourcePath":"components/surfaces/ProductTile.jsx"},{"name":"StickyBar","sourcePath":"components/surfaces/StickyBar.jsx"}],"sourceHashes":{"components/core/Button.jsx":"2efc07881cd0","components/core/Card.jsx":"dcb574b51dc3","components/core/Chip.jsx":"512e9ff5fd9b","components/core/IconButton.jsx":"e608d3f2a8dc","components/core/Input.jsx":"8c9e66f0de2f","components/core/Tag.jsx":"96585187c0aa","components/core/TextLink.jsx":"43cb6a0d7471","components/navigation/Footer.jsx":"9b4f5d5e91e8","components/navigation/GlobalNav.jsx":"a1110afc916f","components/navigation/SubNav.jsx":"d017c6306024","components/surfaces/ProductTile.jsx":"e77c8b83a90c","components/surfaces/StickyBar.jsx":"35636042e064","ui_kits/agency-site/CaseScreen.jsx":"44e7819ee360","ui_kits/agency-site/HomeScreen.jsx":"2d1ef553ef88","ui_kits/agency-site/WorkScreen.jsx":"24d4ee66c0b8","ui_kits/agency-site/shared.jsx":"84ee4bf7e7a5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SchieferdeckerDesignSystem_e8aade = window.SchieferdeckerDesignSystem_e8aade || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the system's action element.
 * A single blue accent carries every interactive element; the full-pill radius
 * IS the brand action signal. Press state is a system-wide transform: scale(0.95).
 *
 * variants:
 *   primary   — Action Green pill (default)
 *   secondary — ghost pill: transparent, green text + border
 *   dark      — dark utility rect (nav actions: Sign In, Menu)
 *   pearl     — near-white capsule with a soft ring (product-card secondary)
 *   hero      — larger primary, weight-300 label (store hero CTA)
 */
function Button({
  variant = "primary",
  onDark = false,
  disabled = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [focus, setFocus] = useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    fontFamily: "var(--font-text)",
    border: "1px solid transparent",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform 120ms ease",
    transform: pressed && !disabled ? "var(--active-press)" : "none",
    outline: focus && !disabled ? "2px solid var(--color-primary-focus)" : "none",
    outlineOffset: "2px",
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      font: "var(--type-body)",
      fontFamily: "var(--font-text)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid var(--color-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      font: "var(--type-body)",
      fontFamily: "var(--font-text)"
    },
    dark: {
      background: onDark ? "rgba(255,255,255,0.14)" : "var(--color-ink)",
      color: "var(--color-on-dark)",
      borderRadius: "var(--radius-sm)",
      padding: "8px 15px",
      font: "var(--type-button-utility)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)"
    },
    pearl: {
      background: "var(--color-surface-pearl)",
      color: "var(--color-ink-muted-80)",
      border: "3px solid var(--color-divider-soft)",
      borderRadius: "var(--radius-md)",
      padding: "8px 14px",
      font: "var(--type-caption)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)"
    },
    hero: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 28px",
      font: "var(--type-button-large)",
      fontFamily: "var(--font-text)"
    }
  };
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === "button" ? disabled : undefined,
    onPointerDown: () => !disabled && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the utility card used in grids (work index, services).
 * White fill, 1px hairline, 18px radius, 24px padding. No shadow by default;
 * only a product image resting inside carries the system product-shadow.
 */
function Card({
  media,
  title,
  meta,
  footer,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--color-canvas)",
      border: "var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-lg)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      marginBottom: "var(--space-md)",
      aspectRatio: "1 / 1",
      background: "var(--color-canvas-parchment)"
    }
  }, media), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink)"
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink-muted-80)",
      marginTop: "2px"
    }
  }, meta), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-sm)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a pill-shaped tappable option cell (a configurator option, a filter).
 * Selected upgrades the border to 2px Focus Blue. No shadow.
 */
function Chip({
  selected = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-pressed": selected,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      padding: "12px 16px",
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: selected ? "2px solid var(--color-primary-focus)" : "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-caption)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)",
      cursor: "pointer",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — a circular control that floats over photography.
 * 44×44, translucent gray chip, ink glyph. Used for carousel controls,
 * close buttons, in-image thumbnails.
 */
function IconButton({
  children,
  label,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      width: "44px",
      height: "44px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      border: "none",
      background: "var(--color-surface-chip-translucent)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      color: "var(--color-ink)",
      cursor: "pointer",
      transition: "transform 120ms ease",
      transform: pressed ? "var(--active-press)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — the pill-shaped search / text field. Search is pill-shaped too,
 * matching the CTA grammar. 44px tall, hairline border, optional leading icon.
 */
function Input({
  icon,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      height: "44px",
      padding: "0 20px",
      background: "var(--color-canvas)",
      border: focus ? "1px solid var(--color-primary-focus)" : "1px solid var(--color-border-input)",
      borderRadius: "var(--radius-pill)",
      transition: "border-color 120ms ease",
      boxSizing: "border-box",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--color-ink-muted-48)",
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink)",
      width: "100%"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a quiet metadata chip. Two tones:
 *   default — hairline outline on canvas
 *   accent  — Action Green text on a faint green wash
 */
function Tag({
  tone = "default",
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--color-ink-muted-80)",
      background: "transparent",
      border: "1px solid var(--color-hairline)"
    },
    accent: {
      color: "var(--color-primary)",
      background: "rgba(63,153,115,0.10)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "var(--radius-pill)",
      padding: "4px 12px",
      font: "var(--type-caption-strong)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — inline body link in Action Green.
 * On dark surfaces, pass onDark for the brighter Mint Link green, since the base
 * green would dim against a near-black tile.
 */
function TextLink({
  onDark = false,
  underline = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    style: {
      color: onDark ? "var(--color-primary-on-dark)" : "var(--color-primary)",
      textDecoration: underline ? "underline" : "none",
      fontFamily: "var(--font-text)",
      cursor: "pointer",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer — parchment surface with dense link columns (relaxed 2.41 leading)
 * and a fine-print legal row. The only deliberately dense area of the system.
 */
function Footer({
  columns = [],
  legal,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--color-canvas-parchment)",
      color: "var(--color-ink-muted-80)",
      padding: "64px var(--space-xl)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
      gap: "var(--space-xl)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption-strong)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)",
      color: "var(--color-ink)",
      marginBottom: "var(--space-xs)"
    }
  }, col.heading), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      font: "var(--type-dense-link)",
      fontFamily: "var(--font-text)",
      color: "var(--color-ink-muted-80)",
      textDecoration: "none"
    }
  }, l))))), legal && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "var(--space-xl) auto 0",
      paddingTop: "var(--space-md)",
      borderTop: "var(--border-soft)",
      font: "var(--type-fine-print)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-fine-tracking)",
      color: "var(--color-ink-muted-48)"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlobalNav — ultra-thin black bar pinned to the top of every page.
 * 44px tall, quiet 12px nav links, right-aligned icon cluster.
 * The only place pure black appears on most pages.
 */
function GlobalNav({
  brand = "Schieferdecker",
  links = [],
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)",
      height: "44px",
      padding: "0 var(--space-xl)",
      background: "var(--color-surface-black)",
      color: "var(--color-on-dark)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-tagline)",
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--color-on-dark)",
      textDecoration: "none",
      marginRight: "var(--space-sm)"
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#",
    onClick: l.onClick ? e => {
      e.preventDefault();
      l.onClick(e);
    } : undefined,
    style: {
      font: "var(--type-nav-link)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-fine-tracking)",
      color: "var(--color-body-muted)",
      textDecoration: "none"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)"
    }
  }, actions));
}
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SubNav — surface-specific frosted bar that sticks below the global nav.
 * Parchment at 80% with backdrop blur. Left: category name (tagline).
 * Right: inline links ending in a persistent primary CTA.
 */
function SubNav({
  category,
  links = [],
  cta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      height: "52px",
      padding: "0 var(--space-xl)",
      background: "rgba(245,245,247,0.8)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderBottom: "var(--border-soft)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-tagline)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--type-tagline-tracking)",
      color: "var(--color-ink)",
      flex: 1
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#",
    onClick: l.onClick ? e => {
      e.preventDefault();
      l.onClick(e);
    } : undefined,
    style: {
      font: "var(--type-button-utility)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-caption-tracking)",
      color: "var(--color-ink)",
      textDecoration: "none"
    }
  }, l.label)), cta));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductTile — a full-bleed section tile. The centered stack is: eyebrow →
 * headline → one-line tagline → up to two CTAs → visual resting on the surface.
 * Alternate `light` / `parchment` / `dark` tiles for section rhythm — the color
 * change itself is the divider, so tiles are edge-to-edge with 0 gap and no radius.
 *
 * surface: light | parchment | dark | dark-2 | dark-3
 */
function ProductTile({
  surface = "light",
  eyebrow,
  headline,
  tagline,
  actions,
  visual,
  align = "center",
  style,
  ...rest
}) {
  const surfaces = {
    light: {
      background: "var(--color-canvas)",
      dark: false
    },
    parchment: {
      background: "var(--color-canvas-parchment)",
      dark: false
    },
    dark: {
      background: "var(--color-surface-tile-1)",
      dark: true
    },
    "dark-2": {
      background: "var(--color-surface-tile-2)",
      dark: true
    },
    "dark-3": {
      background: "var(--color-surface-tile-3)",
      dark: true
    }
  };
  const s = surfaces[surface] || surfaces.light;
  const ink = s.dark ? "var(--color-on-dark)" : "var(--color-ink)";
  const sub = s.dark ? "var(--color-body-muted)" : "var(--color-ink-muted-80)";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: s.background,
      color: ink,
      padding: "var(--space-section) var(--space-xl)",
      textAlign: align,
      borderRadius: "var(--radius-none)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-text)",
      margin: align === "center" ? "0 auto" : "0",
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "var(--space-md)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-tagline)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-tagline-tracking)",
      color: "var(--color-primary)"
    }
  }, eyebrow), headline && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display-lg)",
      fontFamily: "var(--font-display)",
      margin: 0,
      color: ink
    }
  }, headline), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-lead-tracking)",
      margin: 0,
      color: sub,
      maxWidth: "640px"
    }
  }, tagline), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      marginTop: "var(--space-xs)",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, actions)), visual && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xxl)",
      display: "flex",
      justifyContent: "center"
    }
  }, visual));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StickyBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickyBar — floats at the bottom of the viewport during scroll. Frosted
 * parchment at 80%. Left: running summary. Right: primary CTA.
 */
function StickyBar({
  summary,
  cta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-lg)",
      height: "64px",
      padding: "12px 32px",
      background: "rgba(245,245,247,0.8)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderTop: "var(--border-soft)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink)"
    }
  }, summary), /*#__PURE__*/React.createElement("div", null, cta));
}
Object.assign(__ds_scope, { StickyBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StickyBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/CaseScreen.jsx
try { (() => {
// Case study — a single project, dark editorial hero + content tiles + sticky CTA.
function CaseScreen({
  go
}) {
  const {
    ProductTile,
    Button,
    Tag,
    TextLink,
    StickyBar
  } = window.DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ProductTile, {
    surface: "dark",
    eyebrow: "Case study",
    headline: "Aurora",
    tagline: "A calm, editorial identity for a climate fund.",
    align: "left",
    visual: /*#__PURE__*/React.createElement(Plate, {
      tone: "#2b2b2e",
      h: 420
    }, "cover")
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-text)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-xs)",
      marginBottom: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "Identity"), /*#__PURE__*/React.createElement(Tag, null, "Type system"), /*#__PURE__*/React.createElement(Tag, null, "Web")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead-airy)",
      fontFamily: "var(--font-text)",
      color: "var(--color-ink)",
      margin: "0 0 var(--space-xl)"
    }
  }, "Aurora backs early climate infrastructure. They needed an identity that felt as considered as their diligence \u2014 quiet, precise, and unafraid of white space."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--color-ink-muted-80)",
      margin: "0 0 var(--space-md)"
    }
  }, "We built a mark from a single drawn arc, a two-weight type system, and a site that lets the portfolio breathe. Every page is one idea. ", /*#__PURE__*/React.createElement(TextLink, null, "Read the approach \u203A")))), /*#__PURE__*/React.createElement(ProductTile, {
    surface: "parchment",
    visual: /*#__PURE__*/React.createElement(Plate, {
      tone: "#ffffff",
      h: 360,
      style: {
        maxWidth: 900,
        border: "var(--border-hairline)"
      }
    }, "brand board")
  }), /*#__PURE__*/React.createElement(ProductTile, {
    surface: "dark-3",
    visual: /*#__PURE__*/React.createElement(Plate, {
      tone: "#1f1f22",
      h: 360,
      style: {
        maxWidth: 900
      }
    }, "site render")
  }), /*#__PURE__*/React.createElement(ProductTile, {
    surface: "light",
    headline: "Like where this is going?",
    tagline: "We'd love to hear about your project.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      as: "a",
      onClick: () => go("case")
    }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "a",
      onClick: () => go("work")
    }, "See more work"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(StickyBar, {
    summary: "Aurora \u2014 Identity & web \xB7 engagement from \u20AC18,000",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      as: "a",
      onClick: () => go("case")
    }, "Start a project")
  })));
}
window.CaseScreen = CaseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/CaseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/HomeScreen.jsx
try { (() => {
// Home — alternating light/dark tiles, the studio's front door.
function HomeScreen({
  go
}) {
  const {
    ProductTile,
    Button,
    Card,
    TextLink
  } = window.DS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProductTile, {
    surface: "light",
    eyebrow: "Berlin studio",
    headline: "Design that gets out of the way",
    tagline: "Brand, web and motion for people who care about the details.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      as: "a",
      onClick: () => go("work")
    }, "See the work"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "a",
      onClick: () => go("case")
    }, "Start a project")),
    visual: /*#__PURE__*/React.createElement(Plate, {
      tone: "#e9ebf0",
      h: 360,
      style: {
        maxWidth: 900
      }
    }, "hero visual")
  }), /*#__PURE__*/React.createElement(ProductTile, {
    surface: "dark",
    eyebrow: "Case study",
    headline: "Aurora",
    tagline: "A calm, editorial identity for a climate fund \u2014 brandmark, type system and site.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      as: "a",
      onClick: () => go("case")
    }, "View case study"),
    visual: /*#__PURE__*/React.createElement(Plate, {
      tone: "#2b2b2e",
      h: 340,
      style: {
        maxWidth: 820
      }
    }, "work render")
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas-parchment)",
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display-lg)",
      fontFamily: "var(--font-display)",
      color: "var(--color-ink)",
      margin: "0 0 8px",
      textAlign: "center"
    }
  }, "What we do"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      fontFamily: "var(--font-text)",
      letterSpacing: "var(--type-lead-tracking)",
      color: "var(--color-ink-muted-80)",
      textAlign: "center",
      margin: "0 0 var(--space-xxl)"
    }
  }, "Three things, done properly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gutter)"
    }
  }, [{
    t: "Brand identity",
    m: "Marks, type systems and guidelines.",
    i: "pen-tool"
  }, {
    t: "Web design",
    m: "Editorial sites built to last.",
    i: "layout"
  }, {
    t: "Motion",
    m: "Launch films and micro-interactions.",
    i: "clapperboard"
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    media: /*#__PURE__*/React.createElement(Plate, {
      tone: "#ffffff",
      h: 140,
      shadow: false,
      radius: "var(--radius-sm)",
      style: {
        border: "var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: s.i,
      style: {
        width: 28,
        height: 28,
        color: "var(--color-ink-muted-48)"
      }
    })),
    title: s.t,
    meta: s.m,
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go("work")
    }, "See related work \u203A")
  }))))), /*#__PURE__*/React.createElement(ProductTile, {
    surface: "dark-2",
    headline: "Have something in mind?",
    tagline: "We take on a handful of projects each quarter. Let's talk.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      as: "a",
      onClick: () => go("case")
    }, "Start a project")
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/WorkScreen.jsx
try { (() => {
// Work — filterable index of the studio's projects.
function WorkScreen({
  go
}) {
  const {
    Button,
    Card,
    TextLink,
    Chip,
    Input
  } = window.DS;
  const [filter, setFilter] = React.useState("All");
  const [q, setQ] = React.useState("");
  const cats = ["All", "Identity", "Web", "Motion"];
  const items = window.WORK.filter(w => (filter === "All" || w.cat === filter) && (q === "" || w.title.toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto",
      padding: "var(--space-xxl) var(--space-xl) var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-lg)",
      fontFamily: "var(--font-display)",
      color: "var(--color-ink)",
      margin: "0 0 var(--space-lg)"
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-md)",
      marginBottom: "var(--space-xl)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search work",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "search"
    }),
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 240
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gutter)"
    }
  }, items.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.id,
    media: /*#__PURE__*/React.createElement(Plate, {
      tone: w.tone,
      h: 200,
      radius: "var(--radius-sm)"
    }, w.title),
    title: w.title,
    meta: w.meta,
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go("case")
    }, "View case study \u203A")
  }))), items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead-airy)",
      fontFamily: "var(--font-text)",
      color: "var(--color-ink-muted-48)",
      textAlign: "center",
      padding: "var(--space-section) 0"
    }
  }, "No projects match that.")));
}
window.WorkScreen = WorkScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/WorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/shared.jsx
try { (() => {
// Shared bits for the agency-site UI kit.
const DS = window.SchieferdeckerDesignSystem_e8aade;
const Icon = ({
  n,
  style
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: style
});

// A neutral placeholder standing in for real work photography.
// (No gradients — a flat tinted surface, as the system prescribes.)
function Plate({
  tone = "#e8e8ec",
  h = 320,
  shadow = true,
  radius = "var(--radius-sm)",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: h,
      background: tone,
      borderRadius: radius,
      boxShadow: shadow ? "var(--shadow-product)" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(0,0,0,0.28)",
      font: "var(--type-caption)",
      fontFamily: "var(--font-text)",
      ...style
    }
  }, children);
}
const WORK = [{
  id: "aurora",
  title: "Aurora",
  meta: "Identity · 2026",
  tone: "#2b2b2e",
  cat: "Identity"
}, {
  id: "meridian",
  title: "Meridian",
  meta: "Web · 2026",
  tone: "#e6e9ee",
  cat: "Web"
}, {
  id: "kessler",
  title: "Kessler & Co.",
  meta: "Identity · 2025",
  tone: "#efe9e2",
  cat: "Identity"
}, {
  id: "northwind",
  title: "Northwind",
  meta: "Motion · 2025",
  tone: "#20242a",
  cat: "Motion"
}, {
  id: "atlas",
  title: "Atlas Type",
  meta: "Web · 2025",
  tone: "#e9eef0",
  cat: "Web"
}, {
  id: "verde",
  title: "Verde",
  meta: "Motion · 2024",
  tone: "#e7ece6",
  cat: "Motion"
}];
Object.assign(window, {
  DS,
  Icon,
  Plate,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.StickyBar = __ds_scope.StickyBar;

})();
