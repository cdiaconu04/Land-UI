"use client";
import React from "react";
import { colourProps, shadowMap, textColourMap, roundMap, borderProps, getBorder, getBgColour } from "../constants";

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ButtonProps = {
    onClick: () => void;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    hoverShadow?: keyof typeof shadowMap;
    round?: keyof typeof roundMap;
    children?: React.ReactNode;
};

export default function Button({
    onClick, 
    colour = {type: "filled"},
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
                ${shadowMap[hoverShadow]}
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
            `}
        >
            {children}
        </button>
    )
};
