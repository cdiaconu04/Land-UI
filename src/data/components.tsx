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

import { AvatarColours, avatarColoursCode } from "./examples/avatar/avatarColours";
import { AvatarSize, avatarSizeCode } from "./examples/avatar/avatarSize";

import { BadgeBordersDemo, badgeBordersCode } from "./examples/badge/badgeBorders";
import { BadgeColoursDemo, badgeColoursCode } from "./examples/badge/badgeColours";
import { BadgeRoundingDemo, badgeRoundingCode } from "./examples/badge/badgeRounding";

import { ButtonBordersDemo, buttonBordersCode } from "./examples/button/buttonBorders";
import { ButtonColoursDemo, buttonColoursCode } from "./examples/button/buttonColours";
import { buttonRoundCode, ButtonRoundDemo } from "./examples/button/buttonRounding";

import { CheckboxDisabled, checkboxDisabledCode } from "./examples/checkbox/checkboxDisabled";
import { CheckboxSize, checkboxSizeCode } from "./examples/checkbox/checkboxSize";

import { InputBorders, inputBordersCode } from "./examples/input/inputBorders";

import { NumberInputBorders, numberInputBordersCode } from "./examples/numberInput/numberInputBorders";

import { RadioGroupDisabled, radioGroupDisabledCode } from "./examples/radioGroup/radioGroupDisabled";
import { RadioGroupDirection, radioGroupDirectionCode } from "./examples/radioGroup/radioGroupDirection";

import { TextAreaBorders, textAreaBordersCode } from "./examples/textArea/textAreaBorders";

import { toastScaleCode, ToastScaleDemo } from "./examples/toast/toastScale";

import { ToggleColours, toggleColoursCode } from "./examples/toggle/toggleColours";

import { ToolTipColours, tooltipColoursCode } from "./examples/tooltip/tooltipColours";
import { ToolTipPlacement, tooltipPlacementCode } from "./examples/tooltip/tooltipPlacement";
import { ToolTipScale, tooltipScaleCode } from "./examples/tooltip/tooltipScale";

import { TypographyBold, typographyBoldCode } from "./examples/typography/typographyBold";
import { TypographySize, typographySizeCode } from "./examples/typography/typographySizes";

type Prop = {
    name: string;
    type: string;
    description: string;
}

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
    props: Prop[];
};

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        description: "",
        slug: "accordion",
        demo: <div/>,
        demoCode: "",
        examples: [],
        props: []
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
                description: "",
                demo: <AvatarColours/>,
                code: avatarColoursCode
            },
            {
                name: "Avatar Size",
                description: "",
                demo: <AvatarSize/>,
                code: avatarSizeCode
            },
        ],
        props: [
            {
                name: "alt",
                type: "string",
                description: "Image alt text",
            },
            {
                name: "bgColour",
                type: "Colour",
                description: "Background colour",
            },
            {
                name: "border",
                type: "Border",
                description: "Border styling",
            },
            {
                name: "font",
                type: "string",
                description: "Font class",
            },
            {
                name: "initials",
                type: "string",
                description: "Fallback initials",
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding",
            },
            {
                name: "size",
                type: "keyof typeof sizeMap",
                description: "Avatar size",
            },
            {
                name: "src",
                type: "string",
                description: "Image URL",
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text color",
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
                description: "",
                demo: <BadgeBordersDemo/>,
                code: badgeBordersCode
            },
            {
                name: "Badge Rounding",
                description: "",
                demo: <BadgeRoundingDemo/>,
                code: badgeRoundingCode
            }
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "shadow",
                type: "Shadow",
                description: "Shadow styling"
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
                description: "",
                demo: <ButtonBordersDemo/>,
                code: buttonBordersCode
            },
            {
                name: "Button Rounding",
                description: "",
                demo: <ButtonRoundDemo/>,
                code: buttonRoundCode
            },
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour"
            },
            {
                name: "hoverColour",
                type: "Colour",
                description: "Background colour on hover"
            },
            {
                name: "hoverShadow",
                type: "Shadow",
                description: "Shadow on hover"
            },
            {
                name: "onClick",
                type: "Function",
                description: "Function triggered when button is clicked"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "size",
                type: "small, medium, or large",
                description: "Button size"
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
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour"
            },
            {
                name: "round",
                type: "Round",
                description: "Shadow"
            },
            {
                name: "shadow",
                type: "Shadow",
                description: "Shadow styling"
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
                name: "Checkbox Size",
                description: "",
                demo: <CheckboxSize/>,
                code: checkboxSizeCode
            },
            {
                name: "Checkbox Disabled",
                description: "",
                demo: <CheckboxDisabled/>,
                code: checkboxDisabledCode
            },
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "checked",
                type: "boolean",
                description: "Current state of checkbox"
            },
            {
                name: "checkedColour",
                type: "Colour",
                description: "Background colour when checked"
            },
            {
                name: "checkTextColour",
                type: "Colour type",
                description: "Checkmark colour when checked"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour when unchecked"
            },
            {
                name: "disabled",
                type: "boolean",
                description: "Disables interaction"
            },
            {
                name: "font",
                type: "string",
                description: "Font for label"
            },
            {
                name: "labelTextColour",
                type: "Colour type",
                description: "Text colour for the label"
            },
            {
                name: "onChange",
                type: "Function",
                description: "Fires when checkbox state changes"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "size",
                type: "sm, md, or lg",
                description: "Checkbox size"
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
        ],
        props: []
    },
    { 
        name: "Dropdown", 
        description: "",
        slug: "dropdown",
        demo: <DropDownDemo/>,
        demoCode: dropdownDemoCode, 
        examples: [
            {
                name: "Dropdown Borders",
                description: ""
            },
        ],
        props: []
    },
    { 
        name: "Input", 
        description: "",
        slug: "input",
        demo: <InputDemo/>, 
        demoCode: inputDemoCode,
        examples: [
            {
                name: "Input Borders",
                description: "",
                demo: <InputBorders/>,
                code: inputBordersCode
            },
        ],
        props: []
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
        ],
        props: []
    },
    { 
        name: "Number Input", 
        description: "",
        slug: "number-input",
        demo: <NumberInputDemo/>,
        demoCode: numberInputDemoCode,
        examples: [
            {
                name: "Number Input Border",
                description: "",
                demo: <NumberInputBorders/>,
                code: numberInputBordersCode
            },
        ],
        props: []
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
                description: "",
                demo: <RadioGroupDirection/>,
                code: radioGroupDirectionCode
            },
            {
                name: "Radio Group Disabled",
                description: "",
                demo: <RadioGroupDisabled/>,
                code: radioGroupDisabledCode
            },
        ],
        props: []
    },
    { 
        name: "Text Area", 
        description: "",
        slug: "textarea",
        demo: <TextAreaDemo/>,
        demoCode: textAreaDemoCode, 
        examples: [
            {
                name: "Text Area Borders",
                description: "",
                demo: <TextAreaBorders/>,
                code: textAreaBordersCode
            },
        ],
        props: []
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
        ],
        props: []
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
                description: "",
                demo: <ToggleColours/>,
                code: toggleColoursCode
            },
        ],
        props: []
    },
    { 
        name: "Tooltip", 
        description: "",
        slug: "tooltip",
        demo: <ToolTipDemo/>,
        demoCode: tooltipDemoCode,
        examples: [
            {
                name: "Tooltip Colours",
                description: "",
                demo: <ToolTipColours/>,
                code: tooltipColoursCode
            },
            {
                name: "Tooltip Top",
                description: "",
                demo: <ToolTipPlacement/>,
                code: tooltipPlacementCode
            },
            {
                name: "Tooltip Scale",
                description: "",
                demo: <ToolTipScale/>,
                code: tooltipScaleCode
            },
        ],
        props: [] 
    },
    { 
        name: "Typography", 
        description: "",
        slug: "typography",
        demo:  <TypographyDemo/>, 
        demoCode: typographyDemoCode,
        examples: [
            {
                name: "Typography Sizes",
                description: "",
                demo: <TypographySize/>,
                code: typographySizeCode
            },
            {
                name: "Typography Bolding",
                description: "",
                demo: <TypographyBold/>,
                code: typographyBoldCode
            },
        ],
        props: []
    },
];
