import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import MobileNav from "../components/Common/MobileNav";
import Navbar from "../components/Common/Navbar";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Resume from "../components/Home/Resume";
import Skills from "../components/Home/Skills";
import Loading from "./Loading/Loading";
const Home = ({ loaded, loading }) => {
  const [backTopButton, setBackTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const showMobileNav = window.innerWidth < 768;
  return (
    <div className="App overflow-hidden relative">
      <Loading loaded={loaded} loading={loading} />
      {showMobileNav ? <MobileNav /> : <Navbar />}

      <Hero />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Contact />
      <Footer />
      {backTopButton && (
        <div
          className="fixed right-0 bottom-0 transform translate-x-[-50%] translate-y-[-50%] w-[4rem] h-[4rem] bg-white p-4 rounded-full flex border-2 border-primary justify-center items-center hover:bg-primary arrow-box duration-500 cursor-pointer z-[100]"
          onClick={scrollToTop}
        >
          <HiOutlineArrowNarrowUp className="text-4xl text-primary " />
        </div>
      )}
    </div>
  );
};

export default Home;
