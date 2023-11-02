import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span
             initial={{opacity:0, scale:0.5}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}
            ></motion.span>
            <div className="social">
                <a target="_blank" href="https://www.linkedin.com/in/waldir-marquez-espiritu/"><img src="/linkedin.png" alt="LinkedIn" /></a>
                <a target="_blank" href="https://github.com/elmarqueze"><img src="/github.png" alt="GitHub" /></a>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar