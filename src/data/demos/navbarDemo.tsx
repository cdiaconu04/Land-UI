import NavSection from "@/components/luicomponents/navSection";
import Navbar from "@/components/luicomponents/navbar";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function NavbarDemo() {
    return (
        <Navbar
            border={{ colour: "lightGray", type: 1 }}
            sidePadLevel={3}
            type={"default"}
        >
            <NavSection>
                <Typography type="p" font={urbanist.className} colour="black" bold={1} size={4}>Website</Typography>
            </NavSection>

            <NavSection>
                <Typography type="p" font={urbanist.className} colour="black" bold={1} size={2}>Link</Typography>
            </NavSection>
        </Navbar>
    )
}

export const navbarDemoCode =
`import NavSection from "@/components/luicomponents/navSection";
import Navbar from "@/components/luicomponents/navbar";
import Typography from "@/components/luicomponents/typography";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export function NavbarDemo() {
    return (
        <Navbar
            border={{ colour: "lightGray", type: 1 }}
            sidePadLevel={3}
            type={"default"}
        >
            <NavSection>
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1} 
                    size={4}
                >
                    Website
                </Typography>
            </NavSection>

            <NavSection>
                <Typography 
                    type="p" 
                    font={urbanist.className} 
                    colour="black" 
                    bold={1} 
                    size={2}
                >
                    Link
                </Typography>
            </NavSection>
        </Navbar>
    )
}                                                                                                                `
