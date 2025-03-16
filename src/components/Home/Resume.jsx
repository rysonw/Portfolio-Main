import file from "../../assets/Resume - Ryson Wong.pdf";
import CVComponents from "./CVComponents";
import { FaDownload } from "react-icons/fa"; // Import download icon

const Resume = () => {
  return (
    <section id="resume" className="w-[98%] custom1000:w-[70%] mx-auto my-28">
      <div data-aos="flip-down" className="text-center">
        <CVComponents />

        {/* Download Button with Icon */}
        <a href={file} download>
          <button className="text-xl text-white border-2 border-transparent font-primary px-8 py-2 my-4 transition-all hover:scale-105 ease-in-out duration-500 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 cursor-pointer flex items-center justify-center gap-2 mx-auto">
            <FaDownload className="text-2xl" />
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;