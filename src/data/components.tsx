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

import { DialogBackdropDemo, dialogBackdropCode } from "./examples/dialog/dialogOverlay";

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
                name: "Dialog Backdrop Colours",
                description: "",
                demo: <DialogBackdropDemo/>,
                code: dialogBackdropCode
            },
        ],
        props: [
            {
                name: "children",
                type: "Function",
                description: "Render function for dialog content"
            },
            {
                name: "trigger",
                type: "Function",
                description: "Render function for the trigger element. Receives an open function."
            },
            {
                name: "backdrop",
                type: "0 | 1 | 2 | 3 | 4",
                description: "Level of backdrop darkening when dialog active"
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
                name: "Dropdown Borders",
                description: ""
            },
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling for closed dropdown trigger"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour for trigger"
            },
            {
                name: "disabled",
                type: "boolean",
                description: "Disables interaction when true"
            },
            {
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "itemColour",
                type: "Colour",
                description: "Background colour for each option item"
            },
            {
                name: "itemHoverColour",
                type: "Colour",
                description: "Background colour when hovering"
            },
            {
                name: "itemSelectedColour",
                type: "Colour",
                description: "Background colour for selected option"
            },
            {
                name: "menuBorder",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "menuColour",
                type: "Colour",
                description: "Background colour or gradient"
            },
            {
                name: "menuRound",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "menuShadow",
                type: "Shadow",
                description: "Shadow styling"
            },
            {
                name: "onChange",
                type: "Function",
                description: "Called when a new option is selected"
            },
            {
                name: "optionSelectedTextColour",
                type: "Colour type",
                description: "Text colour for the selected option"
            },
            {
                name: "optionTextColour",
                type: "Colour type",
                description: "Text colour for unselected options"
            },
            {
                name: "options",
                type: "DropdownOption[]",
                description: "Array of options { label, value, disabled? }"
            },
            {
                name: "placeholder",
                type: "React component",
                description: "Content shown when no value is selected"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding for the trigger"
            },
            {
                name: "shadow",
                type: "Shadow",
                description: "Shadow styling for the trigger"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour for the trigger content"
            },
            {
                name: "value",
                type: "string",
                description: "Currently selected value"
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
                name: "Input Borders",
                description: "",
                demo: <InputBorders/>,
                code: inputBordersCode
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
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "placeholder",
                type: "{ placeholder: string; colour: Colour }",
                description: "Placeholder text and colour"
            },
            {
                name: "round",
                type: "Rounding",
                description: "Border rounding"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour of the input"
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
                name: "rounded",
                type: "Rounded",
                description: "Border rounding for the inner navbar container"
            },
            {
                name: "sidePadLevel",
                type: "0, 1, 2, 3",
                description: "Side padding levels"
            },
            {
                name: "sticky",
                type: "boolean",
                description: "Whether the navbar is fixed at the top of the screen"
            },
            {
                name: "type",
                type: `"default" | "floating"`,
                description: "Navbar style"
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
                name: "Number Input Border",
                description: "",
                demo: <NumberInputBorders/>,
                code: numberInputBordersCode
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
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "max",
                type: "number",
                description: "Maximum allowed value"
            },
            {
                name: "min",
                type: "number",
                description: "Minimum allowed value"
            },
            {
                name: "onChange",
                type: "Function",
                description: "Fires when the value changes"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "step",
                type: "number",
                description: "Increment between allowed values"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour of the input"
            },
            {
                name: "value",
                type: "number",
                description: "Current number value displayed"
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
        props: [
            {
                name: "direction",
                type: `"row" | "col"`,
                description: "Direction for radio items"
            },
            {
                name: "disabled",
                type: "boolean",
                description: "Disables interaction for all radios in the group"
            },
            {
                name: "name",
                type: "string",
                description: "Shared name attribute for all radio inputs"
            },
            {
                name: "onChange",
                type: "Function",
                description: "Called when a different radio is selected"
            },
            {
                name: "value",
                type: "string",
                description: "Currently selected radio value"
            },
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "colour",
                type: "Colour",
                description: "Background colour when not selected"
            },
            {
                name: "disabled",
                type: "boolean",
                description: "Disables interaction"
            },
            {
                name: "indicatorBorder",
                type: "Border",
                description: "Border styling for the circle indicator"
            },
            {
                name: "indicatorColour",
                type: "Colour",
                description: "Inner colour of the radio indicator when checked"
            },
            {
                name: "indicatorSize",
                type: `"sm" | "md" | "lg"`,
                description: "Size of the radio indicator"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding for radio item"
            },
            {
                name: "selectedColour",
                type: "Colour",
                description: "Background colour when selected"
            },
            {
                name: "shadow",
                type: "Shadow",
                description: "Shadow styling for radio item container"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour for the label"
            },
            {
                name: "value",
                type: "string",
                description: "Unique value used to determine if this item is selected"
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
                name: "Text Area Borders",
                description: "",
                demo: <TextAreaBorders/>,
                code: textAreaBordersCode
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
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "placeholder",
                type: "{ placeholder: string; colour: Colour type }",
                description: "Placeholder text and its colour"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour of the text area content"
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
                name: "duration",
                type: "number",
                description: "Duration of toast visibility in ms"
            },
            {
                name: "onHide",
                type: "Function",
                description: "Callback when the toast hides (triggered after duration)"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "scale",
                type: "0 | 1 | 2 | 3 | 4 | 5",
                description: "Initial transform scale animation when showing"
            },
            {
                name: "shadow",
                type: "Shadows",
                description: "Shadow intensity style"
            },
            {
                name: "show",
                type: "boolean",
                description: "Controls whether the toast is visible"
            },
            {
                name: "size",
                type: `"small" | "medium" | "large"`,
                description: "Sizing of the toast"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Text colour"
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
                description: "",
                demo: <ToggleColours/>,
                code: toggleColoursCode
            },
        ],
        props: [
            {
                name: "border",
                type: "Border",
                description: "Border styling"
            },
            {
                name: "hoverShadow",
                type: "Shadow",
                description: "Shadow styling when hovering"
            },
            {
                name: "onToggle",
                type: "Function",
                description: "Callback fired when the toggle state changes"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "size",
                type: `"small" | "medium" | "large"`,
                description: "Size of the toggle"
            },
            {
                name: "toggledColour",
                type: "Colour",
                description: "Background colour when toggled on"
            },
            {
                name: "untoggledColour",
                type: "Colour",
                description: "Background colour when toggled off"
            }
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
        props: [
            {
                name: "colour",
                type: "Colour",
                description: "Background colour"
            },
            {
                name: "content",
                type: "string",
                description: "Text displayed in the tooltip"
            },
            {
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "placement",
                type: `"top" | "bottom" | "left" | "right"`,
                description: "Tooltip position relative to trigger element"
            },
            {
                name: "round",
                type: "Round",
                description: "Border rounding"
            },
            {
                name: "scale",
                type: "0 | 1 | 2 | 3 | 4 | 5",
                description: "Scaling in show/hide animations"
            },
            {
                name: "size",
                type: `"sm" | "md" | "lg"`,
                description: "Tooltip size"
            },
            {
                name: "textColour",
                type: "Colour type",
                description: "Tooltip text colour"
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
        props: [
            {
                name: "bold",
                type: "0 | 1 | 2 | 3 | 4",
                description: "Font boldness level"
            },
            {
                name: "colour",
                type: "Colour type",
                description: "Text colour"
            },
            {
                name: "font",
                type: "string",
                description: "Font class"
            },
            {
                name: "size",
                type: "0 - 11",
                description: "Text size"
            },
            {
                name: "type",
                type: `"p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"`,
                description: "HTML tag to render"
            }
        ]
    },
];
