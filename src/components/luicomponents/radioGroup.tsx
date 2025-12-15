"use client";
import React from "react";
import { Urbanist } from "next/font/google";
import {
  colourProps,
  getBgColour,
  getBorder,
  borderProps,
  shadowMap,
  roundMap,
  textColourMap,
} from "./constants/constants";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

type RadioOption = {
  label: React.ReactNode;
  value: string;
};

type RadioGroupProps = {
  name: string;
  value: string;

  onChange: (value: string) => void;

  options: RadioOption[];

  colour?: colourProps;
  selectedColour?: colourProps;
  optionColour?: colourProps;
  textColour?: keyof typeof textColourMap;
  border?: borderProps;
  round?: keyof typeof roundMap;

  direction?: "row" | "col";
  className?: string;
};

export default function RadioGroup({
    name,
    value,
    onChange,
    options,

    colour = { type: "filled" },
    selectedColour = { type: "filled", colour: "black" },
    optionColour = { type: "filled", colour: "white" },
    border,
    round = 1,

    direction = "col",
    className = "",
}: RadioGroupProps) {
  return (
    <div className={` flex ${direction === "row" ? "flex-row" : "flex-col"} gap-2 p-2
            ${getBgColour(colour)}
            ${getBorder(border)}
            ${roundMap[round]}
            ${urbanist.className}
            ${className}
        `}
        role="radiogroup"
        aria-label={name}
    >
        {options.map((opt) => (
            <label
                key={opt.value}
                className={`
                flex items-center gap-2 px-2 py-1 cursor-pointer select-none
                ${roundMap[round]}
                ${opt.value === value
                    ? getBgColour(selectedColour)
                    : getBgColour(optionColour)}
                `}
            >
                <input
                    type="radio"
                    name={name}
                    value={opt.value}
                    checked={opt.value === value}
                    onChange={() => onChange(opt.value)}
                    className="sr-only"
                />

                <span className="inline-block w-4 h-4 rounded-full border" />

                <div>{opt.label}</div>
            </label>
        ))}

    </div>
  );
}
