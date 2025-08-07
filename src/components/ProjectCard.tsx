// components/ProjectCards.tsx
import { motion } from 'motion/react'

export type Project = {
  title: string
  description: string
  image: string
  link?: string
  techStack: string[]
}

type Props = {
  projects: Project[]
}

const ProjectCards = ({ projects }: Props) => {
  return (
    <div className="p-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7,ease:'easeOut' }}
            viewport={{ once: true }}
            className="bg-zinc-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className="bg-cyan-600 text-xs text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
              </div>

              {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-cyan-400 hover:underline text-sm"
          >
            View Project →
          </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCards
