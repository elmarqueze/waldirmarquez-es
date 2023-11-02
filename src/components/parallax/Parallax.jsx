import { motion, useScroll, useTransform } from "framer-motion"
import "./parallax.scss"
import { useRef } from "react"

const Parallax = ({type}) => {

 const ref = useRef()

 const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
 })

 const yText1 = useTransform(scrollYProgress, [0,1], ["-120%", "500%"])
 const yText2 = useTransform(scrollYProgress, [0,1], ["-350%", "500%"])
 const yText3 = useTransform(scrollYProgress, [0,1], ["-110%", "500%"])
 const yBg = useTransform(scrollYProgress, [0,14], ["0%", "500%"])
  
 return (
    <div 
        className="parallax" 
        style={{
            background:
                type==="services"
                 ? "linear-gradient(180deg, #111132, #0c0c1d)"
                  : "linear-gradient(180deg, #111132, #505064)"
        }}
    >
        <motion.h1
            style={
                {y: type === "skills" ? yText3 : (type=== "services" ? yText1 : yText2)}}
        >
            { type === "skills" ?
                "What are my Skills?" :
                ( type === "services" ?
                    "What I Do?" : "What I Did?") }
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div
            className="planets"
            style={{
                y: yBg,
                backgroundImage: `url(${
                    type==="services" ? "/planets.png" : "/sun.png"
                })`,
            }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax