import Image from "next/image";
import React from "react";
import crisesImg from "@/app/assets/images/crises-img.svg";
import dot from "@/app/assets/images/blue-dot.svg";

const CrisesSec = () => {
  return (
    <div className="lg:px-[120px] lg:py-[96px] flex flex-col items-start lg:flex-row lg:gap-[64px] px-4 py-4">
      <div dir="rtl">
        {/* First Section */}
        <div>
          <div className="flex items-center gap-2 lg:mb-[24px]">
            <Image src={dot} alt="dot" />
            <h1 className="text-[#272727] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
              الأزمة
            </h1>
          </div>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            الأزمة اللي الناس عايشاها هي أن كل واحد فاهم أن المشكلة عند الطرف
            الآخر، ليه حياتي العاطفية والجنسية بايظة؟
          </p>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            عشان مراتي مقرفة، عشان جوزي مش نظيف، عشان جوزي مش راجل، عشان مراتي
            باردة جنسياً، أصل جوزي عنده سرعة قذف، لا هي اللي مركزة مع العيال ومش
            معبراني.
          </p>
        </div>

        {/* Second Section */}
        <div>
          <div className="flex items-center gap-2 lg:mb-[24px]">
            <Image src={dot} alt="dot" />
            <h1 className="text-[#272727] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
              لكن
            </h1>
          </div>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            العلاقة العاطفية الجنسية بتبدأ من عندي أنا مش عند الطرف الآخر،
            والطرف الآخر بيبدأ يتزن قصادي لما أكون أنا أكثر اتزان وبعيش هويتي
            العاطفية الجنسية بقوة وجمال.
          </p>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            العائق الثاني: هو أن محدش عارف دوره في العلاقة، لا الأنثى عارفة
            دورها ولا الذكر عارف دوره.
          </p>
        </div>

        {/* Third Section */}
        <div>
          <div className="flex items-center gap-2 lg:mb-[24px]">
            <Image src={dot} alt="dot" />
            <h1 className="text-[#272727] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
              النتيجة
            </h1>
          </div>
          <ul className="mb-8 ms-8 list-disc  ">
            <li className="self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              نتيجة هذا الحال يعيش كلا الطرفين:
            </li>
            <li className="self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              برود عاطفي جنسي رهيب خالي من الدفء والأنس
            </li>
            <li className="self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              احتياج وضعف عاطفي جنسي رهيب
            </li>
            <li className="self-stretch  text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
              معاناة، يأس، لا مبالاة، ملل، حياة عادية حيث اللاتفاعل واللاجمال
            </li>
          </ul>
        </div>
        <button className="flex justify-center items-center mx-auto lg:mx-0  mb-4 [background:#4440FF] px-6 py-4 rounded-lg text-white">
          اشترك الأن
        </button>
      </div>
      <Image src={crisesImg} alt="image" />
    </div>
  );
};

export default CrisesSec;
