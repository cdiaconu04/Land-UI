import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarSize() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"sm"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"md"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"lg"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"xl"}
            />
        </div>
    );
}

export const avatarSizeCode = 
`import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarColours() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"sm"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"md"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"lg"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                font={urbanist.className}
                size={"xl"}
            />
        </div>
    );
}                                                                                                                `
