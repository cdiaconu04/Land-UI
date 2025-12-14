"use client";
import React from "react";
import { colourProps, getBgColour, borderColourMap } from "../constants";

const sizeMap = {
    sm: "text-sm px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
};

type BadgeProps = {
    colour?: colourProps;
    borderColour?: keyof typeof borderColourMap;
    size?: keyof typeof sizeMap;
    children?: React.ReactNode;
};

export default function Badge({ colour = { type: "filled" }, borderColour = "default", size = "md", children }: BadgeProps) {
    return (
        <div
            className={`
                flex-row items-center justify-center
                border-1
                ${getBgColour(colour)}
                ${borderColourMap[borderColour]}
                rounded-full
                ${sizeMap[size]}
            `}
        >
            {children}
        </div>
    )
}
