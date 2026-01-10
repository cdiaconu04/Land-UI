import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BorderWeights() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 0, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 1, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 3, colour: "black"}}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>
        </div>
    )
}

export const borderWeightsCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BorderWeights() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 0, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 1, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 2, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                border={{type: 3, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>
        </div>
    )
}                                                                                                                `
