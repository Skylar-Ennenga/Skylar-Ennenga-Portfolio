import SideBar from "./SideBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ConntactForm";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>

      <div id="home">
        <Hero />
      </div>
      <SideBar />
      <div id="about">
        <About />
      </div>
      <Skills />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>

  );
};

export default Home;
