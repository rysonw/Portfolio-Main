import file from "../../assets/Resume - Ryson Wong.pdf";
import Activities from "../Common/CvComponent/Activities";
import EducationCard from "../Common/CvComponent/EducationCard";
import Experience from "../Common/CvComponent/Experience";
import Project from "../Common/CvComponent/Project";
import Skill from "../Common/CvComponent/Skill";
import Social from "../Common/CvComponent/Social";
import Title from "../Common/CvComponent/Title";
const CVComponents = () => {
  return (
    <div className="my-4 bg-primary rounded-md relative resume-box transition-all duration-700 shadow-2xl">
      <div className="customContainer bg-primary shadow-2xl rounded-lg text-lg text-gray-800 font-bellMt p-8">
        <div>
          <h2 className="text-3xl text-semibold font-primary">Ryson W. Wong</h2>
        </div>
        {/* links */}
        <div>
          <Social />
        </div>
        {/* education */}
        <div className="my-6">
          <Title>Education</Title>
          <EducationCard
            school="Oregon State University"
            location="Corvallis, OR"
            duration="June 2021 – Present"
            degree="Bachelor of Engineering in Computer Science, GPA 3.82"
            time="Expected Graduation, May 2024"
          />
          <EducationCard
            school="Community College of the Air Force"
            location="Maxwell AFB, Alabama"
            duration="July 2019 – Present"
            degree="Associates in Electronic Systems Technology, GPA 4.00"
            time="Expected Graduation, July 2022"
          />
        </div>
        {/* work experience  */}

        <div className="my-6">
          <Title>Work Experience</Title>
          <Experience
            title="Corsair Ranch"
            location="Tucson, Arizona"
            duration="May 2022 - June 2022"
            subTitle="Software Development Intern / Georgia Tech Research Institution"
            list={[
              "Created full-stack website using React, Node.js, and Java Bootstrap for AFWERX WEPTAC Event",
              "Fixed bugs and added new features to Corsair Ranch's official website.",
              "Participated in multiple sprints and scrum meetings to present key features and discuss urgent bug fixes",
              "Created short-term solutions using Microsoft’s Power Apps which was utilized by over 100’s of end-users",
            ]}
          />
          <Experience
            title="Major League Hacking Fellowship with Meta"
            location="Remote"
            duration="May 2022 - Present"
            subTitle="Fellow / Production Engineering"
            list={[
              "Worked with Linux Systems, Flask, Docker, GitHub Actions, cAdvisor, and other technologies to keep services and applications running and highly available.",
<<<<<<< Updated upstream
              "Programmed, designed, and deployed a sleek and professional portfolio template for users to utilize and personally customize themselves.",
              "Created a Docker containerized web application secured with SSL to run robustly and continuously using CI/CD tools in a CentOS AWS instance able to handle up to 100 requests per second.",
=======
              "Monitored the system and container processes using Prometheus and Grafana cutting down on core redundancies by ~30%.",
              "Deployed a scalable, containerized open-source web application, built with Python, Flask, Jinja, Nginx, and MySQL, to a cloud server (DigitalOcean).",
              "Set up a CI/CD pipeline through Github Actions reducing deployment time by 75% and wrote unittests to simplify debugging."
>>>>>>> Stashed changes
            ]}
          />
          <Experience
            title="Hawaii Air National Guard"
            location="Kekaha, Hawaii"
            duration="March 2018 - Present"
            subTitle="Senior Airman / Radio Frequency Operations Technician"
            list={[
              "Engineered bash and python scripts for automatic deployment of equipment which improved efficiency by 70%",
              "Staged HF/VHF/SHF/UHF radios and various networking technologies to transfer local/remote data and voice",
              "Led and trained multiple personnel on fundamental radio theory and troubleshooting principles",
              "Deployed several satellite communication kits to provide commercial internet for over 40 personnel",
            ]}
          />
        </div>

        {/* project */}
        <div className="my-6">
          <Title>Projects</Title>
          <Project
            title="Flashcard Application (Android, Java)"
            subTitle="CodePath"
            link="https://github.com/rysonw/flashcard_application"
            list={[
              "Developed a flashcard application in Java to solidify mobile application development processes and practices",
              "Utilized application for military purposes, mainly to optimize training plans by reaffirming networking concepts",
            ]}
          />
          <Project
            title="Exercise Tracker (Javascript, Node.js, MongoDB, Express, React)"
            subTitle="Personal Project"
            link="https://github.com/rysonw/iSweat"
            list={[
              "Utilized the MERN stack to create an application that saves personal exercise data like: “weight lifted”",
              "Used a custom-built REST API to support CRUD operations within the application",

            ]}
          />
        </div>
        {/* activities  */}
        <div className="my-6">
          <Title>Leadership or Activities</Title>
          <Activities
            title="CodePath Mobile Application Developer"
            location="Remote"
            duration="Feb 2022 – April 2022"
            subTitle="Participant"
            list={[
              "Collaborated with various young professionals to discuss and further application development practices",
              "Presented impactful application ideas and frameworks to a panel of over 10 experienced software engineers.",
              "Catalyzed a flashcard application that was used by ten military personnel for job training purposes",
            ]}
          />
        </div>

        {/* skills */}
        <div className="my-6">
          <Title>Skills</Title>
          <Skill
            title="Languages (Proficient):"
            name="Python, JavaScript, HTML, CSS, C#, Bash"
          />
          <Skill title="Languages (Learning):" name="Java, C++, Kotlin" />
          <Skill
            title="Certifications:"
            name="CompTIA Network+, CompTIA Security+, ITS-305: Software Development in C#"
          />
          <Skill
<<<<<<< Updated upstream
            title="Other:"
            name="Git, Linux, Microsoft Power Apps"
=======
            title="Software:"
            name="Android Studio, Git, Visual Studio Code, Microsoft Power Apps, Docker, Linux"
>>>>>>> Stashed changes
          />
        </div>
      </div>
    </div>
  );
};

export default CVComponents;
