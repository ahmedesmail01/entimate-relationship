import React from "react";
import Image from "next/image";
import rounded from "@/app/assets/images/rounded.svg";

const ForWhoSec = () => {
  return (
    <div dir="rtl" className="px-4 pb-8 lg:px-[120px] lg:pb-[96px]">
      <div className="bg-[#f8f7f7] rounded-3xl px-4 py-8 md:px-[48px] md:py-[32px]">
        <h1 className="text-right text-xl font-bold mb-8 lg:text-4xl">
          بنستخدم تقنيات / تكنولوجيا{" "}
          <span className="text-[#4440ff]">متقدمة</span>
        </h1>
        <p className="self-stretch text-[rgba(20,19,19,0.82)] text-right  lg:my-[32px] text-sm lg:text-xl font-medium leading-[160%]">
          جدا فى قياس وتحليل المشاعر ونوصل بدقة متناهية لعمق الشعور الشعور
          المضطرب المسبب للإضطراب فى العلاقة العاطفية الجنسية 
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1  text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              نساعد المشترك للوصول لعلاج نقطة الضعف المؤثرة سلبا على حياتهم 
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              والوصول لنتائج غير مسبوقة لم يصلوا لها من قبل{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              أمثلة على هذه التقنيات ( إختبار TKI & إختبار نسبة الأنوثة والذكورة
              & إختبار لوشر G+F ) 
            </p>
          </div>
        </div>
        <button className="flex justify-center lg:w-[196px] items-center mx-auto lg:my-[32px] lg:mx-0 mt-4 mb-4 [background:#4440FF] px-6 py-4 rounded-xl text-white">
          اشترك الآن
        </button>
      </div>
    </div>
  );
};

export default ForWhoSec;
