import CareerTable from "../Common/CareerTable";
import { FaBriefcase } from "react-icons/fa"

const Career = () => {
  return (
    <div data-aos="fade-left" className=" mt-8 custom:w-full">
      <h3 className="text-4xl font-bold font-primary text-primary text-center mb-8  border-gray-200 pb-4">
        <FaBriefcase className="inline-block mr-2 mb-3"/> {/* Icon */}
        Career 
      </h3>
      <CareerTable />
    </div>
  );
};

export default Career;
