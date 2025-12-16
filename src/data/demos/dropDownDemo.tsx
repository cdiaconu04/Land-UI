import Dropdown from "@/components/luicomponents/dropdown";
import { useState } from "react";

export function DropDownDemo() {
    const [val, setVal] = useState("free");
    return (
        <Dropdown
            value={val}
            onChange={setVal}
            options={[
                { label: "Free", value: "free" },
                { label: "Pro", value: "pro" },
                { label: "Enterprise", value: "ent" },
            ]}
            textColour="black"
            optionTextColour="black"
            optionSelectedTextColour="black"
            itemSelectedColour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
        />
    )
}

