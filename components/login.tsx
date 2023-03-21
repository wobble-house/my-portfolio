'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
      return (
        <>
              <div className="flex ml-3 pt-2 hover:scale-105">
      <div className="bg-rosspurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue pr-1 pb-1 -ml-1 -mt-1"></div>
        <div className="flex flex-row max-w-lg">
          <p className="text-white">Hi, {session.user.name}!</p>
          <button className=" text-white bg-rosspurple px-4 py-1 -ml-1 -mt-1" onClick={() => signOut()}>Sign out</button>
          </div>
          </div>
        </div>
        </>
      )
    }
    return (
      <>
      <div className="flex ml-3 pt-2 hover:scale-105">
      <div className="bg-rosspurple pr-1 pb-1 mt-1 pt-1">
      <div className="bg-rossblue pr-1 pb-1 -ml-1 -mt-1">
        <button className=" text-white bg-rosspurple px-4 py-1 -ml-1 -mt-1" onClick={() => signIn()}>Sign in</button>
        </div>
        </div>
      </div>
      </>
    )
  };
  