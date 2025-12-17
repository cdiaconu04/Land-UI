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
import { InputDemo } from "./demos/inputDemo";
import { TextAreaDemo } from "./demos/textAreaDemo";
import { ToolTipDemo } from "./demos/tooltipDemo";
import { TypographyDemo } from "./demos/typographyDemo";

export type DocsComponent = {
  name: string;
  slug: string;
  demo: ReactNode;
};

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        slug: "accordion",
        demo: <div/>,
    },
    { 
        name: "Avatar", 
        slug: "avatar",
        demo: <AvatarDemo/>,
    },
    {                                                           
        name: "Badge", 
        slug: "badge",
        demo:   <Badge 
                    colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                    size="md"
                >
                    <Typography type="p" colour="black" bold={1}>
                        New
                    </Typography>
                </Badge>,
    },
    { 
        name: "Button", 
        slug: "button",
        demo:   <Button 
                    onClick={() => {}} 
                    colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                >
                    <Typography type="p" colour="black" bold={1}>Button</Typography>
                </Button>, 
    },
    { 
        name: "Card", 
        slug: "card",
        demo: <div/>, 
    },
    { 
        name: "Checkbox", 
        slug: "checkbox",
        demo: <div/>, 
    },
    { 
        name: "Dialog", 
        slug: "dialog",
        demo: <div/>,
    },
    { 
        name: "Drawer", 
        slug: "drawer",
        demo: <div/>, 
    },
    { 
        name: "Dropdown", 
        slug: "dropdown",
        demo: <DropDownDemo/>, 
    },
    { 
        name: "Input", 
        slug: "input",
        demo:   <InputDemo/>, 
    },
    { 
        name: "Navbar", 
        slug: "navbar",
        demo: <div/>, 
    },
    { 
        name: "Number Input", 
        slug: "number-input",
        demo: <NumberInputDemo/>,
    },
    { 
        name: "Radio Group", 
        slug: "radio-group",
        demo: <RadioGroupDemo/>, 
    },
    { 
        name: "Text Area", 
        slug: "textarea",
        demo: <TextAreaDemo/>, 
    },
    { 
        name: "Toast", 
        slug: "toast",
        demo:   <ToastDemo/>
    },
    { 
        name: "Toggle", 
        slug: "toggle",
        demo: <ToggleDemo/>, 
    },
    { 
        name: "Tooltip", 
        slug: "tooltip",
        demo: <ToolTipDemo/>, 
    },
    { 
        name: "Typography", 
        slug: "typography",
        demo:  <TypographyDemo/>, 
    },
];
