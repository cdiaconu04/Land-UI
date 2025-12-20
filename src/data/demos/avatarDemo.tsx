import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar
        src=""
        alt="User avatar"
        round={4}
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

export const avatarDemoCode = 
`import Avatar from "@/components/luicomponents/avatar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar
        src=""
        alt="User avatar"
        round={4}
      />

      <Avatar
        src="h.jpg"
        initials="CD"
        bgColour={{ 
          type: "gradient", 
          colourFrom: "lightSky", 
          colourVia: "lightSky", 
          colourTo: "lightEmerald" 
        }}
        textColour="black"
        round={4}
        font={urbanist.className}
      />
    </div>
  );
}                                                                                                                `
