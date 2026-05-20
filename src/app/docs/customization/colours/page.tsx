"use client"

import CodeBlock from '@/components/codeBlock';

import { Filled, filledCode } from '@/data/customization/colours/filled';
import { Gradient1, gradient1Code } from '@/data/customization/colours/gradient1';
import { Gradient2, gradient2Code } from '@/data/customization/colours/gradient2';

import { colourMap } from '@/components/luicomponents/constants/constants';

export default function Colours() {
    return (
        <div className="bg-white flex flex-col gap-8 sm:gap-10 w-full">

            <div className="flex flex-col gap-2 w-full">
                <p className="text-2xl sm:text-3xl text-gray-800"> Colours </p>
                <p className="text-base sm:text-lg text-gray-800"> Most LandUI components require you to pass a Colour prop. This documentation will show you how to use it.</p>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Types </p>

                <div className="flex flex-col gap-2 w-full">
                    <p className="text-base sm:text-lg text-gray-800">
                        The Colour prop accepts one of two types: "filled" or "gradient".
                    </p>
                    <p className="text-base sm:text-lg text-gray-800">
                        For "filled", you must pass in a string sub-prop with the name of the colour you want.
                    </p>
                    <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                        <Filled/>
                    </div>
                    <CodeBlock code={filledCode ?? ""}/>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <p className="text-base sm:text-lg text-gray-800">
                        For "gradient", you must pass in at least two string sub-props with the names of the colours you want.
                    </p>
                    <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                        <Gradient1/>
                    </div>
                    <CodeBlock code={gradient1Code ?? ""}/>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <p className="text-base sm:text-lg text-gray-800">
                        You can also have a third string sub-prop if you want three colours in the gradient.
                    </p>
                    <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                        <Gradient2/>
                    </div>
                    <CodeBlock code={gradient2Code ?? ""}/>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Available Colours </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-5 w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-4 sm:py-5">
                    {Object.entries(colourMap).map(([name, className]) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-1"
                        >
                            <div
                                className={`${className} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-gray-300 rounded-lg`}
                            />
                            <p className="text-xs sm:text-sm text-gray-800 text-center">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
