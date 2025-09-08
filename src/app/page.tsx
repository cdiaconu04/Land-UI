import Image from "next/image";
import { Inter, Roboto, Urbanist } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className="bg-white">
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-6 flex flex-row justify-between items-center bg-white">

        <h1 className={`${urbanist.className} text-7xl text-gray-800`}>
          Build your next <br/> project with <span className="bg-gradient-to-r from-sky-500 via-sky-500 to-red-500 text-transparent bg-clip-text leading-relaxed">LandUI</span>
        </h1>

      </div>

    </div>
  );
}
