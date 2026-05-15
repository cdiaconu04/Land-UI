import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function BadgeDemo() {
    return (
        <Badge
            colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
        >
            <Typography type="p" colour="black" bold={1}>
                New
            </Typography>
        </Badge>
    )
}

export const badgeDemoCode = 
`import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";

export function BadgeDemo() {
    return (
        <Badge 
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
                New
            </Typography>
        </Badge>
    )
}                                                                                                                `
