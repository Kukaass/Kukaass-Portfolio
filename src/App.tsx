import { useState } from "react";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";
import Blog from "./Components/Blog";


export default function App() {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false)


    return(
        <div className="overflow-x-hidden">
            <div>
                <MobileNav nav={nav} closeNav={closeNav}/>
                <Navbar openNav={openNav}/>
                <Hero />
                <div className="relative z-[30]]">
                    <About />
                    <Services />
                    <Skills />
                    <Projects />
                    <Reviews />
                    <Blog />
                </div>
            </div>
        </div>
        
    )
}