"use client";

import React, { useState } from "react";
import {
  type colourProps,
  type borderProps,
  getBgColour,
  getBorder,
  roundMap,
  textColourMap,
} from "./constants/constants";

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-lg",
};

type AvatarProps = {
  src?: string;
  alt?: string;

  initials?: string;

  size?: keyof typeof sizeMap;

  bgColour?: colourProps;
  textColour?: keyof typeof textColourMap;

  border?: borderProps;
  round?: keyof typeof roundMap;

  font?: string;
};

export default function Avatar({
  src,
  alt = "Avatar",
  initials = "LU",
  size = "md",
  bgColour = { type: "filled", colour: "lightGray" },
  textColour = "black",
  border,
  round = 4,
  font,
}: AvatarProps) {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;

    return (
        <div
            className={`
                relative flex items-center justify-center overflow-hidden
                ${sizeMap[size]}
                ${getBgColour(bgColour)}
                ${getBorder(border)}
                ${roundMap[round]}
            `}
        >
            {showImage ? (
                <img
                src={src}
                alt={alt}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
                draggable={false}
                />
            ) : (
                <div
                    className={`
                        font-semibold select-none
                        ${textColourMap[textColour]}
                        ${font}
                    `}
                    >
                    {initials.toUpperCase()}
                </div>
            )}
        </div>
    );
}
