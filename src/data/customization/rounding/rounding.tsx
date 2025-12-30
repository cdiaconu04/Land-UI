import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function RoundingLevels() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={0}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={1}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={2}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={3}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
                round={4}
            >
                <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>
        </div>
    )
}

export const roundingLevelsCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function RoundingLevels() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{
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
                round={1}
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
                round={2}
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
                round={3}
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
                round={4}
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
