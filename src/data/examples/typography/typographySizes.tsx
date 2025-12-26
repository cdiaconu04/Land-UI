import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TypographySize() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={2}
                bold={2}
                font={urbanist.className}
            >
                Small.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
                font={urbanist.className}
            >
                Medium.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={6}
                bold={2}
                font={urbanist.className}
            >
                Large.
            </Typography>
        </div>
        
    )
}

export const typographySizeCode =
`import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TypographySize() {
    return (
        <div className="flex flex-col gap-5">
            <Typography 
                type="p" 
                colour="black" 
                size={2}
                bold={2}
                font={urbanist.className}
            >
                Small
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={4}
                bold={2}
                font={urbanist.className}
            >
                Medium.
            </Typography>

            <Typography 
                type="p" 
                colour="black" 
                size={6}
                bold={2}
                font={urbanist.className}
            >
                Large.
            </Typography>
        </div>
        
    )
}                                                                                                                `
