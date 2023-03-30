'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import React, { useState, useRef } from "react";
import { NameSmall, NameLarge } from './name';

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
  return (
      <nav className="w-full top-0 fixed z-50 px-5">
        <div className="flex flex-col md:flex-row justify-start mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-row-reverse items-center justify-between md:block">
              <div className="invisible md:visible">
              <Link href={"/"} className="">
                <NameSmall/>
              </Link>
              </div>
              <div className="z-10 md:hidden mr-auto relative">
                <button
                  className="pr-2 mr-2 pl-2 bg-rosspurple dark:bg-rossdarkpurple
                 outline-none focus:border-rosspurple focus:border"
                 onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-rossblue dark:text-rossdarkblue border-rossblue dark:border-rossdarkblue border-solid border-1
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 mx-auto bg-rossblue dark:bg-rossdarkblue content-center items-center md:bg-transparent dark:md:bg-transparent justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <div className={`${navbar ? 'sticky' : 'hidden'} mx-auto content-center justify-center text-center`}><NameLarge/></div>
              <ul ref={Navref} className="text-center flex flex-col md:flex-row mt-5 ml-3">
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
                  ABOUT
                  </Link>
                </li>
                <>|</>
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

