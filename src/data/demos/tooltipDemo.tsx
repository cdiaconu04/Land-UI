import Button from "@/components/luicomponents/button";
import Tooltip from "@/components/luicomponents/tooltip";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ToolTipDemo() {
    return (
        <Tooltip
            content="Tooltip"
            placement="bottom"
            size="md"
            colour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
            textColour="black"
            round={4}
            scale={5}
        >
            <Button
                onClick={() => {}}
                colour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
            >
                <Typography font={urbanist.className} type="p" colour="black" bold={1}>
                    Hover me
                </Typography>
            </Button>
        </Tooltip>
    )
}
