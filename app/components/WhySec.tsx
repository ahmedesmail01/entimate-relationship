import Image from "next/image";
import React from "react";
import whyImg from "@/app/assets/images/man-alone.svg";
import woman from "@/app/assets/images/woman-alone.svg";
import mtn from "@/app/assets/images/mtn institute 1.svg";
import one from "@/app/assets/images/one.svg";
import two from "@/app/assets/images/two.svg";
import three from "@/app/assets/images/three.svg";
import four from "@/app/assets/images/four.svg";
import five from "@/app/assets/images/five.svg";
import six from "@/app/assets/images/six.svg";

const WhySec = () => {
  return (
    <>
      <div
        id="why"
        className="relative 2xl:h-[694px] bg-[#edecff] w-full flex flex-col  2xl:flex-row-reverse px-4 lg:px-[120px] items-center gap-8 z-20 "
      >
        <Image
          src={mtn}
          alt="logo
      "
          className="absolute hidden lg:block top-0 right-0"
        />
        <Image src={whyImg} alt="image" className="z-10" />
        <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
          <h1 className="text-[32px] font-[pnu] font-bold my-1 lg:my-[32px] ">
            لماذا تدريبات اللياقة{" "}
            <span className="text-[#4440ff]">النفسية الجنسية </span>
          </h1>
          {/* <p className="self-stretch text-[#242424] text-right text-sm lg:text-[17.023px] font-semibold leading-[160%] lg:mb-[32px]">
           ان كل واحد يعيش التحول اللى هو بيحلم بيه فى العلاقة الحميمية الجنسية 
          يتعلم / يتدرب ازاى يعيش حياة زوجية سعيدة اللى هى ( أجمل متعة مادية &
          عاطفية ) خلقها ربنا
        </p> */}
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
            <Image src={one} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              المعاناة فى الاقتراب من الزوج / الزوجة بينما يحاول الهروب
              للاستمتاع الجنسي بمفرده كما انها علاقة جنسية آليه خالية من العاطفة
              ، يُفرغ فيها الذكر طاقته و تلبي فيها الأنثى إحتياجه{" "}
            </p>
          </div>
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
            <Image src={two} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
              شريكي يحب جسمي ولا يحبني أنا و دائما ينتظر مبادرة مني{" "}
            </p>
          </div>
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4rounded-lg">
            <Image src={three} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
              العلاقة تحدث على فترات متباعدة وليس فيها متعة ولا شغف و شعور ان
              زوجي لا يرغبنى ، انى غير كافية بيقتلني و الإمنتاع عن العلاقة بحجة
              تقصير الزوج{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        id="why"
        className="relative 2xl:h-[694px] bg-[#edecff] w-full flex flex-col  2xl:flex-row-reverse px-4 lg:px-[120px] items-center gap-8 z-20 "
      >
        <Image
          src={mtn}
          alt="logo
      "
          className="absolute hidden lg:block top-0 left-0"
        />
        <Image src={woman} alt="image" className="z-10" />
        <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
          {/* <h1 className="text-[32px] font-[pnu] font-bold my-1 lg:my-[32px] ">
            لماذا تدريبات اللياقة{" "}
            <span className="text-[#4440ff]">النفسية الجنسية </span>
          </h1> */}
          {/* <p className="self-stretch text-[#242424] text-right text-sm lg:text-[17.023px] font-semibold leading-[160%] lg:mb-[32px]">
           ان كل واحد يعيش التحول اللى هو بيحلم بيه فى العلاقة الحميمية الجنسية 
          يتعلم / يتدرب ازاى يعيش حياة زوجية سعيدة اللى هى ( أجمل متعة مادية &
          عاطفية ) خلقها ربنا
        </p> */}
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
            <Image src={four} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              العقاب بالامتناع عن العلاقة الجنسيةتوقعات ومخاوف عن العلاقة
              الجنسية{" "}
            </p>
          </div>
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg">
            <Image src={five} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
              الصدمات الجنسية تؤرق حياتنا الإحتياج للأفلام الإباحية لاتنام
              العلاقة / كمرجعية للعلاقة المثالية{" "}
            </p>
          </div>
          <div className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4rounded-lg">
            <Image src={six} alt="number" className="w-[40px] lg:w-[72px]" />
            <p className="flex-[1_0_0] text-[#242424] text-right  text-sm lg:text-[17.023px] font-normal leading-[160%]">
              زوجتي تصر على تفاصيل محددة ودقيقة فى العلاقة &quot; ماتقربش منى
              الا بالطريقة الفلانية ،ماتتكلمش يالطريقة دى &quot; والعكس صحيح و
              إهمال العلاقة بسبب الانشغال والسفر{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySec;
