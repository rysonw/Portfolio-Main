const SubTitle = ({ first, second, date }) => {
  return (
    <div className="flex justify-between items-center text-lg flex-wrap text-left">
      <div className="flex justify-start items-center flex-wrap text-left">
      <h5 className="mr-[6px] font-bold text-gray-800 drop-shadow-sm hover:text-blue-600 transition-colors">{first}</h5>|
      <h5 className="ml-[6px] font-bold text-gray-800 drop-shadow-sm hover:text-blue-600 transition-colors">{second}</h5>
      </div>
      <p className="text-base italic">{date}</p>
    </div>
  );
};

export default SubTitle;
