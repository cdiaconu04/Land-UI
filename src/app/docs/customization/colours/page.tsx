"use client"

import { Urbanist } from 'next/font/google';
import CodeBlock from '@/components/codeBlock';

import { Filled, filledCode } from '@/data/customization/colours/filled';
import { Gradient1, gradient1Code } from '@/data/customization/colours/gradient1';
import { Gradient2, gradient2Code } from '@/data/customization/colours/gradient2';

import { colourMap } from '@/components/luicomponents/constants/constants';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Colours() {
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            <div className="col-span-4 flex flex-col gap-10 min-w-full items-start justify-top">
                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-3xl text-gray-800`}> Colours </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> Most LandUI components require you to pass a Colour prop. This documentation will show you how to use it.</p>
                </div>

                
                <div className="flex flex-col gap-4 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Types </p>

                    <div className="flex flex-col gap-2 w-full">
                        
                        <p className={`${urbanist.className} text-lg text-gray-800`}> 
                            The Colour prop accepts one of two types: "filled" or "gradient".
                        </p>
                        <p className={`${urbanist.className} text-lg text-gray-800`}> 
                            For "filled", you must pass in a string sub-prop with the name of the colour you want.
                        </p>
                        <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                            <Filled/>
                        </div>
                        <CodeBlock code={filledCode ?? ""}/>
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full">
                        <p className={`${urbanist.className} text-lg text-gray-800`}> 
                            For "gradient", you must pass in a at least two string sub-props with the names of the colours you want.
                        </p>
                        <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                            <Gradient1/>
                        </div>
                        <CodeBlock code={gradient1Code ?? ""}/>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <p className={`${urbanist.className} text-lg text-gray-800`}> 
                            You can also have a third string sub-prop if you want three colours in the gradient.
                        </p>
                        <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                            <Gradient2/>
                        </div>
                        <CodeBlock code={gradient2Code ?? ""}/>
                    </div>

                    
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Available Colours </p>
                    
                    <div className="grid grid-cols-7 gap-5 w-full border border-1 border-gray-300 rounded-lg px-2 py-3">
                        {Object.entries(colourMap).map(([name, className]) => (
                            <div
                                key={name}
                                className="flex flex-col items-center gap-1"
                            >
                                <div
                                    className={`${className} w-16 h-16 border border-1 border-gray-300 rounded-lg`}
                                />
                                <p className={`${urbanist.className} text-sm text-gray-800`}>
                                    {name}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


            {/* Right sidebar */}
            {/* <div className="flex flex-col gap-2 fixed top-28 right-95">
                <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>On this page</p>
            </div> */}
        </div>
    )
}
