"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, getBgColour, textColourMap, borderColourMap } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    sm: "text-sm px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
};

type BadgeProps = {
    label: string;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    borderColour?: keyof typeof borderColourMap;
    size?: keyof typeof sizeMap;
}

export default function Badge({ label, colour = { type: "filled" }, textColour = "default", borderColour = "default", size = "md" }: BadgeProps) {
    return (
        <span
            className={`
                flex-row items-center justify-center
                border-1
                ${getBgColour(colour)}
                ${textColourMap[textColour]}
                ${borderColourMap[borderColour]}
                ${urbanist.className}
                rounded-full
                ${sizeMap[size]}
            `}
        >
            {label}
        </span>
    )
}
