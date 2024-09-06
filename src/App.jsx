import './App.css'
import {Navbar} from "./components/Navbar/index.jsx";
import {MainSection} from "./components/MainSection/index.jsx";
import {AboutMeSection} from "./components/AboutMeSection/index.jsx";
import {Footer} from "./components/Footer/index.jsx";
import {ContactSection} from "./components/ContactSection/index.jsx";
import {ExperienceSection} from "./components/ExperienceSection/index.jsx";
import {ProjectsSection} from "./components/ProjectsSection/index.jsx";


export function App() {

  return (
    <>
        <Navbar/>
        <MainSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <ContactSection/>
        <Footer/>

    </>
  )
}
