const SubTitle = ({ first, second, date }) => {
  return (
    <div className="flex justify-between items-center text-lg flex-wrap text-left">
      <div className="flex justify-start items-center flex-wrap text-left">
        <h5 className="mr-[6px]">{first}</h5>|
        <h5 className="ml-[6px]">{second}</h5>
      </div>
      <p className="text-base italic">{date}</p>
    </div>
  );
};

export default SubTitle;
