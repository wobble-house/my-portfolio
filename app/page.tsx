import "server-only";
import { Suspense } from 'react'
import Loading from './loading'
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Nav from "../components/nav";

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className=" flex-col px-8 pt-12 md:pt-8 pb-8 justify-center mx-auto ">
        <Header metadata={metadata}/>
        <Suspense fallback={<Loading/>}>
        </Suspense>
      </div>
     </main>
  )
}
