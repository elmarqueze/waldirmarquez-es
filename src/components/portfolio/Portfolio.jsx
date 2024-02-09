import "./portfolio.scss"
import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import PapaDog from '../../assets/papa-dog.png'
import TicTacToe from '../../assets/tic-tac-toe.png'
import MovieSearcher from '../../assets/movie-searcher.png'
import RealState from '../../assets/real-state.png'
import ReactTodo from '../../assets/react-todo-app.png'
import HydroMountain from '../../assets/hydro-mountain.png'
import TextEncrypter from '../../assets/text-encrypter.png'
import ClinicaVersalles from '../../assets/clinica-versalles.png'
import CardsGame from '../../assets/cards-game.png'

const items = [
    {
        id:1,
        title:"MERN Clinic Project",
        img: ClinicaVersalles,
        desc:"This is a Fullstack project created as a service for a Clinic where their clients could booking for a date with a doctor. This project was developed using React Js.",
        link: "https://clinicaversalles.netlify.app/",
    },
    {
        id:2,
        title:"Papa Dog Website",
        img: PapaDog,
        desc:"This is a place where dog owners can find a walk service for their dogs. This project was developed using HTML, CSS and Vanilla Js.",
        link: "https://www.papadog.es/",
    },
    {
        id:3,
        title:"Tic Tac Toe Game",
        img: TicTacToe,
        desc:"This game helped me to consolidate my knowledge in React.js because I developed it using states, hooks and components. Also, the inicialization was made as a start point in Vanilla JS, then I installed vite and react plugins from scratch to start coding.",
        link: "https://tic-tac-toe-gamma-blue-72.vercel.app/",
    },
    {
        id:4,
        title:"Movie Search App",
        img: MovieSearcher,
        desc:"I have practiced my develop skills using React for this project where people can look for their favorite movie in the searcher component.",
        link: "https://movies-searcher-sooty.vercel.app/"
    },
    {
        id:5,
        title:"Real State App",
        img: RealState,
        desc:"In this project I used Tailwind for styles and for the whole development for sure, I coded with React.js to get better control of each thing.",
        link: "https://real-state-five-zeta.vercel.app/"
    },
    {
        id:6,
        title:"React Todo App",
        img: ReactTodo,
        desc:"This is not my first todo, but I am so proud of the evolution that I did with this new todo app version with React.js. I coded the whole project from scratch.",
        link: "https://todo-app-blond-tau.vercel.app/"
    },
    {
        id:7,
        title:"HydroMountain Website",
        img: HydroMountain,
        desc:"This client wanted to created his first website version and for this one I made it using HTML, CSS and Vanilla Js. For the second version I will do it with React.",
        link: "https://hydromountain.pe/"
    },
    {
        id:8,
        title:"Text Encryter App",
        img: TextEncrypter,
        desc:"This challenge was made for Oracle Bootcamp when I studied there with only HTML, CSS and Vanilla Js.",
        link: "https://encriptadortexto.vercel.app/"
    },
    {
        id:9,
        title:"Cards Game App",
        img: CardsGame,
        desc:"This game was coded with the purpose of practice my skills with only Vanilla Js. The game has levels and you must memorize every emoji to the next step.",
        link: "https://barajadecartas.vercel.app/"
    },
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-200, 200]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a style={{zIndex:'999'}} target="_blank" href={item.link}>See Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
    
  )
}

export default Portfolio