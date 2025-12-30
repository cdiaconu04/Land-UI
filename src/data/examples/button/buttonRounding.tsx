"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ButtonRoundDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Button 
                onClick={() => {}} 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={0}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>Button</Typography>
            </Button>

            <Button 
                onClick={() => {}} 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={1}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>Button</Typography>
            </Button>

            <Button 
                onClick={() => {}} 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={4}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>Button</Typography>
            </Button>
        </div>
    );
}

export const buttonRoundCode =
`"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ButtonRoundDemo() {
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
                round={0}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
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
                round={1}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
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
                round={4}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Button
                </Typography>
            </Button>
        </div>
    );
}                                                                                                                `
