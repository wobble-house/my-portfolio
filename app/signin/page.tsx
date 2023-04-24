import 'server-only'
import React from "react";
import MyNavbar from "../../components/navbar";
import SignInForm, { GoogleButton } from "./signin";
import { Suspense } from 'react'
import Loading from '../loading'

export default function Page() {
    return (
        <>
    <MyNavbar/><Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <SignInForm/>
            <h2 className="text-center text-black dark:text-white">or</h2>
            <GoogleButton/>
        </div>
    </div>
    </Suspense>
    </>
    );
}