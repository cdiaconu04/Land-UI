import TextArea from "@/components/luicomponents/textArea";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TextAreaDemo() {
    return (
        <TextArea
            colour="white"
            textColour="black"
            placeholder={{ placeholder: "What do you think?", colour: "default" }}
            border={{ type: 1, colour: "sky" }}
            round={2}
            font={urbanist.className}
        />
    )
}