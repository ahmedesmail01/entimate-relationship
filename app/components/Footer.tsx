import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="  bg-[#1b1b1b] text-white  py-16 lg:py-12  flex flex-col items-center gap-8">
      <div className="flex gap-6 text-white">
        <a href="#" className="flex flex-row-reverse gap-2 items-center">
          <p className="hidden lg:block">facebook</p>
          <FaFacebook className="w-6 h-6 text-white" />
        </a>

        <a href="#" className="flex flex-row-reverse gap-2 items-center">
          <p className="hidden lg:block">Instagram</p>
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="flex flex-row-reverse gap-2 items-center">
          <p className="hidden lg:block">X</p>
          <BsTwitterX className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="flex flex-row-reverse gap-2 items-center">
          <p className="hidden lg:block">YouTube</p>
          <TbBrandYoutubeFilled className="w-6 h-6 text-white" />
        </a>
      </div>
      <p className="text-white text-base font-normal leading-normal">
        جميع الحقوق محفوظة @2024
      </p>
    </div>
  );
};

export default Footer;
