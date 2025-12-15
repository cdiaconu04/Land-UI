"use client";
import React from "react";
import { colourProps, getBgColour, roundMap, scaleMap } from "../constants";

type Placement = "top" | "bottom" | "left" | "right";

const sizeMap = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

type TooltipProps = React.PropsWithChildren<{
  font?: string,
  colour?: colourProps;
  content: string;
  placement?: Placement;
  size?: "sm" | "md" | "lg";
  round?: keyof typeof roundMap;
  scale?: keyof typeof scaleMap;
}>;

export default function Tooltip({ 
  font = "",
  colour = {type: "filled", colour: "black"}, 
  content, 
  placement = "top", 
  size = "md",
  round = 4, 
  scale = 5,
  children 
}: TooltipProps) {
  
  const posClass: Record<Placement, string> = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div className="group relative inline-block">
      {children}

      <div
        role="tooltip"
        className={`absolute z-50 ${posClass[placement]} opacity-0 ${scaleMap[scale]} transform transition-all duration-150 pointer-events-none group-hover:opacity-100 group-hover:scale-100`}
      >
        <div className={`${font} ${getBgColour(colour)} ${roundMap[round]} text-white rounded-full ${sizeMap[size]}`}> 
          {content}
        </div>

      </div>
    </div>
  );
}
