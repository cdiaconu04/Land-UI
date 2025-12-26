import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarColours() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "filled", colour: "red" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "filled", colour: "orange" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />
        </div>
    );
}

export const avatarColoursCode = 
`import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarColours() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "filled", colour: "red" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "filled", colour: "orange" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
            />
        </div>
    );
}                                                                                                                `
