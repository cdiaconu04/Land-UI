import { Urbanist } from 'next/font/google';
import { ShadowLevels, shadowLevelsCode } from '@/data/customization/shadows/shadowLevels';
import CodeBlock from '@/components/codeBlock';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Shadows() {
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            <div className="col-span-4 flex flex-col gap-10 min-w-full items-start justify-top">

                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-3xl text-gray-800`}> Shadows </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> Some LandUI components require you to pass a Shadow prop. This documentation will show you how to use it.</p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Shadow levels </p>

                    <div className="flex flex-col gap-2 w-full">
                        <p className={`${urbanist.className} text-lg text-gray-800`}> 
                            There are 5 different levels to the shadow prop, which are shown here.
                        </p>

                        <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                            <ShadowLevels/>
                        </div>
                        <CodeBlock code={shadowLevelsCode ?? ""}/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
