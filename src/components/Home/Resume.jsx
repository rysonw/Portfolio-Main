import file from "../../assets/CV.pdf";
import CVComponents from "./CVComponents";

const Resume = () => {
  return (
    <section id="resume" className="w-[98%] custom1000:w-[70%] mx-auto my-28">
      <div data-aos="flip-down">
        <CVComponents />
        <a href={file} download>
          <button className="text-xl text-gray-800 border-2 border-primary font-primary px-8 py-2 my-4 transition-all hover:scale-105 ease-in-out  duration-500 hover:bg-primary cursor-pointer">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
