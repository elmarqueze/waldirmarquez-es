import './services.scss'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const Services = () => {
  
    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
  
  return (
    <motion.div
        className='services'
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your project grown
                <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique Ideas</motion.b>
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For your</motion.b> Project.
                    <button>WHAT I DO?</button>
                </h1>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                <h2>Web Development</h2>
                <p>I work as a Web Developer in the front-end and the back-end area, coding with ultimate technologies that the market require, grabbing and making real those ideas you still have in the kitchen.</p>
                <a href='#Contact'>Go</a>
            </motion.div>
            <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                <h2>UX Writing</h2>
                <p>I can create that best copy for those sections, inputs, textareas, or components where is needed a good SEO and a call to action and to make people connect with perfect storytelling and a good UX/UI match.</p>
                <a href='#Contact'>Go</a>
            </motion.div>
            <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                <h2>Content Creation</h2>
                <p>I make storytellings that have a huge connect concept to make your brand get feel by your clients alive, because the best way to do it is with a good copy and where it is not only a good one shoot, because that your creative campaigns will need to live forever as well.</p>
                <a href='#Contact'>Go</a>
            </motion.div>
            <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
                <h2>Branding</h2>
                <p>Let's start from the begging, doing the naming for that new brand, start up or project. After that, we can keep going with the brandbook and the identity for sail to the north where the future is waiting for you and yours.</p>
                <a href='#Contact'>Go</a>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services