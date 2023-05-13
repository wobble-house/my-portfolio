import 'server-only'
import React from "react";
import MyNavbar from "../../components/navbar";
import Admin from "./admin";

export const metadata = {
    title: 'Admin',
    description: 'Secretsssss',
  }

export default async function AdminPage() {

    return (
        <>
    <MyNavbar/>
    <Admin/>
    </>
    );
}