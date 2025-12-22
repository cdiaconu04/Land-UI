"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{type: "filled", colour: "red"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "filled", colour: "yellow"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
            
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
        </div>
    );
}

export const badgeColoursCode =
`"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{type: "filled", colour: "red"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    New
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "filled", colour: "yellow"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    New
                </Typography>
            </Badge>
            
            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    New
                </Typography>
            </Badge>
        </div>
    );
}                                                                                                                `
