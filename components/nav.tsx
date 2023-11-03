'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import Logo from "./logo";
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
                <button className="z-50 fixed md:hidden px-2 border-2 rounded-lg border-primary focus:border-2 focus:animate-pulse mr-auto mt-4 ml-5 transition-all ease-in-out duration-300" onMouseDown={handleMainNavButton}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 border-solid text-secondary bg-foreground transition-all ease-in-out duration-300"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 border-solid border-1 text-primary bg-foreground transition-all ease-in-out"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
                <div ref={Navref} className={`flex transition mx-auto md:mx-0 bg-foreground md:block  ${navbar ? 'fixed top-0 flex-col min-h-content items-center w-full h-full scale-100 ease-in-out' : 'scale-0 md:scale-100 ease-out'}`}>
                    <ul className="text-center flex flex-col md:flex-row text-accent md:border-b-4 md:border-x-4 border-primary md:rounded-b-md">
                        <Logo mobileOnly={true} additionalClassName="pb-6 pt-20 md:pt-0 justify-center" scaleMultiplier={1} containerClassName=""/>
                        <Link href={'/'} className={`${pathname == '/' ? 'bg-primary animate-pulse rounded-md md:rounded-b-md' : ''}  md:bg-foreground hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-2 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>Home</Link>
                        <Link href={'/about'} className={`${pathname == '/about' ? 'bg-primary animate-pulse rounded-md md:rounded-b-md' : ''} md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-2 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>About</Link>
                        <Link href={'/portfolio'} className={`${pathname == '/portfolio' ? 'bg-primary animate-pulse rounded-md md:rounded-b-md' : ''}  md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-2 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>Portfolio</Link>
                        <Link href={'/stories'} className={`${pathname == '/stories' ? 'bg-primary animate-pulse rounded-md md:rounded-b-md' : ''}  md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-2 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>Stories</Link>
                        <Link href={'/contact'} className={`${pathname == '/contact' ? 'bg-primary animate-pulse rounded-md md:rounded-b-md' : ''}  md:bg-foreground  hover:bg-primary hover:bg-opacity-25 hover:scale-110 py-2 px-4 hover:text-white transition-all ease-in-out drop-shadow-xl`} onClick={handleClose}>Contact</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}