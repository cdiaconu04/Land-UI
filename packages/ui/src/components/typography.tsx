"use client";
import React from "react";
import { textColourMap, boldMap } from "../constants";

type InputProps = React.PropsWithChildren<{
    font: string,
    type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    colour: keyof typeof textColourMap;
    bold: keyof typeof boldMap;
    className?: string;
}>;

export default function Typography({ font = "", type = "p", colour = "black", bold = 1, children }: InputProps) {
    if (type === "p") {
        return (
            <p className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </p>
        );
    } else if (type === "h1") {
        return (
            <h1 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h1>
        );
    } else if (type === "h2") {
        return (
            <h2 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h2>
        );
    } else if (type === "h3") {
        return (
            <h3 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h3>
        );
    } else if (type === "h4") {
        return (
            <h4 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h4>
        );
    } else if (type === "h5") {
        return (
            <h5 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h5>
        );
    } else if (type === "h6") {
        return (
            <h6 className={`${font} ${textColourMap[colour]} ${boldMap[bold]}`}> {children} </h6>
        );
    }
}

