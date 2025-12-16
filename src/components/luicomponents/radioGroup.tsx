"use client";
import React from "react";
import { RadioGroupContext } from "./radioGroupContext";

type RadioGroupProps = {
  name: string;
  value: string;
  onChange: (next: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  direction?: "row" | "col";
  className?: string;
};

export function RadioGroup({
  name,
  value,
  onChange,
  children,
  disabled = false,
  direction = "col",
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <div
        role="radiogroup"
        className={`flex 
          ${direction === "row" ? "flex-row" : "flex-col"} 
          gap-2
        `}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

