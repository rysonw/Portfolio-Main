import { BsInstagram } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const FooterSocial = () => {
  return (
    <div className="flex items-center gap-x-5 my-6 justify-center">
      <a
        href="https://www.linkedin.com/in/ryson-wong-a85980215/"
        className="bg-custom-blue hover:bg-custom-purple rounded-full p-1 w-[3.2rem] h-[3.2rem] flex justify-center items-center duration-700 ease-in-out transform hover:scale-[1.2]"
      >
        <FaLinkedinIn className="text-2xl text-white " />
      </a>
      <a
        href="https://github.com/rysonw"
        className="bg-custom-blue hover:bg-custom-purple rounded-full p-1 w-[3.2rem] h-[3.2rem] flex justify-center items-center duration-700 ease-in-out transform hover:scale-[1.2]"
      >
        <BsGithub className="text-2xl text-white " />
      </a>
      <a href="https://www.instagram.com/dawongdong/">
        <BsInstagram className=" text-3xl hover:text-[#cf3b9d] transform duration-700 ease-in-out hover:rotate-[360deg]" />
      </a>
    </div>
  );
};

export default FooterSocial;
