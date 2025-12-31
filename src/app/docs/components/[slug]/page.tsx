"use client"
import { Urbanist } from 'next/font/google';
import { useParams } from 'next/navigation';
import { components } from '@/data/components';
import CodeBlock from '@/components/codeBlock';

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
    );

    // If component defined
    return (
        <div className="bg-white grid grid-cols-5 gap-8 justify-between w-full">
            
            {/* Docs content */}
            <div className="col-span-4 flex flex-col gap-10 min-w-full items-start justify-top">
                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-3xl text-gray-800`}> {component.name} </p>
                    <p className={`${urbanist.className} text-lg text-gray-800`}> {component.description} </p>

                    <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                        {component.demo}
                    </div>

                    {/* TODO: Fix: div does not fully stretch unless line filled with code */}
                    <CodeBlock code={component.demoCode ?? ""}/>
                </div>


                {component.examples.map((e, i) => (
                    <div key={i} className="flex flex-col gap-2 w-full">
                        <p className={`${urbanist.className} text-2xl text-gray-800`}> {e.name}</p>
                        
                        <div className="flex h-full w-full justify-center items-center border border-1 border-gray-300 rounded-lg py-10">
                            {e.demo}
                        </div>

                        <CodeBlock code={e.code ?? ""}/>
                    </div>
                ))}

                <div className="flex flex-col gap-2 w-full">
                    <p className={`${urbanist.className} text-2xl text-gray-800`}> Props</p>
                    
                    <table className="w-full text-left border border-gray-300 rounded-lg border-separate border-spacing-0">
                        <thead className="border-b border-gray-300">
                            <tr>
                                <th className={`${urbanist.className} py-3 px-4 text-gray-800 font-normal text-lg rounded-tl-lg border-b border-gray-300`}>
                                    Prop name
                                </th>

                                <th className={`${urbanist.className} py-3 px-4 text-gray-800 font-normal text-lg border-b border-gray-300`}>
                                    Type
                                </th>

                                <th className={`${urbanist.className} py-3 px-4 text-gray-800 font-normal text-lg rounded-tr-lg border-b border-gray-300`}>
                                    Description
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-600">
                            {component.props.map((prop, i) => (
                                <tr key={i} className="hover:bg-gray-100 border-b last:border-b-0">
                                    <td className={`${urbanist.className} py-3 px-4 text-md text-gray-800 
                                        ${i === component.props.length - 1 ? "" : "border-b border-gray-200"}
                                    `}>
                                        {prop.name}
                                    </td>

                                    <td className={`${urbanist.className} py-3 px-4 text-md text-gray-800 
                                        ${i === component.props.length - 1 ? "" : "border-b border-gray-200"}
                                    `}>

                                        <p className={`${urbanist.className} w-fit p-0.5 text-md text-gray-800 bg-gray-200 rounded-md`}>
                                            {prop.type}
                                        </p>
                                        
                                    </td>

                                    <td className={`${urbanist.className} py-3 px-4 text-md text-gray-800 
                                        ${i === component.props.length - 1 ? "" : "border-b border-gray-200"}
                                    `}>
                                        {prop.description}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>
            

            {/* Right sidebar */}
            <div className="flex flex-col gap-2 fixed top-28 right-95">
                <p className={`${urbanist.className} text-md text-gray-800 font-semibold`}>On this page</p>

                
            </div>
        </div>
    );
}
