import "server-only";
import { NameLarge } from "../components/name"
import MyNavbar from '../components/navbar'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <>

    <MyNavbar/>    
      <div className="max-w-3xl py-20 mx-auto">
        <NameLarge/>
        <Suspense fallback={<Loading/>}>

        </Suspense>
      </div>
     
      </>
  )
}
