'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Logo from "./logo";
import HomeNavIcon from "../public/icons/home.svg"
import AboutNavIcon from "../public/icons/about.svg"
import PortfolioNavIcon from "../public/icons/portfolio.svg"
import StoriesNavIcon from "../public/icons/stories.svg"
import ContactNavIcon from "../public/icons/contact.svg"
export default function Nav(){
    const [navbar, setNavbar] = useState(false);
    const Navref = useRef();
    const pathname = usePathname();
    function handleMainNavButton(){
        (navbar == false ? setNavbar(true): setNavbar(false))
      }
    function handleClose(){
        setNavbar(false)
    }
    return(
        <nav className="flex fixed z-50 md:justify-center top-0 w-full">
            <div className="flex flex-col-reverse md:flex-row flex-grow justify-end">
                <button className="z-50 fixed md:hidden px-2 rounded-lg focus:animate-pulse mr-auto mt-4 ml-5 transition-all ease-in-out duration-300" onMouseDown={handleMainNavButton}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 text-secondary bg-foreground transition-all ease-in-out duration-300"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 border-solid border-1 text-secondary bg-foreground transition-all ease-in-out"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
                <div ref={Navref} className={`flex transition mx-auto md:mx-0 bg-foreground md:block  ${navbar ? 'fixed top-0 flex-col min-h-content items-center w-full h-full scale-100 ease-in-out' : 'hidden scale-0 md:scale-100 ease-out'}`}>
                    <ul className="text-center flex flex-col md:flex-row text-accent md:border-b-4 md:border-x-4 border-primary md:rounded-b-md md:items-end">
                        <Logo mobileOnly={true} additionalClassName="pb-6 pt-20 md:pt-0 justify-center" scaleMultiplier={1} containerClassName="" isStatic={false}/>
                        <Link href={'/'} className={`${pathname == '/' ? 'bg-primary rounded-md md:rounded-b-md' : ''} flex flex-col items-center gap-1 text-[8px] md:bg-foreground hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-1 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>
                          <HomeNavIcon height={30} width={30} className={`${pathname == '/' ? 'animate-pulse transition-all ease-in-out drop-shadow-xl': ''}`}/>
                          HOME
                          </Link>
                        <Link href={'/about'} className={`${pathname == '/about' ? 'bg-primary rounded-md md:rounded-b-md' : ''} flex flex-col items-center gap-1 text-[8px] md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-1 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>
                          <AboutNavIcon height={30} width={30} className={`${pathname == '/about' ? 'animate-pulse transition-all ease-in-out drop-shadow-xl': ''}`}/>
                          ABOUT
                          </Link>
                        <Link href={'/portfolio'} className={`${pathname == '/portfolio' ? 'bg-primary rounded-md md:rounded-b-md' : ''} flex flex-col items-center gap-1 text-[8px] md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-1 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>
                          <PortfolioNavIcon height={30} width={30} className={`${pathname == '/portfolio' ? 'animate-pulse transition-all ease-in-out drop-shadow-xl': ''}`}/>
                          PORTFOLIO
                          </Link>
                        <Link href={'/stories'} className={`${pathname == '/stories' ? 'bg-primary rounded-md md:rounded-b-md' : ''} flex flex-col items-center gap-1 text-[8px] md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-1 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>
                          <StoriesNavIcon height={30} width={30} className={`${pathname == '/stories' ? 'animate-pulse transition-all ease-in-out drop-shadow-xl': ''}`}/>
                          STORIES
                          </Link>
                        <Link href={'/contact'} className={`${pathname == '/contact' ? 'bg-primary rounded-md md:rounded-b-md' : ''} flex flex-col items-center gap-1 text-[8px] md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-1 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>
                          <ContactNavIcon height={30} width={30} className={`${pathname == '/contact' ? 'animate-pulse transition-all ease-in-out drop-shadow-xl': ''}`}/>
                          CONTACT
                          </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}