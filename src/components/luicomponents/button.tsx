"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourMap, fromColourMap, viaColourMap, toColourMap, textColourMap, roundMap, borderColourMap } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type colourProps = {
    type: "filled" | "gradient";
    colour?: keyof typeof colourMap;
    colourFrom?: keyof typeof fromColourMap;
    colourVia?: keyof typeof viaColourMap;
    colourTo?: keyof typeof toColourMap;
}

type ButtonProps = {
    label: string;
    onClick: () => void;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    borderColour?: keyof typeof borderColourMap;
    size?: keyof typeof sizeMap;
    hoverShadow?: boolean;
    round?: keyof typeof roundMap;
};

function getBgColour(colour: colourProps): string {
    if (colour.type === "filled") {
        return colourMap[colour.colour ?? "white"]
    }

    if (colour.colourVia) {
        return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${viaColourMap[colour.colourVia ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
    } else {
        return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
    }
}

export default function Button({ label,
    onClick, 
    colour = {type: "filled"}, 
    textColour = "default", 
    size = "medium", borderColour = "black", hoverShadow = false, 
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
                ${hoverShadow ? "hover:shadow-lg" : ""}
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
            `}
        >
            {label}
        </button>
    )
};
