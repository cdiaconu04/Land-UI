import Typography from "@/components/luicomponents/typography";

export function TypographyBold() {
    return (
        <div className="flex flex-col gap-5">
            <Typography
                type="p"
                colour="black"
                size={4}
                bold={2}
            >
                Normal.
            </Typography>

            <Typography
                type="p"
                colour="black"
                size={4}
                bold={3}
            >
                Bold.
            </Typography>
        </div>

    )
}

export const typographyBoldCode =
`import Typography from "@/components/luicomponents/typography";

export function TypographyBold() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={1}
            >
                Thin.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
            >
                Normal.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={3}
            >
                Bold.
            </Typography>
        </div>
        
    )
}                                                                                                                `
