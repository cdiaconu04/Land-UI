"use client";
import CodeBlock from "@/components/codeBlock";
import { components } from "@/data/components";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Installation() {
    return (
        <div className="flex flex-col gap-8 sm:gap-10 w-full items-start">

            <div className="flex flex-col gap-2 w-full">
                <p className="text-2xl sm:text-3xl text-gray-800"> Installation </p>
                <p className="text-base sm:text-lg text-gray-800"> Get started by installing LandUI in your project. </p>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Install </p>
                <p className="text-base sm:text-lg text-gray-800"> Run the following command in your React or Next.js project directory. </p>
                <CodeBlock code={`npm install @cdiaconu/land-ui`} />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <p className="text-xl sm:text-2xl text-gray-800"> Start building </p>
                <p className="text-base sm:text-lg text-gray-800"> Kickstart your website with the following components: </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full h-full items-stretch auto-rows-fr">

                    {components.map((c) => (
                        <div key={c.slug} className="w-full flex flex-col gap-2 group">
                            <div className="flex h-full justify-center items-center border border-1 border-gray-300 rounded-lg py-8 sm:py-10 lg:py-13 px-4 sm:px-5 bg-white group-hover:shadow-md duration transition-200">
                                {c.demo}
                            </div>

                            <Link href={`/docs/components/${c.slug}`} className="w-fit group/arrow flex flex-row items-center justify-center">
                                <p className="text-gray-950 group-hover/arrow:underline">{c.name}</p>
                                <ChevronRight className="group text-gray-800 transition duration-200 group-hover/arrow:translate-x-1.5" size={17}/>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
