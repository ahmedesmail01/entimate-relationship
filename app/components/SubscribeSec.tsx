import React from "react";
import relBack from "@/app/assets/images/rel.svg";
import Image from "next/image";
const SubscribeSec = () => {
  const subscriptions = [
    {
      title: "اشتراك شهري",
      price: "$100",
      discount: "$300 ",
      giftOne: "احصل على ٤ حلقات مسجلة ",
      giftTwo: "9 لقاءات جماعية مباشرة مع الدكتور احمد الدملاوي",
      link: "https://mtnlive.mtninstitute.net/en/register",
    },
    {
      title: "اشتراك ربع سنوي",
      price: "$270",
      discount: "$300  ",
      giftOne: "احصل على ٤ حلقات مسجلة ",
      giftTwo: "3 لقاءات جماعية مباشرة مع الدكتور احمد الدملاوي",
      link: "https://mtnlive.mtninstitute.net/en/register",
    },
    {
      title: "اشتراك نصف سنوي",
      price: "$490",
      discount: "$600  ",
      giftOne: "احصل على ٦ حلقات مسجلة ",
      giftTwo:
        "١٨ لقاء جماعي مباشرة مع الدكتور أحمد الدملاوي بمعدل ٣ لقاءات/شهر",
      link: "https://mtnlive.mtninstitute.net/en/register",
    },
    {
      title: "اشتراك سنوي",
      price: "$900",
      discount: "$1200 ",
      giftOne: "احصل على ١٢ حلقة مسجلة ",
      giftTwo:
        "و ٣٦ لقاء جماعي مباشر مع الدكتور احمد الدملاوي بمعدل ٣ لقاءات/شهر",
      link: "https://mtnlive.mtninstitute.net/en/register",
    },
  ];
  return (
    <div id="subscribe" className="relative overflow-hidden bg-[#1b1b1b]  flex flex-col lg:pt-[80px] lg:pb-[96px] lg:px-[160px] justify-center text-center items-center z-10">
      <Image
        src={relBack}
        alt="image"
        className="absolute bottom-0 right-0 lg:right-[160px] "
      />
      <Image
        src={relBack}
        alt="image"
        className="absolute bottom-0 left-0 lg:left-[160px]"
      />
      <h1 className="text-white mt-8  text-xl  lg:text-[47px] font-bold leading-[normal] text-center lg:mb-[10px]">
        اشترك الأن{" "}
      </h1>
      <p className="text-white mb-10 text-center [font-family:Tajawal] text-lg font-normal leading-7">
        أختر خطة الاشتراك الخاصة بك الأن
      </p>
      <div className="flex flex-col lg:flex-row-reverse gap-4">
        {subscriptions.map((subscription, idx) => (
          <div
            key={idx}
            className="w-[300px] z-10 p-4 my-4 text-center bg-white rounded-lg shadow-sm  border-2 border-[#4440ff]"
          >
            <h2 className="self-stretch mb-6 text-[#353535] text-center font-[pnu] text-[32px] font-bold leading-[160%]">
              {subscription.title}
            </h2>
            <p className="self-stretch text-[color:var(--Gray-900,#1D2026)] text-center font-[pnu] text-[32px] font-bold leading-8">
              {subscription.price}
            </p>
            <p className="self-stretch mb-6 line-through text-[color:var(--Gray-500,#8C94A3)] text-center [font-family:Inter] text-base font-normal leading-6 ">
              {subscription.discount}
            </p>
            <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#636363] text-center [font-family:PNU] text-[13px] font-bold leading-8">
              {subscription.giftOne}
            </p>
            <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#636363] text-center [font-family:PNU] text-[13px] font-bold leading-8">
              {subscription.giftTwo}
            </p>
            <a
              href={subscription.link}
              target="_blank"
              className="flex text-white h-[56px] font-[pnu] justify-center items-center gap-3 self-stretch [background:#4440FF] px-8 py-0 rounded-lg"
            >
              اشترك الأن
            </a>
          </div>
        ))}
      </div>
      {/* <button className="flex justify-center  lg:w-[196px] items-center mx-auto lg:my-[32px] lg:mx-0 mt-4 mb-4 [background:#4440FF] px-6 py-4 rounded-xl text-white">
        اشترك الآن
      </button> */}
    </div>
  );
};

export default SubscribeSec;
