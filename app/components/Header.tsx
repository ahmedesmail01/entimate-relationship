import React from "react";
import Logo from "@/app/assets/images/mtn-logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="max-w-full flex px-4 lg:px-[120px] justify-between items-center py-4 overflow-hidden border">
      <button className=" w-[100px] text-[10px] lg:text-[16px] py-[4px]  lg:w-[178px] lg:h-[44px] rounded-[16px]  border-2 border-[#4440ff] text-[#4440ff] font-bold">
        اشترك الآن
      </button>
      <div className="flex items-center">
        <ul className="flex gap-[4px] lg:gap-[32px]">
          <li className="text-nowrap text-sm hidden lg:block text-[10px] lg:text-[16px] lg:ml-4">
            هذا نص يمكن استبداله
          </li>
          <li className="text-nowrap hidden text-sm lg:block text-[10px] lg:text-[16px]">
            هذا نص يمكن استبداله
          </li>
          <li className="text-nowrap text-[10px] lg:text-[16px]">
            هذا نص يمكن استبداله
          </li>
        </ul>
        <Image
          src={Logo}
          alt="logo"
          className="ml-[10px] lg:ml-[64px] object-contain w-[30px] lg:w-[96px] "
        />
      </div>
    </div>
  );
};

export default Header;
