import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

export function CheckboxDemo() {
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="flex flex-col gap-4">
        <Checkbox
          checked={newsletter}
          onChange={setNewsletter}
          label="Check me!"
          checkedColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
          checkTextColour="black"
        />
    </div>
  );
}

export const checkboxDemoCode = 
`import { useState } from "react";
import Checkbox from "@/components/luicomponents/checkbox";

export function CheckboxDemo() {
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
        />
    </div>
  );
}                                                                                                                `
