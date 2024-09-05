import styles from './App.module.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";

function App() {
  return (
    <>
      <div className={styles.App}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
      </div>
    </>
  )
}

export default App
