import SubTitle from "./SubTitle";

const EducationCard = ({ school, location, duration, degree, time }) => {
  return (
    <div className="mb-6">
      <SubTitle first={school} second={location} date={duration} />
      <div className="flex justify-between items-center text-base flex-wrap text-left">
        <h5>{degree}</h5>

        <p>{time}</p>
      </div>
    </div>
  );
};

export default EducationCard;
