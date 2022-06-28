import { IoSchoolOutline } from "react-icons/io5";
const Education = () => {
  return (
    <div data-aos="fade-left" className=" mt-8 custom:w-full">
      <h3 className="text-4xl font-semibold font-primary text-primary text-center mt-4 mb-8">
        Education
      </h3>
      <div className="flex justify-left gap-x-6 ml-0 md:ml-10">
        <link rel="icon" href="./CCAF.jpg" className="text-6xl text-primary" />
        <div className="text-left">
          <h6 className="text-xl font-medium font-primary text-gray-900">
            Community College of the Air Force
          </h6>
          <small className="text-base font-medium font-primary">
            2019 - 2022
          </small>
          <p className="mt-2 text-xl  font-primary">Associates in Electronic Systems Technology</p>
        </div>
      </div>
      <br />
      <div className="flex justify-left gap-x-6 ml-0 md:ml-10">
        <IoSchoolOutline className="text-6xl text-primary" />
        <div className="text-left">
          <h6 className="text-xl font-medium font-primary text-gray-900">
            Oregon State University
          </h6>
          <small className="text-base font-medium font-primary">
            2021 - Present
          </small>
          <p className="mt-2 text-xl  font-primary">Bachelor's of Science in Computer Science with a minor in Mathematics</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
