// src/constants.ts
var colourMap = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  white: "bg-white",
  black: "bg-black",
  gray: "bg-gray-500",
  default: "bg-gray-950"
};
var fromColourMap = {
  red: "from-red-500",
  orange: "from-orange-500",
  yellow: "from-yellow-500",
  green: "from-green-500",
  blue: "from-blue-500",
  purple: "from-purple-500",
  white: "from-white",
  black: "from-black",
  gray: "from-gray-500",
  default: "from-gray-950"
};
var toColourMap = {
  red: "to-red-500",
  orange: "to-orange-500",
  yellow: "to-yellow-500",
  green: "to-green-500",
  blue: "to-blue-500",
  purple: "to-purple-500",
  white: "to-white",
  black: "to-black",
  gray: "to-gray-500",
  default: "to-gray-950"
};
var viaColourMap = {
  red: "via-red-500",
  orange: "via-orange-500",
  yellow: "via-yellow-500",
  green: "via-green-500",
  blue: "via-blue-500",
  purple: "via-purple-500",
  white: "via-white",
  black: "via-black",
  gray: "via-gray-500",
  default: "via-gray-950"
};
var borderColourMap = {
  red: "border-red-500",
  orange: "border-orange-500",
  yellow: "border-yellow-500",
  green: "border-green-500",
  blue: "border-blue-500",
  purple: "border-purple-500",
  white: "border-white",
  black: "border-black",
  gray: "border-gray-500",
  default: "border-black"
};
var roundMap = {
  0: "",
  1: "rounded-md",
  2: "rounded-lg",
  3: "rounded-xl",
  4: "rounded-full"
};
var shadowMap = {
  0: "",
  1: "shadow-sm",
  2: "shadow-md",
  3: "shadow-lg",
  4: "shadow-xl",
  5: "shadow-2xl"
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
    return colourMap[colour.colour ?? "white"];
  }
  if (colour.colourVia) {
    return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${viaColourMap[colour.colourVia ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
  } else {
    return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
  }
}

// src/components/button.tsx
import { jsx } from "react/jsx-runtime";
var sizeMap = {
  small: "text-md",
  medium: "text-lg",
  large: "text-xl"
};
function Button({
  onClick,
  colour = { type: "filled" },
  size = "medium",
  border,
  hoverShadow = 0,
  round = 1,
  children
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${shadowMap[hoverShadow]}
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
            `,
      children
    }
  );
}
export {
  Button
};
//# sourceMappingURL=index.mjs.map