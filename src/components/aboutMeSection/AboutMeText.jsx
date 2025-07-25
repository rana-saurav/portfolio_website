import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Saurav Rana results-driven Frontend
        Developer with over 3 years of experience in designing and developing
        responsive, high-performance web applications. My core expertise lies in
        React.js, JavaScript, TypeScript, and modern UI frameworks, where I
        focus on delivering intuitive and accessible user interfaces that
        elevate the user experience. I’m passionate about building
        pixel-perfect, scalable front-end architectures that not only look great
        but also perform seamlessly across all devices and browsers. Whether
        its crafting reusable components, integrating APIs, optimizing
        rendering, or fine-tuning performance — I love solving real-world
        problems through clean, efficient code. Driven by curiosity and a
        commitment to continuous improvement, I actively stay up-to-date with
        the latest in frontend trends, tools, and best practices. My goal is to
        create web experiences that are not just functional but delightful.
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
