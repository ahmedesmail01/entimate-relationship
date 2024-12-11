import Image from "next/image";
import React from "react";
import crisesImg from "@/app/assets/images/crises-img.svg";
import dot from "@/app/assets/images/blue-dot.svg";

const CrisesSec = () => {
  return (
    /* top section */
    <>
      <div className="lg:px-[120px] lg:pt-[96px] flex flex-col items-start lg:flex-row lg:gap-[64px] px-4 py-4">
        <div dir="rtl">
          {/* First Section */}
          <div>
            <div className="flex items-center gap-2 lg:mb-[24px]">
              <Image src={dot} alt="dot" />
              <h1 className="text-[#272727ef] text-right text-xl lg:text-2xl [font-family:--font-cairo] font-semibold leading-[160%]">
                تدريبات لتحقيق التوازن العاطفي في العلاقات الحميمية:{" "}
              </h1>
            </div>
            <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
              تمارين خاصة تساعدك على استحضار التوازن العاطفي بما يعزز من الترابط
              الحميمي ويعمّق التواصل بين الشريكين.{" "}
            </p>
          </div>

          {/* Second Section */}
          <div>
            <div className="flex items-center gap-2 lg:mb-[24px]">
              <Image src={dot} alt="dot" />
              <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
                رفع جودة الأداء في العلاقة الحميمية للجنسين{" "}
              </h1>
            </div>
            <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
              نهدف إلى تعزيز الاتزان الشعوري في العلاقة الحميمية{" "}
            </p>
          </div>

          {/* Third Section */}
          <div>
            <div className="flex items-center gap-2 lg:mb-[24px]">
              <Image src={dot} alt="dot" />
              <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
                تحسين التواصل والرغبة بين الشريكين:{" "}
              </h1>
            </div>
            <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
              استراتيجيات فعالة لتطوير التفاهم المتبادل والتعبير عن الرغبات
              باتزان مما يسهم في رفع جودة الأداء والتجربة الحميمية.{" "}
            </p>
          </div>

          {/* <a href="#subscribe">
            <button className="flex justify-center items-center mx-auto lg:mx-0  mb-4 [background:#4440FF] px-6 py-4 rounded-lg text-white">
              اشترك الأن
            </button>
          </a> */}
        </div>
        <Image src={crisesImg} alt="image" />
      </div>

      {/* bottom section */}
      <div className="lg:px-[120px] lg:pb-[96px] flex flex-col items-start lg:flex-row-reverse lg:gap-[64px] px-4 py-4">
        <div dir="rtl">
          <div>
            <div className="flex items-center gap-2 lg:mb-[24px]">
              <Image src={dot} alt="dot" />
              <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
                تحرير العوائق العاطفية في العلاقات الحميمية:{" "}
              </h1>
            </div>
            <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
              استكشاف العوائق النفسية والعاطفية التي قد تؤثر على الانسجام
              الحميمي، والعمل على تجاوزها لتحقيق الارتباط الحميمي الأعمق{" "}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 lg:mb-[24px]">
              <Image src={dot} alt="dot" />
              <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
                تعزيز الوعي والانتباه للاضطرابات الشعورية التي تؤثر على الأداء
                الجنسي:{" "}
              </h1>
            </div>
            <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
              يهدف البرنامج إلى تعزيز الوعي والانتباه للاضطرابات الشعورية التي
              ربما تؤثر على بعض الوظائف الجسدية المرتبطة بالعلاقة الحميمية
              لتحسين جودة العلاقة والوصول إلى تجربة أكثر توازنا وراحة وسعادة{" "}
            </p>
          </div>

          <a href="#subscribe">
            <button className="flex justify-center items-center mx-auto lg:mx-0  mb-4 [background:#4440FF] px-6 py-4 rounded-lg text-white">
              اشترك الأن
            </button>
          </a>
        </div>
        <Image src={crisesImg} alt="image" />
      </div>
    </>
  );
};

export default CrisesSec;

/* <div>
          <div className="flex items-center gap-2 lg:mb-[24px]">
            <Image src={dot} alt="dot" />
            <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
              تحرير العوائق العاطفية في العلاقات الحميمية:{" "}
            </h1>
          </div>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            استكشاف العوائق النفسية والعاطفية التي قد تؤثر على الانسجام الحميمي،
            والعمل على تجاوزها لتحقيق الارتباط الحميمي الأعمق{" "}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 lg:mb-[24px]">
            <Image src={dot} alt="dot" />
            <h1 className="text-[#272727ef] [font-family:--font-cairo] text-right text-xl lg:text-2xl font-semibold leading-[160%]">
              تعزيز الوعي والانتباه للاضطرابات الشعورية التي تؤثر على الأداء
              الجنسي:{" "}
            </h1>
          </div>
          <p className="mb-8 self-stretch text-[rgba(39,39,39,0.82)] text-right text-sm lg:text-lg font-normal leading-[160%]">
            يهدف البرنامج إلى تعزيز الوعي والانتباه للاضطرابات الشعورية التي
            ربما تؤثر على بعض الوظائف الجسدية المرتبطة بالعلاقة الحميمية لتحسين
            جودة العلاقة والوصول إلى تجربة أكثر توازنا وراحة وسعادة{" "}
          </p>
        </div> */
