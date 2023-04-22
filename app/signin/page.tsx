import 'server-only'
import React from "react";
import MyNavbar from "../../components/navbar";
import { NameLarge } from "../../components/name";
import SignInForm from "./signin";
import { Suspense } from 'react'
import Loading from '../loading'

export default function Page() {
    return (
        <>
    <MyNavbar/><Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <NameLarge/>
            <SignInForm/>
        </div>

    </div>
    </Suspense>
    </>
    );
}