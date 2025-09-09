"use client";
import Image from "next/image";
import { Urbanist } from 'next/font/google';
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <Navbar/>

      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">

        <div className="flex flex-col gap-5">
          <h1 className={`${urbanist.className} text-7xl text-gray-800`}>
            Build your next project <br/> faster with <span className="bg-gradient-to-r from-sky-500 via-sky-500 to-red-500 text-transparent bg-clip-text leading-relaxed">LandUI</span>
          </h1>

          <p className={`${urbanist.className} text-3xl text-gray-800 leading-10`}>
            50 styled, modern and ready-to-use, <br/> React components to make your website stand out.
          </p>
        </div>

        <Image 
          src="/Computer.png" 
          alt="Computer" 
          width={450} 
          height={450} 
        />



      </div>

      {/* Components section */}
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">
        <div className="flex flex-col gap-10 w-full">
          <h3 className={`${urbanist.className} text-5xl text-gray-800`}> Components </h3>

          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>
            
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>
            
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-25">
                <p className="text-black">H</p>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Card</p>
            </div>
          </div>

        </div>
        
      </div>

    </div>
  );
}
