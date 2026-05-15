import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonDemo() {
    return (
        <Button
            onClick={() => {}}
            colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
            hoverColour={{type: "gradient", colourFrom: "sky", colourVia: "sky", colourTo: "emerald"}}
            hoverShadow={2}
        >
            <Typography type="p" colour="black" bold={1}>Button</Typography>
        </Button>
    )
}

export const buttonDemoCode = 
`import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function ButtonDemo() {
    return (
        <Button 
            onClick={() => {}} 
            colour={{
                type: "gradient", 
                colourFrom: "lightSky", 
                colourVia: "lightSky", 
                colourTo: "lightEmerald"
            }}
            hoverColour={{
                type: "gradient", 
                colourFrom: "sky", 
                colourVia: "sky", 
                colourTo: "emerald"
            }}
        >
            <Typography 
                type="p" 
                colour="black" 
                bold={1}
            >
                Button
            </Typography>
        </Button>
    )
}                                                                                                                `
