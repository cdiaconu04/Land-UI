import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function BorderColours() {
    return (
        <div className="flex flex-row gap-3">
            <Badge
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "black"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "red"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>

            <Badge
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                border={{type: 2, colour: "yellow"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    Filled
                </Typography>
            </Badge>
        </div>
    )
}

export const borderColoursCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function BorderWeights() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                border={{type: 0, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                border={{type: 1, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                border={{type: 2, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>

            <Badge 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                border={{type: 3, colour: "black"}}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Filled
                </Typography>
            </Badge>
        </div>
    )
}                                                                                                                `
