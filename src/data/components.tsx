"use client"

import Badge from "@/components/luicomponents/badge";
import Button from "@/components/luicomponents/button";
import Dropdown from "@/components/luicomponents/dropdown";
import Input from "@/components/luicomponents/input";
import { RadioGroup } from "@/components/luicomponents/radioGroup";
import { RadioItem } from "@/components/luicomponents/radioItem";
import TextArea from "@/components/luicomponents/textArea";
import Toast from "@/components/luicomponents/toast";
import Tooltip from "@/components/luicomponents/tooltip";
import Typography from "@/components/luicomponents/typography";

import { AvatarDemo } from "./demos/avatarDemo";
import { DropDownDemo } from "./demos/dropDownDemo";
import { NumberInputDemo } from "./demos/numberInputDemo";
import { RadioGroupDemo } from "./demos/radioGroupDemo";
import { ToastDemo } from "./demos/toastDemo";
import { ToggleDemo } from "./demos/toggleDemo";

import { type ReactNode } from "react";
import Avatar from "@/components/luicomponents/avatar";
import { CheckboxDemo } from "./demos/checkboxDemo";
import { InputDemo } from "./demos/inputDemo";
import { TextAreaDemo } from "./demos/textAreaDemo";
import { ToolTipDemo } from "./demos/tooltipDemo";
import { TypographyDemo } from "./demos/typographyDemo";
import { DialogDemo } from "./demos/dialogDemo";

type Example = {
    name: string;
    description: string;
    demo: ReactNode;
    code: string; 
}

export type DocsComponent = {
    name: string;
    description: string;
    slug: string;
    demo: ReactNode;
    examples: Example[];
};

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        description: "",
        slug: "accordion",
        demo: <div/>,
        examples: []
    },
    { 
        name: "Avatar", 
        description: "",
        slug: "avatar",
        demo: <AvatarDemo/>,
        examples: []
    },
    {                                                           
        name: "Badge", 
        description: "",
        slug: "badge",
        demo:   <Badge 
                    colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                    size="md"
                >
                    <Typography type="p" colour="black" bold={1}>
                        New
                    </Typography>
                </Badge>,
        examples: []
    },
    { 
        name: "Button",
        description: "Simple button component for your project.", 
        slug: "button",
        demo:   <Button 
                    onClick={() => {}} 
                    colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                >
                    <Typography type="p" colour="black" bold={1}>Button</Typography>
                </Button>, 
        examples: []
    },
    { 
        name: "Card", 
        description: "",
        slug: "card",
        demo: <div/>,
        examples: [] 
    },
    { 
        name: "Checkbox", 
        description: "",
        slug: "checkbox",
        demo: <CheckboxDemo/>, 
        examples: []
    },
    { 
        name: "Dialog", 
        description: "",
        slug: "dialog",
        demo: <DialogDemo/>,
        examples: []
    },
    { 
        name: "Dropdown", 
        description: "",
        slug: "dropdown",
        demo: <DropDownDemo/>, 
        examples: []
    },
    { 
        name: "Input", 
        description: "",
        slug: "input",
        demo:   <InputDemo/>, 
        examples: []
    },
    { 
        name: "Navbar", 
        description: "",
        slug: "navbar",
        demo: <div/>, 
        examples: []
    },
    { 
        name: "Number Input", 
        description: "",
        slug: "number-input",
        demo: <NumberInputDemo/>,
        examples: []
    },
    { 
        name: "Radio Group", 
        description: "",
        slug: "radio-group",
        demo: <RadioGroupDemo/>, 
        examples: []
    },
    { 
        name: "Text Area", 
        description: "",
        slug: "textarea",
        demo: <TextAreaDemo/>, 
        examples: []
    },
    { 
        name: "Toast", 
        description: "",
        slug: "toast",
        demo:   <ToastDemo/>,
        examples: []
    },
    { 
        name: "Toggle", 
        description: "",
        slug: "toggle",
        demo: <ToggleDemo/>, 
        examples: []
    },
    { 
        name: "Tooltip", 
        description: "",
        slug: "tooltip",
        demo: <ToolTipDemo/>,
        examples: [] 
    },
    { 
        name: "Typography", 
        description: "",
        slug: "typography",
        demo:  <TypographyDemo/>, 
        examples: []
    },
];
