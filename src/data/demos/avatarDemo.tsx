import Avatar from "@/components/luicomponents/avatar";

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
      />
    </div>
  );
}
