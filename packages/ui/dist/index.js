"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  Dropdown: () => Dropdown,
  Input: () => Input,
  NavSection: () => NavSection,
  Navbar: () => Navbar,
  NumberInput: () => NumberInput,
  RadioGroup: () => RadioGroup,
  RadioItem: () => RadioItem,
  TextArea: () => TextArea,
  Toast: () => Toast,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  Typography: () => Typography
});
module.exports = __toCommonJS(index_exports);

// src/components/avatar.tsx
var import_react = require("react");

// src/constants.ts
var colourMap = {
  darkRed: "bg-red-500",
  darkOrange: "bg-orange-500",
  darkYellow: "bg-yellow-500",
  darkGreen: "bg-green-500",
  darkBlue: "bg-blue-500",
  darkPurple: "bg-purple-500",
  darkGray: "bg-gray-500",
  darkSky: "bg-sky-500",
  darkEmerald: "bg-emerald-500",
  red: "bg-red-400",
  orange: "bg-orange-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  gray: "bg-gray-400",
  sky: "bg-sky-400",
  emerald: "bg-emerald-400",
  lightRed: "bg-red-300",
  lightOrange: "bg-orange-300",
  lightYellow: "bg-yellow-300",
  lightGreen: "bg-green-300",
  lightBlue: "bg-blue-300",
  lightPurple: "bg-purple-300",
  lightGray: "bg-gray-300",
  lightSky: "bg-sky-300",
  lightEmerald: "bg-emerald-300",
  white: "bg-white",
  black: "bg-black",
  default: "bg-gray-950"
};
var fromColourMap = {
  darkRed: "from-red-500",
  darkOrange: "from-orange-500",
  darkYellow: "from-yellow-500",
  darkGreen: "from-green-500",
  darkBlue: "from-blue-500",
  darkPurple: "from-purple-500",
  darkGray: "from-gray-500",
  darkSky: "from-sky-500",
  darkEmerald: "from-emerald-500",
  red: "from-red-400",
  orange: "from-orange-400",
  yellow: "from-yellow-400",
  green: "from-green-400",
  blue: "from-blue-400",
  purple: "from-purple-400",
  gray: "from-gray-400",
  sky: "from-sky-400",
  emerald: "from-emerald-400",
  lightRed: "from-red-300",
  lightOrange: "from-orange-300",
  lightYellow: "from-yellow-300",
  lightGreen: "from-green-300",
  lightBlue: "from-blue-300",
  lightPurple: "from-purple-300",
  lightGray: "from-gray-300",
  lightSky: "from-sky-300",
  lightEmerald: "from-emerald-300",
  white: "from-white",
  black: "from-black",
  default: "from-gray-950"
};
var toColourMap = {
  darkRed: "to-red-500",
  darkOrange: "to-orange-500",
  darkYellow: "to-yellow-500",
  darkGreen: "to-green-500",
  darkBlue: "to-blue-500",
  darkPurple: "to-purple-500",
  darkGray: "to-gray-500",
  darkSky: "to-sky-500",
  darkEmerald: "to-emerald-500",
  red: "to-red-400",
  orange: "to-orange-400",
  yellow: "to-yellow-400",
  green: "to-green-400",
  blue: "to-blue-400",
  purple: "to-purple-400",
  gray: "to-gray-400",
  sky: "to-sky-400",
  emerald: "to-emerald-400",
  lightRed: "to-red-300",
  lightOrange: "to-orange-300",
  lightYellow: "to-yellow-300",
  lightGreen: "to-green-300",
  lightBlue: "to-blue-300",
  lightPurple: "to-purple-300",
  lightGray: "to-gray-300",
  lightSky: "to-sky-300",
  lightEmerald: "to-emerald-300",
  white: "to-white",
  black: "to-black",
  default: "to-gray-950"
};
var viaColourMap = {
  darkRed: "via-red-500",
  darkOrange: "via-orange-500",
  darkYellow: "via-yellow-500",
  darkGreen: "via-green-500",
  darkBlue: "via-blue-500",
  darkPurple: "via-purple-500",
  darkGray: "via-gray-500",
  darkSky: "via-sky-500",
  darkEmerald: "via-emerald-500",
  red: "via-red-400",
  orange: "via-orange-400",
  yellow: "via-yellow-400",
  green: "via-green-400",
  blue: "via-blue-400",
  purple: "via-purple-400",
  gray: "via-gray-400",
  sky: "via-sky-400",
  emerald: "via-emerald-400",
  lightRed: "via-red-300",
  lightOrange: "via-orange-300",
  lightYellow: "via-yellow-300",
  lightGreen: "via-green-300",
  lightBlue: "via-blue-300",
  lightPurple: "via-purple-300",
  lightGray: "via-gray-300",
  lightSky: "via-sky-300",
  lightEmerald: "via-emerald-300",
  white: "via-white",
  black: "via-black",
  default: "via-gray-950"
};
var hoverColourMap = {
  darkRed: "hover:bg-red-500",
  darkOrange: "hover:bg-orange-500",
  darkYellow: "hover:bg-yellow-500",
  darkGreen: "hover:bg-green-500",
  darkBlue: "hover:bg-blue-500",
  darkPurple: "hover:bg-purple-500",
  darkGray: "hover:bg-gray-500",
  darkSky: "hover:bg-sky-500",
  darkEmerald: "hover:bg-emerald-500",
  red: "hover:bg-red-400",
  orange: "hover:bg-orange-400",
  yellow: "hover:bg-yellow-400",
  green: "hover:bg-green-400",
  blue: "hover:bg-blue-400",
  purple: "hover:bg-purple-400",
  gray: "hover:bg-gray-400",
  sky: "hover:bg-sky-400",
  emerald: "hover:bg-emerald-400",
  lightRed: "hover:bg-red-300",
  lightOrange: "hover:bg-orange-300",
  lightYellow: "hover:bg-yellow-300",
  lightGreen: "hover:bg-green-300",
  lightBlue: "hover:bg-blue-300",
  lightPurple: "hover:bg-purple-300",
  lightGray: "hover:bg-gray-300",
  lightSky: "hover:bg-sky-300",
  lightEmerald: "hover:bg-emerald-300",
  white: "hover:bg-white",
  black: "hover:bg-black",
  default: "hover:bg-gray-950"
};
var hoverFromColourMap = {
  darkRed: "hover:from-red-500",
  darkOrange: "hover:from-orange-500",
  darkYellow: "hover:from-yellow-500",
  darkGreen: "hover:from-green-500",
  darkBlue: "hover:from-blue-500",
  darkPurple: "hover:from-purple-500",
  darkGray: "hover:from-gray-500",
  darkSky: "hover:from-sky-500",
  darkEmerald: "hover:from-emerald-500",
  red: "hover:from-red-400",
  orange: "hover:from-orange-400",
  yellow: "hover:from-yellow-400",
  green: "hover:from-green-400",
  blue: "hover:from-blue-400",
  purple: "hover:from-purple-400",
  gray: "hover:from-gray-400",
  sky: "hover:from-sky-400",
  emerald: "hover:from-emerald-400",
  lightRed: "hover:from-red-300",
  lightOrange: "hover:from-orange-300",
  lightYellow: "hover:from-yellow-300",
  lightGreen: "hover:from-green-300",
  lightBlue: "hover:from-blue-300",
  lightPurple: "hover:from-purple-300",
  lightGray: "hover:from-gray-300",
  lightSky: "hover:from-sky-300",
  lightEmerald: "hover:from-emerald-300",
  white: "hover:from-white",
  black: "hover:from-black",
  default: "hover:from-gray-950"
};
var hoverViaColourMap = {
  darkRed: "hover:via-red-500",
  darkOrange: "hover:via-orange-500",
  darkYellow: "hover:via-yellow-500",
  darkGreen: "hover:via-green-500",
  darkBlue: "hover:via-blue-500",
  darkPurple: "hover:via-purple-500",
  darkGray: "hover:via-gray-500",
  darkSky: "hover:via-sky-500",
  darkEmerald: "hover:via-emerald-500",
  red: "hover:via-red-400",
  orange: "hover:via-orange-400",
  yellow: "hover:via-yellow-400",
  green: "hover:via-green-400",
  blue: "hover:via-blue-400",
  purple: "hover:via-purple-400",
  gray: "hover:via-gray-400",
  sky: "hover:via-sky-400",
  emerald: "hover:via-emerald-400",
  lightRed: "hover:via-red-300",
  lightOrange: "hover:via-orange-300",
  lightYellow: "hover:via-yellow-300",
  lightGreen: "hover:via-green-300",
  lightBlue: "hover:via-blue-300",
  lightPurple: "hover:via-purple-300",
  lightGray: "hover:via-gray-300",
  lightSky: "hover:via-sky-300",
  lightEmerald: "hover:via-emerald-300",
  white: "hover:via-white",
  black: "hover:via-black",
  default: "hover:via-gray-950"
};
var hoverToColourMap = {
  darkRed: "hover:to-red-500",
  darkOrange: "hover:to-orange-500",
  darkYellow: "hover:to-yellow-500",
  darkGreen: "hover:to-green-500",
  darkBlue: "hover:to-blue-500",
  darkPurple: "hover:to-purple-500",
  darkGray: "hover:to-gray-500",
  darkSky: "hover:to-sky-500",
  darkEmerald: "hover:to-emerald-500",
  red: "hover:to-red-400",
  orange: "hover:to-orange-400",
  yellow: "hover:to-yellow-400",
  green: "hover:to-green-400",
  blue: "hover:to-blue-400",
  purple: "hover:to-purple-400",
  gray: "hover:to-gray-400",
  sky: "hover:to-sky-400",
  emerald: "hover:to-emerald-400",
  lightRed: "hover:to-red-300",
  lightOrange: "hover:to-orange-300",
  lightYellow: "hover:to-yellow-300",
  lightGreen: "hover:to-green-300",
  lightBlue: "hover:to-blue-300",
  lightPurple: "hover:to-purple-300",
  lightGray: "hover:to-gray-300",
  lightSky: "hover:to-sky-300",
  lightEmerald: "hover:to-emerald-300",
  white: "hover:to-white",
  black: "hover:to-black",
  default: "hover:to-gray-950"
};
var textColourMap = {
  darkRed: "text-red-500",
  darkOrange: "text-orange-500",
  darkYellow: "text-yellow-500",
  darkGreen: "text-green-500",
  darkBlue: "text-blue-500",
  darkPurple: "text-purple-500",
  darkGray: "text-gray-500",
  darkSky: "text-sky-500",
  darkEmerald: "text-emerald-500",
  red: "text-red-400",
  orange: "text-orange-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  gray: "text-gray-400",
  sky: "text-sky-400",
  emerald: "text-emerald-400",
  lightRed: "text-red-300",
  lightOrange: "text-orange-300",
  lightYellow: "text-yellow-300",
  lightGreen: "text-green-300",
  lightBlue: "text-blue-300",
  lightPurple: "text-purple-300",
  lightGray: "text-gray-300",
  lightSky: "text-sky-300",
  lightEmerald: "text-emerald-300",
  white: "text-white",
  black: "text-black",
  default: "text-black"
};
var placeholderColourMap = {
  darkRed: "placeholder-red-500",
  darkOrange: "placeholder-orange-500",
  darkYellow: "placeholder-yellow-500",
  darkGreen: "placeholder-green-500",
  darkBlue: "placeholder-blue-500",
  darkPurple: "placeholder-purple-500",
  darkGray: "placeholder-gray-500",
  darkSky: "placeholder-sky-500",
  darkEmerald: "placeholder-emerald-500",
  red: "placeholder-red-400",
  orange: "placeholder-orange-400",
  yellow: "placeholder-yellow-400",
  green: "placeholder-green-400",
  blue: "placeholder-blue-400",
  purple: "placeholder-purple-400",
  gray: "placeholder-gray-400",
  sky: "placeholder-sky-400",
  emerald: "placeholder-emerald-400",
  lightRed: "placeholder-red-300",
  lightOrange: "placeholder-orange-300",
  lightYellow: "placeholder-yellow-300",
  lightGreen: "placeholder-green-300",
  lightBlue: "placeholder-blue-300",
  lightPurple: "placeholder-purple-300",
  lightGray: "placeholder-gray-300",
  lightSky: "placeholder-sky-300",
  lightEmerald: "placeholder-emerald-300",
  white: "placeholder-white",
  black: "placeholder-black",
  default: "placeholder-gray-500"
};
var borderColourMap = {
  darkRed: "border-red-500",
  darkOrange: "border-orange-500",
  darkYellow: "border-yellow-500",
  darkGreen: "border-green-500",
  darkBlue: "border-blue-500",
  darkPurple: "border-purple-500",
  darkGray: "border-gray-500",
  darkSky: "border-sky-500",
  darkEmerald: "border-emerald-500",
  red: "border-red-400",
  orange: "border-orange-400",
  yellow: "border-yellow-400",
  green: "border-green-400",
  blue: "border-blue-400",
  purple: "border-purple-400",
  gray: "border-gray-400",
  sky: "border-sky-400",
  emerald: "border-emerald-400",
  lightRed: "border-red-300",
  lightOrange: "border-orange-300",
  lightYellow: "border-yellow-300",
  lightGreen: "border-green-300",
  lightBlue: "border-blue-300",
  lightPurple: "border-purple-300",
  lightGray: "border-gray-300",
  lightSky: "border-sky-300",
  lightEmerald: "border-emerald-300",
  white: "border-white",
  black: "border-black",
  default: "border-black"
};
var roundMap = {
  0: "",
  1: "rounded-md",
  2: "rounded-lg",
  3: "rounded-xl",
  4: "rounded-full"
};
var boldMap = {
  0: "font-light",
  1: "font-normal",
  2: "font-medium",
  3: "font-semibold",
  4: "font-bold"
};
var sidePadMap = {
  0: "max-w-screen-2xl",
  1: "max-w-screen-xl",
  2: "max-w-screen-lg",
  3: "max-w-screen-md"
};
var shadowMap = {
  0: "",
  1: "shadow-sm",
  2: "shadow-md",
  3: "shadow-lg",
  4: "shadow-xl"
};
var hoverShadowMap = {
  0: "",
  1: "hover:shadow-sm",
  2: "hover:shadow-md",
  3: "hover:shadow-lg",
  4: "hover:shadow-xl"
};
var scaleMap = {
  0: "scale-20",
  1: "scale-40",
  2: "scale-60",
  3: "scale-80",
  4: "scale-90",
  5: "scale-100"
};
var backdropMap = {
  0: "bg-black/100",
  1: "bg-black/70",
  2: "bg-black/50",
  3: "bg-black/30",
  4: "bg-black/10"
};
var textSizeMap = {
  0: "text-xs",
  1: "text-sm",
  2: "text-md",
  3: "text-lg",
  4: "text-xl",
  5: "text-2xl",
  6: "text-3xl",
  7: "text-4xl",
  8: "text-5xl",
  9: "text-6xl",
  10: "text-7xl",
  11: "text-8xl"
};
var checkboxSizeMap = {
  sm: { box: "w-4 h-4", icon: "text-[10px]", label: "text-sm", gap: "gap-2" },
  md: { box: "w-5 h-5", icon: "text-xs", label: "text-sm", gap: "gap-2.5" },
  lg: { box: "w-6 h-6", icon: "text-sm", label: "text-base", gap: "gap-3" }
};
var indicatorSizeMap = {
  sm: { outer: "h-2.5 w-2.5", inner: "h-1.75 w-1.75" },
  md: { outer: "h-3.5 w-3.5", inner: "h-2 w-2" },
  lg: { outer: "h-4.5 w-4.5", inner: "h-2.5 w-2.5" }
};
function getBorder(border) {
  if (!border || border.type === 0) {
    return "";
  } else if (border.type === 1) {
    return `border border-1 ${borderColourMap[border.colour]}`;
  } else if (border.type === 2) {
    return `border border-2 ${borderColourMap[border.colour]}`;
  } else {
    return `border border-4 ${borderColourMap[border.colour]}`;
  }
}
function getBgColour(colour) {
  if (colour.type === "filled") {
    return `${colourMap[colour.colour ?? "white"]}`;
  }
  if (colour.colourVia) {
    return `bg-gradient-to-r 
            ${fromColourMap[colour.colourFrom ?? "white"]} 
            ${viaColourMap[colour.colourVia ?? "white"]} 
            ${toColourMap[colour.colourTo ?? "white"]}`;
  } else {
    return `bg-gradient-to-r 
            ${fromColourMap[colour.colourFrom ?? "white"]} 
            ${toColourMap[colour.colourTo ?? "white"]}`;
  }
}
function getHoverBgColour(colour) {
  if (colour.type === "filled") {
    return `${hoverColourMap[colour.colour ?? "white"]}`;
  }
  if (colour.colourVia) {
    return `hover:bg-gradient-to-r 
            ${hoverFromColourMap[colour.colourFrom ?? "white"]} 
            ${hoverViaColourMap[colour.colourVia ?? "white"]} 
            ${hoverToColourMap[colour.colourTo ?? "white"]}`;
  } else {
    return `bg-gradient-to-r 
            ${hoverFromColourMap[colour.colourFrom ?? "white"]} 
            ${hoverToColourMap[colour.colourTo ?? "white"]}`;
  }
}

// src/components/avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-lg"
};
function Avatar({
  src,
  alt = "Avatar",
  initials = "LU",
  size = "md",
  bgColour = { type: "filled", colour: "lightGray" },
  textColour = "black",
  border,
  round = 4
}) {
  const [imgError, setImgError] = (0, import_react.useState)(false);
  const showImage = src && !imgError;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `
                relative flex items-center justify-center overflow-hidden
                ${sizeMap[size]}
                ${getBgColour(bgColour)}
                ${getBorder(border)}
                ${roundMap[round]}
            `,
      children: showImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src,
          alt,
          onError: () => setImgError(true),
          className: "w-full h-full object-cover",
          draggable: false
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `
                        font-semibold select-none
                        ${textColourMap[textColour]}
                    `,
          children: initials.toUpperCase()
        }
      )
    }
  );
}

// src/components/badge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Badge({ colour = { type: "filled" }, border, round = 4, shadow = 0, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: `
                px-2 py-1
                flex-row items-center justify-center
                border-1
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${roundMap[round]}
                ${shadowMap[shadow]}
            `,
      children
    }
  );
}

// src/components/button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var sizeMap2 = {
  small: "text-md",
  medium: "text-lg",
  large: "text-xl"
};
function Button({
  onClick,
  colour = { type: "filled" },
  hoverColour = colour,
  size = "medium",
  border,
  hoverShadow = 0,
  round = 1,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      onClick,
      className: `
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${hoverShadowMap[hoverShadow]}
                ${getHoverBgColour(hoverColour)}
                transition-colours duration-100
                ${roundMap[round]}
                ${sizeMap2[size]}
                px-2 py-1
            `,
      children
    }
  );
}

// src/components/card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Card({
  colour = { type: "filled" },
  round = 1,
  border,
  shadow = 0,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `
            flex flex-col gap-3 p-4
            ${getBgColour(colour)}
            ${roundMap[round]}
            ${getBorder(border)}
            ${shadowMap[shadow]}
        `, children });
}

// src/components/checkbox.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  colour = { type: "filled", colour: "white" },
  checkedColour = { type: "filled", colour: "black" },
  border = { type: 2, colour: "black" },
  round = 1,
  labelTextColour = "default",
  checkTextColour = "white",
  size = "md"
}) {
  const boxBg = checked ? getBgColour(checkedColour) : getBgColour(colour);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "label",
    {
      className: `
            inline-flex items-center select-none
            ${checkboxSizeMap[size].gap}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "checkbox",
            checked,
            disabled,
            onChange: (e) => onChange(e.target.checked),
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "div",
          {
            "aria-hidden": true,
            className: `
                flex items-center justify-center
                ${checkboxSizeMap[size].box}
                ${boxBg}
                ${getBorder(border)}
                ${roundMap[round]}
                transition-colors
                outline-none
                focus-visible:ring-2 focus-visible:ring-black/20
            `,
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: `${checkboxSizeMap[size].icon} font-bold ${textColourMap[checkTextColour]}`, children: "\u2713" })
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: `${checkboxSizeMap[size].label} ${textColourMap[labelTextColour]} text-xl`, children: label })
      ]
    }
  );
}

// src/components/dialog.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Dialog({
  trigger,
  backdrop = 1,
  children
}) {
  const [open, setOpen] = (0, import_react2.useState)(false);
  const id = (0, import_react2.useId)();
  const contentRef = (0, import_react2.useRef)(null);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  (0, import_react2.useEffect)(() => {
    if (open) contentRef.current?.focus();
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    trigger(openDialog),
    open && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": `${id}-dialog`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `absolute inset-0 ${backdropMap[backdrop]}`, onMouseDown: closeDialog }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              id: `${id}-dialog`,
              ref: contentRef,
              tabIndex: -1,
              className: `relative z-10 w-full max-w-lg outline-none`,
              children: children(closeDialog)
            }
          )
        ]
      }
    )
  ] });
}

// src/components/dropdown.tsx
var import_react3 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  colour = { type: "filled", colour: "white" },
  textColour = "default",
  border = { type: 2, colour: "black" },
  round = 2,
  shadow = 0,
  menuColour = { type: "filled", colour: "white" },
  menuBorder = { type: 2, colour: "black" },
  menuRound = 2,
  menuShadow = 2,
  itemColour = { type: "filled", colour: "white" },
  itemHoverColour = { type: "filled", colour: "lightGray" },
  itemSelectedColour = { type: "filled", colour: "lightSky" },
  optionTextColour = "default",
  optionSelectedTextColour = optionTextColour
}) {
  const id = (0, import_react3.useId)();
  const rootRef = (0, import_react3.useRef)(null);
  const [open, setOpen] = (0, import_react3.useState)(false);
  const selected = options.find((o) => o.value === value);
  (0, import_react3.useEffect)(() => {
    function onDocMouseDown(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);
  (0, import_react3.useEffect)(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const triggerBg = getBgColour(colour);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { ref: rootRef, className: `relative inline-block`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "button",
      {
        disabled,
        onClick: () => !disabled && setOpen((v) => !v),
        className: `
          w-full min-w-[12rem]
          flex items-center justify-between gap-3
          px-3 py-2
          ${triggerBg}
          ${getBorder(border)}
          ${roundMap[round]}
          ${shadowMap[shadow]}
          ${textColourMap[textColour]}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm truncate", children: selected ? selected.label : placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: `text-xs ${open ? "rotate-180" : ""}`, children: "\u25BC" })
        ]
      }
    ),
    open && !disabled && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: `
            absolute z-50 mt-2 w-full overflow-hidden
            ${getBgColour(menuColour)}
            ${getBorder(menuBorder)}
            ${roundMap[menuRound]}
            ${shadowMap[menuShadow]}
          `,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { className: "max-h-64 overflow-auto py-1", children: options.map((opt) => {
          const isSelected = opt.value === value;
          const isOptDisabled = Boolean(opt.disabled);
          const baseBg = getBgColour(itemColour);
          const selectedBg = getBgColour(itemSelectedColour);
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { role: "option", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              disabled: isOptDisabled,
              onClick: () => {
                if (isOptDisabled) return;
                onChange(opt.value);
                setOpen(false);
              },
              className: `
                      w-full text-left px-3 py-2 text-sm
                      ${isSelected ? selectedBg : baseBg}
                      ${textColourMap[isSelected ? optionSelectedTextColour : optionTextColour]}
                      ${isOptDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                      transition-colors
                    `,
              onMouseEnter: (e) => {
                if (isOptDisabled || isSelected) return;
                e.currentTarget.classList.add(getBgColour(itemHoverColour));
              },
              onMouseLeave: (e) => {
                if (isOptDisabled || isSelected) return;
                e.currentTarget.classList.remove(getBgColour(itemHoverColour));
              },
              children: opt.label
            }
          ) }, opt.value);
        }) })
      }
    )
  ] });
}

// src/components/input.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Input({
  colour = "white",
  textColour = "default",
  border = { type: 2, colour: "black" },
  placeholder = { placeholder: "Input", colour: "default" },
  round = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "input",
    {
      placeholder: placeholder.placeholder,
      className: `
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                p-2
                outline-none
            `
    }
  );
}

// src/components/navbar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Navbar({ type = "default", sticky = true, colour = { type: "filled" }, sidePadLevel = 1, rounded = 2, border, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { className: `w-full z-50 backdrop-blur-2xl
            ${getBgColour(colour)}
            ${type === "default" ? "" : "top-3 fixed z-50"}
        `, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: `flex items-center justify-between mx-auto px-2 py-1
                ${sidePadMap[sidePadLevel]}
                ${roundMap[rounded]}
                ${getBorder(border)}
            `, children }) });
}

// src/components/navSection.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function NavSection({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-row justify-center items-center gap-6", children });
}

// src/components/numberInput.tsx
var import_react4 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function NumberInput({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  colour = "white",
  textColour = "default",
  border = { type: 2, colour: "black" },
  round = 1
}) {
  const [curNum, setCurNum] = (0, import_react4.useState)(value);
  (0, import_react4.useEffect)(() => {
    setCurNum(value);
  }, [value]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "input",
    {
      type: "number",
      value: curNum,
      min,
      max,
      step,
      onChange: (e) => {
        const next = e.target.value === "" ? void 0 : Number(e.target.value);
        if (next && next >= min && next <= max) {
          setCurNum(next);
          onChange?.(next);
        }
      },
      className: `
                ${textColourMap[textColour]}
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                border-2
                p-2
                outline-none
            `
    }
  );
}

// src/components/radioGroupContext.tsx
var import_react5 = require("react");
var RadioGroupContext = (0, import_react5.createContext)(null);

// src/components/radioGroup.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function RadioGroup({
  name,
  value,
  onChange,
  children,
  disabled = false,
  direction = "col"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(RadioGroupContext.Provider, { value: { name, value, onChange, disabled }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      role: "radiogroup",
      className: `flex 
          ${direction === "row" ? "flex-row" : "flex-col"} 
          gap-2
        `,
      children
    }
  ) });
}

// src/components/radioItem.tsx
var import_react6 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function RadioItem({
  value,
  children,
  disabled = false,
  colour = { type: "filled", colour: "white" },
  selectedColour = { type: "filled", colour: "black" },
  textColour = "default",
  border = { type: 0, colour: "black" },
  round = 2,
  shadow = 0,
  indicatorBorder = { type: 1, colour: "black" },
  indicatorColour = { type: "filled", colour: "black" },
  indicatorSize = "md"
}) {
  const ctx = (0, import_react6.useContext)(RadioGroupContext);
  if (!ctx) throw new Error("RadioItem must be used inside a RadioGroup");
  const id = (0, import_react6.useId)();
  const checked = ctx.value === value;
  const isDisabled = Boolean(disabled || ctx.disabled);
  const background = checked ? getBgColour(selectedColour) : getBgColour(colour);
  const sizes = indicatorSizeMap[indicatorSize];
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "label",
    {
      htmlFor: id,
      className: `
                flex items-center gap-2 select-none px-3 py-2
                ${background}
                ${getBorder(border)}
                ${roundMap[round]}
                ${shadowMap[shadow]}
                ${textColourMap[textColour]}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            id,
            type: "radio",
            name: ctx.name,
            value,
            checked,
            disabled: isDisabled,
            onChange: () => !isDisabled && ctx.onChange(value),
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "div",
          {
            "aria-hidden": true,
            className: `
                    rounded-full flex items-center justify-center bg-white
                    ${sizes.outer}
                    ${getBorder(indicatorBorder)}
                `,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "span",
              {
                className: `
                        rounded-full
                        ${sizes.outer}
                        ${checked ? getBgColour(indicatorColour) : "bg-transparent"}
                    `
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: `text-sm`, children })
      ]
    }
  );
}

// src/components/textArea.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function TextArea({
  colour = "default",
  textColour = "default",
  border = { type: 2, colour: "black" },
  placeholder = { placeholder: "Input", colour: "default" },
  round = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "textarea",
    {
      placeholder: placeholder.placeholder,
      className: `
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                p-2
                outline-none
            `
    }
  );
}

// src/components/toast.tsx
var import_react7 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var sizeMap3 = {
  small: "text-md",
  medium: "text-lg",
  large: "text-xl"
};
function Toast({
  scale = 5,
  show,
  onHide,
  shadow = 0,
  duration = 2e3,
  colour = { type: "filled", colour: "black" },
  textColour = "white",
  size = "medium",
  border,
  round = 1,
  children
}) {
  const [visible, setVisible] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    if (show) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [show]);
  (0, import_react7.useEffect)(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onHide?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onHide]);
  if (!show && !visible) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      className: `
                fixed top-4 left-1/2 -translate-x-1/2 z-50
                px-4 py-2 shadow-lg
                transition-all duration-200 ease-out
                transform
                ${visible ? "opacity-100 scale-100" : `opacity-0 ${scaleMap[scale]}`}
                ${shadowMap[shadow]}
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${textColourMap[textColour]}
                ${roundMap[round]}
                ${sizeMap3[size]}
            `,
      children
    }
  );
}

// src/components/toggle.tsx
var import_react8 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var sizeMap4 = {
  small: "text-md",
  medium: "text-lg",
  large: "text-xl"
};
function Toggle({
  onToggle,
  untoggledColour = { type: "filled", colour: "white" },
  toggledColour = { type: "filled", colour: "blue" },
  size = "medium",
  border,
  hoverShadow = 0,
  round = 1,
  children
}) {
  const [isToggled, setIsToggled] = (0, import_react8.useState)(false);
  const handleClick = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onToggle?.(newState);
  };
  const currentColour = isToggled ? toggledColour : untoggledColour;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "button",
    {
      onClick: handleClick,
      className: `
                ${getBgColour(currentColour)}
                ${getBorder(border)}
                ${shadowMap[hoverShadow]}
                ${roundMap[round]}
                ${sizeMap4[size]}
                px-2 py-1
                transition-colors duration-200
            `,
      children
    }
  );
}

// src/components/tooltip.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var sizeMap5 = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
};
function Tooltip({
  colour = { type: "filled", colour: "black" },
  textColour = "white",
  content,
  placement = "top",
  size = "md",
  round = 4,
  scale = 5,
  children
}) {
  const posClass = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "group/tooltip relative inline-block", children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        role: "tooltip",
        className: `absolute z-50 ${posClass[placement]} opacity-0 ${scaleMap[scale]} transform transition-all duration-150 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100`,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: `${getBgColour(colour)} ${roundMap[round]} ${textColourMap[textColour]} rounded-full ${sizeMap5[size]}`, children: content })
      }
    )
  ] });
}

// src/components/typography.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Typography({ type = "p", size = 2, colour = "black", bold = 1, children }) {
  if (type === "p") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h1") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h1", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h2") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h2", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h3") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h3", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h4") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h4", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h5") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h5", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  } else if (type === "h6") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h6", { className: `${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]}`, children: [
      " ",
      children,
      " "
    ] });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  Dropdown,
  Input,
  NavSection,
  Navbar,
  NumberInput,
  RadioGroup,
  RadioItem,
  TextArea,
  Toast,
  Toggle,
  Tooltip,
  Typography
});
//# sourceMappingURL=index.js.map