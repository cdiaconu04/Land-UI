"use client"
import { Urbanist } from 'next/font/google';
import { useParams } from 'next/navigation';
import { components } from '@/data/components';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ComponentDocs() {
    // Slug params
    const params = useParams();
    const component = components.find(p => p.slug === params.slug);

    // If component undefined
    if (!component) return (
        <div className="bg-white flex flex-col items-center justify-center">
            <p className={`${urbanist.className} text-3xl text-gray-800`}> Component not found. </p>
        </div>
    )

    // If component defined
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            
            {/* Docs content */}
            <div className="col-span-4 flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-3xl text-gray-800`}> {component.name} </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> {component.description} </p>

                    <div className="flex h-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                        {component.demo}
                    </div>

                </div>


                {component.examples.map((e) => (
                    <div className="flex flex-col gap-2 w-full">

                    </div>
                ))}

                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> {component.name} props</p>


                </div>
            </div>
            

            {/* Right sidebar */}
            <div className="col-span-1 flex flex-col gap-2">
                <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>On this page</p>
            </div>
        </div>
    )
}
