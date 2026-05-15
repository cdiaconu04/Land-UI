"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonBordersDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Button
                onClick={() => {}}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                border={{type: 1, colour: "black"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>

            <Button
                onClick={() => {}}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                border={{type: 2, colour: "black"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>

            <Button
                onClick={() => {}}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                border={{type: 3, colour: "black"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>
        </div>
    );
}

export const buttonBordersCode =
`"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Button 
                onClick={() => {}} 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                hoverColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 1, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Button
                </Typography>
            </Button>

            <Button 
                onClick={() => {}} 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                hoverColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 2, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Button
                </Typography>
            </Button>

            <Button 
                onClick={() => {}} 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                hoverColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 3, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Button
                </Typography>
            </Button>
        </div>
    );
}                                                                                                                `
