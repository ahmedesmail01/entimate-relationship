import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  bg-[#1b1b1b] text-white  py-16 lg:py-12  flex flex-col items-center gap-8">
      {/* <div className="flex flex-col gap-4 items-center">
        <p className="text-black text-base font-normal leading-relaxed lg:leading-normal text-center">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولده
        </p>
      </div> */}

      {/* <div className="hidden lg:flex justify-center gap-10">
        <a
          href="#learning"
          className="text-white text-lg font-normal leading-normal"
        >
          سجل الأن{" "}
        </a>
        <a
          href="#benefits"
          className="text-white text-lg font-normal leading-normal"
        >
          مالذي ستحصل عليه{" "}
        </a>
        <a
          href="#video"
          className="text-white text-lg font-normal leading-normal"
        >
          العلاقة الحميمية الجنسية{" "}
        </a>
      </div> */}

      <div className="flex gap-6 text-white">
        <a href="#"></a>
        <FaFacebook className="w-6 h-6 text-white" />

        <a href="#">
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a href="#">
          <FaTwitter className="w-6 h-6 text-white" />
        </a>
      </div>
      <p className="text-white text-base font-normal leading-normal">
        جميع الحقوق محفوظة @2024
      </p>
    </div>
  );
};

export default Footer;
