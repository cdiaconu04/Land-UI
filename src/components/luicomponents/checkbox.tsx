"use client";

import React from "react";
import {
    type colourProps,
    type borderProps,
    getBgColour,
    getBorder,
    roundMap,
    textColourMap,
} from "./constants/constants";

const sizeMap = {
    sm: { box: "w-4 h-4", icon: "text-[10px]", label: "text-sm", gap: "gap-2" },
    md: { box: "w-5 h-5", icon: "text-xs", label: "text-sm", gap: "gap-2.5" },
    lg: { box: "w-6 h-6", icon: "text-sm", label: "text-base", gap: "gap-3" },
};

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

    size?: keyof typeof sizeMap;

    className?: string;
    font?: string;
    id?: string;
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

    className = "",
    font,
    id,
}: CheckboxProps) {
  const boxBg = checked ? getBgColour(checkedColour) : getBgColour(colour);

  return (
    <label
        className={`
            inline-flex items-center select-none
            ${sizeMap[size].gap}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${className}
        `}
    >
        <input
            id={id}
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
                ${sizeMap[size].box}
                ${boxBg}
                ${getBorder(border)}
                ${roundMap[round]}
                transition-colors
                outline-none
                focus-visible:ring-2 focus-visible:ring-black/20
            `}
        >
            {checked && (
                <span className={`${sizeMap[size].icon} font-bold ${textColourMap[checkTextColour]}`}>
                    ✓
                </span>
            )}
        </div>

        {label && (
            <span className={`${sizeMap[size].label} ${textColourMap[labelTextColour]} ${font} text-xl`}>
                {label}
            </span>
        )}
    </label>
  );
}
