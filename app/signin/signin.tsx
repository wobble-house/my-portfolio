'use client'
import React from "react";
import Section from "../../components/section";
import signIn from "../../utils/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { signInGoogle } from "../../utils/firebase/auth/signin";
import ImageWithFallback from "../../components/image-handler";
import { motion } from "framer-motion";

export default function SignInForm(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleSigninForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push('/admin');
    }



    const item = {
        visible: { 
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          y:-100,
          transition: {
            when: "afterChildren",
          },
        },
      }

    return(
    <Section>
 <div className=" bg-rosspurple dark:bg-rossdarkpurple pb-2 pr-2 mt-20 pt-2 mb-20">
                <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rossblue dark:bg-rossdarkblue pb-2 pr-2 -ml-2 -mt-4 pt-4 md:whitespace-nowrap relative">
                    <h2 className=" bg-rosspurple dark:bg-rossdarkpurple -ml-2 -mt-8 px-5 mr-auto md:text-4xl text-white">
                    Sign In
                    </h2>
                </motion.div>
                </div>


            <form onSubmit={handleSigninForm} className="text-black dark:text-white ">
            <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="email" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-5 shadow-2xl">
                <label 
                htmlFor="password" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Password</label>
                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

              <div className="flex justify-center mx-auto py-5 z-50">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 hover:scale-105">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-2 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-3 -ml-1 -mt-1" type="submit" >Sign in with Credentials</button>
                </div>
                </div>
              </div>

            </form>
            </Section>
)
}

export function GoogleSigninButton(){
  const router = useRouter()
  const handleGoogleSignin = async (event) => {
    event.preventDefault()
    const { result, error } = await signInGoogle();
    if (error) {
        return console.log(error)
    }
    // else successful
    console.log(result)
    return router.push('/admin');
}
    return(
        <Section>
        <div className="flex justify-center mx-auto py-5 z-50">
        <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-2 pt-1 hover:scale-105">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-2 pt-1">
<button className="flex content-center items-center gap-3 py-2 pl-2 pr-4 bg-rosspurple dark:bg-rossdarkpurple -mt-2 text-white " type="button" onClick={handleGoogleSignin}>
    <div className="relative w-[30px] h-[30px]">
    <ImageWithFallback 
    src="/icons/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg" alt="Google Logo"
    /></div>
    Sign in With Google
</button>
</div>
</div>
</div>
</Section>
    )
}