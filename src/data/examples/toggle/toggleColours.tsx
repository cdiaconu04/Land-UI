import { useState } from "react";
import Toggle from "@/components/luicomponents/toggle";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ToggleColours() {
    const [on1, setOn1] = useState(false);
    const [on2, setOn2] = useState(false);
    const [on3, setOn3] = useState(false);

    return (
        <div className="flex flex-row gap-5">
            <Toggle
                onToggle={setOn1}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ type: "filled", colour: "red" }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1}>
                    Toggle Me
                </Typography>
            </Toggle>

            <Toggle
                onToggle={setOn2}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ type: "filled", colour: "orange" }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1}>
                    Toggle Me
                </Typography>
            </Toggle>

            <Toggle
                onToggle={setOn3}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1}>
                    Toggle Me
                </Typography>
            </Toggle>
        </div>

    );
}

export const toggleColoursCode =
`import { useState } from "react";
import Toggle from "@/components/luicomponents/toggle";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ToggleColours() {
    const [on1, setOn1] = useState(false);
    const [on2, setOn2] = useState(false);
    const [on3, setOn3] = useState(false);

    return (
        <div className="flex flex-row gap-5">
            <Toggle
                onToggle={setOn1}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ type: "filled", colour: "red" }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Toggle Me
                </Typography>
            </Toggle>

            <Toggle
                onToggle={setOn2}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ type: "filled", colour: "orange" }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Toggle Me
                </Typography>
            </Toggle>

            <Toggle
                onToggle={setOn3}
                untoggledColour={{ type: "filled", colour: "white" }}
                toggledColour={{ 
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald" 
                }}
                border={{ type: 2, colour: "black" }}
                round={2}
                size="medium"
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Toggle Me
                </Typography>
            </Toggle>
        </div>

    );
}                                                                                                                `
