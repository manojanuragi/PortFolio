import { useState } from "react";
import { Link } from "react-scroll";
export default function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMenu=()=>setClick(false);
    const lickClass="text-sm sm:text-base px-2 lg:px-5  py-2 transition rounded  hover:text-white hover:bg-stone-600";
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10 bg-stone-200">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                <h3 className="text-3xl text-stone-500 font-bold">
                    Manoj Anuragi
                </h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                   <li>
                        <Link className={lickClass} to="hero" spy={true} offset={-100} duration={500} >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link className={lickClass} to="about" spi={true} offset={-100} duration={500} >
                        About
                        </Link>
                    </li>
                    <li>
                    <Link className={lickClass} to="skills" spy={true} offset={-100} duration={500} >
                        Skills
                        </Link>
                    </li>
                    <li>
                    <Link className={lickClass} to="projects" spy={true} offset={-100} duration={500} >
                        Projects
                        </Link>
                    </li>
                    <li>
                    <Link className={lickClass} to="contact" spy={true} offset={-60} duration={500} >
                        contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}