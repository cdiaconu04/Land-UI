import Button from "@/components/luicomponents/button";
import Toast from "@/components/luicomponents/toast";
import Typography from "@/components/luicomponents/typography";
import { useState } from "react";

export function ToastDemo() {
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

