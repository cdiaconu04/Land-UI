"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Button
                onClick={() => {}}
                colour={{type: "filled", colour: "red"}}
                hoverColour={{type: "filled", colour: "darkRed"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>

            <Button
                onClick={() => {}}
                colour={{type: "filled", colour: "yellow"}}
                hoverColour={{type: "filled", colour: "darkYellow"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>

            <Button
                onClick={() => {}}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
            >
                <Typography type="p" colour="black" bold={1}>Button</Typography>
            </Button>
        </div>
    );
}

export const buttonColoursCode =
`import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Button 
                onClick={() => {}} 
                colour={{type: "filled", colour: "red"}}
                hoverColour={{type: "filled", colour: "darkRed"}}
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
                colour={{type: "filled", colour: "yellow"}}
                hoverColour={{type: "filled", colour: "darkYellow"}}
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
