"use client";
import Link from "next/link";
import { Urbanist } from 'next/font/google';
import { Sun, Github, Menu } from 'lucide-react';
import { components } from "@/data/components";
import { useState } from "react";

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 md:px-6">
            <nav className="bg-white/70 backdrop-blur-2xl w-full max-w-screen-xl mx-auto border border-1 border-gray-300 rounded-lg">

                <div className="flex items-center justify-between px-2 sm:px-3 py-1">
                    <div className="flex flex-row justify-center items-center">
                        <Link href="/" className={`${urbanist.className} group md:text-3xl text-2xl bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500
                            text-transparent bg-clip-text block px-3 sm:px-5 py-2`}> LandUI

                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-800 h-0.5
                                bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500"/>
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-row justify-center items-center gap-1 lg:gap-3">
                        <ul className="font-medium flex flex-row space-x-1 lg:space-x-2 rtl:space-x-reverse">
                            <li>
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href="/docs/getting-started/installation/" className={`${urbanist.className} group block px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-800`}> Getting Started </a>
                                </div>
                            </li>

                            <li>
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href="/docs/customization/borders/" className={`${urbanist.className} group block px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-800`}> Customization </a>
                                </div>
                            </li>

                            <li>
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href={`/docs/components/${components[0].slug}`} className={`${urbanist.className} group block px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-800`}> Components </a>
                                </div>
                            </li>

                            <li>
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a target="_blank" href="https://github.com/cdiaconu04/Land-UI" className={`${urbanist.className} group block px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-800`}> GitHub </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="text-gray-700" size={24}/>
                    </button>

                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 px-2 py-2">
                        <ul className="font-medium flex flex-col space-y-1">
                            <li>
                                <a href="/docs/getting-started/installation/" className={`${urbanist.className} block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200`}> Getting Started </a>
                            </li>
                            <li>
                                <a href="/docs/customization/borders/" className={`${urbanist.className} block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200`}> Customization </a>
                            </li>
                            <li>
                                <a href={`/docs/components/${components[0].slug}`} className={`${urbanist.className} block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200`}> Components </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/cdiaconu04/Land-UI" className={`${urbanist.className} block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200`}> GitHub </a>
                            </li>
                        </ul>
                    </div>
                )}

            </nav>
        </div>
    )
}
