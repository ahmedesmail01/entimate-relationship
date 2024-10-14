import Image from "next/image";
import React from "react";
import backToBack from "@/app/assets/images/backtoback.svg";
// import { Button } from "antd";
import blueDot from "@/app/assets/images/blue-dot.svg";
import backStroke from "@/app/assets/images/back-stroke.svg";

const ProgramContent = () => {
  return (
    <div className="relative flex w-full  lg:px-[120px] py-[96px] justify-center items-center z-20  ">
      <Image
        src={backStroke}
        alt="stroke"
        className="absolute -bottom-5 right-0 z-0"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16 py-0 rounded-[18px]">
        <Image src={backToBack} alt="couples" />
        <div className="flex  lg:w-[518px] flex-col items-center lg:items-end lg:gap-8">
          <h1 className="text-[#272727] text-center lg:text-right text-2xl lg:text-[32px] font-[800] ">
            محتوى البرنامج
          </h1>
          <p className="text-center py-3 lg:text-right self-stretch text-[rgba(39,39,39,0.82)] text-sm lg:text-[17.023px] font-normal leading-[160%]">
            تدريب عملي على الإتزان فى المشاعر الحميمية الجنسية + جلسات علاجية
            جماعية للإضطرابات الشعورية والسلوكية والأمراض العضوية مثل
          </p>
          <div className="flex py-3 ">
            <ul className="  flex flex-col items-end gap-3">
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]  text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  سرعة القذف
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  العادة السرية
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  آلام فى الجماع
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]  text-right text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  إدمان الأفلام الإباحية
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
            </ul>
            <ul className="  flex flex-col items-end gap-3">
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  ضعف الإنتصاب
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  البرودة الجنسي
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  الشره الجنسي
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)]   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  روائح كريهة فى المهبل
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
              <li className="flex items-center">
                <span className=" text-[rgba(39,39,39,0.82)] text-right   text-sm  lg:text-[17.023px] font-normal leading-[160%]">
                  صدفية او إكزيما فى الأعضاء الجنسية
                </span>
                <Image src={blueDot} alt="dot" className="ml-1 lg:ml-4" />
              </li>
            </ul>
          </div>
          <button className="flex justify-center items-center  [background:#4440FF] px-6 py-4 rounded-lg text-white">
            اشترك الأن
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;