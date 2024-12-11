"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import arrow from "@/app/assets/images/arrow.svg";

interface IProps {
  item: {
    title: string;
    description: string;
  };
}

const DrawerComp = ({ item }: IProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  // Handler to toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Update the height when isOpen changes
  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      dir="rtl"
      className="flex gap-2 z-50 items-start"
      onClick={toggleDrawer}
    >
      <Image
        src={arrow}
        alt="arrow-icon"
        style={{
          transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
      />
      <div className="flex flex-col gap-2">
        <p
          className="  [font-family:--font-monadi] text-gray-700 text-xl"
          onClick={toggleDrawer}
          style={{ cursor: "pointer" }}
        >
          {item.title}
        </p>
        <div
          ref={contentRef}
          className="description"
          style={{
            height: height,
            overflow: "hidden",
            transition: "height 0.3s ease",
          }}
        >
          <p className="text-neutral-[#353535] text-base my-4 font-normal font-['Expo Arabic'] leading-relaxed">
            {item.description}
          </p>

          {/* <p className="text-neutral-[#353535] text-base font-normal font-['Expo Arabic'] leading-relaxed">
            {item.description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default DrawerComp;

/* 

<img src="./images/arrow.svg" alt="arrow-icon" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl">{item.title}</p>
                  <div className="w-full text-neutral-[#353535] text-base font-normal font-['Expo Arabic'] leading-relaxed">
                    {item.description}
                  </div>

*/
