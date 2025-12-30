"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeRoundingDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                round={0}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                round={1}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
            
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                round={4}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
        </div>
    );
}

export const badgeRoundingCode =
`"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeRoundingDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                round={0}
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
                round={1}
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
                round={4}
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

