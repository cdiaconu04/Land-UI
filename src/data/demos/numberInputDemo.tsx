import NumberInput from "@/components/luicomponents/numberInput";

export function NumberInputDemo() {
  return (
    <NumberInput
      value={10}
      min={10}
      max={40}
      onChange={(v) => console.log(v)}
      round={2}
      border={{ type: 2, colour: "sky" }}
    />
  );
}

export const numberInputDemoCode =
`import NumberInput from "@/components/luicomponents/numberInput";

export function NumberInputDemo() {
  return (
    <NumberInput
      value={10}
      min={10}
      max={40}
      onChange={(v) => console.log(v)}
      round={2}
      border={{ type: 2, colour: "sky" }}
    />
  );
}                                                                                                                `
