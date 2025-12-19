"use client"

import { type ReactNode } from "react";
import { AvatarDemo } from "./demos/avatarDemo";
import { DropDownDemo } from "./demos/dropDownDemo";
import { NumberInputDemo } from "./demos/numberInputDemo";
import { RadioGroupDemo } from "./demos/radioGroupDemo";
import { ToastDemo } from "./demos/toastDemo";
import { ToggleDemo } from "./demos/toggleDemo";
import { CheckboxDemo } from "./demos/checkboxDemo";
import { InputDemo } from "./demos/inputDemo";
import { TextAreaDemo } from "./demos/textAreaDemo";
import { ToolTipDemo } from "./demos/tooltipDemo";
import { TypographyDemo } from "./demos/typographyDemo";
import { DialogDemo } from "./demos/dialogDemo";
import { BadgeDemo } from "./demos/badgeDemo";
import { ButtonDemo } from "./demos/buttonDemo";

import { buttonDemoCode } from "./demos/buttonDemo";

type Example = {
    name: string;
    description: string;
    demo?: ReactNode;
    code?: string; 
}

export type DocsComponent = {
    name: string;
    description: string;
    slug: string;
    demo: ReactNode;
    demoCode: string;
    examples: Example[];
};

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        description: "",
        slug: "accordion",
        demo: <div/>,
        demoCode: "",
        examples: []
    },
    { 
        name: "Avatar", 
        description: "",
        slug: "avatar",
        demo: <AvatarDemo/>,
        demoCode: "",
        examples: []
    },
    {                                                           
        name: "Badge", 
        description: "",
        slug: "badge",
        demo: <BadgeDemo/>,
        demoCode: "",
        examples: []
    },
    { 
        name: "Button",
        description: "Simple button component for your project.", 
        slug: "button",
        demo: <ButtonDemo/>,
        demoCode: buttonDemoCode, 
        examples: [
            {
                name: "Button Colours",
                description: ""
            },
            {
                name: "Button Sizes",
                description: ""
            },
            {
                name: "Button Borders",
                description: ""
            },
            {
                name: "Button Rounding",
                description: ""
            },
            {
                name: "Button Hovering",
                description: ""
            },
        ]
    },
    { 
        name: "Card", 
        description: "",
        slug: "card",
        demo: <div/>,
        demoCode: "",
        examples: [] 
    },
    { 
        name: "Checkbox", 
        description: "",
        slug: "checkbox",
        demo: <CheckboxDemo/>, 
        demoCode: "",
        examples: []
    },
    { 
        name: "Dialog", 
        description: "",
        slug: "dialog",
        demo: <DialogDemo/>,
        demoCode: "",
        examples: []
    },
    { 
        name: "Dropdown", 
        description: "",
        slug: "dropdown",
        demo: <DropDownDemo/>,
        demoCode: "", 
        examples: []
    },
    { 
        name: "Input", 
        description: "",
        slug: "input",
        demo: <InputDemo/>, 
        demoCode: "",
        examples: []
    },
    { 
        name: "Navbar", 
        description: "",
        slug: "navbar",
        demo: <div/>, 
        demoCode: "",
        examples: []
    },
    { 
        name: "Number Input", 
        description: "",
        slug: "number-input",
        demo: <NumberInputDemo/>,
        demoCode: "",
        examples: []
    },
    { 
        name: "Radio Group", 
        description: "",
        slug: "radio-group",
        demo: <RadioGroupDemo/>, 
        demoCode: "",
        examples: []
    },
    { 
        name: "Text Area", 
        description: "",
        slug: "textarea",
        demo: <TextAreaDemo/>,
        demoCode: "", 
        examples: []
    },
    { 
        name: "Toast", 
        description: "",
        slug: "toast",
        demo:   <ToastDemo/>,
        demoCode: "",
        examples: []
    },
    { 
        name: "Toggle", 
        description: "",
        slug: "toggle",
        demo: <ToggleDemo/>, 
        demoCode: "",
        examples: []
    },
    { 
        name: "Tooltip", 
        description: "",
        slug: "tooltip",
        demo: <ToolTipDemo/>,
        demoCode: "",
        examples: [] 
    },
    { 
        name: "Typography", 
        description: "",
        slug: "typography",
        demo:  <TypographyDemo/>, 
        demoCode: "",
        examples: []
    },
];
