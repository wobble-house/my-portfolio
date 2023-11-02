'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link";
import Logo from "./logo";
export default function Header({metadata}){
    const pathname = usePathname();
    return(
        <div className="relative flex flex-col rounded-md p-1 justify-between z-40 hover:scale-[1.01] group transition duration-300 delay-75 ease-in-out">
        <div className="flex border-primary border-[6px] border-solid rounded-md shadow-2xl">
        {pathname == '/' ? 
        <div className=" flex flex-col rounded-lg bg-foreground bg-opacity-0 pt-6 md:pt-0 max-w-3xl px-10">
        <div className="flex flex-col-reverse md:flex-row-reverse rounded-md pt-2 justify-evenly  group-hover:md:gap-8">
        <div className="flex group-hover:scale-105 drop-shadow-xl ease-in-out duration-300 text-center mx-auto">
            <h1 className="absolute font-black text-secondary mt-1 text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">Ross Alan Ford </h1>
            <h1 className=" font-black text-primary text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">Ross Alan Ford </h1>
        </div>
        
        <div className="flex justify-center items-center z-50 pb-6 md:pb-0 hover:animate-pulse">
            <Logo mobile={true} position="top-0"/>
        </div>
        </div>
        <hr className="border-[1px] md:border-2 border-solid border-accent rounded-full md:w-4/5 mx-auto w-full"></hr>
        <h2 className="text-accent hover:text-white text-md font-medium text-center md:mx-24 mb-4 md:px-10 py-3 hover:bg-primary rounded-xl transition-all ease-in-out duration-300">A Full-Stack Developer with a background in Operations Management</h2>
              </div> : 
              <div className=" flex flex-col rounded-lg bg-foreground bg-opacity-0  max-w-3xl px-10">
                <div className="flex flex-col-reverse md:flex-row-reverse rounded-md pt-2 justify-evenly md:ml-4 md:gap-2 group-hover:md:gap-8">
                <div className="flex group-hover:scale-105 drop-shadow-xl ease-in-out duration-300 text-center">
                <h1 className="absolute font-black text-secondary ml-1 mt-1 text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">{metadata.title}</h1>
                <h1 className=" font-black text-primary text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">{metadata.title}</h1>
            </div> 
            </div><hr className="border-[1px] md:border-2 border-solid border-accent rounded-full md:w-4/5 mx-auto w-full"></hr>
                    <h2 className="text-accent hover:text-white text-md font-medium text-center md:mx-24 mb-4 md:px-10 py-3 hover:bg-primary rounded-xl transition-all ease-in-out duration-300">{metadata.description}</h2>
                    </div>
            }
            </div>
            <span className="flex gap-2 text-xs text-primary-foreground px-2 justify-end font-light md:text-md lg:text-lg p-1 bg-primary ml-auto rounded-b-lg z-20"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1]  text-blue-200">ross@rossalanford.com</Link></span>
        </div>
    )
}