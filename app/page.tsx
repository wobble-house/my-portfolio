import "server-only";
import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <>  
      <div className="max-w-3xl py-20 mx-auto">
        <Suspense fallback={<Loading/>}>
          <div className="z-50">
        <h2 className="text-black dark:text-white">Ross Alan Ford is a Full-Stack Developer with a background in Operations Management</h2>
        <p className="text-black dark:text-white">Contact Me: ross@rossalanford.com</p>
        </div>
        </Suspense>
      </div>
     
      </>
  )
}
