import Input from "@/components/luicomponents/input";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function InputDemo() {
    return (
        <Input
            colour="white"
            textColour="black"
            placeholder={{ placeholder: "Email Address", colour: "default" }}
            border={{ type: 1, colour: "sky" }}
            round={2}
            font={urbanist.className}
        />
    )
}
