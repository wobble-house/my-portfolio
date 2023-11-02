import "server-only";
import { Suspense } from 'react'
import Loading from './loading'
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/logo";

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <main className="flex flex-col gap-5 justify-center mx-auto z-50">
      <div className=" flex-col px-8 pt-20 md:pt-32 pb-8 justify-center mx-auto">
        
        <Suspense fallback={<Loading/>}>
          <div className="relative flex flex-col bg-primary rounded-md p-1 justify-between z-50 hover:scale-105 group transition duration-300 delay-75 ease-in-out">
            <div className="flex bg-secondary rounded-md px-4 py-4">
              <div className=" flex flex-col shadow-2xl rounded-lg gap-2 bg-foreground pb-4 pt-12 md:pt-0 max-w-3xl">
                <div className=" flex flex-col-reverse md:flex-row-reverse rounded-md px-10 py-2 justify-between">
                <h1 className="font-black text-destructive text-[6.2vw] lg:text-[3.5rem] uppercase w-full drop-shadow-2xl group-hover:animate-pulse">Ross Alan Ford </h1>
                <Logo/>
                </div>
                <hr className="mx-6 border-accent  border-2 border-rounded-full"/>
                <h2 className="px-6 text-[4vw] text-white lg:text-2xl">A Full-Stack Developer with a background in Operations Management</h2>
              </div>
            </div>
            <span className="flex gap-2 text-xs text-white justify-end font-light md:text-md lg:text-lg p-1"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1]  text-blue-200">ross@rossalanford.com</Link></span>
        </div>
        </Suspense>
      </div>
     </main>
  )
}
