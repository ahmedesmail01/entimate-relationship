import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  bg-[#f3f3f3]  py-16 lg:py-12  flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-black text-base font-normal leading-relaxed lg:leading-normal text-center">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولده
        </p>
      </div>

      <div className="hidden lg:flex justify-center gap-10">
        <a
          href="#learning"
          className="text-black text-lg font-normal leading-normal"
        >
          سجل الأن{" "}
        </a>
        <a
          href="#benefits"
          className="text-black text-lg font-normal leading-normal"
        >
          مالذي ستحصل عليه{" "}
        </a>
        <a
          href="#video"
          className="text-black text-lg font-normal leading-normal"
        >
          العلاقة الحميمية الجنسية{" "}
        </a>
      </div>

      <div className="flex gap-6 text-white">
        <a href="#"></a>
        <FaFacebook className="w-6 h-6 text-black" />

        <a href="#">
          <FaInstagram className="w-6 h-6 text-black" />
        </a>
        <a href="#">
          <FaTwitter className="w-6 h-6 text-black" />
        </a>
      </div>
      <p className="text-black text-base font-normal leading-normal">
        جميع الحقوق محفوظة @2024
      </p>
    </div>
  );
};

export default Footer;
