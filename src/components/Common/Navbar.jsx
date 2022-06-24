import {
  AiOutlineDownload,
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import fileCV from "../../assets/Resume - Ryson Wong.pdf";
const navData = [
  { name: "Home", link: "home", offset: -50 },
  { name: "about me", link: "about", offset: -50 },
  { name: "resume", link: "resume", offset: -50 },
  { name: "projects", link: "projects", offset: -100 },
  { name: "contact", link: "contact", offset: 0 },
];
const Navbar = () => {
  return (
    <nav className="fixed top-[50%] translate-y-[-50%] z-[400]">
      <div className="flex flex-col gap-y-8 ml-4 main-nav">
        {navData.map((data, index) => (
          <Link
            key={index}
            activeClass="active"
            to={data.link}
            spy={true}
            smooth={true}
            offset={data.offset}
            duration={500}
            className="bg-[#f2f3f5] w-[4rem] h-[4rem] hover:w-[11rem] rounded-full flex justify-center hover:justify-start  items-center overflow-hidden icon-box hover:pl-4 duration-500 transition-all hover:bg-primary text-custom-blue hover:text-white cursor-pointer"
          >
            <div className="flex justify-start items-center ">
              {data.link === "home" && (
                <AiOutlineHome className="text-3xl pb-1 border-b-2   icon flex-shrink-0" />
              )}
              {data.link === "about" && (
                <AiOutlineUser className="text-3xl pb-1 border-b-2   icon flex-shrink-0" />
              )}
              {data.link === "resume" && (
                <AiOutlineFileText className="text-3xl pb-1 border-b-2   icon flex-shrink-0" />
              )}
              {data.link === "projects" && (
                <AiOutlineFundProjectionScreen className="text-3xl pb-1 border-b-2   icon flex-shrink-0" />
              )}
              {data.link === "contact" && (
                <FaRegEnvelope className="text-3xl pb-1 border-b-2   icon flex-shrink-0" />
              )}

              <span className="icon-text ml-4 text-base capitalize font-primary hover:text-white ">
                {data.name}
              </span>
            </div>
          </Link>
        ))}
        <a
          href={fileCV}
          download
          className="bg-[#f2f3f5] w-[4rem] h-[4rem] hover:w-[10rem] rounded-full flex justify-center hover:justify-start  items-center overflow-hidden icon-box hover:pl-4 duration-300 transition-all hover:bg-primary text-custom-blue hover:text-white"
        >
          <div className="flex justify-start items-center ">
            <AiOutlineDownload className="text-3xl pb-1 border-b-2   icon" />
            <span className="icon-text ml-4 text-base capitalize font-primary hover:text-white">
              Download Resume
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
