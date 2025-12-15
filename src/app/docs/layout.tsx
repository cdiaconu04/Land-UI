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
    <div className="bg-white flex flex-col items-center justify-center py-28">
        <Navbar/>

        <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row bg-white">
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2 justify-start items-start">
                    <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}> Components </p>
                    
                    {components.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/docs/components/${c.slug}`}
                          className={`${urbanist.className} text-md text-gray-800`}
                        > 
                          {c.name}
                        </Link>

                        // <p key={c.slug} className={`${urbanist.className} text-md text-gray-800`}> {c.name} </p>
                      ))
                    }
                </div>

                <div className="col-span-3">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
}
