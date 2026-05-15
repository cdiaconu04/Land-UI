import Typography from "@/components/luicomponents/typography";

export function TypographySize() {
    return (
        <div className="flex flex-col gap-5">
            <Typography
                type="p"
                colour="black"
                size={2}
                bold={2}
            >
                Small.
            </Typography>

            <Typography
                type="p"
                colour="black"
                size={4}
                bold={2}
            >
                Medium.
            </Typography>

            <Typography
                type="p"
                colour="black"
                size={6}
                bold={2}
            >
                Large.
            </Typography>
        </div>

    )
}

export const typographySizeCode =
`import Typography from "@/components/luicomponents/typography";

export function TypographySize() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={2}
                bold={2}
            >
                Small
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
            >
                Medium.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={6}
                bold={2}
            >
                Large.
            </Typography>
        </div>
        
    )
}                                                                                                                `
