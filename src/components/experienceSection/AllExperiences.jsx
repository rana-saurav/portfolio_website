import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Associate Consultant",
    company: "Atos Syntel",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer ",
    company: "WebMinds IT Solutions",
    date: "2025 - Present",
    responsibilities: [
      // "Explaining and facilitating web development concepts.",
      // "Help students with their assignments and grade them weekly.",
      // "Provide support for students through their learning journey.",
      "Developed responsive web interfaces using React, TypeScript, and Tailwind CSS.",
      "Built reusable UI components and optimized front-end performance.",
      "Integrated REST APIs and collaborated in Agile teams using Git and Jira.",
      "Contributed to design discussions and cross-team sprint planning.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-evenly">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-8xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
