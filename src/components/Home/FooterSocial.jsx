import { BiEnvelopeOpen } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const FooterSocial = () => {
  return (
    <div className="flex items-center gap-x-5 my-6 justify-center">
      <a
        href="#!"
        className="bg-custom-blue hover:bg-custom-purple rounded-full p-1 w-[3.2rem] h-[3.2rem] flex justify-center items-center duration-700 ease-in-out transform hover:scale-[1.2]"
      >
        <FaLinkedinIn className="text-2xl text-white " />
      </a>
      <a
        href="#!"
        className="bg-custom-blue hover:bg-custom-purple rounded-full p-1 w-[3.2rem] h-[3.2rem] flex justify-center items-center duration-700 ease-in-out transform hover:scale-[1.2]"
      >
        <BsGithub className="text-2xl text-white " />
      </a>
      <a
        href="#!"
        className="bg-custom-blue hover:bg-custom-purple rounded-full p-1 w-[3.2rem] h-[3.2rem] flex justify-center items-center duration-700 ease-in-out transform hover:scale-[1.2]"
      >
        <BiEnvelopeOpen className="text-2xl text-white " />
      </a>
    </div>
  );
};

export default FooterSocial;
