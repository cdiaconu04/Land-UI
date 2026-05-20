"use client";

import Navbar from "@/components/navbar";
import { components } from "@/data/components";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const SIDEBAR_W = 240;
const GAP = 32;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const curUrl = usePathname();

  return (
    <div className="bg-white min-h-screen flex items-start">
      <Navbar />

      <div className="mx-auto max-w-screen-xl px-6 pt-28 pb-10 flex">

        <aside
          className="fixed top-28 h-[calc(95vh-7rem)] overflow-y-auto pr-2 px-6"
          style={{
            width: SIDEBAR_W,
            left: `max(1.5rem, calc(50% - 640px))`,
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-md text-gray-800 font-semibold py-1 px-2">
                Getting Started
              </p>
              <Link href={`/docs/getting-started/installation/`} className={`text-md text-gray-800
                rounded-lg transition duration-200 py-1 px-2
                ${curUrl === `/docs/getting-started/installation` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
              `}>
                Installation
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-md text-gray-800 font-semibold py-1 px-2">
                Customization
              </p>
              <Link href={`/docs/customization/borders/`} className={`text-md text-gray-800
                rounded-lg transition duration-200 py-1 px-2
                ${curUrl === `/docs/customization/borders` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
              `}>
                Borders
              </Link>
              <Link href={`/docs/customization/colours/`} className={`text-md text-gray-800
                rounded-lg transition duration-200 py-1 px-2
                ${curUrl === `/docs/customization/colours` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
              `}>
                Colours
              </Link>
              <Link href={`/docs/customization/rounding/`} className={`text-md text-gray-800
                rounded-lg transition duration-200 py-1 px-2
                ${curUrl === `/docs/customization/rounding` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
              `}>
                Rounding
              </Link>
              <Link href={`/docs/customization/shadows/`} className={`text-md text-gray-800
                rounded-lg transition duration-200 py-1 px-2
                ${curUrl === `/docs/customization/shadows` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
              `}>
                Shadows
              </Link>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-md text-gray-800 font-semibold py-1 px-2">
                Components
              </p>
              {components.map((c) => (
                <Link
                  key={c.slug}
                  href={`/docs/components/${c.slug}`}
                  className={`text-md text-gray-800 rounded-lg transition duration-200 py-1 px-2
                    ${curUrl === `/docs/components/${c.slug}` ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-100 "}
                  `}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <main
          className="flex-1 min-w-0"
          style={{ paddingLeft: SIDEBAR_W + GAP }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
