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
        <div className="bg-white flex flex-col items-center justify-center">
            <p className={`${urbanist.className} text-3xl text-gray-800`}> {component.name} </p>
        </div>
    )
}
