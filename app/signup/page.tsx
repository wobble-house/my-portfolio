import "server-only";
import MyNavbar from "../../components/navbar";
import { NameLarge } from "../../components/name";
import SignUpForm from "./signup";
import { Suspense } from 'react'
import Loading from '../loading'

export default function Page() {

    
    return (
        <>
    <MyNavbar/><Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <NameLarge/>
            <p className="py-5 text-black dark:text-white">Sign up to learn more about me!</p>
            <SignUpForm/>
        </div>
    </div></Suspense>
    </>
    );
}