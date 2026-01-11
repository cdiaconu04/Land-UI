"use client";
import React from "react";
import { colourProps, getBgColour, roundMap, shadowMap } from "./constants/constants";
import { getBorder } from "./constants/constants";
import { borderProps } from "./constants/constants";

type BadgeProps = {
    colour?: colourProps;
    border?: borderProps;
    children?: React.ReactNode;
    round?: keyof typeof roundMap;
    shadow?: keyof typeof shadowMap;
};

export default function Badge({ colour = { type: "filled" }, border, round = 4, shadow = 0, children }: BadgeProps) {
    return (
        <div
            className={`
                px-2 py-1
                flex-row items-center justify-center
                border-1
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${roundMap[round]}
                ${shadowMap[shadow]}
            `}
        >
            {children}
        </div>
    )
}
