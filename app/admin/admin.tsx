'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { getAuth } from 'firebase/auth';
import addData from "../../utils/firebase/firestore/addData";
import firebase_app from "../../utils/firebase/config";
import getDocument from "../../utils/firebase/firestore/getData";
import { use } from "react";

const auth = getAuth(firebase_app);

export default function AdminContent() {
    const user = use(getDocument("users", auth?.currentUser?.uid || "0" ))
    const data = user.result.data();
    const router = useRouter()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')
    const userdata = {firstName,lastName,companyName}
    const handleForm = async (event) => {
        event.preventDefault();
        const { result, error } = await addData("users", auth.currentUser.uid, userdata);
        if (error) {return console.log(error)}
        console.log(result)
        return router.refresh();
    };

    if (auth.currentUser != null)
    return (
        <>
        <div className="pt-10 pb-64">
        <h1 className="mx-auto py-10 text-center">Only logged in users can view this page</h1>
        <div className="flex flex-col max-w-xl mx-auto">
            <div>
        <h2 className="mx-auto text-center ">Hi!{data.firstName} {data.lastName}</h2>
        <h3 className="mx-auto text-center max-w-md">It looks like you work for {data.companyName}.  Is that still correct?</h3>
        </div>
        <h2 className="mx-auto text-center py-10">Update Your Info Here</h2>
    <form onSubmit={handleForm} className=" text-black dark:text-white max-w-[222px] mx-auto z-30 pb-32">
    
            <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="First Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="First Name" id="First Name" placeholder="Your First Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="Last Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)} type="text" name="Last Name" id="Last Name" placeholder="Your Last Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-5 shadow-2xl">
                <label 
                htmlFor="Company Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} type="text" name="Company Name" id="Company Name" placeholder="Google" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex justify-center mx-auto py-5 z-50">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 ">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" type="submit" >Update</button>
                </div>
                </div>
              </div>
            </form>
            </div>
            </div>
    </>);
    else router.push('/')
}

