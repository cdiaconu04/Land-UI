import { Urbanist } from 'next/font/google';
import { BorderWeights, borderWeightsCode } from '@/data/customization/border/borderWeights';
import { BorderColours, borderColoursCode } from '@/data/customization/border/borderColours';
import CodeBlock from '@/components/codeBlock';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Borders() {
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            <div className="col-span-4 flex flex-col gap-10 min-w-full items-start justify-top">
                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-3xl text-gray-800`}> Borders </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> Most LandUI components require you to pass a Border prop. This documentation will show you how to use it.</p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Border Weight </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> 
                        There are 4 border weights to choose from.
                    </p>
                    <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                        <BorderWeights/>
                    </div>
                    <CodeBlock code={borderWeightsCode ?? ""}/>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Border Colours </p>

                    {/* TODO: Add link to colours docs page */}
                    <p className={`${urbanist.className} text-lg text-gray-800`}> 
                        There are plenty of colours to choose from. For the full list, check here. 
                    </p>

                    <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                        <BorderColours/>
                    </div>
                    <CodeBlock code={borderColoursCode ?? ""}/>
                </div>
            </div>
        </div>
    )
}
