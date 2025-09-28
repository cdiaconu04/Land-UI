"use client";
import React from "react";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

type placeholderProps = {
    placeholder: string;
    colour: keyof typeof placeholderColourMap;
}

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
    default: "text-black",
};

const placeholderColourMap = {
    red: "placeholder-red-500",
    orange: "placeholder-orange-500",
    yellow: "placeholder-yellow-500",
    green: "placeholder-green-500",
    blue: "placeholder-blue-500",
    purple: "placeholder-purple-500",
    white: "placeholder-white",
    black: "placeholder-black",
    gray: "placeholder-gray-500",
    default: "placeholder-gray-500",
};

const borderColourMap = {
    red: "border-red-500",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    green: "border-green-500",
    blue: "border-blue-500",
    purple: "border-purple-500",
    white: "border-white",
    black: "border-black",
    gray: "border-gray-500",
    default: "border-black",
}

const roundMap = {
    0: "",
    1: "rounded-md",
    2: "rounded-xl",
    3: "rounded-full",
};

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
