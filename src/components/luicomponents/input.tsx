"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourMap, placeholderColourMap, roundMap, borderColourMap, textColourMap } from "./constants/constants";

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
    borderColour?: keyof typeof borderColourMap;
}

export default function Input({ colour = "default", textColour = "default", borderColour = "default", placeholder = {placeholder: "Input", colour: "default"}, round = 1 }: InputProps) {
    return (
        <input
            placeholder={placeholder.placeholder}
            className={`
                ${urbanist.className} 
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${borderColourMap[borderColour]}
                ${roundMap[round]}
                p-2
            `}
        />
    )
}
