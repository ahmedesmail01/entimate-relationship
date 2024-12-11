import Image from "next/image";
import React from "react";
import whyImg from "@/app/assets/images/man-alone.svg";
import woman from "@/app/assets/images/woman-alone.svg";
import mtn from "@/app/assets/images/mtn institute 1.svg";
import one from "@/app/assets/images/1.svg";
import two from "@/app/assets/images/2.svg";
import three from "@/app/assets/images/3.svg";
import four from "@/app/assets/images/4.svg";
import five from "@/app/assets/images/5.svg";
import six from "@/app/assets/images/6.svg";
import seven from "@/app/assets/images/7.svg";
import eight from "@/app/assets/images/8.svg";
import nine from "@/app/assets/images/9.svg";
import ten from "@/app/assets/images/10.svg";
import eleven from "@/app/assets/images/11.svg";
import twelve from "@/app/assets/images/12.svg";
import thirteen from "@/app/assets/images/13.svg";

const WhySec = () => {
  const top = [
    {
      img: one,
      title:
        "المعاناة فى الاقتراب من الزوج / الزوجة بينما يحاول الهروب للاستمتاع الجنسي بمفرده",
    },
    {
      img: two,
      title:
        "علاقة جنسية آليه خالية من العاطفة ، يُفرغ فيها الذكر طاقته و تلبي فيها الأنثى إحتياجه",
    },
    {
      img: three,
      title: "شريكي  يحب جسمي ولا يحبني أنا!  ",
    },
    {
      img: four,
      title: "العلاقة تحدث على فترات متباعدة وليس فيها متعة ولا شغف ",
    },
    {
      img: five,
      title: "منتظر المبادرة مني",
    },
    {
      img: six,
      title: "شعور ان زوجي لا يرغبنى ، انى غير كافية بيقتلني",
    },
  ];

  const bottom = [
    {
      img: seven,
      title: "العقاب بالامتناع عن العلاقة الجنسية",
    },
    {
      img: eight,
      title: "توقعات ومخاوف عن العلاقة الجنسية",
    },
    {
      img: nine,
      title: "الصدمات الجنسية تؤرق حياتنا !  ",
    },
    {
      img: ten,
      title:
        " الإحتياج للأفلام الإباحية لاتنام العلاقة / كمرجعية للعلاقة المثالية ",
    },
    {
      img: eleven,
      title:
        ' زوجتي تصر على تفاصيل محددة ودقيقة فى العلاقة " ماتقربش منى الا بالطريقة الفلانية ، ماتتكلمش يالطريقة دى " والعكس صحيح',
    },
    {
      img: twelve,
      title: "إهمال العلاقة بسبب الانشغال والسفر",
    },
    {
      img: thirteen,
      title: "الإمنتاع عن العلاقة بحجة تقصير الزوج",
    },
  ];

  return (
    <>
      <div
        id="why"
        className="relative  bg-[#edecff] w-full flex flex-col  2xl:flex-row-reverse px-4 lg:px-[120px] items-center gap-8 z-20 "
      >
        <Image
          src={mtn}
          alt="logo
      "
          className="absolute hidden lg:block top-0 right-0"
        />
        <Image src={whyImg} alt="image" className="z-10" />
        <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
          <h1 className="text-[32px] [font-family:--font-cairo] font-semibold my-1 lg:my-[32px] ">
            لماذا تدريبات اللياقة{" "}
            <span className="text-[#4440ff]">النفسية الجنسية </span>
          </h1>
          {/* top section */}
          <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
            {top.map((item, idx) => (
              <>
                <div
                  key={idx}
                  className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg"
                >
                  <Image
                    src={item.img}
                    alt="number"
                    className="w-[40px] lg:w-[72px]"
                  />
                  <p className="flex-[1_0_0] text-[#242424] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
                    {item.title}{" "}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* bottom section */}

      <div
        dir="rtl"
        id="why"
        className="relative  lg:pt-20 bg-[#edecff] w-full flex flex-col  2xl:flex-row-reverse px-4 lg:px-[120px] items-center gap-8 z-20 "
      >
        <Image
          src={mtn}
          alt="logo
      "
          className="absolute hidden lg:block top-0 left-0"
        />
        <Image src={woman} alt="image" className="z-10" />
        <div dir="rtl" className="flex flex-col lg:w-[540px]  ">
          {bottom.map((item, idx) => (
            <>
              <div
                key={idx}
                className="flex justify-end items-center gap-5 self-stretch pl-6 pr-0 py-2 lg:pt-6 lg:pb-4 rounded-lg"
              >
                <Image
                  src={item.img}
                  alt="number"
                  className="w-[40px] lg:w-[72px]"
                />
                <p className="flex-[1_0_0] text-[#242424] text-right text-sm lg:text-[17.023px] font-normal leading-[160%]">
                  {item.title}{" "}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhySec;
