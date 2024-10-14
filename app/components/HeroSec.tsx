// components/HeroSec.tsx

import React from "react";
import backVideo from "../assets/videos/pattern.mp4"; // Adjust the path as needed

const HeroSec = () => {
  return (
    <div className="relative w-full h-[442px]  overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Solid Blue Overlay with Transparency */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#302663]/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-4 items-center text-white justify-center h-full px-4">
        <h1 className="text-center text-xl md:text-4xl font-semibold leading-snug">
          Therapy Gym
        </h1>
        <h2 className="text-center text-2xl md:text-4xl font-semibold leading-snug">
          العلاقة الحميمية الجنسية
        </h2>
        <p className="text-center text-sm md:text-xl font-normal leading-relaxed max-w-xl">
          تدريب عملي على الإتزان فى المشاعر الحميمية الجنسية + جلسات علاجية
          جماعية للإضطرابات الشعورية والسلوكية والأمراض العضوية
        </p>
        <button className="mt-4 flex justify-center items-center gap-1 rounded bg-white px-4 py-2 text-blue-800">
          اشترك الان
        </button>
      </div>
    </div>
  );
};

export default HeroSec;
