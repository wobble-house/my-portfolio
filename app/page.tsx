import "server-only";
import { Suspense } from 'react'
import Loading from './loading'
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col px-8 py-8 justify-center">
        <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={100} height={100} className="animate-bounce z-50"/>
        <Suspense fallback={<Loading/>}>
          <div className="relative flex flex-col bg-primary rounded-md p-1 justify-between z-30">
            <div className="flex bg-secondary rounded-md p-4">
              <div className="mainBox flex flex-col shadow-xl rounded-sm py-8 px-6 gap-2">
        
                <h1 className="font-black text-destructive text-[7vw] lg:text-[5rem] uppercase w-full rounded-md">Ross Alan Ford </h1>
                <hr className="border-accent border-2 border-rounded-full"/>
                <h2 className="text-[4vw] text-white lg:text-2xl">A Full-Stack Developer with a background in Operations Management</h2>
              </div>
            </div>
            <span className="flex gap-2 text-xs text-background font-light md:text-md lg:text-lg p-1"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1] hover:pl-2 text-blue-200">ross@rossalanford.com</Link></span>
        </div>
        </Suspense>
      </div>
      <Footer/> 
     </main>
  )
}
