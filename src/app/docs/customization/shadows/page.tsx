import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Shadows() {
    return (
        <div className="bg-white flex flex-col items-center justify-center">
            <p className={`${urbanist.className} text-3xl text-gray-800`}> Shadows </p>
        </div>
    )
}
