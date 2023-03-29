'use client';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { signIn, getProviders } from 'next-auth/react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import Image from 'next/image'
import Name from '../../components/name'
import '../../app/globals.css'

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

const Signin = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon/rossalanford.ico" />
        <div className="grid grid-cols-0 py-32 max-w-5xl mx-auto justify-center">
          <div className="ml-5">
            <Name/>
            </div>
          
            {providers &&
              Object.values(providers).map(provider => (
                <div key={provider.name} >
                  <button type="button" onClick={() => signIn(provider.id)} className="text-white bg-rosspurple dark:bg-rossdarkpurple hover:scale-[1.01] my-10 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
 <span className="animate-pulse"> Sign in with {provider.name}</span>
</button>
                </div>
              ))}

        </div>
        </>
  )
}

export default Signin

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders()
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }
  return {
    props: {
      providers,
    },
  }
}