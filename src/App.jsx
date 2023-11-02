import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <div>
        <Cursor />
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="Skills"><Parallax type="skills" /></section>
        <Skills />
        <section id="Services"><Parallax type="services" /></section>
        <section>
          <Services />
        </section>
        <Qualification />
        <section id="Portfolio"><Parallax type="portfolio" /></section>
        <Portfolio />
        <Testimonials />
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  )
};

export default App;
