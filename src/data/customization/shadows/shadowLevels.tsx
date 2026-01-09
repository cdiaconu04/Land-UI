import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ShadowLevels() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                shadow={0}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                shadow={1}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                shadow={2}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                shadow={3}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                shadow={4}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Shadow
                </Typography>
            </Badge>
        </div>
    )
}

export const shadowLevelsCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ShadowLevels() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={0}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={1}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={2}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={3}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={4}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                shadow={5}
            >
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1}
                >
                    Shadow
                </Typography>
            </Badge>   
        </div>
    )
}                                                                                                                `
