'use client';
import { resetCookieConsentValue } from "react-cookie-consent";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function LoginButton() {
    const { data: session, status } = useSession()
    const handleSignOut = () => {
      resetCookieConsentValue('GA-COOKIES');
      signOut();
    }
    if (status === "authenticated") {
      return (
        <>
          <div className="absolute top-0 md:top-5 right-10 flex flex-row justify-between items-center py-2 gap-5">
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
          </div>
          <div className="flex ml-3 pt-2 hover:scale-105">
      <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
        <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignOut}>Sign out</button>
        </div>
      </div>        
        </div>
        </div>
        </>
      )
    }
    return (
      <>
      <div className="absolute top-0 md:top-5 md:left-auto right-10 flex ml-3 pt-2 hover:scale-105">
      <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
        <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={() => signIn()}>Sign in</button>
        </div>
        </div>
      </div>
      </>
    )
  };
  