'use client'
import React from "react";
import signUp from "../../utils/firebase/auth/signup"
import { useRouter } from 'next/navigation'
import Section from "../../components/section";

export default function SignUpForm(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push('/admin');
    }
    return(
    <Section>
    <h1 className="mt-8 mb-30 mx-auto max-w-[222px] text-black dark:text-white">Sign Up</h1>
            <form onSubmit={handleForm} className=" text-black dark:text-white max-w-[222px] mx-auto z-50">
                <label htmlFor="email">
                    <p className="text-black dark:text-white">Email</p>
                    <input onChange={(f) => setEmail(f.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(f) => setPassword(f.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <div className="flex justify-center mx-auto py-5 z-50">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 ">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" type="submit" >Sign up</button>
                </div>
                </div>
              </div>
            </form>
            </Section>
)
}