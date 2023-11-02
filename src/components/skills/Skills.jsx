import Backend from "./Backend"
import Frontend from "./Frontend"
import { useRef } from 'react'
import { motion } from 'framer-motion'
import "./skills.scss"

const variants = {
  initial: {
      x:-500,
      y:100,
      opacity:0
  },
  animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
          duration:1,
          staggerChildren:0.1,
      }
  }
}

const Skills = () => {

  const ref = useRef()

  return (
    <motion.section
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
      className="skills"
      id="skills">
        <motion.h2 className="section__title" variants={variants}>SKILLS</motion.h2>
        <motion.span className="section__subtitle" variants={variants}>my technical level</motion.span>

        <motion.div className="skills__container container grid" variants={variants}>
            <Frontend />
            <Backend />
        </motion.div>
    </motion.section>
  )
}

export default Skills