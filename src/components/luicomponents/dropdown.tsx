"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import {
  type colourProps,
  type borderProps,
  getBgColour,
  getBorder,
  roundMap,
  shadowMap,
  textColourMap,
} from "./constants/constants";

export type DropdownOption = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

type DropdownProps = {
  options: DropdownOption[];

  value: string;
  onChange: (next: string) => void;

  placeholder?: React.ReactNode;
  disabled?: boolean;

  colour?: colourProps;
  textColour?: keyof typeof textColourMap;
  border?: borderProps;
  round?: keyof typeof roundMap;
  shadow?: keyof typeof shadowMap;

  menuColour?: colourProps;
  menuBorder?: borderProps;
  menuRound?: keyof typeof roundMap;
  menuShadow?: keyof typeof shadowMap;

  itemColour?: colourProps;
  itemHoverColour?: colourProps;
  itemSelectedColour?: colourProps;

  optionTextColour?: keyof typeof textColourMap;
  optionSelectedTextColour?: keyof typeof textColourMap;

  font?: string;
};

export default function Dropdown({
  options,

  value,
  onChange,

  placeholder = "Select...",
  disabled = false,

  colour = { type: "filled", colour: "white" },
  textColour = "default",
  border = { type: 2, colour: "black" },
  round = 2,
  shadow = 0,

  menuColour = { type: "filled", colour: "white" },
  menuBorder = { type: 2, colour: "black" },
  menuRound = 2,
  menuShadow = 2,

  itemColour = { type: "filled", colour: "white" },
  itemHoverColour = { type: "filled", colour: "lightGray" },
  itemSelectedColour = { type: "filled", colour: "lightSky" },

  optionTextColour = "default",
  optionSelectedTextColour = optionTextColour,

  font = "",
}: DropdownProps) {

  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);

    }
    
    document.addEventListener("mousedown", onDocMouseDown);

    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)

    }

    if (open) document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const triggerBg = getBgColour(colour);

  return (

    <div ref={rootRef} className={`relative inline-block`}>
      <button
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`
          w-full min-w-[12rem]
          flex items-center justify-between gap-3
          px-3 py-2
          ${triggerBg}
          ${getBorder(border)}
          ${roundMap[round]}
          ${shadowMap[shadow]}
          ${textColourMap[textColour]}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        <div className={`text-sm truncate ${font}`}>
          {selected ? selected.label : placeholder}
        </div>

        <span className={`text-xs ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && !disabled && (
        <div
          className={`
            absolute z-50 mt-2 w-full overflow-hidden
            ${getBgColour(menuColour)}
            ${getBorder(menuBorder)}
            ${roundMap[menuRound]}
            ${shadowMap[menuShadow]}
          `}
        >
          <ul className="max-h-64 overflow-auto py-1">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              const isOptDisabled = Boolean(opt.disabled);

              const baseBg = getBgColour(itemColour);
              const selectedBg = getBgColour(itemSelectedColour);

              return (
                <li key={opt.value} role="option">
                  <button
                    disabled={isOptDisabled}
                    onClick={() => {
                      if (isOptDisabled) return;
                      onChange(opt.value);
                      setOpen(false);
                    }}

                    className={`
                      w-full text-left px-3 py-2 text-sm
                      ${isSelected ? selectedBg : baseBg}
                      ${textColourMap[isSelected ? optionSelectedTextColour : optionTextColour]}
                      ${isOptDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                      ${font}
                      transition-colors
                    `}

                    onMouseEnter={(e) => {
                      if (isOptDisabled || isSelected) return;
                      e.currentTarget.classList.add(getBgColour(itemHoverColour));
                    }}

                    onMouseLeave={(e) => {
                      if (isOptDisabled || isSelected) return;
                      e.currentTarget.classList.remove(getBgColour(itemHoverColour));
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
