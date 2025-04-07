import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Jatin Singh Tomar, a passionate MERN stack developer with hands-on experience in building dynamic and scalable web applications. I specialize in crafting engaging user
       experiences using React and developing robust backend systems with Node.js, Express, and MongoDB.

I enjoy turning complex problems into simple, beautiful, and intuitive solutions. My goal is to deliver high-quality, 
performance-driven applications while continuously enhancing my skills and exploring new technologies.

From designing responsive front-end interfaces to building efficient server-side architectures, I am committed to
 delivering end-to-end solutions that meet modern web standards.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
