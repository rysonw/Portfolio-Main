import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
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

import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const navData = [
  { name: "Home", link: "home", offset: -80 },
  { name: "about me", link: "about", offset: -80 },
  { name: "resume", link: "resume", offset: -100 },
  { name: "projects", link: "projects", offset: -100 },
  { name: "contact", link: "contact", offset: -50 },
];

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <>
      <header
        className={`z-[100] w-full ${
          isVisible ? "bg-white fixed shadow-2xl" : "bg-transparent absolute"
        } duration-500`}
      >
        <div className="py-6 px-4 lgC:w-[80%] sm:w-[90%] w-[98%] m-auto">
          <div
            className={`${
              !isVisible ? "text-white" : "text-primary"
            } font-primary font-semibold flex justify-end items-center`}
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button
                  className={`${
                    !isVisible ? "text-black" : "text-primary"
                  } sm:text-4xl text-3xl navBreak2:hidden`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <GiHamburgerMenu className="" />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="navBreak2:hidden flex justify-between items-center gap-8">
        <Link to="home">
          <div className="font-courgette text-white text-4xl cursor-pointer">
            The Zoo
          </div>
        </Link>
        <button
          className={`text-white text-4xl`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div> */}
        </div>
      </header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-[500] flex navBreak2:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white text-3xl"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FiX className="text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 w-full justify-center px-4">
                <h2
                  className="text-2xl font-bold text-center w-[80%]"
                  onClick={() => setSidebarOpen(false)}
                ></h2>
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 p-6 flex flex-col gap-4 font-primary font-medium text-lg main-nav">
                  <a
                    href={fileCV}
                    download
                    className=" h-[4rem] w-[14rem] rounded-full flex justify-start  items-center overflow-hidden icon-box pl-8 duration-100 transition-all  bg-primary text-white mb-8"
                  >
                    <div className="flex justify-start items-center ">
                      <AiOutlineDownload className="text-3xl icon" />
                      <span className=" ml-4 text-base capitalize font-primary hover:text-white">
                        Resume
                      </span>
                    </div>
                  </a>
                  {navData.map((data, index) => (
                    <Link
                      key={index}
                      activeClass="active"
                      to={data.link}
                      spy={true}
                      smooth={true}
                      offset={data.offset}
                      duration={500}
                      className="bg-[#f2f3f5]  h-[4rem] w-[14rem] rounded-full flex justify-start  items-center overflow-hidden icon-box pl-8 duration-100 transition-all hover:bg-primary text-custom-blue hover:text-white cursor-pointer"
                    >
                      <div className="flex justify-start items-center ">
                        {data.link === "home" && (
                          <AiOutlineHome className="text-3xl pb-1 border-b-2   icon" />
                        )}
                        {data.link === "about" && (
                          <AiOutlineUser className="text-3xl pb-1 border-b-2   icon" />
                        )}
                        {data.link === "resume" && (
                          <AiOutlineFileText className="text-3xl pb-1 border-b-2   icon" />
                        )}
                        {data.link === "projects" && (
                          <AiOutlineFundProjectionScreen className="text-3xl pb-1 border-b-2   icon" />
                        )}
                        {data.link === "contact" && (
                          <FaRegEnvelope className="text-3xl pb-1 border-b-2   icon" />
                        )}

                        <span className=" ml-4 text-base capitalize font-primary hover:text-white">
                          {data.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileNav;
