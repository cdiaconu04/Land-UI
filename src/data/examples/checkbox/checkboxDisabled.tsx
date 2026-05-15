import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

export function CheckboxDisabled() {
    const [newsletter, setNewsletter] = useState(true);

    return (
        <div className="flex flex-col gap-4">
            <Checkbox
                checked={newsletter}
                onChange={setNewsletter}
                label="Check me!"
                checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                checkTextColour="black"
                disabled={true}
            />
        </div>
    );
}

export const checkboxDisabledCode = 
`import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

export function CheckboxDemo() {
  const [newsletter, setNewsletter] = useState(true);
  const [terms, setTerms] = useState(false);

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
        />
    </div>
  );
}                                                                                                                `
