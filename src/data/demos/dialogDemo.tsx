"use client";

import React, { useState } from "react";
import Dialog from "@/components/luicomponents/dialog";
import Card from "@/components/luicomponents/card";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function DialogDemo() {
    return (
        <Dialog
            trigger={(open) => (
                <Button
                    onClick={open}
                    colour={{
                        type: "gradient",
                        colourFrom: "lightSky",
                        colourVia: "lightSky",
                        colourTo: "lightEmerald"
                    }}
                    round={2}
                >
                    <Typography type="p" colour="black" bold={1}>
                        Open Dialog
                    </Typography>
                </Button>
            )}
        >
            {(close) => (
                <Card
                    colour={{ type: "filled", colour: "white" }}
                    round={2}
                    shadow={2}
                    className="p-7 gap-4"
                >
                    <Typography type="p" colour="black" bold={1} size={3}>
                        Here is a Dialog.
                    </Typography>

                    <Button
                        onClick={close}
                        colour={{
                            type: "gradient",
                            colourFrom: "lightSky",
                            colourVia: "lightSky",
                            colourTo: "lightEmerald"
                        }}
                        round={2}
                    >
                        <Typography type="p" colour="black" bold={1}>
                            Close
                        </Typography>
                    </Button>
                </Card>
            )}
        </Dialog>
    );
}

export const dialogDemoCode =
`"use client";

import React, { useState } from "react";
import Dialog from "@/components/luicomponents/dialog";
import Card from "@/components/luicomponents/card";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";

export function DialogDemo() {
    return (
        <Dialog
            trigger={(open) => (
                <Button
                    onClick={open}
                    colour={{
                        type: "gradient", 
                        colourFrom: "lightSky", 
                        colourVia: "lightSky", 
                        colourTo: "lightEmerald"
                    }}
                    round={2}
                >
                    <Typography 
                        type="p" 
                        colour="black" 
                        bold={1} 
                    >
                        Open Dialog
                    </Typography>
                </Button>
            )}
        >
            {(close) => (
                <Card
                    colour={{ 
                        type: "filled", 
                        colour: "white" 
                    }}
                    round={2}
                    shadow={2}
                    className="p-7 gap-4"
                >
                    <Typography 
                        type="p" 
                        colour="black" 
                        bold={1} 
                        size={3} 
                    >
                        Here is a Dialog.
                    </Typography>

                    <Button
                        onClick={close}
                        colour={{
                            type: "gradient", 
                            colourFrom: "lightSky", 
                            colourVia: "lightSky", 
                            colourTo: "lightEmerald"
                        }}
                        round={2}
                    >
                        <Typography 
                            type="p" 
                            colour="black" 
                            bold={1} 
                        >
                            Close
                        </Typography>
                    </Button>
                </Card>
            )}
        </Dialog>
    );
}                                                                                                                `
