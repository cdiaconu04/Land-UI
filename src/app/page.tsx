"use client";
import Image from "next/image";
import { Urbanist } from 'next/font/google';
import Navbar from "@/components/navbar";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import Button from "@/components/luicomponents/button";
import Badge from "@/components/luicomponents/badge";
import Typography from "@/components/luicomponents/typography";
import { components } from "@/data/components";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className="min-h-screen w-full mx-auto px-6 flex flex-col justify-between items-center bg-white">
      <Navbar/>

      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">

        <div className="flex flex-col gap-5">
          <h1 className={`${urbanist.className} text-7xl text-gray-800`}>
            Build your next project <br/> faster with <span className="bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text leading-relaxed">LandUI</span>
          </h1>

          <p className={`${urbanist.className} text-3xl text-gray-800 leading-10`}>
            17 modern and customizable, <br/> React components to make your website stand out.
          </p>
        </div>

        <Image 
          src="/Computer.png" 
          alt="Computer" 
          width={450} 
          height={450} 
          className="hover:scale-101 transition duration-500"
        />

      </div>

      {/* Components section */}
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">
        <div className="flex flex-col gap-10 w-full items-start">
          <h3 className={`${urbanist.className} text-5xl text-gray-800`}> Components </h3>

          {/* border border-1 border-gray-300 py-1 pl-3 pr-1 hover:text-white hover:bg-gray-100*/}
          <Link href={`/docs/components/${components[0].slug}`} className={`${urbanist.className} group flex flex-row gap-1 text-xl items-center justify-center 
            text-gray-800 rounded-lg hover:underline hover:cursor-pointer
            
            `}>
            Docs
            <ChevronRight className="group text-gray-800 transition duration-200 group-hover:translate-x-1.5" size={20}/>
          </Link>

          <div className="grid grid-cols-4 gap-5 w-full h-full items-stretch auto-rows-fr">
            {components.map((c) => (
              <div key={c.slug} className="w-full flex flex-col gap-2 group">
                <div className="flex h-full justify-center items-center border border-1 border-gray-300 rounded-lg py-13 px-5 bg-white group-hover:shadow-md duration transition-200 overflow-hidden">
                  {c.demo}
                </div>
                
                <Link href={`/docs/components/${c.slug}`} className="w-fit group/arrow flex flex-row items-center justify-center">
                  <p className={`${urbanist.className} text-gray-950 group-hover/arrow:underline`}>{c.name}</p>
                  <ChevronRight className="group text-gray-800 transition duration-200 group-hover/arrow:translate-x-1.5" size={17}/>
                </Link>
                
              </div>
            ))}

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

            <Link href={'/docs/getting-started/installation'} className={`${urbanist.className} group flex flex-row items-center justify-center gap-1 text-2xl text-gray-800 py-2 px-3 
              bg-gradient-to-r from-sky-300 via-sky-300 to-emerald-300 rounded-lg cursor-pointer
              hover:bg-gradient-to-r hover:from-sky-400 hover:via-sky-400 hover:to-emerald-400 hover:shadow-xl
            `}>
              Get started
              <ChevronRight className="group text-gray-800 transition duration-200 group-hover:translate-x-1" size={20}/>
            </Link>

          </div>

        </div>

      </div>

    </div> 
  );
}
