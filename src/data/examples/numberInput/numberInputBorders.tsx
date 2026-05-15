import NumberInput from "@/components/luicomponents/numberInput";

export function NumberInputBorders() {
    return (
        <div className="flex flex-row gap-5">
            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "red" }}
            />

            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "orange" }}
            />
        </div>
    );
}

export const numberInputBordersCode =
`import NumberInput from "@/components/luicomponents/numberInput";

export function NumberInputDemo() {
    return (
        <div className="flex flex-row gap-5">
            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "red" }}
            />

            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "orange" }}
            />
        </div> 
    );
}                                                                                                                `
