import React from "react";
import Logo from "@/app/assets/images/mtn-logo.svg";
import Image from "next/image";
import Link from "next/link";
// import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white max-w-full flex px-4 lg:px-[120px] justify-between items-center py-4 overflow-hidden border">
      {/* <MdMenu /> */}
      <a
        href="#subscribe"
        className="w-[60px] text-[8px] flex items-center justify-center lg:text-[16px] py-[4px] lg:w-[178px] lg:h-[44px] rounded-[16px] border-2 border-[#4440ff] text-[#4440ff] font-bold"
      >
        <button> اشترك الآن</button>
      </a>
      <div className="flex items-center">
        <ul className="flex gap-[4px] lg:gap-[32px]">
          <li className="whitespace-nowrap text-[8px] lg:text-[16px]">
            <Link href={"#who"}> لمن هذا البرنامج ؟ </Link>
          </li>
          <li className="whitespace-nowrap lg:block text-[8px] lg:text-[16px]">
            <Link href={"#about"}> عن الدكتور </Link>
          </li>
          <li className="whitespace-nowrap  lg:block text-[8px] lg:text-[16px] lg:ml-4">
            <Link href={"#why"}> لماذا هذا البرنامج ؟ </Link>
          </li>
        </ul>
        <Link href={"#"}>
          <Image
            src={Logo}
            alt="logo"
            className="ml-[10px] lg:ml-[64px] object-contain w-[45px] lg:w-[96px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
