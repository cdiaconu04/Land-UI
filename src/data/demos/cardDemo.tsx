import Card from "@/components/luicomponents/card";
import Typography from "@/components/luicomponents/typography";

export function CardDemo() {
    return (
        <Card
            round={3}
            border={{ type: 1, colour: "lightGray" }}
        >
            <Typography type="p" colour="black" bold={1} size={4}>Card Title.</Typography>
            <Typography type="p" colour="black" bold={1} size={2}>Here is some information.</Typography>
        </Card>
    )
}

export const cardDemoCode =
`import Card from "@/components/luicomponents/card";
import Typography from "@/components/luicomponents/typography";

export function CardDemo() {
    return (
        <Card
            round={3}
            border={{ type: 1, colour: "lightGray" }}
        >
            <Typography 
                type="p" 
                colour="black" 
                bold={1} 
                size={4}
            >
                Card Title.
            </Typography>
            <Typography 
                type="p" 
                colour="black" 
                bold={1} 
                size={2}
            >
                Here is some information.
            </Typography>
        </Card>
    )
}                                                                                                                `
