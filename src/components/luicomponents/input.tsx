"use client";
import React from "react";
import { colourMap, placeholderColourMap, roundMap, borderProps, getBorder, textColourMap } from "./constants/constants";

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
    font?: string;
}

export default function Input({
    colour = "white", 
    textColour = "default", 
    border = {type: 2, colour: "black"},
    placeholder = {placeholder: "Input", colour: "default"}, 
    round = 1,
    font
}: InputProps) {
    return (
        <input
            placeholder={placeholder.placeholder}
            className={`
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                ${font}
                p-2
                outline-none
            `}
        />
    )
}
