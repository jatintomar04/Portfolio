import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import shopmeimg from"../../assets/images/ecommerce.png"
import propertyimg from"../../assets/images/property.png"
import carimg from"../../assets/images/car care.png"

const projects = [
  {
    name: "E Commerce",
   
    align: "right",
    image: shopmeimg,
    link: "https://e-commerce-ten-phi-62.vercel.app/",
  },
  {
    name: "Property Pulse",
    align: "left",
    image: propertyimg,
    link: "https://propertypulse-mocha.vercel.app",
  },
  {
    name: "AutoFix Pro",
  
    align: "right",
    image: carimg,
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
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
