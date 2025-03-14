import BubbleEffect from "../BubbleEffect/BubbleEffect";
import { HeroSocial } from "./HeroSocial";
import Profile from "../../assets/picture2.png";
import MovingText from "../Utils/MovingText";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-full lg:h-screen bannerContainer py-8 lg:pt-0 relative"
    >
      <BubbleEffect />
      <div className="w-[98%] lg:w-[80%] mx-auto sm:pb-0 pb-20 flex justify-center flex-wrap-reverse items-center h-full gap-x-20 gap-y-8 text-gray-800">
        {/* Left Side: Text Content */}
        <div data-aos="fade-right" className="w-[98%] lg:w-[45%] mx-auto">
          <h2 className="capitalize text-4xl md:text-6xl font font-title font-bold text-center lg:text-left mr-10 mt-10 lg:mt-0">
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
              <button className="text-xl text-[#0e0c38] border-2 bg-[white] border-[white] font-primary px-8 py-2 my-4 transition-all hover:scale-105 ease-in-out duration-500 hover:bg-transparent hover:text-white">
                Contact
              </button>
            </div>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div data-aos="fade-left" className="w-[70%] lg:w-[45%] mx-auto relative">
          {/* Image Container */}
          <div className="relative z-10"> {/* Ensure image is above pseudo-elements */}
            <img
              src={Profile}
              alt="Profile Picture"
              className="w-full lg:w-[70%] h-auto rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Pseudo-elements for Background Effects */}
          <div className="absolute inset-0 -z-1">
            <div className="absolute h-[50%] w-[50%] bg-custom-purple -left-[6%] lg:left-[-%] -bottom-3 sm:-bottom-5"></div>
            <div className="absolute h-[50%] w-[50%] bg-custom-orange -right-[6%] lg:-right-[-22%] -top-3 sm:-top-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;