import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";
import type { ReactNode } from "react";

export type DocsComponent = {
  name: string;
  slug: string;
  demo: ReactNode;
};

function doNothing() {}

export const components: DocsComponent[] = [
    { 
        name: "Accordion", 
        slug: "accordion",
        demo: <div/>,
    },
    {                                                           
        name: "Badge", 
        slug: "badge",
        demo: <div/>,
    },
    { 
        name: "Button", 
        slug: "button",
        demo:   <Button onClick={() => doNothing()} colour={{type: "filled"}}>
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
        demo: <div/>, 
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
