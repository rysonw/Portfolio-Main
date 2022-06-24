import { useState } from "react";

const ProjectCard = ({ data }) => {
  const { title, img, details, Tech, desc, video, gitlink } = data;
  const [showText, setShowText] = useState(false);
  return (
    <div className=" shadow-skill h-[12rem] sm:h-[20rem] object-cover border border-gray-600 overflow-hidden rounded-lg  relative project-box transform md:hover:scale-105 transition-transform duration-500 ease-in-out">
      <img src={img} alt={`${title}-img`} className="w-full h-full" />
      <div className="absolute z-20 -translate-x-[100%] top-0 left-[-100%] project-text  bg-primary text-gray-800 h-full w-full py-6 pl-6 pr-2 flex items-center justify-start text-left duration-1000 ">
        {!showText ? (
          <div>
            <h3 className="text-2xl font-primary  font-bold mb-4">{title}</h3>
            <p className="text-base font-primary ">{details}</p>
            <p className="text-base font-primary ">Technologies: {Tech}</p>
            <button
              className="text-sm font-primary  py-2 px-3 border-2 border-white hover:border-white hover:bg-white hover:text-custom-orange mt-4"
              onClick={() => setShowText(true)}
            >
              Read More
            </button>
          </div>
        ) : (
          <div className="overflow-auto h-full scroll-box">
            <button
              className="text-sm font-primary  py-2 px-3 border-2 border-white hover:border-white hover:bg-white hover:text-custom-orange my-4"
              onClick={() => setShowText(false)}
            >
              Read Less
            </button>

            <p className="text-base font-primary ">{desc}</p>
            <a href={gitlink} target="_blank" rel="noreferrer">
              <button className="text-sm font-primary  py-2 px-3 border-2 border-white hover:border-white hover:bg-white hover:text-custom-orange mt-4">
                GitHub
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
