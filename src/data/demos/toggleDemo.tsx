import { useState } from "react";
import Toggle from "@/components/luicomponents/toggle";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function ToggleDemo() {
  const [on, setOn] = useState(false);

  return (
    <Toggle
      onToggle={setOn}
      untoggledColour={{ type: "filled", colour: "white" }}
      toggledColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
      border={{ type: 2, colour: "black" }}
      round={2}
      size="medium"
    >
      <Typography font={urbanist.className} type="p" colour="black" bold={1}>
        Toggle Me
      </Typography>
    </Toggle>
  );
}
