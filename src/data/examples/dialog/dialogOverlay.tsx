"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";
import Card from "@/components/luicomponents/card";
import Dialog from "@/components/luicomponents/dialog";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function DialogBackdropDemo() {
    return (
        <div className="flex flex-row gap-5">
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
                        <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={2}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography type="p" colour="black" bold={1} size={3} font={urbanist.className}>
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
                            <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>

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
                        <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={3}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography type="p" colour="black" bold={1} size={3} font={urbanist.className}>
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
                            <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>

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
                        <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={4}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography type="p" colour="black" bold={1} size={3} font={urbanist.className}>
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
                            <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>

            
        </div>
    );
}

export const dialogBackdropCode = 
`"use client";

import React from "react";
import Button from "@/components/luicomponents/button";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";
import Card from "@/components/luicomponents/card";
import Dialog from "@/components/luicomponents/dialog";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function DialogBackdropDemo() {
    return (
        <div className="flex flex-row gap-5">
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
                            font={urbanist.className}
                        >
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={2}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography 
                            type="p" 
                            colour="black" 
                            bold={1} 
                            size={3} 
                            font={urbanist.className}
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
                                font={urbanist.className}
                            >
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>

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
                            font={urbanist.className}
                        >
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={3}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography 
                            type="p" 
                            colour="black" 
                            bold={1} 
                            font={urbanist.className}
                        >
                            Open Dialog
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
                                font={urbanist.className}
                            >
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>

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
                        <Typography type="p" colour="black" bold={1} font={urbanist.className}>
                            Open Dialog
                        </Typography>
                    </Button>
                )}
                backdrop={4}
            >
                {(close) => (
                    <Card
                        colour={{ type: "filled", colour: "white" }}
                        round={2}
                        shadow={2}
                        className="p-7 gap-4"
                    >
                        <Typography 
                            type="p" 
                            colour="black" 
                            bold={1} 
                            size={3} 
                            font={urbanist.className}
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
                                font={urbanist.className}
                            >
                                Close
                            </Typography>
                        </Button>
                    </Card>
                )}
            </Dialog>
        </div>
    );
}`

