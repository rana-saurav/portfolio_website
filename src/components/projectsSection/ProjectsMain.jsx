import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Weather App",
    year: "Mar2022",
    align: "right",
    image: "/images/weather.jpg",
    link: "#",
  },
  {
    name: "Youtube Clone",
    year: "Sept2022",
    align: "left",
    image: "/images/youtube.png",
    link: "#",
  },
  {
    name: "To Do List",
    year: "Jan2023",
    align: "right",
    image: "/images/To-Do-Lists.webp",
    link: "#",
  },
  {
    name: "Food Recipe",
    year: "May2024",
    align: "left",
    image: "/images/Recipe_app.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
