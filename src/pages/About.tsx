import { motion } from "framer-motion"


const About = () => {
  return (
    <div className="pt-28">
      <h1><span className="accent">/</span> about-me</h1>
      <p>Who am i?</p>
      <motion.section 
        className="!py-12 flex flex-col md:flex-row items-center gap-10"
        initial={{y:30,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{ease: 'easeIn',delay:0.3}}
      >
        <div className="md:w-2/3">
          <p>
            Hi! I’m a Frontend Developer with a focus on creating responsive, user-friendly web applications using Vue, React, JavaScript, and TypeScript. As a freelancer, I’ve worked with clients from various industries to deliver clean, functional websites that solve real-world problems.\
            I enjoy the balance between design and logic in frontend development—turning concepts into smooth, interactive interfaces. I regularly use tools like Tailwind CSS, Framer Motion, and modern frameworks to enhance user experience and maintain scalability.
            Outside of work, I’m always learning and experimenting with new tech to stay sharp and up-to-date. I’m open to freelance projects, collaborations, or just a good chat about web development!
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/ProfilePic.svg" alt="Profile pic" className="w-full max-w-xs mx-auto rounded-xl"/>
        </div>
      </motion.section>

      {/* Timeline */}
      
    </div>
  )
}

export default About