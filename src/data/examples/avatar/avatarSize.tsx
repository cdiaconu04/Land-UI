import Avatar from "@/components/luicomponents/avatar";

export function AvatarSize() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                size={"sm"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                size={"md"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                size={"lg"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{ type: "gradient", colourFrom: "lightSky", colourVia: "lightSky", colourTo: "lightEmerald" }}
                textColour="black"
                round={4}
                size={"xl"}
            />
        </div>
    );
}

export const avatarSizeCode = 
`import Avatar from "@/components/luicomponents/avatar";

export function AvatarColours() {
    return (
        <div className="flex items-center gap-6">
            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                textColour="black"
                round={4}
                size={"sm"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                textColour="black"
                round={4}
                size={"md"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                textColour="black"
                round={4}
                size={"lg"}
            />

            <Avatar
                src="h.jpg"
                initials="CD"
                bgColour={{
                    type: "gradient", 
                    colourFrom: "sky", 
                    colourVia: "sky", 
                    colourTo: "emerald"
                }}
                textColour="black"
                round={4}
                size={"xl"}
            />
        </div>
    );
}                                                                                                                `
