import Button from "@/components/luicomponents/button";
import Tooltip from "@/components/luicomponents/tooltip";
import Typography from "@/components/luicomponents/typography";

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
                <Typography type="p" colour="black" bold={1}>
                    Hover me
                </Typography>
            </Button>
        </Tooltip>
    )
}

export const tooltipDemoCode =
`import Button from "@/components/luicomponents/button";
import Tooltip from "@/components/luicomponents/tooltip";
import Typography from "@/components/luicomponents/typography";

export function ToolTipDemo() {
    return (
        <Tooltip
            content="Tooltip"
            placement="bottom"
            size="md"
            colour={{ 
                type: "gradient", 
                colourFrom: "lightSky", 
                colourVia: "lightSky", 
                colourTo: "lightEmerald" 
            }}
            textColour="black"
            round={4}
            scale={5}
        >
            <Button
                onClick={() => {}}
                colour={{ 
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald" 
                }}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Hover me
                </Typography>
            </Button>
        </Tooltip>
    )
}                                                                                                                `
