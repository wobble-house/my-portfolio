'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link";
import Logo from "./logo";
import AboutIcon from "../public/icons/about.svg";
import PortfolioIcon from "../public/icons/portfolio.svg";
import StoriesIcon from "../public/icons/stories.svg";
import ContactIcon from "../public/icons/contact.svg";
import AboutTitle from "../public/images/SVG/about.svg"
import PortfolioTitle from "../public/images/SVG/portfolio.svg"
import StoriesTitle from "../public/images/SVG/stories.svg"
import ContactTitle from "../public/images/SVG/contact.svg"
export default function Header({metadata}){
    const pathname = usePathname();
    return(
        <div className="relative flex flex-col rounded-md md:pt-14 px-1 justify-between z-40 hover:scale-[1.01] group transition duration-300 delay-75 ease-in-out">
        <div className="flex border-primary border-[6px] border-solid rounded-md shadow-2xl">
        {pathname == '/' ? 
        <div className=" flex flex-col rounded-lg bg-foreground bg-opacity-0 pt-6 md:pt-0 max-w-3xl px-10">
        <div className="flex flex-col-reverse rounded-md pt-2 justify-center">
        <div className="flex drop-shadow-xl text-center mx-auto hover:scale-105 transition duration-300 delay-75 ease-in-out">
            <Image src={'/images/SVG/ROSSALANFORD.svg'} height={100} width={2000} alt={`image of the name ROSS ALAN FORD`} className='pb-2' priority/>
        </div>
        
        <div className="flex justify-center items-center z-50 pb-6 md:pb-0 hover:scale-110 transition duration-300 delay-75 ease-in-out">
            <Logo mobileOnly={true} additionalClassName="top-0" scaleMultiplier={1} containerClassName="" isStatic={false}/>
            <Logo mobileOnly={false} additionalClassName="top-0 md:my-4" scaleMultiplier={2} containerClassName="" isStatic={false}/>
        </div>
        </div>
        <hr className="border-[1px] md:border-2 border-solid border-accent rounded-full md:w-4/5 mx-auto w-full group-hover:scale-90 transition-all duration-200 ease-in-out"></hr>
        <h2 className="text-accent hover:text-white text-md font-medium text-center md:mx-24 mb-4 md:px-10 py-3 hover:bg-primary hover:scale-105 rounded-xl transition-all ease-in-out duration-300">A Full-Stack Developer with a background in Operations Management</h2>
              </div> : 
              <div className=" flex flex-col rounded-lg bg-foreground bg-opacity-0  max-w-3xl px-10">
                <div className="flex rounded-md pt-2 justify-center">
                
                {(pathname == "/about") ? <div className="flex-col justify-center gap-5 drop-shadow-xl text-center transition duration-300 delay-75 ease-in-out"><AboutIcon height={100} width={100} className='mx-auto py-2'/><AboutTitle className='pb-2'/> </div> : <></>}
                {(pathname == "/portfolio") ? <div className="flex-col justify-center gap-5 drop-shadow-xl text-center transition duration-300 delay-75 ease-in-out"><PortfolioIcon height={100} width={100} className='mx-auto py-2'/><PortfolioTitle className='pb-2'/> </div>: <></>}
                {(pathname == "/stories") ? <div className="flex-col justify-center gap-5 drop-shadow-xl text-center hover:scale-105 duration-300 delay-75 ease-in-out"><StoriesIcon height={100} width={100} className='mx-auto py-2'/> <StoriesTitle className='pb-2'/> </div>: <></>}
                {(pathname == "/contact") ? <div className="flex-col justify-center gap-5 drop-shadow-xl text-center transition duration-300 delay-75 ease-in-out"><ContactIcon height={100} width={100} className='mx-auto py-2'/><ContactTitle className='pb-2'/> </div>: <></>}

            </div><hr className="border-[1px] md:border-2 border-solid border-accent rounded-full md:w-4/5 mx-auto w-full group-hover:scale-90 transition-all duration-200 ease-in-out"></hr>
                    <h2 className="text-accent hover:text-white text-md font-medium text-center md:mx-24 mb-4 md:px-10 py-3 hover:bg-primary rounded-xl scale-105 transition-all ease-in-out duration-300">{metadata.description}</h2>
                    </div>
            }
            </div>
            <span className="flex gap-2 text-xs text-primary-foreground px-2 justify-end font-light md:text-md lg:text-lg p-1 bg-primary ml-auto rounded-b-lg z-20"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1]  text-blue-200">ross@rossalanford.com</Link></span>
        </div>
    )
}