import React from "react";
import MyNavbar from "../../components/navbar";
import firebase_app from "../../utils/firebase/config";
import AdminContent from "./admin";


export default async function Admin() {

    return (
        <>
    <MyNavbar/>
    <AdminContent/>
    </>);
}