"use client";
import React from "react";
import { Urbanist } from 'next/font/google';
import { textColourMap, boldMap } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

type InputProps = React.PropsWithChildren<{
    type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    colour: keyof typeof textColourMap;
    bold: keyof typeof boldMap;
    className?: string;
}>;

export default function Typography({ type = "p", colour = "black", bold = 1, children }: InputProps) {
    if (type === "p") {
        return (
            <p className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </p>
        );
    } else if (type === "h1") {
        return (
            <h1 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h1>
        );
    } else if (type === "h2") {
        return (
            <h2 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h2>
        );
    } else if (type === "h3") {
        return (
            <h3 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h3>
        );
    } else if (type === "h4") {
        return (
            <h4 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h4>
        );
    } else if (type === "h5") {
        return (
            <h5 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h5>
        );
    } else if (type === "h6") {
        return (
            <h6 className={`${textColourMap[colour]} ${boldMap[bold]} ${urbanist.className}`}> {children} </h6>
        );
    }
}

