"use client";
import React, { useEffect, useState } from "react";
import { Urbanist } from "next/font/google";
import {
    colourMap,
    roundMap,
    borderProps,
    getBorder,
    textColourMap,
} from "./constants/constants";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

type NumberInputProps = {
    value?: number;
    onChange?: (value: number | undefined) => void;

    min?: number;
    max?: number;
    step?: number;

    colour?: keyof typeof colourMap;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    round?: keyof typeof roundMap;
    font?: string
};

export default function NumberInput({
    value,
    onChange,

    min = 0,
    max = 100,
    step = 1,

    colour = "white",
    textColour = "default",
    border = { type: 2, colour: "black" },
    round = 1,
    font,
}: NumberInputProps) {
    const [curNum, setCurNum] = useState(value);
    
    useEffect(() => {
        setCurNum(value);
    }, [value]);

    return (
        <input
            type="number"
            value={curNum}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
                const next = e.target.value === "" ? undefined : Number(e.target.value);
                
                if (next && next >= min && next <= max) {
                    setCurNum(next);
                    onChange?.(next);
                }
            }}
            
            className={`
                ${urbanist.className}
                ${textColourMap[textColour]}
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                border-2
                p-2
                outline-none
            `}
        />
    );
}
