import Image from "next/image";
import React from "react";
import whyImg from "@/app/assets/images/why-img.svg";
import one from "@/app/assets/images/one.svg";
import two from "@/app/assets/images/two.svg";
import three from "@/app/assets/images/three.svg";

const WhySec = () => {
  return (
    <div className="2xl:h-[694px] bg-[#edecff] w-full flex flex-col  2xl:flex-row-reverse px-4 lg:px-[120px] items-center gap-8 z-20 ">
      <Image src={whyImg} alt="image" />
      <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
        <h1 className="text-[32px] font-bold my-1 lg:my-[32px] ">
          لماذا هذا <span className="text-[#4440ff]">البرنامج ؟ </span>
        </h1>
        <p className="self-stretch text-[#242424] text-right text-sm lg:text-[17.023px] font-semibold leading-[160%] lg:mb-[32px]">
           ان كل واحد يعيش التحول اللى هو بيحلم بيه فى العلاقة الحميمية الجنسية 
          يتعلم / يتدرب ازاى يعيش حياة زوجية سعيدة اللى هى ( أجمل متعة مادية &
          عاطفية ) خلقها ربنا
        </p>
        <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
          <Image src={one} alt="number" className="w-[40px] lg:w-[72px]" />
          <p className="flex-[1_0_0] text-[#242424] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
            زى فكرة السباحة : ( هى مهارة شعورية وبدنية ) ماينفعش نتعلمها نظري ،
            ماينفعش أخد نظريات فى كيف تكون سباح ماهر وانت قاعد فى المدرج مش
            بتطبق
          </p>
        </div>
        <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
          <Image src={two} alt="number" className="w-[40px] lg:w-[72px]" />
          <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
            فكرة المرشد : انه بياخد بايدك ويمرنك بنفسك حسب قدراتك ومخاوفك
            واضطراباتك الشخصية لحد ما تبقى جزء من هويتك الجديدة
          </p>
        </div>
        <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4rounded-lg">
          <Image src={three} alt="number" className="w-[40px] lg:w-[72px]" />
          <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
            بدل ما نعمل دا لفرد فرد فى جلسات خاصة ، الفايدة فيها محدودة والقيمة
            المالية أعلى ، هنعمله فى جروب ثيرابي بحيث الفايدة تبقى أعظم وأغنى
            لما نشوف الموضوع من جوانب شعورية متعددة
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySec;
