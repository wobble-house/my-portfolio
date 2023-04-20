'use client';
import React from "react";
import { useAuthContext } from "../../utils/context/AuthContext";
import { useRouter } from "next/navigation";
import MyNavbar from "../../components/navbar";
export default function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <>
    <MyNavbar/>
    <h1>Only logged in users can view this page</h1>
    </>);
}