import CodeBlock from '@/components/codeBlock';
import { RoundingLevels, roundingLevelsCode } from '@/data/customization/rounding/rounding';

export default function Rounding() {
    return (
        <div className="bg-white flex flex-col gap-8 sm:gap-10 w-full">

            <div className="flex flex-col gap-2 w-full">
                <p className="text-2xl sm:text-3xl text-gray-800"> Rounding </p>
                <p className="text-base sm:text-lg text-gray-800"> Some LandUI components require you to pass a Rounding prop. This documentation will show you how to use it.</p>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Rounding levels </p>

                <div className="flex flex-col gap-2 w-full">
                    <p className="text-base sm:text-lg text-gray-800">
                        There are 5 different levels to the shadow prop, which are shown here.
                    </p>

                    <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                        <RoundingLevels/>
                    </div>
                    <CodeBlock code={roundingLevelsCode ?? ""}/>
                </div>
            </div>

        </div>
    )
}
