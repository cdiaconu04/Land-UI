"use client";
import React, { useState } from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, shadowMap, textColourMap, roundMap, borderProps, getBorder, getBgColour } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ToggleProps = {
    onToggle?: (isToggled: boolean) => void;
    untoggledColour?: colourProps;
    toggledColour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    hoverShadow?: keyof typeof shadowMap;
    round?: keyof typeof roundMap;
    children: React.ReactNode;
};

export default function Toggle({
    onToggle,
    untoggledColour = {type: "filled", colour: "white"},
    toggledColour = {type: "filled", colour: "blue"},
    textColour = "black",
    size = "medium",
    border,
    hoverShadow = 0,
    round = 1,
    children
}: ToggleProps) {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        const newState = !isToggled;
        setIsToggled(newState);
        onToggle?.(newState);
    };

    const currentColour = isToggled ? toggledColour : untoggledColour;

    return (
        <button
            onClick={handleClick}
            className={`
                ${getBgColour(currentColour)}
                ${getBorder(border)}
                ${urbanist.className}
                ${shadowMap[hoverShadow]}
                ${roundMap[round]}
                ${sizeMap[size]}
                px-2 py-1
                transition-colors duration-200
            `}
        >
            {children}
        </button>
    );
}

