"use client";
import Button from "@/components/luicomponents/button";
import Input from "@/components/luicomponents/input";
import Navbar from "@/components/luicomponents/navbar";
import Toast from "@/components/luicomponents/toast";
import Toggle from "@/components/luicomponents/toggle";
import Tooltip from "@/components/luicomponents/tooltip";
import Link from "next/link";
import { Urbanist } from 'next/font/google';
import { useState } from "react";

function doNothing() {

}

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Test() {
    const [showToast, setShowToast] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <div className="bg-white flex flex-col items-center justify-center">
            <Navbar type={"default"} sticky={false} colour={{ type: "filled", colour: "white" }}>
            <div className="flex flex-row justify-center items-center gap-6">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="">
                            <Link href="/" className={`${urbanist.className} text-3xl bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 
                                text-transparent bg-clip-text group block px-5 py-2`}> LandUI </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row justify-center items-center gap-3">
                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="">
                            <div className="group hover:bg-gray-100 rounded-lg transition duration-200">
                                <a href="/docs" className={`${urbanist.className} group block px-3 py-2 text-md text-gray-800`}> Components </a>
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
                                    
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

            </Navbar>


            <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-col gap-5 justify-center items-center bg-white">
                {/* <Button label="Button" hoverShadow={true} onClick={() => doNothing}/>

                <Input /> */}

                <Button onClick={() => setShowToast(true)}>Test Toast</Button>


                <Toggle onToggle={(isToggled) => console.log('Toggle:', isToggled)}>Test Toggle</Toggle>

                <Tooltip content={"hh"}>
                    <p className={`text-black ${urbanist.className}`}>h</p>
                </Tooltip>

                <Toast message="This is a test toast!" show={showToast} onHide={() => setShowToast(false)} />
                
            </div>
        </div>
    )
}
