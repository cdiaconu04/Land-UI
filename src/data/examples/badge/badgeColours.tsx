"use client";

import React from "react";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function BadgeColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge
                colour={{type: "filled", colour: "red"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge
                colour={{type: "filled", colour: "yellow"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    New
                </Typography>
            </Badge>

            <Badge
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
            >
                <Typography type="p" colour="black" bold={1}>
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

export function BadgeColoursDemo() {
    return (
        <div className="flex flex-row gap-5">
            <Badge 
                colour={{type: "filled", colour: "red"}}
            >
                <Typography 
                    type="p" 
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
                    colour="black" 
                    bold={1}
                >
                    New
                </Typography>
            </Badge>
        </div>
    );
}                                                                                                                `
