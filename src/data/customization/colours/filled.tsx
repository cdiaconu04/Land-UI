import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Filled() {
    return (
        <Badge 
            colour={{type: "filled", colour: "sky"}}
        >
            <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                Filled
            </Typography>
        </Badge>
    )
}

export const filledCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Filled() {
    return (
        <Badge 
            colour={{type: "filled", colour: "sky"}}
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
    )
}                                                                                                                `
