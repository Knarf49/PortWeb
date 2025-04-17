import * as Tabs from '@radix-ui/react-tabs'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const tabItems = [
  { label: 'Home', value: 'home', path: '/' },
  { label: 'Projects', value: 'projects', path: '/projects' },
  { label: 'About', value: 'about', path: '/about' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const listRef = useRef<HTMLDivElement>(null)

  const [cursorStyle, setCursorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1)

  const handleChange = (value: string) => {
    const matched = tabItems.find((item) => item.value === value)
    if (matched) navigate(matched.path)
  }

  useEffect(() => {
    const el = triggerRefs.current[currentPath]
    const parent = listRef.current

    if (el && parent) {
      const elRect = el.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()

      setCursorStyle({
        left: elRect.left - parentRect.left,
        width: elRect.width,
        opacity: 1,
      })
    }
  }, [currentPath])

  return (
    <Tabs.Root
      value={currentPath}
      onValueChange={handleChange}
      // inset-x-0 = left:0, right:0
      className="flex justify-center items-center py-4 fixed inset-x-0"
    >
      <div
        ref={listRef}
        className="relative flex gap-4 bg-zinc-900 px-6 py-2 rounded-full shadow-md"
      >
        {/* Sliding Border Cursor */}
        <motion.div
          className="absolute top-0 bottom-0 my-auto h-10 rounded-full border-2 border-cyan-400"
          animate={cursorStyle}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />

        <Tabs.List className="flex gap-4 relative z-10">
          {tabItems.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              ref={(el) => {triggerRefs.current[tab.value] = el}}
              className={`
                relative z-10 px-4 py-2 rounded-full
                transition-colors duration-200 text-sm font-medium
                data-[state=active]:text-cyan-400
                text-white hover:bg-zinc-800
              `}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
    </Tabs.Root>
  )
}

export default Navbar
