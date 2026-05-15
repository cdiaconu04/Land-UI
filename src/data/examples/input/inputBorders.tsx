import Input from "@/components/luicomponents/input";

export function InputBorders() {
    return (
        <div className="flex flex-row gap-5">
            <Input
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "Email Address", colour: "default" }}
                border={{ type: 1, colour: "red" }}
                round={2}
            />
            <Input
                colour="white"
                textColour="black"
                placeholder={{ placeholder: "Email Address", colour: "default" }}
                border={{ type: 1, colour: "orange" }}
                round={2}
            />
        </div>

    )
}

export const inputBordersCode =
`import Input from "@/components/luicomponents/input";

export function InputDemo() {
    return (
        <Input
            colour="white"
            textColour="black"
            placeholder={{ 
                placeholder: "Email Address", 
                colour: "default" 
            }}
            border={{ type: 1, colour: "sky" }}
            round={2}
        />
    )
}                                                                                                                `
