import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TypographyBold() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
                font={urbanist.className}
            >
                Normal.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={3}
                font={urbanist.className}
            >
                Bold.
            </Typography>
        </div>
        
    )
}

export const typographyBoldCode =
`import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TypographyBold() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={1}
                font={urbanist.className}
            >
                Thin.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
                font={urbanist.className}
            >
                Normal.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={3}
                font={urbanist.className}
            >
                Bold.
            </Typography>
        </div>
        
    )
}                                                                                                                `
