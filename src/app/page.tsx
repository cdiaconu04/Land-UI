"use client";
import Image from "next/image";
import { Urbanist } from 'next/font/google';
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className="bg-white flex items-center justify-center">
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
      </div>

    </div>
  );
}
