import Input from "@/components/luicomponents/input";

export function InputDemo() {
    return (
        <Input
            colour="white"
            textColour="black"
            placeholder={{ placeholder: "Email Address", colour: "default" }}
            border={{ type: 1, colour: "sky" }}
            round={2}
        />
    )
}

export const inputDemoCode =
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
