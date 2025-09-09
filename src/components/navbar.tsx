"use client";
import Link from "next/link";
import { Urbanist } from 'next/font/google';
import { Sun } from 'lucide-react';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    return (
        <nav className="mx-auto fixed top-3 w-full max-w-screen-xl mx-auto z-50 backdrop-blur-2xl border border-1 border-gray-300 rounded-lg">

            <div className="flex items-center justify-between mx-auto px-2 py-1">
                    <div className="flex flex-row justify-center items-center gap-6">
                        <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                            <li className="">
                                <Link href="/" className={`${urbanist.className} text-3xl bg-gradient-to-r from-sky-500 via-sky-500 to-red-500 
                                    text-transparent bg-clip-text group block px-5 py-2`}> LandUI </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-3">
                        <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                            <li className="">
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href="/components" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Components </a>
                                </div>
                            </li>
                            <li className="">
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href="/" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Templates </a>
                                </div>
                            </li>
                            <li className="">
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <a href="/" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> GitHub </a>
                                </div>
                            </li>
                            <li className="">
                                <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                    <button className="px-2 py-2">
                                        <Sun className="text-gray-600" size={21}/>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

        </nav>
    )
}
