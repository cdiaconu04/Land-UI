"use client";
import React from "react";
import { colourProps, hoverShadowMap, roundMap, borderProps, getBorder, getBgColour, getHoverBgColour } from "./constants/constants";

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ButtonProps = {
    onClick: () => void;
    colour?: colourProps;
    hoverColour?: colourProps;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    hoverShadow?: keyof typeof hoverShadowMap;
    round?: keyof typeof roundMap;
    children?: React.ReactNode;
};

export default function Button({
    onClick, 
    colour = {type: "filled"},
    hoverColour = colour,
    size = "medium", 
    border, 
    hoverShadow = 0, 
    round = 1,
    children }: ButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${hoverShadowMap[hoverShadow]}
                ${getHoverBgColour(hoverColour)}
                transition-colours duration-100
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
            `}
        >
            {children}
        </button>
    )
};
