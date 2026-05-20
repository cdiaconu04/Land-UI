import { BorderWeights, borderWeightsCode } from '@/data/customization/border/borderWeights';
import { BorderColours, borderColoursCode } from '@/data/customization/border/borderColours';
import CodeBlock from '@/components/codeBlock';

export default function Borders() {
    return (
        <div className="bg-white flex flex-col gap-8 sm:gap-10 w-full">

            <div className="flex flex-col gap-2 w-full">
                <p className="text-2xl sm:text-3xl text-gray-800"> Borders </p>
                <p className="text-base sm:text-lg text-gray-800"> Most LandUI components require you to pass a Border prop. This documentation will show you how to use it.</p>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Border Weight </p>
                <p className="text-base sm:text-lg text-gray-800">
                    There are 4 border weights to choose from.
                </p>
                <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                    <BorderWeights/>
                </div>
                <CodeBlock code={borderWeightsCode ?? ""}/>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Border Colours </p>

                {/* TODO: Add link to colours docs page */}
                <p className="text-base sm:text-lg text-gray-800">
                    There are plenty of colours to choose from. For the full list, check here.
                </p>

                <div className="flex h-full w-full justify-center items-center border border-gray-300 rounded-lg py-8 sm:py-10 px-4 sm:px-5">
                    <BorderColours/>
                </div>
                <CodeBlock code={borderColoursCode ?? ""}/>
            </div>

        </div>
    )
}
