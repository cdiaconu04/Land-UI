import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function Filled() {
    return (
        <Badge
            colour={{type: "filled", colour: "lightSky"}}
        >
            <Typography type="p" colour="black" bold={1}>
                Filled
            </Typography>
        </Badge>
    )
}

export const filledCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function Filled() {
    return (
        <Badge 
            colour={{type: "filled", colour: "lightSky"}}
        >
            <Typography 
                type="p" 
                colour="black"
                bold={1}
            >
                Filled
            </Typography>
        </Badge>
    )
}                                                                                                                `
