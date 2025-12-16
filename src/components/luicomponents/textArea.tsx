"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourMap, placeholderColourMap, roundMap, borderProps, getBorder, textColourMap } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

type placeholderProps = {
    placeholder: string;
    colour: keyof typeof placeholderColourMap;
}

type InputProps = {
    colour?: keyof typeof colourMap;
    textColour?: keyof typeof textColourMap;
    placeholder?: placeholderProps;
    round?: keyof typeof roundMap;
    border?: borderProps;
}

export default function TextArea({ 
    colour = "default", 
    textColour = "default", 
    border = {type: 2, colour: "black"}, 
    placeholder = {placeholder: "Input", colour: "default"},
    round = 1 
}: InputProps) {
    return (
        <textarea
            placeholder={placeholder.placeholder}
            className={`
                ${urbanist.className} 
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                p-2
                outline-none
            `}
        />
    )
}
