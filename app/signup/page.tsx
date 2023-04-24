import "server-only";
import MyNavbar from "../../components/navbar";
import SignUpForm from "./signup";
import { GoogleButton } from "../signin/signin";
import { Suspense } from 'react'
import Loading from '../loading'

export default function Page() {
    return (
        <>
    <MyNavbar/><Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <p className="py-5 text-black dark:text-white max-w-xs">
                Sign up to learn more about me!  
                I don&apos;t really like to just throw my personal info everywhere all whilly-nilly! By signing up, you&apos;re
                pretty much just letting me know 
                that you aren&apos;t a bot.
                </p>
            <SignUpForm/>
            <h2 className="text-center text-black dark:text-white">or</h2>
            <GoogleButton/>
        </div>
    </div></Suspense>
    </>
    );
}