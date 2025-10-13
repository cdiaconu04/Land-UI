"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, textColourMap, borderProps, getBorder, getBgColour } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

type badgeProps = {
    label: string;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
}

export default function Badge({
    label,
    colour = {type: "filled"}, 
    textColour = "default", 
    border, 
}: badgeProps) {
    return (
        <div className={`
            ${getBgColour(colour)}
            ${textColourMap[textColour]} 
            ${getBorder(border)}
            ${urbanist.className} 
            rounded-full
            px-2 py-1
        `}>
            {label}
        </div>
    )
}
