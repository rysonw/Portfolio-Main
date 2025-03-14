import { useEffect, useState } from "react";
import MobileNav from "../components/Common/MobileNav";
import Navbar from "../components/Common/Navbar";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
