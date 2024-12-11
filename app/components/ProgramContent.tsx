import Image from "next/image";
import React from "react";
import backToBack from "@/app/assets/images/backtoback.svg";
// import { Button } from "antd";
// import blueDot from "@/app/assets/images/blue-dot.svg";
import backStroke from "@/app/assets/images/back-stroke.svg";
import DrawerComp from "./DrawerComp";

const ProgramContent = () => {
  const items = [
    {
      title: "لنأخذ ركوب الدراجة كمثال!",
      description:
        "ركوب الدراجة ليس مجرد حركة جسدية، بل هو مزيج بين أداء بدني واتزان شعوريلا يكفي أن تقرأ كتابًا أو تشاهد فيديو لتتعلم كيفية ركوب الدراجة بإتقان  تحتاج إلى تدريب عملي مستمر لتصل إلى مرحلة من التناغم بينك وبين الدراجة، حيث تشعر وكأنكما كيان واحد يتحرك بانسيابية وثقة.",
    },
    {
      title: "العلاقات الحميمية والجنسية ليست مجرد تفاعل جسدي ",
      description:
        "بنفس الطريقة، العلاقات الحميمية والجنسية ليست مجرد تفاعل جسدي، بل تحتاج إلى تمرين شعوري . يجب أن تدرب مشاعرك بانتظام، تمامًا كما تتدرب على ركوب الدراجة، لتصل إلى مستوى من التوازن النفسي الذي يمكنك من تحقيق التناغم مع زوجك،  وبالتالي بناء علاقة أكثر متعة وعمقًا وانسجامًا.",
    },
    {
      title: "لكن كيف يمكن القيام بذلك؟",
      description:
        "ركوب الدراجة ليس مجرد حركة جسدية، بل هو مزيج بين أداء بدني واتزان شعوريلا يكفي أن تقرأ كتابًا أو تشاهد فيديو لتتعلم كيفية ركوب الدراجة بإتقان  تحتاج إلى تدريب عملي مستمر لتصل إلى مرحلة من التناغم بينك وبين الدراجة، حيث تشعر وكأنكما كيان واحد يتحرك بانسيابية وثقة.",
    },
  ];

  return (
    <div className="relative flex w-full  lg:px-[120px] py-[96px] justify-center  items-center z-20  ">
      <Image
        src={backStroke}
        alt="stroke"
        className="absolute -bottom-5 right-0 z-0"
      />
      <div className="flex flex-col  lg:flex-row justify-between items-center px-4 lg:px-16 py-0 rounded-[18px]">
        <Image src={backToBack} alt="couples" />
        <div className="flex  lg:w-[518px] flex-col items-center lg:items-end lg:gap-8">
          <h1 className="text-[#4c48ff] text-center mt-8 [font-family:--font-monadi]  lg:text-right text-2xl lg:text-[32px]  ">
            جلسات الاتزان شفاء (تكيس المبايض){" "}
          </h1>

          <div className="my-4">
            {items.map((item, index) => (
              <>
                <DrawerComp item={item} key={index} />
              </>
            ))}
          </div>
          <a href="#subscribe" className="z-50">
            <button className="flex justify-center w-[247px] items-center  [background:#4440FF] px-6 py-4 rounded-lg text-white">
              اشترك الأن
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
