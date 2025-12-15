"use client"

import Badge from "@/components/luicomponents/badge";
import Button from "@/components/luicomponents/button";
import Toast from "@/components/luicomponents/toast";
import Typography from "@/components/luicomponents/typography";
import { useState, type ReactNode } from "react";

export type DocsComponent = {
  name: string;
  slug: string;
  demo: ReactNode;
};

function doNothing() {}

function ToastDemo() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <Button 
                onClick={() => setShowToast(true)} 
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
            >
                <Typography type="p" colour="black" bold={1}>
                    Show Toast
                </Typography>
            </Button>

            <Toast
                show={showToast}
                colour={{type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald"}}
                onHide={() => setShowToast(false)}
            >
                <Typography type="p" colour="black" bold={2}>
                    Show Toast
                </Typography>
            </Toast>
        </div>
    );
}

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        slug: "accordion",
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
                    onClick={() => doNothing()} 
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
        name: "Drawer", 
        slug: "drawer",
        demo: <div/>, 
    },
    { 
        name: "Dropdown Menu", 
        slug: "dropdown-menu",
        demo: <div/>, 
    },
    { 
        name: "Footer", 
        slug: "footer",
        demo: <div/>, 
    },
    { 
        name: "Input", 
        slug: "input",
        demo: <div/>, 
    },
    { 
        name: "Navbar", 
        slug: "navbar",
        demo: <div/>, 
    },
    { 
        name: "Slider", 
        slug: "slider",
        demo: <div/>, 
    },
    { 
        name: "Toast", 
        slug: "toast",
        demo: <ToastDemo/>
    },
    { 
        name: "Toggle", 
        slug: "toggle",
        demo: <div/>, 
    },
    { 
        name: "Tooltip", 
        slug: "tooltip",
        demo: <div/>, 
    },
    { 
        name: "Typography", 
        slug: "typography",
        demo: <Typography type="p" colour="black" bold={1}>Typography.</Typography>, 
    },
];
