import logo from "../../assets/logo.jpg";
import ContactWave from "../../assets/svg/ContactWave";
import Title from "../Common/Title";
import Form from "../Utils/Form";

const Contact = () => {
  return (
    <section id="contact" className="h-full my-8 bg-secondary  relative">
      <div className="absolute w-full">
        <ContactWave />
      </div>
      <div className="sm:pt-[7rem] pt-[3rem] sm:pb-[10rem] pb-[6rem]">
        <h2
          className={`text-[1.8rem] md:text-5xl uppercase font-bold font-title text-gray-800 my-[5rem] pb-4  mx-auto relative text-center title-text`}
        >
          Contact Me!
        </h2>

        <p className="text-lg md:text-xl font-primary my-8 text-custom-blue text-center">
          Feel Free To Reach Out! Let's Connect!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div
            data-aos="fade-down"
            className=" flex justify-center items-center "
          >
            <div className="overflow-hidden rounded-full lg:w-[28rem] lg:h-[28rem] sm:w-[20rem] sm:h-[20rem] h-[15rem] w-[15rem] transform transition-transform duration-500 ease-in-out hover:scale-105">
              <img src={logo} alt="" className="w-full " />
            </div>
          </div>

          <Form />
        </div>
      </div>
      <div className="absolute w-full transform rotate-180 bottom-0">
        <ContactWave />
      </div>
    </section>
  );
};

export default Contact;
