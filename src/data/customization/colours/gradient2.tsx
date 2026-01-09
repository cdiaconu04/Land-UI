import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Gradient2() {
    return (
        <Badge 
            colour={{type: "gradient", colourFrom: "lightEmerald", colourVia: "lightSky", colourTo: "lightPurple"}}
        >
            <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                Gradient
            </Typography>
        </Badge>
    )
}

export const gradient2Code = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Gradient2() {
    return (
        <Badge 
            colour={{
                type: "gradient", 
                colourFrom: "lightEmerald", 
                colourVia: "lightSky", 
                colourTo: "lightPurple"
            }}
        >
            <Typography 
                type="p" 
                font={urbanist.className} 
                colour="black" 
                bold={1}
            >
                Gradient
            </Typography>
        </Badge>
    )
}                                                                                                                `
