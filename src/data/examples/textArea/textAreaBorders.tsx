import TextArea from "@/components/luicomponents/textArea";

export function TextAreaBorders() {
    return (
        <div className="flex flex-row gap-5">
            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "red" }}
                round={2}
            />

            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "orange" }}
                round={2}
            />
        </div>

    )
}

export const textAreaBordersCode =
`import TextArea from "@/components/luicomponents/textArea";

export function TextAreaDemo() {
    return (
        <div className="flex flex-row gap-5">
            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "red" }}
                round={2}
            />

            <TextArea
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "What do you think?", colour: "default" }}
                border={{ type: 1, colour: "orange" }}
                round={2}
            />
        </div>
        
    )
}                                                                                                                `
