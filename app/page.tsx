import "server-only";
import MyNavbar from '../components/navbar'
import { Suspense } from 'react'
import Loading from './loading'
import Welcome from "../components/welcome";

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {
  var url = new URL("https://www.rossalanford.com/")
  url.searchParams.append('redirect', "about");

  return (
    <>

    <MyNavbar/>    
      <div className="max-w-3xl py-20 mx-auto">
        <Welcome/>
        <Suspense fallback={<Loading/>}>

        </Suspense>
      </div>
     
      </>
  )
}
