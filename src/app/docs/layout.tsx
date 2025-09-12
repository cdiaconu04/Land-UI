import Navbar from "@/components/navbar";
import { Urbanist } from 'next/font/google';

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
                    <p className={`${urbanist.className} text-md text-gray-800`}> Accordion </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Button </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Card </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Footer </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Form </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Navbar </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Slider </p>
                    <p className={`${urbanist.className} text-md text-gray-800`}> Tooltip </p>
                </div>

                <div className="col-span-3">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
}
