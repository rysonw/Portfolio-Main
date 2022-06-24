import SubTitle from "./SubTitle";

const Experience = ({ title, location, duration, subTitle, list }) => {
  return (
    <div className="mb-6">
      <SubTitle first={title} second={location} date={duration} />
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

export default Experience;
