import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const colourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const fromColourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const toColourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const viaColourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const textColourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const borderColourMap: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    white: string;
    black: string;
    gray: string;
    default: string;
};
declare const roundMap: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
};
declare const borderWeightMap: {
    0: string;
    1: string;
    2: string;
    3: string;
};
declare const shadowMap: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
};
type colourProps = {
    type: "filled" | "gradient";
    colour?: keyof typeof colourMap;
    colourFrom?: keyof typeof fromColourMap;
    colourVia?: keyof typeof viaColourMap;
    colourTo?: keyof typeof toColourMap;
};
type borderProps = {
    type: keyof typeof borderWeightMap;
    colour: keyof typeof borderColourMap;
};

declare const sizeMap: {
    small: string;
    medium: string;
    large: string;
};
type ButtonProps = {
    onClick: () => void;
    colour?: colourProps;
    textColour?: keyof typeof textColourMap;
    border?: borderProps;
    size?: keyof typeof sizeMap;
    hoverShadow?: keyof typeof shadowMap;
    round?: keyof typeof roundMap;
    children?: React.ReactNode;
};
declare function Button({ onClick, colour, size, border, hoverShadow, round, children }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button };
