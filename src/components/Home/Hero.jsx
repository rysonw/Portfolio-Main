import BubbleEffect from "../BubbleEffect/BubbleEffect";
import { HeroSocial } from "./HeroSocial";
import Profile from "../../assets/profile.jpg";
import MovingText from "../Utils/MovingText";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-full lg:h-screen bannerContainer py-8 lg:pt-0 relative"
    >
      <BubbleEffect />
      <div className="w-[98%] lg:w-[80%] mx-auto sm:pb-0 pb-20 flex justify-center  flex-wrap-reverse items-center h-full gap-x-20 gap-y-8 text-gray-800">
        <div data-aos="fade-right" className="w-[98%] lg:w-[45%] mx-auto">
          <h2 className="capitalize text-4xl md:text-6xl font  font-title font-bold text-center lg:text-left mr-10 mt-10 lg:mt-0">
            Ryson Wong
          </h2>

          <MovingText />

          <BubbleEffect />
          
          <HeroSocial />
          <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="contact"
          
          >
          <div className="text-center lg:text-left my-4">
            <button className="text-xl text-[#0e0c38] border-2 bg-[white] border-[white] font-primary px-8 py-2 my-4 transition-all hover:scale-105 ease-in-out  duration-500 hover:bg-transparent hover:text-white ">
              Contact
            </button>
          </div>
        </Link>

        </div>
        <div data-aos="fade-left" className="w-[70%] lg:w-[45%] mx-auto">
          <div className="flex items-center justify-end relative before:absolute before:h-[50%] before:w-[50%] before:bg-custom-purple before:-left-[6%] lg:before:left-[26%] before:-z-1 before:-bottom-3  sm:before:-bottom-5 after:absolute after:h-[50%] after:w-[50%] after:bg-custom-orange after:-right-[6%] lg:after:-right-[4%] after:-z-1 after:-top-3 sm:after:-top-5">
            <img
              src={Profile}
              alt=""
              className="w-full lg:w-[70%] relative z-10 h-full "
            />
          </div>
        </div>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
  );
};

export default Hero;
