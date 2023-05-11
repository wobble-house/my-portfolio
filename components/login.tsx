'use client';
import { resetCookieConsentValue } from "react-cookie-consent";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/firebase/config';
import { usePathname } from 'next/navigation';

const auth = getAuth(firebase_app);

export default function LoginButton() {
  const pathname = usePathname();
  const router = useRouter();
    const handleSignOut = () => {
      resetCookieConsentValue('GA-COOKIES');
      signOut(auth);
      router.refresh();
    }
    const handleSignIn = () => {
      resetCookieConsentValue('GA-COOKIES');
      router.push(
        '/signin'
      );
    }
    if (auth.currentUser === null) {
      return (
              <>
              <div className="fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
              <div className="flex flex-row items-center">
      <p className="text-black dark:text-white font-bold pl-1"><Link href="/signup">Sign Up</Link> or </p>
      <div className="flex ml-3 pt-2 hover:scale-105">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignIn}>Sign in</button>
                </div>
                </div>
                </div>
                </div>
                </div>
              </>
      )
    }
    return (
      <>
      <div className=" fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
        <div className="flex flex-row items-center">
      <p className="text-black dark:text-white font-bold pl-1">Hi! {auth.currentUser.displayName ? auth.currentUser.displayName: <></>}</p>
      <div className="flex ml-3 pt-2 hover:scale-105">
  <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
  <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1">
    <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignOut}>Sign out</button>
    </div>
    </div>        
    </div>
    </div>
    </div>
    </>
    )
  };
  