import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Gradient1() {
    return (
        <Badge 
            colour={{type: "gradient", colourFrom: "lightEmerald", colourTo: "lightSky"}}
        >
            <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                Gradient
            </Typography>
        </Badge>
    )
}

export const gradient1Code = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Gradient1() {
    return (
        <Badge 
            colour={{
                type: "gradient", 
                colourFrom: "lightEmerald", 
                colourTo: "lightSky"
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
