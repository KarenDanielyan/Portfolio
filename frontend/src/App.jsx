import styles from './App.module.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contacts from "./Components/Contacts/Contacts.jsx";

function App() {
  return (
    <>
      <div className={styles.App}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contacts />
      </div>
    </>
  )
}

export default App
