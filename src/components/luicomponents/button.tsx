"use client";
import React from "react";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const colourMap = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    white: "bg-white",
    black: "bg-black",
    gray: "bg-gray-500",
    default: "bg-gray-950",
};

const textColourMap = {
    red: "text-red-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
    default: "text-white",
};

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

const roundMap = {
    0: "",
    1: "rounded-md",
    2: "rounded-xl",
    3: "rounded-full",
};

type ButtonProps = {
    label: string;
    onClick: () => void;
    colour?: keyof typeof colourMap;
    textColour?: keyof typeof textColourMap;
    size?: keyof typeof sizeMap;
    hoverShadow?: boolean;
    round?: keyof typeof roundMap;
};

export default function Button({ label, onClick, colour = "default", textColour = "default", size = "medium", hoverShadow = false, round = 1 }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                ${colourMap[colour]} 
                ${textColourMap[textColour]} 
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
