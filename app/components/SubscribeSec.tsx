import React from "react";
import relBack from "@/app/assets/images/rel.svg";
import Image from "next/image";
const SubscribeSec = () => {
  return (
    <div className="relative overflow-hidden h-[250px] bg-[#1b1b1b] lg:h-[306px] flex flex-col lg:pt-[80px] lg:pb-[96px] lg:px-[160px] justify-center text-center items-center z-10">
      <Image
        src={relBack}
        alt="image"
        className="absolute bottom-0 right-0 lg:right-[160px] "
      />
      <Image
        src={relBack}
        alt="image"
        className="absolute bottom-0 left-0 lg:left-[160px]"
      />
      <h1 className="text-white  text-xl  lg:text-[32px] font-bold leading-[normal] text-center lg:mb-[10px]">
        السعر & أنظمة الإشتراك : 
      </h1>
      <button className="flex justify-center  lg:w-[196px] items-center mx-auto lg:my-[32px] lg:mx-0 mt-4 mb-4 [background:#4440FF] px-6 py-4 rounded-xl text-white">
        اشترك الآن
      </button>
    </div>
  );
};

export default SubscribeSec;
