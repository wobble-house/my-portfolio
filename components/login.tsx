'use client';
import { resetCookieConsentValue } from "react-cookie-consent";
import { useRouter } from 'next/navigation';
import { ThemeToggle } from "./theme-switcher";
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/firebase/config';

const auth = getAuth(firebase_app);

export default function LoginButton() {

  const router = useRouter();
    const handleSignOut = () => {
      resetCookieConsentValue('GA-COOKIES');
      signOut(auth);
      router.refresh();
    }
    const handleSignIn = () => {
      resetCookieConsentValue('GA-COOKIES')
      router.push('/signin')
    }
    if (auth.currentUser === null) {
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
    }
    return (
      <>
      <div className=" fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
      <div className="justify-end">
      <ThemeToggle mobile={false}/></div>
        <div className="flex flex-row items-center">
        <div className="rounded-full max-w-[35px] relative overflow-hidden hover:scale-105">
   
          
        </div>
      <p className="text-black dark:text-white font-bold pl-1">Hi!</p>
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
  };
  