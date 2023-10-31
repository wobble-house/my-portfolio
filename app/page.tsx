import "server-only";
import { Suspense } from 'react'
import Loading from './loading'
import Footer from "./footer";
import Link from "next/link";

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <main className="flex flex-col gap-5 justify-evenly align-top">
      <div className="py-20 px-10">
        <Suspense fallback={<Loading/>}>
          <div className="z-50">
        <h1 className="text-black dark:text-white font-black text-[9vw] lg:text-[6rem] uppercase w-full">Ross Alan Ford </h1>
        <h2 className="text-black dark:text-white font-semibold text-[4vw] lg:text-2xl">A Full-Stack Developer with a background in Operations Management</h2>
        <span className="flex gap-2 text-black dark:text-white py-20 text-sm md:text-md lg:text-lg"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com`}>ross@rossalanford.com</Link></span>
        </div>
        </Suspense>
      </div>
      <Footer color={'white'}/> 
     </main>
  )
}
