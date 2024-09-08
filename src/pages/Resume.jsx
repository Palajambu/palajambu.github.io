import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import Nus from "../images/nus.png";
import { Link } from "react-router-dom";
import TableauDA from "../images/TableauDA.png";
import AlteryxDesignerCore from "../images/AlteryxDesignerCore.png";

function Resume() {
  const [activeSection, setActiveSection] = useState("profile");

  const data = {
    profile: [
      "A certified data analyst with an interdisciplinary background in safety and environmental engineering. Experience in helping clients translate conceptual problems into more practical solutions. Fast learner and a clear communicator capable of working with a variety of team members.",
    ],
    education: [
      {
        year: "2022 - 2023",
        degree: "Data Analytics Program",
        institution: "Careerfoundry, Online Learning and Mentoring",
      },
      {
        year: "2017 - 2020",
        degree: "MSc, Process Safety and Environmental Engineering",
        institution: "Magdeburg University – Germany",
        note: "1.8/1.0",
      },
      {
        year: "2007 - 2011",
        degree: "B.Eng, Chemical Engineering",
        institution: "Diponegoro University – Indonesia",
        note: "3.29/4.0",
      },
    ],
    skills: [
      "Data sourcing and processing",
      "Data analysis, exploration, and visualization",
      "Python",
      "SQL",
      "Excel",
      "Alteryx",
      "Tableau Desktop",
      "Tableau Prep",
      "Power BI",
    ],
    languages: [
      {
        language: "English",
        fluency: "Business fluent",
      },
      {
        language: "German",
        fluency: "Business fluent",
      },
      {
        language: "Bahasa Indonesia",
        fluency: "Native",
      },
    ],
    certifications: [
      {
        type: "Tableau",
        image: TableauDA,
        link: `https://www.credly.com/badges/05182339-5668-49b1-a64b-2aa076141826/public_url`,
      },
      {
        type: "Alteryx",
        image: AlteryxDesignerCore,
        link: `https://www.credly.com/badges/b1ef4e45-122f-498b-b9ea-1f722fa03f1b/public_url`,
      },
    ],
    work: [
      {
        year: "2023 – Present",
        place: "Hamburg, Germany",
        position: "Data School Consultant - The Information Lab Germany",
        responsibilities: [
          "Provide data analysis consulting services to clients in the financial services sector.",
          "Utilize Tableau Desktop and Server to create interactive dashboards and data visualizations.",
          "Collaborate with various stakeholders to gather requirements, understand business needs.",
        ],
      },
      {
        year: "2021 – 2023",
        place: "Frankfurt, Germany",
        position: "EHS (Environmental Health Safety) Consultant - ERM",
        responsibilities: [
          "Performed on-site assessment and desktop study of safety and environmental compliance at logistics center, data center and construction site under German regulations.",
          "Performed operational audit of retail stores across central Europe (Germany, Czech Republic, and Austria).",
          "Achieved Global Recognition Award 2022 for “Client Focus Delivery”.",
        ],
      },
      {
        year: "2018 – 2019",
        place: "Braunschweig, Germany",
        position:
          "Research Assistant - Physikalisch-Technische Bundesanstalt (PTB)",
        responsibilities: [
          "Performed an experimental investigation of particle deposition and particle electrification as potential ignition source in powder and grain industry.",
          "Published the results as scientific publication. Available ",
        ],
      },
      {
        year: "2013 – 2016",
        place: "Kalimantan/Borneo, Indonesia",
        position: "Drilling Field Engineer - Halliburton",
        responsibilities: [
          "Performed measurement and logging while drilling, data quality control for onshore and offshore wells.",
          "Handled radioactive source and lithium battery.",
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-fit bg-gray-100">
      <div className="flex flex-col md:flex-row w-[950px] bg-white shadow-lg rounded-lg m-4 p-6">
        <div className="md:w-1/4 bg-sky-950 text-white p-6">
          <ul className="space-y-4">
            {[
              "profile",
              "education",
              "skills",
              "work",
              "languages",
              "certifications",
            ].map((section) => (
              <li
                key={section}
                onClick={() => setActiveSection(section)}
                className={`cursor-pointer p-2 rounded-lg transition-colors duration-200 ${
                  activeSection === section
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}

        <div className="md:w-3/4 p-6">
          {activeSection === "profile" && (
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-3xl font-semibold mr-4">Profile</h2>
                <img
                  src={Nus}
                  width="50"
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              {data.profile.map((profile, index) => (
                <h4 key={index} className="text-lg text-gray-700 mb-2">
                  {profile}
                </h4>
              ))}
              <br />
              <div className="flex items-center mb-2">
                <FaLocationDot className="mr-2" />{" "}
                <h4 className="text-lg  text-gray-700">Hamburg, Germany</h4>
              </div>
              <div className="flex items-center mt-2">
                <FaCircleInfo className="mr-2" />
                <h4 className="text-lg text-gray-700">
                  Open to relocating within Germany or world-wide remote working
                </h4>
              </div>
            </div>
          )}

          {activeSection === "education" && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              {data.education.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="text-xl font-bold">{item.degree}</div>
                  <div className="text-sm text-gray-600">
                    {item.institution}
                  </div>
                  <div className="text-sm text-gray-500">{item.year}</div>
                  <div className="text-sm text-gray-500">{item.note}</div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "skills" && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc pl-5">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-lg text-gray-700 mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "work" && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
              {data.work.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="text-xl font-bold">{item.position}</div>
                  <div className="text-sm text-gray-500">
                    {item.place}, {item.year}
                  </div>
                  <ul className="list-disc pl-5 mt-2">
                    {item.responsibilities.map((task, index) => (
                      <li key={index} className="text-base text-gray-600 mb-1">
                        {task}
                        {task.includes("publication") && (
                          <Link
                            href="https://linkinghub.elsevier.com/retrieve/pii/S0921883120303411"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            here.
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeSection === "languages" && (
            <div>
              {data.languages.map((language, index) => (
                <div key={index} className="mb-6">
                  <div className="text-xl font-bold">{language.language}</div>
                  <div className="text-sm text-gray-600">
                    {language.institution}
                  </div>
                  <div className="text-sm text-gray-500">
                    {language.fluency}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "certifications" && (
            <div>
              {data.certifications.map((certification, index) => (
                <div key={index} className="mb-6">
                  <div className="text-xl font-bold">{certification.type}</div>
                  <Link to={certification.link} target="_blank">
                    <img className="size-28" src={certification.image}></img>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
