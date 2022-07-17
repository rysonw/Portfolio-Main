import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import cPlus from "../../assets/svg/c++.svg";
import css from "../../assets/svg/css-3.svg";
import html from "../../assets/svg/html-1.svg";
import js from "../../assets/svg/logo-javascript.svg";
import python from "../../assets/svg/python-5.svg";
import Title from "../Common/Title";
import Career from "./Career";
import Education from "./Education";
import Personal from "./Personal";

//"npm run deploy" to deploy website changes

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
      <div className=" grid grid-cols-1 custom:grid-cols-2 gap-4">
        <div
          data-aos="fade-right"
          className=" relative flex justify-center items-center"
        >
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={cPlus} alt="" className="" />
            </div>
            <div className="w-secCircle">
              <img src={css} alt="" className="" />
            </div>
            <div className="w-secCircle">
              <img src={python} alt="" className="" />
            </div>

            <div className="w-secCircle">
              <img src={html} alt="" className="" />
            </div>

            <div className="w-secCircle">
              <img src={js} alt="" className="" />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="max-w-full mt-24 custom:mt-0">
          <div className="flex justify-center items-start gap-10 flex-wrap">
            <NavLink
              to="/"
              style={({ isActive }) => {
                if (isActive) {
                  setPersonalNav(true);
                } else {
                  setPersonalNav(false);
                }
              }}
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-2 px-4 border-2 border-primary  hover:bg-primary hover:text-gray-800 ${
                personalNav && "bg-primary text-gray-800"
              }`}
            >
              Personal
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
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-2 px-4 border-2 border-primary hover:bg-primary hover:text-gray-800 ${
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
              className={`transform hover:scale-105 duration-300 ease-out transition-all text-xl font-primary font-medium py-2 px-4 border-2 border-primary hover:bg-primary hover:text-gray-800 ${
                careerNav && "bg-primary text-gray-800"
              }`}
            >
              Career
            </NavLink>
          </div>

          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/education" element={<Education />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default About;
