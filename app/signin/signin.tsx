'use client'
import React from "react";
import Section from "../../components/section";
import signIn from "../../utils/firebase/auth/signin";
import { useRouter } from 'next/navigation'

export default function SignInForm(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.back();
    }
    return(
    <Section>
<h1 className="mt-20 mb-30 text-black dark:text-white">Sign In</h1>
            <form onSubmit={handleForm} className="text-black dark:text-white max-w-[222px]">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>

              <div className="flex justify-center mx-auto py-5 z-50">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 ">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" type="submit" >Sign in</button>
                </div>
                </div>
              </div>

            </form>
            </Section>
)
}