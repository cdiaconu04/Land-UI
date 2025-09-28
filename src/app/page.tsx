"use client";
import Image from "next/image";
import { Urbanist } from 'next/font/google';
import Navbar from "@/components/navbar";
import { ChevronRight } from 'lucide-react';

import Button from "@/components/luicomponents/button";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

function doNothing() {

}

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <Navbar/>

      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">

        <div className="flex flex-col gap-5">
          <h1 className={`${urbanist.className} text-7xl text-gray-800`}>
            Build your next project <br/> faster with <span className="bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text leading-relaxed">LandUI</span>
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
      
      
      {/* Templates section */}
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">
        <div className="flex flex-col gap-10 w-full items-start">
          <h3 className={`${urbanist.className} text-5xl text-gray-800`}> Templates </h3>

          

        </div>
        
      </div>

      {/* Components section */}
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">
        <div className="flex flex-col gap-10 w-full items-start">
          <h3 className={`${urbanist.className} text-5xl text-gray-800`}> Components </h3>

          {/* border border-1 border-gray-300 py-1 pl-3 pr-1 hover:text-white hover:bg-gray-100*/}
          <button className={`${urbanist.className} group flex flex-row gap-1 text-xl items-center justify-center 
            text-gray-800 rounded-lg hover:underline hover:cursor-pointer
            
            `}>
            Docs
            <ChevronRight className="group text-gray-800 transition duration-200 group-hover:translate-x-1.5" size={20}/>
          </button>

          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-center items-center border border-1 border-gray-300 rounded-lg py-23.5">
                <Button label="Button" colour="blue" onClick={() => doNothing}/>
              </div>
              <p className={`${urbanist.className} text-gray-950`}>Button</p>
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

      {/* Call to action */}
      <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-center items-center bg-white">

        <div className="flex flex-col gap-5 items-center justify-center py-15">

          <div className="flex flex-col gap-5 items-center justify-center p-15 rounded-lg border border-1 border-gray-300">

            <h3 className={`${urbanist.className} text-5xl text-gray-800`}> Start building faster with&nbsp; 
              <span className="bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text leading-relaxed">LandUI</span> 
            </h3>

            <button className={`${urbanist.className} group flex flex-row items-center justify-center gap-1 text-2xl text-gray-800 py-2 px-3 
              bg-gradient-to-r from-sky-300 via-sky-300 to-emerald-300 rounded-lg cursor-pointer
              hover:bg-gradient-to-r hover:from-sky-400 hover:via-sky-400 hover:to-emerald-400 hover:shadow-xl
            `}>
              Get started
              <ChevronRight className="group text-gray-800 transition duration-200 group-hover:translate-x-1" size={20}/>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
