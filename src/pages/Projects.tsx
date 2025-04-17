import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}  // ใช้ animation ถ้าเป็นการโหลดครั้งแรก
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut",delay:0.3 }}
        >
          <h1><span className="accent">/</span> Projects</h1>
          <p>List of my projects</p>
        </motion.div>
        <br />
        <ProjectCard projects={projects} />
      </section>

      {/* Complete-apps */}
      <section>
        <h1><span className='accent'>#</span> completed-apps</h1>
      </section>
      
      {/* small-projects */}
      <section>
        <h1><span className='accent'>#</span> small-projects</h1>
      </section>
    </>
  )
}

export default Projects