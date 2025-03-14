import Progress from "../Common/Progress";
import Title from "../Common/Title";
import { FaBook, FaCode, FaLaptopCode } from "react-icons/fa"; // Import icons

const skillData = [
  { title: "Spring Start Here by Laurentiu Spilca", percent: 60, icon: <FaCode className="text-2xl text-blue-600" /> },
  { title: "Elements of Programming Interviews in Python by Adnan Aziz", percent: 45, icon: <FaLaptopCode className="text-2xl text-purple-600" /> },
];

const Skills = () => {
  return (
    <section className="w-[98%] lg:w-[80%] mx-auto my-8 custom:mt-20">
      <Title>THINGS I'M DOING</Title>
      <div className="flex justify-center items-center flex-wrap gap-6 sm:mt-10 mt-0 mb-16 w-full">
        {/* Skills Container */}
        <div
          data-aos="fade-middle"
          className="px-7 py-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl w-[100%] md:w-[48%] hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.2)] transition-shadow duration-300"
        >
          {skillData.map((data, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-4 mb-2">
                {data.icon} {/* Icon */}
                <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
              </div>
              <Progress done={data.percent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;