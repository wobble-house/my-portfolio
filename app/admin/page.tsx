'use client';
import React from "react";
import { useRouter } from "next/navigation";
import MyNavbar from "../../components/navbar";
import { getAuth } from 'firebase/auth';
import firebase_app from '../../utils/firebase/config';

const auth = getAuth(firebase_app);

export default function Page() {

    const router = useRouter()

    if (auth.currentUser != null)
    return (
        <>
    <MyNavbar/>
    <h1 className="my-64">Only logged in users can view this page</h1>
    </>);
    else router.push('/')
}