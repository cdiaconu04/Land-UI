"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeBordersDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 1, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
            
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 3, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
        </div>
    );
}

export const badgeBordersCode =
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
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 1, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
            
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 3, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    New
                </Typography>
            </Badge>
        </div>
    );
}                                                                                                                `

