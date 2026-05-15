import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

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
                size={"sm"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                size={"md"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                size={"lg"}
            />
        </div>
    );
}

export const checkboxSizeCode = 
`import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

export function CheckboxSize() {
    const [newsletter, setNewsletter] = useState(true);

    return (
        <div className="flex flex-col gap-4">
            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ 
                    type: "gradient", 
                    colourFrom: "lightSky",
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald" 
                }}
                checkTextColour="black"
                size={"sm"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ 
                    type: "gradient", 
                    colourFrom: "lightSky",
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald" 
                }}
                checkTextColour="black"
                size={"md"}
            />

            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ 
                    type: "gradient", 
                    colourFrom: "lightSky",
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald" 
                }}
                checkTextColour="black"
                size={"lg"}
            />
        </div>
    );
}                                                                                                                `
