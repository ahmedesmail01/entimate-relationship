import React from "react";
import Image from "next/image";
import rounded from "@/app/assets/images/rounded.svg";

const ForWhoSec = () => {
  return (
    <div id="who" dir="rtl" className="px-4 py-8 lg:px-[120px] lg:py-[96px]">
      <div className="bg-[#f8f7f7] rounded-3xl px-4 py-8 md:px-[48px] md:py-[32px]">
        <h1 className="text-right text-2xl font-bold mb-8 lg:text-4xl">
          لمن هذا <span className="text-[#4440ff]">البرنامج</span>
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1  text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل ذكر وأنثى يعانون من مشاكل في علاقتهم الجنسية الحميمية{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل زوجين تقطعت بهم السبل إلى الطلاق بسبب مشاكل العلاقة الحميمية
              ولا يجدون نافذة أمل{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل زوجين يريدان أن يطورا من علاقتهما الحميمية ويعيشوها بمتعة أكبر{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل ذكر وأنثى مقبلين على الزواج{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل ذكر وأنثى يحبون أن يكونوا أكثر وعيا بذاتهم واحتياجاتهم في
              العلاقة الحميمية الجنسية{" "}
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-[calc(50%-16px)]">
            <Image src={rounded} alt="dot" className="w-[40px] lg:w-[58px]" />
            <p className="flex-1 text-right text-sm lg:text-lg font-medium leading-[160%] text-[rgba(20,19,19,0.82)]">
              كل ذكر وأنثى متخوفين من الزواج او من العلاقة العاطفية الجنسية
            </p>
          </div>
        </div>

        <a href="#subscribe">
          <button className="flex justify-center lg:w-[196px] items-center mx-auto lg:my-[32px] lg:mx-0 mt-4 mb-4 [background:#4440FF] px-6 py-4 rounded-xl text-white">
            اشترك الآن
          </button>
        </a>
      </div>
      {/* <p className="mt-8 text-center  text-sm font-semibold leading-[160%] text-[rgba(39,39,39,0.82)] lg:mt-[48px] lg:text-2xl">
        أى يوم بيضيع عليك /عليكِ وانتو مش عارفين ازاى توصلوا لهذا الجمال فى
        العلاقة العاطفية والجنسية وتعيشها بإتزان ومتعة، فهو يوم خسارة
      </p> */}
    </div>
  );
};

export default ForWhoSec;
