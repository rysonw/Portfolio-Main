import { IoSchoolOutline } from "react-icons/io5";

const Education = () => {
  // School colors

  return (
    <div data-aos="fade-left" className="mt-8 custom:w-full ">
      <h3 className="text-4xl font-bold font-primary text-primary text-center mb-8 border-b-2 border-gray-200 pb-4">
        📚 Education Journey
      </h3>
  
      <div className="max-w-3xl mx-auto px-20 space-y-8"> {/* Added container constraint */}
        {/* WGU */}
        <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group relative">
          <div className="flex-shrink-0">
            <div className="p-3 rounded-full bg-[#1c236d]/10">
              <IoSchoolOutline className="text-5xl text-[#1c236d]" />
            </div>
            <div className="h-full w-1 bg-[#1c236d] absolute left-16 top-0 bottom-0 ml-10 hidden md:block" />
          </div>
  
          <div className="space-y-2 flex-1">
            <h6 className="text-2xl font-bold font-primary text-[#1c236d]">
              Western Governors University
            </h6>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#1c236d]/10 text-[#1c236d] rounded-full text-sm font-bold">
                2023 - Present
              </span>
            </div>
            <p className="text-xl font-primary mt-2 border-l-4 border-[#1c236d] pl-4">
              <strong className="font-semibold">B.S. Computer Science</strong> 
              <span className="text-gray-600"> (Expected Dec 2025)</span>
            </p>
          </div>
        </div>
  
        {/* OSU */}
        <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group relative">
          <div className="flex-shrink-0">
            <div className="p-3 rounded-full bg-[#D73F09]/10">
              <IoSchoolOutline className="text-5xl text-[#D73F09]" />
            </div>
            <div className="h-full w-1 bg-[#D73F09] absolute left-16 top-0 bottom-0 ml-10 hidden md:block" />
          </div>
          <div className="space-y-2 flex-1">
            <h6 className="text-2xl font-bold font-primary text-[#D73F09]">
              Oregon State University
            </h6>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#D73F09]/10 text-[#D73F09] rounded-full text-sm font-bold">
                2021 - 2023
              </span>
            </div>
            <p className="text-xl font-primary mt-2 border-l-4 border-[#D73F09] pl-4">
              <strong className="font-semibold">B.S. Computer Science</strong> 
              <span className="text-gray-600"> | Mathematics Minor</span>
            </p>
          </div>
        </div>
  
        {/* CCAF */}
        <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group relative">
          <div className="flex-shrink-0">
            <div className="p-3 rounded-full bg-[#0033A0]/10">
              <IoSchoolOutline className="text-5xl text-[#0033A0]" />
            </div>
            <div className="h-full w-1 bg-[#0033A0] absolute left-16 top-0 bottom-0 ml-10 hidden md:block" />
          </div>
          <div className="space-y-2 flex-1">
            <h6 className="text-2xl font-bold font-primary text-[#0033A0]">
              Community College of the Air Force
            </h6>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#0033A0]/10 text-[#0033A0] rounded-full text-sm font-bold">
                2019 - 2023
              </span>
            </div>
            <p className="text-xl font-primary mt-2 border-l-4 border-[#0033A0] pl-4">
              <strong className="font-semibold">A.A.S. Electronic Systems Technology</strong> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;