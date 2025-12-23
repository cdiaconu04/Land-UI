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

import { avatarDemoCode } from "./demos/avatarDemo";
import { buttonDemoCode } from "./demos/buttonDemo";
import { badgeDemoCode } from "./demos/badgeDemo";
import { checkboxDemoCode } from "./demos/checkboxDemo";
import { dialogDemoCode } from "./demos/dialogDemo";
import { dropdownDemoCode } from "./demos/dropDownDemo";
import { inputDemoCode } from "./demos/inputDemo";
import { numberInputDemoCode } from "./demos/numberInputDemo";
import { radioGroupDemoCode } from "./demos/radioGroupDemo";
import { textAreaDemoCode } from "./demos/textAreaDemo";
import { toastDemoCode } from "./demos/toastDemo";
import { toggleDemoCode } from "./demos/toggleDemo";
import { tooltipDemoCode } from "./demos/tooltipDemo";
import { typographyDemoCode } from "./demos/typographyDemo";

import { BadgeColoursDemo } from "./examples/badge/badgeColours";
import { badgeColoursCode } from "./examples/badge/badgeColours";

import { ButtonColoursDemo } from "./examples/button/buttonColours";
import { buttonColoursCode } from "./examples/button/buttonColours";

import { toastScaleCode, ToastScaleDemo } from "./examples/toast/toastScale";

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
        demoCode: avatarDemoCode,
        examples: [
            {
                name: "Avatar Colours",
                description: ""
            },
            {
                name: "Avatar Size",
                description: ""
            },
            {
                name: "Avatar Text",
                description: ""
            },
        ]
    },
    {                                                           
        name: "Badge", 
        description: "",
        slug: "badge",
        demo: <BadgeDemo/>,
        demoCode: badgeDemoCode,
        examples: [
            {
                name: "Badge Colours",
                description: "",
                demo: <BadgeColoursDemo/>,
                code: badgeColoursCode
            },
            {
                name: "Badge Borders",
                description: ""
            },
            {
                name: "Badge Rounding",
                description: ""
            }
        ]
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
                description: "",
                demo: <ButtonColoursDemo/>,
                code: buttonColoursCode,
            },
            {
                name: "Button Borders",
                description: ""
            },
            {
                name: "Button Rounding",
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
        examples: [
            {
                name: "Card Borders",
                description: ""
            },
            {
                name: "Card Rounding",
                description: ""
            },
            {
                name: "Card Shadows",
                description: ""
            },
        ] 
    },
    { 
        name: "Checkbox", 
        description: "",
        slug: "checkbox",
        demo: <CheckboxDemo/>, 
        demoCode: checkboxDemoCode,
        examples: [
            {
                name: "Checkbox Text",
                description: ""
            },
            {
                name: "Checkbox Borders",
                description: ""
            },
            {
                name: "Checkbox Rounding",
                description: ""
            },
            {
                name: "Checkbox Size",
                description: ""
            },
            {
                name: "Checkbox Disabled",
                description: ""
            },
        ]
    },
    { 
        name: "Dialog", 
        description: "",
        slug: "dialog",
        demo: <DialogDemo/>,
        demoCode: dialogDemoCode,
        examples: [
            {
                name: "Dialog Overlay Colours",
                description: ""
            },
        ]
    },
    { 
        name: "Dropdown", 
        description: "",
        slug: "dropdown",
        demo: <DropDownDemo/>,
        demoCode: dropdownDemoCode, 
        examples: [
            {
                name: "Dropdown Placeholders",
                description: ""
            },
            {
                name: "Dropdown Borders",
                description: ""
            },
        ]
    },
    { 
        name: "Input", 
        description: "",
        slug: "input",
        demo: <InputDemo/>, 
        demoCode: inputDemoCode,
        examples: [
            {
                name: "Input Colours",
                description: ""
            },
            {
                name: "Input Placeholders",
                description: ""
            },
            {
                name: "Input Text",
                description: ""
            },
            {
                name: "Input Borders",
                description: ""
            },
        ]
    },
    { 
        name: "Navbar", 
        description: "",
        slug: "navbar",
        demo: <div/>, 
        demoCode: "",
        examples: [
            {
                name: "Navbar Sticky",
                description: ""
            },
        ]
    },
    { 
        name: "Number Input", 
        description: "",
        slug: "number-input",
        demo: <NumberInputDemo/>,
        demoCode: numberInputDemoCode,
        examples: [
            {
                name: "Number Input Range",
                description: ""
            },
            {
                name: "Number Input Colours",
                description: ""
            },
            {
                name: "Number Input Border",
                description: ""
            },
            {
                name: "Number Input Text",
                description: ""
            },
        ]
    },
    { 
        name: "Radio Group", 
        description: "",
        slug: "radio-group",
        demo: <RadioGroupDemo/>, 
        demoCode: radioGroupDemoCode,
        examples: [
            {
                name: "Radio Group Direction",
                description: ""
            },
            {
                name: "Radio Group Indicator Size",
                description: ""
            },
            {
                name: "Radio Group Disabled",
                description: ""
            },
        ]
    },
    { 
        name: "Text Area", 
        description: "",
        slug: "textarea",
        demo: <TextAreaDemo/>,
        demoCode: textAreaDemoCode, 
        examples: [
            {
                name: "Text Area Placeholders",
                description: ""
            },
            {
                name: "Text Area Text",
                description: ""
            },
            {
                name: "Text Area Borders",
                description: ""
            },
        ]
    },
    { 
        name: "Toast", 
        description: "",
        slug: "toast",
        demo:   <ToastDemo/>,
        demoCode: toastDemoCode,
        examples: [
            {
                name: "Toast Scaling",
                description: "",
                demo: <ToastScaleDemo/>,
                code: toastScaleCode
            },
        ]
    },
    { 
        name: "Toggle", 
        description: "",
        slug: "toggle",
        demo: <ToggleDemo/>, 
        demoCode: toggleDemoCode,
        examples: [
            {
                name: "Toggle Colours",
                description: ""
            },
        ]
    },
    { 
        name: "Tooltip", 
        description: "",
        slug: "tooltip",
        demo: <ToolTipDemo/>,
        demoCode: tooltipDemoCode,
        examples: [
            {
                name: "Tooltip Text",
                description: ""
            },
            {
                name: "Tooltip Placement",
                description: ""
            },
            {
                name: "Tooltip Scale",
                description: ""
            },
            {
                name: "Tooltip Size",
                description: ""
            },
        ] 
    },
    { 
        name: "Typography", 
        description: "",
        slug: "typography",
        demo:  <TypographyDemo/>, 
        demoCode: typographyDemoCode,
        examples: [
            {
                name: "Typography Types",
                description: ""
            },
            {
                name: "Typography Bolding",
                description: ""
            },
            {
                name: "Typography Sizes",
                description: ""
            },
        ]
    },
];
