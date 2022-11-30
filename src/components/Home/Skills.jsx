import Progress from "../Common/Progress";
import Title from "../Common/Title";
const skillData = [
  { title: "Facial Recognition Project in WPF and C#", percent: 40 },
  { title: "Elements of Programming Interviews in Python by Adnan Aziz", percent: 45 },
  { title: "Web Server Project in C#", percent: 15 },
];
const Skills = () => {
  return (
    <section className="w-[98%] lg:w-[80%] mx-auto my-8 custom:mt-20">
      <Title>WORKS IN PROGRESS</Title>
      <div className="flex justify-center items-center flex-wrap gap-6 sm:mt-10 mt-0 mb-16 w-full">
        <div
          data-aos="fade-middle"
          className="px-7 py-6 rounded-xl shadow-skill w-[100%] md:w-[48%]"
        >
          {skillData.slice(0, 4).map((data, index) => (
            <Progress key={index} done={data.percent} title={data.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
