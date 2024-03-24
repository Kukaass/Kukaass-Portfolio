import { Bars3Icon } from "@heroicons/react/20/solid"

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}: Props) => {
    return(
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="nav-bar flex item-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    WEB
                    <span className="text-yellow-300">DEV</span>
                </h1>
                <a className="nav-link" href="#home">HOME</a>
                <a className="nav-link" href="#services">SERVICES</a>
                <a className="nav-link" href="#about">ABOUT</a>
                <a className="nav-link" href="#projects">PROJECTS</a>
                <a className="nav-link" href="#blog">BLOG</a>
                <a className="nav-link" href="#contact">CONTACT</a>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-400"/>
                </div>
            </div>
        </div>
    )
}


export default Navbar