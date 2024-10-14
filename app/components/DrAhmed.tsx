import Image from "next/image";
import React from "react";
import drAhmed from "@/app/assets/images/dr-ahmed.svg";

const DrAhmed = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#edecff] py-12 text-black spacing px-4 lg:px-[120px] lg:h-[803px]"
    >
      <div className="min-h-[526px] mb-4 gap-x-[64px] gap-y-8 h-fit flex flex-col lg:flex-row">
        <div className="flex items-start relative flex-col justify-start w-full lg:flex-1/2">
          <p className="text-[#4440FF] text-right lg:mb-8 text-[20px] lg:text-[32px] font-bold leading-[160%]">
            د.أحمد الدملاوي
          </p>
          {data?.map((item, index) => (
            <div className="flex items-center gap-2 mb-2 lg:mb-4" key={index}>
              <span className="text-[#5DBCB8]">-</span>
              <p className="self-stretch text-[#242424] text-right text-sm lg:text-xl font-normal leading-[160%]">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-start relative flex-col justify-start w-full lg:flex-1/2">
          <Image
            src={drAhmed}
            alt=""
            width={510}
            height={659}
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DrAhmed;

const data = [
  "خبرة على مستوى العالم فى تحليل المشاعر ",
  "مبتكر منظومة المشاعر بين الذكر والأنثى بناء على الفطرة + علم نفس الألوان ",
  "طبيب خريج كلية الطب جامعة عين شمس عام 1982",
  "الطبيب الوحيد في العالم العربي الذي يعتمد في تشخيص وعلاج عملائه على منظور علاجي وتدريبي ينبع من تشخيص النفس بالألوان وتشخيص المرض بالسبب النفسي له ' علم الميتاهيلث ' منذ عام 2012 حتى الآن.",
  "مؤسس الطب التصنيفي",
  "قام بتأسيسه عام 2019 بعد أبحاث وتجارب دامت أكثر من 7 سنوات ومستمر في تطويرها وتدريسها حتى الأن ، وقد أعتمد فيه طريقة مذهلة في التشخيص والعلاج بتحديد المشاعر المضطربة بدقة شديدة والتي تتسبب في صدمات تنتهي بأمراض عضوية ونفسية ، ويتم تحديد هذه الاضطرابات بتقنيات متعددة يقوم بممارستها بعيادته بالقاهرة وأيضاً يقوم بتدريسها لطالبي تعلم هذا العلم .",
  "أستاذ مدرب علم الميتاهيلث ونائب رئيس الجمعية العالمية للميتا ماديسون بالولايات المتحدة الأمريكية     IMMA® '   (سابقاً) . علم الميتاهيلث هو منظور جديد للطب ينبع من منظور الشفاء وليس المرض.",
];
