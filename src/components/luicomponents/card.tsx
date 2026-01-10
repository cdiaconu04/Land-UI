"use client";
import React from "react";
import { 
    colourProps,
    getBgColour, 
    getBorder, 
    borderProps,
    shadowMap, 
    roundMap } from "./constants/constants";

type CardProps = {
    colour?: colourProps;
    round?: keyof typeof roundMap;
    border?: borderProps;
    shadow?: keyof typeof shadowMap;
    children?: React.ReactNode;
};

export default function Card({
    colour = {type: "filled"},
    round = 1,
    border,
    shadow = 0,
    children
}: CardProps) {

    return (
        <div className={`
            flex flex-col gap-3 p-4
            ${getBgColour(colour)}
            ${roundMap[round]}
            ${getBorder(border)}
            ${shadowMap[shadow]}
        `}>
            {children}
        </div>
    )
}
