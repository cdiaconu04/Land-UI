"use client";
import React from "react";
import { textColourMap, boldMap, textSizeMap } from "./constants/constants";


type InputProps = React.PropsWithChildren<{
    type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    colour: keyof typeof textColourMap;
    bold: keyof typeof boldMap;
    size?: keyof typeof textSizeMap;
    font?: string;
}>;

export default function Typography({ font, type = "p", size = 2, colour = "black", bold = 1, children }: InputProps) {
    if (type === "p") {
        return (
            <p className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </p>
        );
    } else if (type === "h1") {
        return (
            <h1 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h1>
        );
    } else if (type === "h2") {
        return (
            <h2 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h2>
        );
    } else if (type === "h3") {
        return (
            <h3 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h3>
        );
    } else if (type === "h4") {
        return (
            <h4 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h4>
        );
    } else if (type === "h5") {
        return (
            <h5 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h5>
        );
    } else if (type === "h6") {
        return (
            <h6 className={`${textColourMap[colour]} ${boldMap[bold]} ${textSizeMap[size]} ${font}`}> {children} </h6>
        );
    }
}

