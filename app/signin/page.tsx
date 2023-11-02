import "server-only";
import { Suspense } from 'react'
import Loading from '../loading'
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../components/logo";
import Nav from "../../components/nav";

export const metadata = {
  title: 'Signin',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Signin() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className=" flex-col px-8 pt-20 md:pt-32 pb-8 justify-center mx-auto ">
        <Suspense fallback={<Loading/>}>
        <div className="relative flex flex-col rounded-md p-1 justify-between z-40 hover:scale-[1.01] group transition duration-300 delay-75 ease-in-out">
            <div className="flex border-primary border-[6px] border-solid rounded-md shadow-2xl">
              <div className=" flex flex-col rounded-lg bg-foreground bg-opacity-0 pt-12 md:pt-0 max-w-3xl px-10">
                <Logo/>
                <h2 className="text-accent hover:text-white text-md font-medium text-center md:mx-24 mb-4 md:px-10 py-3 hover:bg-primary rounded-xl transition-all ease-in-out duration-300">A Full-Stack Developer with a background in Operations Management</h2>
              </div>
            </div>
            <span className="flex gap-2 text-xs text-primary-foreground px-2 justify-end font-light md:text-md lg:text-lg p-1 bg-primary ml-auto rounded-b-lg z-20"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1]  text-blue-200">ross@rossalanford.com</Link></span>
        </div>
        </Suspense>
      </div>
     </main>
  )
}
