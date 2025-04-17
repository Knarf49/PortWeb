import { MdEmail } from "react-icons/md";
import { FaReact, FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import heroLogo from "../assets/Devเข้าเส้นblack.svg";
import ProjectCards from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between gap-6 !pt-36"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut",delay:0.5 }}
      >
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold">
            Hi, my name is Frank. I'm a{" "}
            <span className="accent">Front-End Engineer</span>
          </h1>
          <h2 className="mt-4 text-lg">
            I build <span className="accent">fast web apps</span> using React and TypeScript.
          </h2>
        </div>
        <img src={heroLogo} className="w-1/2 max-w-sm rounded-full bg-white" alt="Hero icon" />
      </motion.section>

      {/* Projects */}
      <section>
        <h1 className="text-2xl font-semibold">Projects</h1>
        <br />
        <ProjectCards projects={projects} />
      </section>

      {/* Tech Stack */}
      <section>
        <h1 className="text-2xl font-semibold mb-6">Skills</h1>
        <div className="surface skills-icon">
          <FaReact />
          <FaJs />
          <SiTypescript />
          <FaPython />
          <FaJava />
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>
        <p className="leading-8 text-gray-700">
          Hi I'm Frank! I'm a <span className="accent">frontend developer</span> passionate about building beautiful and functional websites.
          I specialize in <span className="accent">React, TypeScript, Tailwind CSS, and Framer Motion.</span>  
          I love learning new things and believe that great code is a blend of logic and creativity.
          <br /><br />
          In my free time, I enjoy experimenting with new projects, playing music, and studying UX/UI design.  
          Whether you're interested in working together or just chatting about tech, feel free to reach out!
        </p>
      </section>

      {/* Contact */}
      <section>
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <p className="mb-6 text-gray-700">
          I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
        </p>
        <div className="border w-full px-8 py-6 rounded-lg border-slate-700">
          <h2 className="text-lg font-semibold mb-2">Message me here</h2>
          <div className="flex items-center gap-x-2 text-gray-600">
            <MdEmail className="text-xl mb-4" />
            <p>SampleEmail@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
