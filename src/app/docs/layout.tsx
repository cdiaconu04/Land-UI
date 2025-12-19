"use client"
import Navbar from "@/components/navbar";
import { Urbanist } from 'next/font/google';
import { components } from "@/data/components";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white flex flex-col items-center py-28">
      <Navbar/>

      <div className="h-[calc(100vh-7rem)] w-full max-w-screen-xl mx-auto px-6 flex bg-white">

        <div className="grid w-full h-full gap-8 grid-cols-[240px_1fr]">
              
          <div className="flex flex-col gap-4 justify-start items-start h-full overflow-y-auto pr-15">

            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}> Getting Started </p>

              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  Installation
              </Link>
              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  What is LandUI
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}> Customization </p>
              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  Bold
              </Link>
              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  Borders
              </Link>
              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  Colours
              </Link>
              <Link
                  href={`/docs/components/`}
                  className={`${urbanist.className} text-md text-gray-800`}
                > 
                  Rounding
              </Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}> Components </p>
                    
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

          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
