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
            school="Western Governers University"
            location="Salt Lake City, Utah"
            duration="June 2023 – Present"
            degree="Bachelor of Science in Computer Science, GPA 4.00"
            time="Expected Graduation, Dec 2025"
          />
          <EducationCard
            school="Oregon State University"
            location="Corvallis, OR"
            duration="May 2021 – June 2023"
            degree="Bachelor of Engineering in Computer Science, GPA 3.82"
          />
          <EducationCard
            school="Community College of the Air Force"
            location="Maxwell AFB, Alabama"
            duration="July 2019 – March 2022"
            degree="Associates in Electronic Systems Technology, GPA 4.00"
          />
        </div>
        {/* work experience  */}

        <div className="my-6">
          <Title>Work Experience</Title>
          <Experience
            title="Amazon"
            location="Seattle, WA"
            duration="Sep 2024 - Dec 2024"
            subTitle="SDE Intern / EC2 Load Balancing / Data Plane Platform"
            list={[
              "Designed and implemented PatchingPilot, an enterprise-wide automated alerting system that detects potential patching issues during critical rollout cycles, effectively managing a global ELB fleet of over 12 million nodes, including ADC regions",
              "Onboarded five cross-functional teams to utilize PatchingPilot, enhancing patch management efficiency and ensuring consistent deployment practices across the organization",
              "Fixed critical bugs for ELB patching services, ensuring seamless and reliable deployments during patching updates.",
            ]}
          />
          <Experience
            title="Microsoft"
            location="Redmond, WA"
            duration="May 2024 - Aug 2024"
            subTitle="SWE Intern / AEP Silver and Sovereign / CloudSprout"
            list={[
              "Implemented an automated egress workflow that enhanced the build-out operations for Azure’s cloud offerings, including Public, Sovereign, and Air-Gapped clouds, by over 55%",
              "Contributed to the execution of CloudSprout, a multi-cloud offering providing a centralized registry of configuration values, ensuring seamless integration and configuration management across diverse cloud environments.",
              "Developed and deployed an end-to-end automated workflow utilizing the internal tool “Drift-In-Parity” to detect configuration value changes and raise automated Pull Requests, significantly reducing manual effort and error rates.",
            ]}
          />
          <Experience
            title="NASA JPL"
            location="Pasadena, CA"
            duration="Oct 2023 - Jan 2024"
            subTitle="SWE Intern / IT Special Programs and Engineering Directorate / Applications"
            list={[
              "Developed a comprehensive dashboard using Django and TypeScript to optimize part management for hundreds of internal employees.",
              "Implemented Ansible playbooks to automate system provisioning and configuration, resulting in a 30% reduction in deployment time for critical resources.",
              "Integrated NetApp's ONTAP storage solution through a custom-built full-stack web part, enhancing storage efficiency for internal NASA JPL SharePoint sites in an air-gapped environment.",
            ]}
          />
          <Experience
            title="Amazon"
            location="Seattle, WA"
            duration="May 2023 - August 2023"
            subTitle="SDE Intern / EC2 Load Balancing / Data Plane Routing"
            list={[
              "Led the development and design of a mock Identity Provider (IdP) internal tool, which greatly improved the authentication testing process for the AWS Application Load Balancing (ALB) software, boosting productivity and reducing testing time.",
              "Created End-To-End Tests through a mock IdP internal tool which improved ALB reliability by 40% for customers who use external Identity Providers during the authentication process.",
              "Furthered the efficiency and performance of the ALB software through the fast resolution of various software bugs which improved ALB user experience and reliability for millions of users",
              "Coordinated with cross-functional teams and stakeholders to ensure the developed IdP tool adhered to partition-specific standards and compliance requirements across various AWS Cloud environments, thereby promoting widespread usability and adoption for in-house testing.",
            ]}
          />
          <Experience
            title="Northrop Grumman"
            location="San Jose, CA"
            duration="Jan 2023 - May 2023"
            subTitle="SWE Intern / Mission Systems"
            list={[
              "Improved C++ programs that implement complex algorithms to analyze large datasets, improving data accuracy and processing efficiency.",
              "Developed automated test scripts using Python to ensure the reliability and functionality of software applications, resulting in a 50% reduction in manual testing time",
              "Wrote regression and unit tests using Catch2 for existing legacy codebase, resulting in a 40% decrease in the software's defects and increased confidence in the codebase among the development team.",
            ]}
          />
          <Experience
            title="Microsoft Software and Systems Academy"
            location="Remote"
            duration="October 2022 - February 2023"
            subTitle="Student / Cloud Application Development / Cohort CCAD9"
            list={[
              "Designed and created software applications using ASP.NET MVC Core. Created from-scratch projects with loosely coupled software architecture. Created and implemented Restful API services. Practiced peer-to-peer code review",
              "Implemented unit and integration testing to validate solutions in ASP.NET MVC Core projects.",
              "Engineered and created responsive and clear user interfaces with Javascript, HTML/CSS and MySQL",
            ]}
          />
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
            duration="May 2022 - August 2022"
            subTitle="Fellow / Production Engineering / Cohort MLH.SUM.20"
            list={[
              "Worked with Linux Systems, Flask, Docker, GitHub Actions, cAdvisor, and other technologies to keep services and applications running and highly available.",
              "Monitored the system and container processes using Prometheus and Grafana cutting down on core redundancies by ~30%.",
              "Deployed a scalable, containerized open-source web application, built with Python, Flask, Jinja, Nginx, and MySQL, to a cloud server (DigitalOcean).",
              "Set up a CI/CD pipeline through Github Actions reducing deployment time by 75% and wrote unittests to simplify debugging."
            ]}
          />
          <Experience
            title="Hawaii Air National Guard"
            location="Kekaha, Hawaii"
            duration="March 2018 - March 2024"
            subTitle="Staff Sergeant / Cyber Defense Operator / 150th Electromagentic Squadron"
            list={[
              "Engineered bash and python scripts for automatic deployment of equipment which improved efficiency by 70%",
              "Staged HF/VHF/SHF/UHF radios and various networking technologies to transfer local/remote data and voice",
              "Led and trained multiple personnel on fundamental radio theory and troubleshooting principles",
              "Deployed several satellite communication kits to provide commercial internet for over 40 personnel",
            ]}
          />
        </div>

        {/* skills */}
        <div className="my-6">
          <Title>Skills</Title>
          <Skill
            title="Languages (Proficient):"
            name="Python, C#, Java,  C++, JavaScript, HTML/CSS, MySQL, Bash"
          />
          <Skill
            title="Certifications:"
            name=" CompTIA Network+, LPI Linux Essentials, CompTIA Security+, CompTIA ITF+, ITS-305: Software Development in C#, Microsoft AZ-900, FCC General Radio Operator License, AWS Cloud Practitioner, TS/SCI"
          />
          <Skill
            title="Software:"
            name="Android Studio, Git, Visual Studio Code, Microsoft Power Apps, Docker, Linux"
          />
        </div>
      </div>
    </div>
  );
};

export default CVComponents;
