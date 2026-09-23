import Image from 'next/image';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import bannerImg from '@/assets/hero.png'

const Banner = () => {
    return (
<section className="bg-[#f8f9fc] py-12 overflow-hidden container mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
          We Build <br/>
          <span className="text-purple-600">Productive</span> Apps
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons with React Icons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 hover:border-slate-300"
          >
            <IoLogoGooglePlaystore className="text-2xl text-[#01875f]" />
            <span className="font-semibold text-sm">Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 hover:border-slate-300"
          >
            <FaApple className="text-2xl text-black" />
            <span className="font-semibold text-sm">App Store</span>
          </a>
        </div>

         
        <div className="relative mt-12 max-w-xs sm:max-w-sm mx-auto">
          {/* Main App Image */}
          <div className="relative z-10 shadow-2xl rounded-[40px] border-4 border-slate-800 bg-slate-900 overflow-hidden">
            <Image
              src={bannerImg}  
              alt="Banner Image"
              width={350}
              height={700}
              className="w-full h-auto"
            />
          </div>

          {/* Decorative Floating Badges (Left Side) */}
          <div className="absolute -left-12 sm:-left-20 top-12 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">⚙️</span>
          </div>
          
          <div className="absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">✓</span>
          </div>

          <div className="absolute -left-10 sm:-left-16 bottom-10 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">⏻</span>
          </div>

          {/* Decorative Floating Badges (Right Side) */}
          <div className="absolute -right-10 sm:-right-16 top-16 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">⏰</span>
          </div>

          <div className="absolute -right-16 sm:-right-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">📋</span>
          </div>

          <div className="absolute -right-12 sm:-right-20 bottom-12 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-sky-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-white text-xl font-bold">⚔️</span>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;