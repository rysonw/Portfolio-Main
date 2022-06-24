const Skill = ({ title, name }) => {
  return (
    <div className="flex justify-start custom2:items-center items-start text-base text-left">
      <p className="mr-2 font-bold">{title}</p>
      <p className="ml-2">{name}</p>
    </div>
  );
};

export default Skill;
