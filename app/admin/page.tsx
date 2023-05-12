import 'server-only'
import React from "react";
import MyNavbar from "../../components/navbar";
import AdminContent from "./admin";

export const metadata = {
    title: 'Admin',
    description: 'Secretsssss',
  }

export default async function Admin() {

    return (
        <>
    <MyNavbar/>
    <AdminContent/>
    </>);
}