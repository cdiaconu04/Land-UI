"use client";
import React, { useEffect } from "react";
import { Urbanist } from 'next/font/google';
import { colourProps, shadowMap, textColourMap, roundMap, borderProps, getBorder, getBgColour } from "./constants/constants";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ToastProps = {
    message: string;
    show: boolean;
    onHide?: () => void;
    duration?: number;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    round?: keyof typeof roundMap;
};

export default function Toast({
    message,
    show,
    onHide,
    duration = 2000,
    colour = {type: "filled", colour: "black"},
    textColour = "white",
    size = "medium",
    border,
    round = 1
}: ToastProps) {

    useEffect(() => {
        if (show && duration > 0) {
            const timer = setTimeout(() => {
                onHide?.();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onHide]);

    if (!show) return null;

    return (
        <div
            className={`
                fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                px-4 py-2 shadow-lg
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${textColourMap[textColour]}
                ${urbanist.className}
                ${roundMap[round]}
                ${sizeMap[size]}
            `}
        >
            {message}
        </div>
    );
}

