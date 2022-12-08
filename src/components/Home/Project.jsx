import Title from "../Common/Title";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Ryson Requests",
    img: "https://user-images.githubusercontent.com/91065673/163973033-1a9a2d5a-d85e-4a66-9f06-288eb295f5af.gif",
    details:
      "A memory game that gets progressively harder every round. How long can you last?",
    Tech: "HTML, CSS, JavaScript",
    desc: "A game based on the popular memory game: SIMON, which utilizes HTML, CSS and JS as well as the popular coding playground: Glitch.",
    gitlink: "https://github.com/rysonw/Ryson_Requests",
  },
  {
    title: "iStudy",
    img: "https://user-images.githubusercontent.com/91065673/162559498-b0a0bef5-dd8b-4af2-b593-5c0e4856128e.gif",
    details:
      "A flashcard application developed for Android devices.",
    Tech: "Android, Java",
    desc: "Click Here for More Info ⬇️",
    gitlink: "https://github.com/rysonw/flashcard_application",
  },
  {
    title: "Ryson's Card Collection",
    img: "https://user-images.githubusercontent.com/91065673/175589753-20af562e-6ad4-4104-900d-072f942ada01.gif",
    details:
      "A collection of card games that includes: War, BlackJack, Go Fish and more!",
    Tech: "Python, PyGame",
    desc: "*Work in Progress* An early project centered around python and the module PyGame. This game will include a collection of card games with music, animations, pixel art, a shop and much more.",
    gitlink: "https://github.com/rysonw/Ryson-Card-Collection-and-More",
  }
];

const Project = () => {
  return (
    <section id="projects" className="lg:w-[85%] sm:w-[90%] w-[98%] mx-auto">
      <Title width={"w-[16rem]"}>PROJECTS</Title>
      <div className="grid custom:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  justify-items-center">
        {projectData.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Project;
