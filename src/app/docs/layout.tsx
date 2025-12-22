"use client";

import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google";
import { components } from "@/data/components";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

const SIDEBAR_W = 240;
const GAP = 32; // gap-8

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Navbar />

      <div className="mx-auto max-w-screen-xl px-6 pt-28 pb-10 flex">
        
        <aside
          className="fixed top-28 h-[calc(95vh-7rem)] overflow-y-auto pr-2 px-6"
          style={{
            width: SIDEBAR_W,
            left: `max(1.5rem, calc(50% - 640px))`,
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>
                Getting Started
              </p>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Installation
              </Link>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                What is LandUI
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>
                Customization
              </p>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Bold
              </Link>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Borders
              </Link>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Colours
              </Link>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Rounding
              </Link>
              <Link href={`/docs/components/`} className={`${urbanist.className} text-md text-gray-800`}>
                Shadows
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>
                Components
              </p>
              {components.map((c) => (
                <Link
                  key={c.slug}
                  href={`/docs/components/${c.slug}`}
                  className={`${urbanist.className} text-md text-gray-800`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <main
          className="min-w-0"
          style={{ paddingLeft: SIDEBAR_W + GAP }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
