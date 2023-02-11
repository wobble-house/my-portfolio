'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import React, { useState, useRef } from "react";

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
    <div>
      <nav className="bg-zinc-50 dark:bg-zinc-900 w-full fixed z-50 shadow-2xl px-5">
        <div className="max-w-5xl justify-between mx-auto items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href={"/"} legacyBehavior>
                <h2 className="text-2xl  dark:text-zinc-50 font-bold tracking-normal hover:scale-105">Ross Alan Ford</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2  dark:text-zinc-50
                 rounded-md outline-none focus:border-white focus:border"
                 onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6  dark:text-zinc-50
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
                      className="w-6 h-6  dark:text-zinc-50
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
            <div 
              className={`flex-1 justify-center md:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={Navref} className="md:flex">
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                dark:text-zinc-50
                text-l 
                uppercase 
                px-2 
                rounded
                ">
                  <Link href="/about" onClick={handleClickOutside}>
                  ABOUT
                  </Link>
                </li>
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                dark:text-zinc-50
                text-l 
                uppercase 
                px-2 
                rounded
                ">
                  <Link href="/projects" onClick={handleClickOutside}>
                  Projects
                  </Link>
                </li>
                <li 
                className="
                py-2
                md:py-0
                text-center
                md:text-left 
                dark:text-zinc-50
                text-l 
                uppercase 
                px-2 
                rounded
                ">
                  <Link href="/contact" onClick={handleClickOutside}>
                  Contact
                  </Link>
                </li>
                <li
              className="text-center font-serif text-zinc-500 whitespace-nowrap hover:scale-105">
          {children}
            </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

