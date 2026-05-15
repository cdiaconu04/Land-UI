import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function Gradient1() {
    return (
        <Badge
            colour={{type: "gradient", colourFrom: "lightEmerald", colourTo: "lightSky"}}
        >
            <Typography type="p" colour="black" bold={1}>
                Gradient
            </Typography>
        </Badge>
    )
}

export const gradient1Code = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

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
                colour="black" 
                bold={1}
            >
                Gradient
            </Typography>
        </Badge>
    )
}                                                                                                                `
