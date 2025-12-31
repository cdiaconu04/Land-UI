"use client";

import React from "react";
import {
    type colourProps,
    type borderProps,
    getBgColour,
    getBorder,
    roundMap,
    textColourMap,
    checkboxSizeMap,
} from "./constants/constants";

type CheckboxProps = {
    checked: boolean;
    onChange: (next: boolean) => void;

    label?: React.ReactNode;
    disabled?: boolean;

    colour?: colourProps;
    checkedColour?: colourProps;
    border?: borderProps;
    round?: keyof typeof roundMap;

    labelTextColour?: keyof typeof textColourMap;
    checkTextColour?: keyof typeof textColourMap;

    size?: keyof typeof checkboxSizeMap;

    className?: string;
    font?: string;
};

export default function Checkbox({
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

    size = "md",

    font,
}: CheckboxProps) {
  const boxBg = checked ? getBgColour(checkedColour) : getBgColour(colour);

  return (
    <label
        className={`
            inline-flex items-center select-none
            ${checkboxSizeMap[size].gap}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >
        <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
        />

        <div
            aria-hidden
            className={`
                flex items-center justify-center
                ${checkboxSizeMap[size].box}
                ${boxBg}
                ${getBorder(border)}
                ${roundMap[round]}
                transition-colors
                outline-none
                focus-visible:ring-2 focus-visible:ring-black/20
            `}
        >
            {checked && (
                <span className={`${checkboxSizeMap[size].icon} font-bold ${textColourMap[checkTextColour]}`}>
                    ✓
                </span>
            )}
        </div>

        {label && (
            <span className={`${checkboxSizeMap[size].label} ${textColourMap[labelTextColour]} ${font} text-xl`}>
                {label}
            </span>
        )}
    </label>
  );
}
