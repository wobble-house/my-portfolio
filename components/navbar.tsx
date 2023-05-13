'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from "react";
import { NameSmall, NameLarge } from './name';
import LoginButton from './login';
import { motion } from 'framer-motion';
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/firebase/config';

const auth = getAuth(firebase_app);

export default function MyNavbar() {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  useOnClickOutside(Navref, handleClickOutside)
  const list = {
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
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
      y:400,
      transition: {
        when: "afterChildren",
      },
    },
  }
  return (
      <nav className="w-full top-0 fixed z-50 md:px-5">
        <div className="flex flex-col md:flex-row justify-start mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-row-reverse items-center justify-between md:block">
              <div className="invisible md:visible">
              <Link href={"/"} onClick={() => setNavbar(false)}>
                <NameSmall/>
              </Link>
              </div>
              <div className="z-10 md:hidden mr-auto relative">
                <motion.button
                layout
                initial="hidden"
                animate="visible"
                variants={item}
                  className="pr-2 mr-2 pl-2 bg-rosspurple dark:bg-rossdarkpurple
                 outline-none focus:border-rosspurple focus:border"
                 onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-rossblue dark:text-rossdarkblue border-rossblue dark:border-rossdarkblue  border-solid border-1
                      "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-rossblue dark:text-rossdarkblue border-rossblue dark:border-rossdarkblue border-solid border-1
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
          <div>
            <motion.div ref={Navref} layout
                initial="hidden"
                animate="visible"
                variants={list} className={`flex-1 md:mx-auto pt-[200px] pb-[600px] md:py-0 -my-48 md:-my-32 bg-rossblue dark:bg-rossdarkblue content-center items-center md:bg-transparent dark:md:bg-transparent justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <div className={`${navbar ? 'sticky' : 'hidden'} mx-auto content-center justify-center text-center`}>
              <Link href={"/"} onClick={() => setNavbar(false)}><NameLarge/></Link></div>
              <LoginButton/>
              <ul  className="text-center flex flex-col md:flex-row mt-36 ml-3">
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                text-l 
                uppercase 
                px-2 
                rounded
                dark:text-white
                ">
                  <Link href="/about" onClick={() => setNavbar(false)} prefetch={false}>
                  ABOUT
                  </Link>
                </li>
                <p className="text-black dark:text-white">|</p>
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                text-l 
                uppercase 
                px-2 
                rounded
                dark:text-white
                ">
                  <Link href="/projects" onClick={() => setNavbar(false)} prefetch={false}>
                  Projects
                  </Link>
                </li>
                {auth.currentUser === null ? <></> : <p className="text-black dark:text-white">|</p>}
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                text-l 
                uppercase 
                px-2 
                rounded
                dark:text-white
                ">
                  <Link href="/admin" onClick={() => setNavbar(false)} prefetch={false}>
                  Admin
                  </Link>
                </li> </>}
                
              </ul>
          </motion.div>
          </div></div>
      </nav>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}