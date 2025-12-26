import NumberInput from "@/components/luicomponents/numberInput";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

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
                font={urbanist.className}
            />

            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "orange" }}
                font={urbanist.className}
            />
        </div> 
    );
}

export const numberInputBordersCode =
`import NumberInput from "@/components/luicomponents/numberInput";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

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
                font={urbanist.className}
            />

            <NumberInput
                value={10}
                min={10}
                max={40}
                onChange={(v) => console.log(v)}
                round={2}
                border={{ type: 2, colour: "orange" }}
                font={urbanist.className}
            />
        </div> 
    );
}                                                                                                                `
