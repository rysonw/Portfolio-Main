import { BiEnvelopeOpen } from "react-icons/bi";
import { BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const HeroSocial = () => {
  return (
    <div className=" flex items-center gap-x-10 mt-6 justify-center lg:justify-start text-gray-800">
      <a href="https://www.linkedin.com/in/ryson-wong">
        <FaLinkedinIn className=" text-3xl transform duration-700 ease-in-out hover:rotate-[360deg] hover:text-[#0077b5]" />
      </a>

      <a href="https://github.com/rysonw">
        <BsGithub className=" text-3xl hover:text-[#1b1f23] transform duration-700 ease-in-out hover:rotate-[360deg]" />
      </a>
    </div>
  );
};
