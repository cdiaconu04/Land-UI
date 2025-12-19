import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function BadgeDemo() {
    return (
        <Badge 
            colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}} 
            size="md"
        >
            <Typography type="p" font={urbanist.className} colour="black" bold={1}>
                New
            </Typography>
        </Badge>
    )
}
