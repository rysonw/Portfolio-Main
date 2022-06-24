import { BsGithub } from "react-icons/bs";
const Project = ({ title, link, subTitle, list }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-start items-center text-lg flex-wrap text-left">
        <h5 className="mr-[6px]">{title}</h5>|
        <a href={link}>
          <div className="ml-2 flex justify-start items-center gap-x-2 hover:underline">
            <BsGithub />
          </div>
        </a>
      </div>
      <p className="text-lg italic text-left">{subTitle}</p>
      <ul className="text-sm text-left ml-8 mt-1">
        {list.map((data, index) => (
          <li key={index} className="list-disc">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
