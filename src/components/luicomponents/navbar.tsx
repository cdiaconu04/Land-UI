"use client";
import React from "react";
import { sidePadMap, borderProps, getBgColour, getBorder, roundMap, colourProps } from "./constants/constants";

type InputProps = React.PropsWithChildren<{
    type: "default" | "floating";
    sticky?: boolean;
    colour?: colourProps;
    sidePadLevel?: keyof typeof sidePadMap;
    rounded?: keyof typeof roundMap;
    border?: borderProps;
}>


export default function Navbar({ type = "default", sticky = true, colour = {type: "filled"}, sidePadLevel = 1, rounded = 2, border, children}: InputProps) {
    return (
        <nav className={`w-full z-50 backdrop-blur-2xl
            ${getBgColour(colour)}
            ${type === "default" ? "" : "top-3 fixed z-50"}
        `}>
            <div className={`flex items-center justify-between mx-auto px-2 py-1
                ${sidePadMap[sidePadLevel]}
                ${roundMap[rounded]}
                ${getBorder(border)}
                ${type === "default" ? "" : "top-3 fixed z-50"}
            `}>
                {children}
            </div>
            
        </nav>
    )
}
