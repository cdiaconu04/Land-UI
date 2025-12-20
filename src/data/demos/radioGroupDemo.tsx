import { RadioGroup } from "@/components/luicomponents/radioGroup";
import { RadioItem } from "@/components/luicomponents/radioItem";
import Typography from "@/components/luicomponents/typography";
import { useState } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function RadioGroupDemo() {
    const [plan, setPlan] = useState("free");

    return (
        <RadioGroup
            name="plan"
            value={plan}
            onChange={setPlan}
            direction="col"
        >
            <RadioItem
                value="free"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1} size={2}>
                    Free
                </Typography>
            </RadioItem>

            <RadioItem
                value="plus"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}

                indicatorColour={{ type: "filled", colour: "black" }}
                indicatorSize="md"
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1} size={2}>
                    Pro
                </Typography>
            </RadioItem>

            <RadioItem
                value="enterprise"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1} size={2}>
                    Enterprise
                </Typography>
            </RadioItem>
        </RadioGroup>
    )
}

export const radioGroupDemoCode =
`import { RadioGroup } from "@/components/luicomponents/radioGroup";
import { RadioItem } from "@/components/luicomponents/radioItem";
import Typography from "@/components/luicomponents/typography";
import { useState } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function RadioGroupDemo() {
    const [plan, setPlan] = useState("free");

    return (
        <RadioGroup
            name="plan"
            value={plan}
            onChange={setPlan}
            direction="col"
        >
            <RadioItem
                value="free"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1} 
                    size={2}
                >
                    Free
                </Typography>
            </RadioItem>

            <RadioItem
                value="plus"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}

                indicatorColour={{ type: "filled", colour: "black" }}
                indicatorSize="md"
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1} 
                    size={2}
                >
                    Pro
                </Typography>
            </RadioItem>

            <RadioItem
                value="enterprise"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography 
                    font={urbanist.className} 
                    type="p" 
                    colour="black" 
                    bold={1} 
                    size={2}
                >
                    Enterprise
                </Typography>
            </RadioItem>
        </RadioGroup>
    )
}                                                                                                                `
