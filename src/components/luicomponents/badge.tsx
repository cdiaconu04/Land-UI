"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, getBgColour, borderColourMap } from "./constants/constants";
import { getBorder } from "./constants/constants";
import { borderProps } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    sm: "text-sm px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
};

type BadgeProps = {
    colour?: colourProps;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    children?: React.ReactNode;
};

export default function Badge({ colour = { type: "filled" }, border, size = "md", children }: BadgeProps) {
    return (
        <div
            className={`
                flex-row items-center justify-center
                border-1
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${urbanist.className}
                rounded-full
                ${sizeMap[size]}
            `}
        >
            {children}
        </div>
    )
}
