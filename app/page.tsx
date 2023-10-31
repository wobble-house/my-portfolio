import "server-only";
import { Suspense } from 'react'
import Loading from './loading'
import Footer from "../components/footer";
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
        <h1 className="text-primary font-black text-[9vw] lg:text-[6rem] uppercase w-full">Ross Alan Ford </h1>
        <h2 className="text-primary font-semibold text-[4vw] lg:text-2xl">A Full-Stack Developer with a background in Operations Management</h2>
        <span className="text-primary flex gap-2 py-20 text-sm font-medium md:text-md lg:text-lg"><p>Contact Me:</p><Link href={`mailto:ross@rossalanford.com?subject=Hey Ross! I'd like to chat sometime!`} className="transition ease-in-out duration-300 delay-75 active:animate-ping hover:scale-[1.1] hover:pl-2 text-blue-700">ross@rossalanford.com</Link></span>
        </div>
        </Suspense>
      </div>
      <Footer/> 
     </main>
  )
}
