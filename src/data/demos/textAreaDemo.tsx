import TextArea from "@/components/luicomponents/textArea";

export function TextAreaDemo() {
    return (
        <TextArea
            colour="white"
            textColour="black"
            placeholder={{ placeholder: "What do you think?", colour: "default" }}
            border={{ type: 1, colour: "sky" }}
            round={2}
        />
    )
}

export const textAreaDemoCode =
`import TextArea from "@/components/luicomponents/textArea";

export function TextAreaDemo() {
    return (
        <TextArea
            colour="white"
            textColour="black"
            placeholder={{ 
                placeholder: "What do you think?", 
                colour: "default" 
            }}
            border={{ type: 1, colour: "sky" }}
            round={2}
        />
    )
}                                                                                                                `
