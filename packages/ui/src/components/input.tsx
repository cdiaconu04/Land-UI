"use client";
import React from "react";
import { colourMap, placeholderColourMap, roundMap, borderProps, getBorder, textColourMap } from "../constants";

type placeholderProps = {
    placeholder: string;
    colour: keyof typeof placeholderColourMap;
}

type InputProps = {
    font: string,
    colour?: keyof typeof colourMap;
    textColour?: keyof typeof textColourMap;
    placeholder?: placeholderProps;
    round?: keyof typeof roundMap;
    border?: borderProps;
}

export default function Input({ font = "", colour = "default", textColour = "default", border = {type: 2, colour: "black"}, placeholder = {placeholder: "Input", colour: "default"}, round = 1 }: InputProps) {
    return (
        <input
            placeholder={placeholder.placeholder}
            className={`
                ${font} 
                ${textColourMap[textColour]}
                ${placeholderColourMap[placeholder.colour]}
                border-2
                ${getBorder(border)}
                ${roundMap[round]}
                ${colourMap[colour]}
                p-2
            `}
        />
    )
}
