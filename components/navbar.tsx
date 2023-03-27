'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import React, { useState, useRef } from "react";
import Name from './name';

export default function MyNavbar({children}) {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)
  return (
      <nav className="h-full z-50 px-5 mt-24 md:mt-16">
        <div className="justify-between mx-auto">
          <div className="">
            <div className="flex flex-col items-center justify-between md:block">
              <Link href={"/"} className="">
                <Name/>
              </Link>
              <div className="z-10 md:hidden mr-auto relative">
                <button
                  className="pr-2 mr-2 pl-2 bg-rosspurple 
                 outline-none focus:border-rosspurple focus:border"
                 onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-rossblue 
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
                      className="w-6 h-6 text-rossblue
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 mx-auto justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <ul ref={Navref} className="md:flex-col pt-10">
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
                  <Link href="/about" onClick={handleClickOutside}>
                  ABOUT ME
                  </Link>
                </li>
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
                  <Link href="/projects" onClick={handleClickOutside}>
                  Projects
                  </Link>
                </li>
                <li className="flex relative invisible md:visible">
                  {children}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

