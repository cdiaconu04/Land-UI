import NumberInput from "@/components/luicomponents/numberInput";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function NumberInputDemo() {
  return (
    <NumberInput
      value={10}
      min={10}
      max={40}
      onChange={(v) => console.log(v)}
      round={2}
      border={{ type: 2, colour: "sky" }}
      font={urbanist.className}
    />
  );
}
