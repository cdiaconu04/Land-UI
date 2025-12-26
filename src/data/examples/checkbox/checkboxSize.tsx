import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function CheckboxSize() {
    const [newsletter, setNewsletter] = useState(true);

    return (
        <div className="flex flex-col gap-4">
            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"sm"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"md"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"lg"}
            />
        </div>
    );
}

export const checkboxSizeCode = 
`import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function CheckboxSize() {
    const [newsletter, setNewsletter] = useState(true);

    return (
        <div className="flex flex-col gap-4">
            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"sm"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"md"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                font={urbanist.className}
                size={"lg"}
            />
        </div>
    );
}                                                                                                                `
