import TextArea from "@/components/luicomponents/textArea";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TextAreaBorders() {
    return (
        <div className="flex flex-row gap-5">
            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "red" }}
                round={2}
                font={urbanist.className}
            />

            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "orange" }}
                round={2}
                font={urbanist.className}
            />
        </div>
        
    )
}

export const textAreaBordersCode =
`import TextArea from "@/components/luicomponents/textArea";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function TextAreaDemo() {
    return (
        <div className="flex flex-row gap-5">
            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "red" }}
                round={2}
                font={urbanist.className}
            />

            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "orange" }}
                round={2}
                font={urbanist.className}
            />
        </div>
        
    )
}                                                                                                                `
