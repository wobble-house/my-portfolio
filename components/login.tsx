'use client';
import { resetCookieConsentValue } from "react-cookie-consent";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { ThemeToggle } from "./theme-switcher";

export default function LoginButton() {
    const { data: session, status } = useSession()
    const handleSignOut = () => {
      resetCookieConsentValue('GA-COOKIES');
      signOut();
    }
    const handleSignIn = () => {
      resetCookieConsentValue('GA-COOKIES')
      signIn();
    }
    if (status === "authenticated") {
      return (
        <>
          <div className=" fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
          <div className="justify-end">
          <ThemeToggle mobile={false}/></div>
            <div className="flex flex-row items-center">
            <div className="rounded-full max-w-[35px] relative overflow-hidden hover:scale-105">
              <Image src={session.user.image} 
                alt="profile photo"
                width={500}
                height={500}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}>
              </Image>            
              
            </div>
<p className="text-black dark:text-white font-bold pl-1">Hi, {session.user.name}!</p>
          <div className="flex ml-3 pt-2 hover:scale-105">
      <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
        <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignOut}>Sign out</button>
        </div>
      </div>        
        </div></div>
          
        </div>
        </>
      )
    }
    return (
      <>
      <div className="fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
      <div className="justify-end pt-1">
          <ThemeToggle mobile={false}/></div>
      <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
        <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignIn}>Sign in</button>
        </div>
        </div>
      </div>
      </>
    )
  };
  