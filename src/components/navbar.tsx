"use client";
import Link from "next/link";
import { Urbanist } from 'next/font/google';
import { Sun, Github } from 'lucide-react';
import { components } from "@/data/components";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    return (
        <nav className="bg-white/70 backdrop-blur-2xl mx-auto fixed top-3 w-full max-w-screen-xl mx-auto z-50 border border-1 border-gray-300 rounded-lg">

            <div className="flex items-center justify-between mx-auto px-2 py-1">
                <div className="flex flex-row justify-center items-center gap-6">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="">
                            <Link href="/" className={`${urbanist.className} group text-3xl bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 
                                text-transparent bg-clip-text group block px-5 py-2`}> LandUI 
                                
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-800 h-0.5
                                    bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500"/>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row justify-center items-center gap-3">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <a href="/docs/getting-started/installation/" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Getting Started </a>
                            </div>
                        </li>

                        <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <a href="/docs/customization/borders/" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Customization </a>
                            </div>
                        </li>

                        <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <a href={`/docs/components/${components[0].slug}`} className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Components </a>
                            </div>
                        </li>
                        
                        <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <a href="/" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> GitHub </a>
                            </div>
                        </li>
                        {/* <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <button className="px-2 py-2">
                                    <Sun className="text-gray-600" size={21}/>
                                </button>
                            </div>
                        </li> */}
                    </ul>
                </div>

            </div>

        </nav>
    )
}
