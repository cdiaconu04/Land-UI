"use client";
import React, { useContext, useId } from "react";
import { RadioGroupContext } from "./radioGroupContext";
import {
    type colourProps,
    type borderProps,
    getBgColour,
    getBorder,
    roundMap,
    shadowMap,
    textColourMap,
    indicatorSizeMap,
} from "../constants";

type RadioItemProps = {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;

    colour?: colourProps;
    selectedColour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    round?: keyof typeof roundMap;
    shadow?: keyof typeof shadowMap;

    indicatorBorder?: borderProps;
    indicatorColour?: colourProps;
    indicatorSize?: "sm" | "md" | "lg";
};

export function RadioItem({
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
    indicatorSize = "md",
}: RadioItemProps) {
    const ctx = useContext(RadioGroupContext);
    if (!ctx) throw new Error("RadioItem must be used inside a RadioGroup");

    const id = useId();
    const checked = ctx.value === value;

    const isDisabled = Boolean(disabled || ctx.disabled);
    const background = checked ? getBgColour(selectedColour) : getBgColour(colour);

    const sizes = indicatorSizeMap[indicatorSize];

    return (
        <label
            htmlFor={id}
            className={`
                flex items-center gap-2 select-none px-3 py-2
                ${background}
                ${getBorder(border)}
                ${roundMap[round]}
                ${shadowMap[shadow]}
                ${textColourMap[textColour]}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            <input
                id={id}
                type="radio"
                name={ctx.name}
                value={value}
                checked={checked}
                disabled={isDisabled}
                onChange={() => !isDisabled && ctx.onChange(value)}
                className="sr-only"
            />

            <div
                aria-hidden
                className={`
                    rounded-full flex items-center justify-center bg-white
                    ${sizes.outer}
                    ${getBorder(indicatorBorder)}
                `}
            >
                <span
                    className={`
                        rounded-full
                        ${sizes.outer}
                        ${checked ? getBgColour(indicatorColour) : "bg-transparent"}
                    `}
                />
            </div>
            

            <div className={`text-sm`}>
                {children}
            </div>
        </label>
    );
}
