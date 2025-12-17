import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TypographyDemo() {
    return (
        <Typography 
            type="p" 
            colour="black" 
            size={4}
            bold={2}
            font={urbanist.className}
        >
            Typography.
        </Typography>
    )
}