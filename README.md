# LandUI

A React component library for building landing pages fast. I built it because I wanted a library that was very customizable, so nothing is locked down. Every component is styled through props, so you can change colours, borders, rounding and shadows without writing any CSS.

Docs and live examples: https://land-ui-cd.vercel.app/

## Install

```bash
npm install @cdiaconu/land-ui
```

## Usage

```tsx
import { Button } from "@cdiaconu/land-ui";

export default function Page() {
  return (
    <Button
      onClick={() => {}}
      colour={{ type: "filled", colour: "lightSky" }}
      border={{ type: 1, colour: "black" }}
      round={2}
    >
      Get started
    </Button>
  );
}
```

## Components

- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- Dropdown
- Input
- Navbar
- NavSection
- NumberInput
- RadioGroup and RadioItem
- TextArea
- Toast
- Toggle
- Tooltip
- Typography

Each component's props and examples are documented on the site.

## Customization

Most components take the same set of styling props: colour (filled or gradient), border, round and shadow. The customization section of the docs covers what each one accepts.

## Tech stack

Next.js and Tailwind CSS, all usable in React.js and Next.js.

## Repo layout

- `packages/ui` is the published library
- `src` is the documentation site

## Local development

```bash
npm install
npm run dev
```

The site runs on http://localhost:3000.
