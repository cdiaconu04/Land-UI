"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, shadowMap, textColourMap, roundMap, borderColourMap, getBgColour } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ButtonProps = {
    label: string;
    onClick: () => void;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    borderColour?: keyof typeof borderColourMap;
    size?: keyof typeof sizeMap;
    hoverShadow?: keyof typeof shadowMap;
    round?: keyof typeof roundMap;
};

export default function Button({ label,
    onClick, 
    colour = {type: "filled"}, 
    textColour = "default", 
    size = "medium", borderColour = "black", hoverShadow = 0, 
    round = 1 }: ButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                border-2
                ${getBgColour(colour)}
                ${textColourMap[textColour]} 
                ${borderColourMap[borderColour]} 
                ${urbanist.className} 
                ${shadowMap[hoverShadow]}
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
            `}
        >
            {label}
        </button>
    )
};
