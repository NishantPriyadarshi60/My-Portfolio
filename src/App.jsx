
import styles from './App.module.css'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Experience from "./component/Experience/Experience"
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
