"use client"

import Badge from "@/components/luicomponents/badge";
import Button from "@/components/luicomponents/button";
import Input from "@/components/luicomponents/input";
import { RadioGroup } from "@/components/luicomponents/radioGroup";
import { RadioItem } from "@/components/luicomponents/radioItem";
import TextArea from "@/components/luicomponents/textArea";
import Toast from "@/components/luicomponents/toast";
import Tooltip from "@/components/luicomponents/tooltip";
import Typography from "@/components/luicomponents/typography";
import { useState, type ReactNode } from "react";

export type DocsComponent = {
  name: string;
  slug: string;
  demo: ReactNode;
};

function ToastDemo() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <Button 
                onClick={() => setShowToast(true)} 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    Click me
                </Typography>
            </Button>

            <Toast
                show={showToast}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                onHide={() => setShowToast(false)}
            >
                <Typography type="p" colour="black" bold={2}>
                    Here's a toast!
                </Typography>
            </Toast>
        </div>
    );
}

export default function RadioGroupDemo() {
    const [plan, setPlan] = useState("free");

    return (
        <RadioGroup
            name="plan"
            value={plan}
            onChange={setPlan}
            direction="col"
        >
            <RadioItem
                value="free"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography type="p" colour="black" bold={1} size={2}>
                    Free
                </Typography>
            </RadioItem>

            <RadioItem
                value="plus"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}

                indicatorColour={{ type: "filled", colour: "black" }}
                indicatorSize="md"
            >
                <Typography type="p" colour="black" bold={1} size={2}>
                    Plus
                </Typography>
            </RadioItem>

            <RadioItem
                value="enterprise"
                colour={{ type: "filled", colour: "white" }}
                selectedColour={{
                    type: "gradient",
                    colourFrom: "lightSky",
                    colourVia: "lightSky",
                    colourTo: "lightEmerald",
                }}
                round={2}
                indicatorColour={{ type: "filled", colour: "black" }}
            >
                <Typography type="p" colour="black" bold={1} size={2}>
                    Enterprise
                </Typography>
            </RadioItem>
        </RadioGroup>
    )
}

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        slug: "accordion",
        demo: <div/>,
    },
    { 
        name: "Avatar", 
        slug: "avatar",
        demo: <div/>,
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
        demo: <div/>, 
    },
    { 
        name: "Input", 
        slug: "input",
        demo:   <Input
                    colour="white"
                    textColour="black"
                    placeholder={{ placeholder: "Email Address", colour: "default" }}
                    border={{ type: 1, colour: "sky" }}
                    round={2}
                />, 
    },
    { 
        name: "Navbar", 
        slug: "navbar",
        demo: <div/>, 
    },
    { 
        name: "Number Select", 
        slug: "number-select",
        demo: <div/>,
    },
    { 
        name: "Radio Group", 
        slug: "radio-group",
        demo: <RadioGroupDemo/>, 
    },
    { 
        name: "Text Area", 
        slug: "textarea",
        demo:   <TextArea
                    colour="white"
                    textColour="black"
                    placeholder={{ placeholder: "What do you think?", colour: "default" }}
                    border={{ type: 1, colour: "sky" }}
                    round={2}
                />, 
    },
    { 
        name: "Toast", 
        slug: "toast",
        demo:   <ToastDemo/>
    },
    { 
        name: "Toggle", 
        slug: "toggle",
        demo: <div/>, 
    },
    { 
        name: "Tooltip", 
        slug: "tooltip",
        demo: 
            <Tooltip
                content="Tooltip"
                placement="bottom"
                size="md"
                colour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                scale={5}
            >
                <Button
                    onClick={() => {}}
                    colour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                >
                    <Typography type="p" colour="black" bold={1}>
                        Hover me
                    </Typography>
                </Button>
            </Tooltip>, 
    },
    { 
        name: "Typography", 
        slug: "typography",
        demo:   <Typography 
                    type="p" 
                    colour="black" 
                    size={4}
                    bold={2}
                >
                    Typography.
                </Typography>, 
    },
];
