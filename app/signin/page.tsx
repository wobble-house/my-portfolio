import "server-only";
import { Suspense } from 'react'
import Loading from '../loading'
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Nav from "../../components/nav";

export const metadata = {
  title: 'Signin',
  description: 'Sign in',
}

export default function Signin() {

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
