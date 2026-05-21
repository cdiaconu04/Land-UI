"use client"

import Button from "@/components/luicomponents/button";
import Toast from "@/components/luicomponents/toast";
import Typography from "@/components/luicomponents/typography";
import { useState } from "react";

export function ToastScaleDemo() {
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
                scale={3}
            >
                <Typography type="p" colour="black" bold={1}>
                    Here&apos;s a toast!
                </Typography>
            </Toast>
        </div>
    );
}

export const toastScaleCode =
`"use client"

import Button from "@/components/luicomponents/button";
import Toast from "@/components/luicomponents/toast";
import Typography from "@/components/luicomponents/typography";
import { useState } from "react";

export function ToastScaleDemo() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <Button 
                onClick={() => setShowToast(true)} 
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Click me
                </Typography>
            </Button>

            <Toast
                show={showToast}
                colour={{
                    type: "gradient", 
                    colourFrom: "lightSky", 
                    colourVia: "lightSky", 
                    colourTo: "lightEmerald"
                }}
                onHide={() => setShowToast(false)}
                scale={3}
            >
                <Typography 
                    type="p" 
                    colour="black" 
                    bold={1}
                >
                    Here&apos;s a toast!
                </Typography>
            </Toast>
        </div>
    );
}                                                                                                                `
