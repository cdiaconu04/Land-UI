export const colourMap = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    white: "bg-white",
    black: "bg-black",
    gray: "bg-gray-500",
    default: "bg-gray-950",
};

export const fromColourMap = {
    red: "from-red-500",
    orange: "from-orange-500",
    yellow: "from-yellow-500",
    green: "from-green-500",
    blue: "from-blue-500",
    purple: "from-purple-500",
    white: "from-white",
    black: "from-black",
    gray: "from-gray-500",
    default: "from-gray-950",
};

export const toColourMap = {
    red: "to-red-500",
    orange: "to-orange-500",
    yellow: "to-yellow-500",
    green: "to-green-500",
    blue: "to-blue-500",
    purple: "to-purple-500",
    white: "to-white",
    black: "to-black",
    gray: "to-gray-500",
    default: "to-gray-950",
};

export const viaColourMap = {
    red: "via-red-500",
    orange: "via-orange-500",
    yellow: "via-yellow-500",
    green: "via-green-500",
    blue: "via-blue-500",
    purple: "via-purple-500",
    white: "via-white",
    black: "via-black",
    gray: "via-gray-500",
    default: "via-gray-950",
};

export const textColourMap = {
    red: "text-red-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
    default: "text-black",
};

export const placeholderColourMap = {
    red: "placeholder-red-500",
    orange: "placeholder-orange-500",
    yellow: "placeholder-yellow-500",
    green: "placeholder-green-500",
    blue: "placeholder-blue-500",
    purple: "placeholder-purple-500",
    white: "placeholder-white",
    black: "placeholder-black",
    gray: "placeholder-gray-500",
    default: "placeholder-gray-500",
};

export const borderColourMap = {
    red: "border-red-500",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    green: "border-green-500",
    blue: "border-blue-500",
    purple: "border-purple-500",
    white: "border-white",
    black: "border-black",
    gray: "border-gray-500",
    default: "border-black",
}

export const roundMap = {
    0: "",
    1: "rounded-md",
    2: "rounded-lg",
    3: "rounded-xl",
    4: "rounded-full",
};

export const boldMap = {
    0: "font-light",
    1: "font-normal",
    2: "font-medium",
    3: "font-semibold",
    4: "font-bold",
}

export const sidePadMap = {
    0: "max-w-screen-2xl",
    1: "max-w-screen-xl",
    2: "max-w-screen-lg",
    3: "max-w-screen-md",
}

export const borderWeightMap = {
    0: "",
    1: "border-1",
    2: "border-2",
    3: "border-4",
}

export type colourProps = {
    type: "filled" | "gradient";
    colour?: keyof typeof colourMap;
    colourFrom?: keyof typeof fromColourMap;
    colourVia?: keyof typeof viaColourMap;
    colourTo?: keyof typeof toColourMap;
}

export type borderProps = {
    type: keyof typeof borderWeightMap;
    colour: keyof typeof borderColourMap;
}


export function getBorder(border?: borderProps): string {
    if (!border || border.type === 0) {
        return "";
    } else if (border.type === 1) {
        return `border border-1 ${borderColourMap[border.colour]}`;
    } else if (border.type === 2) {
        return `border border-2 ${borderColourMap[border.colour]}`;
    } else {
        return `border border-4 ${borderColourMap[border.colour]}`;
    }
}

export function getBgColour(colour: colourProps): string {
    if (colour.type === "filled") {
        return colourMap[colour.colour ?? "white"]
    }

    if (colour.colourVia) {
        return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${viaColourMap[colour.colourVia ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
    } else {
        return `bg-gradient-to-r ${fromColourMap[colour.colourFrom ?? "white"]} ${toColourMap[colour.colourTo ?? "white"]}`;
    }
}
