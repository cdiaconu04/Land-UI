import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function Gradient2() {
    return (
        <Badge 
            colour={{type: "gradient", colourFrom: "emerald", colourVia: "sky", colourTo: "purple"}}
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
            colour={{type: "gradient", colourFrom: "emerald", colourVia: "green", colourTo: "sky"}}
        >
            <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                Gradient
            </Typography>
        </Badge>
    )
}                                                                                                                `
