"use client";
import React, { useEffect, useState } from "react";
import {
    colourProps,
    shadowMap,
    textColourMap,
    roundMap,
    borderProps,
    getBorder,
    getBgColour,
    scaleMap,
} from "./constants/constants";

const sizeMap = {
    small: "text-md",
    medium: "text-lg",
    large: "text-xl",
};

type ToastProps = {
    scale?: keyof typeof scaleMap;
    show: boolean;
    onHide?: () => void;
    duration?: number;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    round?: keyof typeof roundMap;
    shadow?: keyof typeof shadowMap;
    children?: React.ReactNode;
};

export default function Toast({
    scale = 5,
    show,
    onHide,
    shadow = 0,
    duration = 2000,
    colour = { type: "filled", colour: "black" },
    textColour = "white",
    size = "medium",
    border,
    round = 1,
    children
}: ToastProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [show]);

    useEffect(() => {
        if (show && duration > 0) {
            const timer = setTimeout(() => {
                setVisible(false);
                onHide?.();
            }, duration);


            return () => clearTimeout(timer);
        }
    }, [show, duration, onHide]);

    if (!show && !visible) return null;

    return (
        <div
            className={`
                fixed top-4 left-1/2 -translate-x-1/2 z-50
                px-4 py-2 shadow-lg
                transition-all duration-200 ease-out
                transform
                ${visible ? "opacity-100 scale-100" : `opacity-0 ${scaleMap[scale]}`}
                ${shadowMap[shadow]}
                ${getBgColour(colour)}
                ${getBorder(border)}
                ${textColourMap[textColour]}
                ${roundMap[round]}
                ${sizeMap[size]}
            `}
        >
            {children}
        </div>
    );
}

