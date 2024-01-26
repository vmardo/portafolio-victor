import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Footer from "./Footer"

function Home() {
  return (
    <>
        <Navbar></Navbar>
        <div className="w-4/5 mx-auto">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>

        </div>

    </>

  )
}

export default Home