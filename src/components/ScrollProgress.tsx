import { motion,useScroll,useSpring,useTransform } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)
  const background = useTransform(scrollYProgress,
        [0,1],
        ["rgb(86,1,245)","rgb(1,245,13)"]
    )
  return (
    <>
      <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{ scaleX,background }}
          
      />
    </>
  )
}

export default ScrollProgress