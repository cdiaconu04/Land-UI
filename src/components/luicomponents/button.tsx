"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourMap, textColourMap, roundMap, borderColourMap } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ButtonProps = {
    label: string;
    onClick: () => void;
    colour?: keyof typeof colourMap;
    textColour?: keyof typeof textColourMap;
    borderColour?: keyof typeof borderColourMap;
    size?: keyof typeof sizeMap;
    hoverShadow?: boolean;
    round?: keyof typeof roundMap;
};

export default function Button({ label, onClick, colour = "white", textColour = "default", size = "medium", borderColour = "black", hoverShadow = false, round = 1 }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                border-2
                ${colourMap[colour]} 
                ${textColourMap[textColour]} 
                ${borderColourMap[borderColour]} 
                ${urbanist.className} 
                ${hoverShadow ? "hover:shadow-xl" : ""}
                ${roundMap[round]}
                ${sizeMap[size]}
                
                px-2 py-1
            `}
        >
            {label}
        </button>
    )
};
