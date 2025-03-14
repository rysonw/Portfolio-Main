import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Title from "../Common/Title";
import Career from "./Career";
import Education from "./Education";
import Personal from "./Personal";

// "npm run deploy to deploy changes"

const About = () => {
  const [personalNav, setPersonalNav] = useState(false);
  const [educationNav, setEducationNav] = useState(false);
  const [careerNav, setCareerNav] = useState(false);

  return (
    <section
      id="about"
      className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto sm:py-20 py-6 overflow-hidden"
    >
      <Title width={"w-[14rem]"}>About Me</Title>
      <div>
        {/* Right Side: Navigation and Content */}
        <div
          className="max-w-full mt-24 custom:mt-0 flex flex-col justify-center items-center" // Centered content
        >
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 flex-wrap mb-8">
            <NavLink
              to="/"
              style={({ isActive }) => {
                if (isActive) {
                  setPersonalNav(true);
                } else {
                  setPersonalNav(false);
                }
              }}
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-3 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-gray-800 ${
                personalNav && "bg-primary text-gray-800"
              }`}
            >
              Personal Bio
            </NavLink>
            <NavLink
              to="/education"
              style={({ isActive }) => {
                if (isActive) {
                  setEducationNav(true);
                } else {
                  setEducationNav(false);
                }
              }}
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-3 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-gray-800 ${
                educationNav && "bg-primary text-gray-800"
              }`}
            >
              Education
            </NavLink>
            <NavLink
              to="/career"
              style={({ isActive }) => {
                if (isActive) {
                  setCareerNav(true);
                } else {
                  setCareerNav(false);
                }
              }}
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-3 px-6 rounded-full border-2 border-primary hover:bg-primary hover:text-gray-800 ${
                careerNav && "bg-primary text-gray-800"
              }`}
            >
              Career
            </NavLink>
          </div>

          {/* Content Section with Fixed Height */}
          <div className="flex-1 min-h-[400px] w-full"> {/* Adjust height as needed */}
            <Routes>
              <Route path="/" element={<Personal />} />
              <Route path="/education" element={<Education />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;