'use client';
import Link from "next/link"
import { WebScreenshot, WebScreenshotDetails } from "../../components/screenshot";
import { motion } from "framer-motion";
import { professional, personal } from "../../lib/projects";
import { useState, useRef, useEffect } from "react";



export function ProjectList({data1, data2}){
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

  const listitem = {
    visible: { 
      opacity: 1,
      x: 0,
    },
    hidden: { 
      opacity: 0,
      x: -300,
    },
  }
  return(
    <>
    <motion.li key={'Professional'} layout initial="hidden"
          animate="visible"
          variants={listitem} className="flex flex-col py-10 pb-20 relative z-30">
<div className="flex bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mr-auto mb-10 shadow-2xl">
            <div className="flex bg-rossblue dark:bg-rossdarkblue  pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple dark:bg-rossdarkpurple  mr-auto -ml-2 -mt-2 relative px-5">Professional</h2>
            </div>
          </div>
              <motion.ul
                layout
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-wrap gap-10 mx-auto max-w-5xl text-center place-content-center">
                  {data1.map(data => (
                      <ProjectCard key={data.name} params={data}/>
                  ))}
              </motion.ul>
              </motion.li>
                  <motion.li key={"personal"} layout initial="hidden"
                  animate="visible"
                  variants={listitem} className="flex flex-col py-10 pb-20 relative">
        <div className="flex bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mr-auto mb-10 shadow-2xl">
                    <div className="flex bg-rossblue dark:bg-rossdarkblue  pr-2 pb-2 -ml-2 -mt-2">
                      <h2 className="text-white text-left bg-rosspurple dark:bg-rossdarkpurple  mr-auto -ml-2 -mt-2 relative px-5">Personal</h2>
                    </div>
                  </div>
                      <motion.ul
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={list}
                        className="flex flex-wrap gap-10 mx-auto max-w-5xl text-center place-content-center z-30">
                          {data2.map(data => (
                              <ProjectCard key={data.name} params={data}/>
                          ))}
                      </motion.ul>
                      </motion.li>
                      </>
  )
}

export default function MyProjects(){
  const toplist = {
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 3,
      },
    },
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  return (
    <motion.ul
    layout
    initial="hidden"
    animate="visible"
    variants={toplist} className="w-full py-20">
        <ProjectList data1={professional} data2={personal}/>
      </motion.ul>
  )
}

export function ProjectCard({params}: { params: { 
  id: number,
  name: string,
  url : string,
  description: string,
 }}){
  const projectref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(projectref, () => setModalOpen(false));

  const dropIn = {
      hidden: {
          opacity: 0,
          transition: {
            duration: 3,
            type: "spring",
            damping: 40,
            stiffness: 300,
          },
      },
      visible: {
          opacity: 1,
          transition: {
              duration: 2,
              type: "spring",
              damping: 40,
              stiffness: 300,
          }
      },
      exit: {
          opacity: 0,
      },
  };
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
 if (isModalOpen) return (
<motion.li
    layout
    key={params.name} 
    variants={item}
    id="project-card" 
    className="fixed top-0 left-0  h-full w-full  grow shrink hover:scale-105 bg-black bg-opacity-75 z-50 mx-auto justify-center "
    >
      <div className="flex project-card max-w-4xl justify-center items-center mx-auto pt-64">
                  <motion.div
                  layout
                  ref={projectref}
                  onClick={close}
                  className="flex  mx-auto justify-center content-center items-center"
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                  <div className="flex content-center justify-center bg-rosspurple  dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex-col items-center content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2 p-5">
                      <div className="flex h-8 -ml-8 -mt-8 ">
                          <div className="flex shrink bg-rosspurple dark:bg-rossdarkpurple  text-white px-2">
                        <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
                    </div>
                  </div>
                  <div className="flex overflow-hidden relative mt-3 justify-center mx-auto">
                  <WebScreenshotDetails url={params.url} name={params.name}/>
                </div>
                <div className="overflow-hidden relative mt-3 max-w-2xl">
                <p className="pb-3">{params.description}</p>
                <button className="bg-rosspurple p-2 drop-shadow hover:scale-[1.01]">
                <Link href={params.url} target="_blank" 
                rel="noopener noreferrer">Visit the Site</Link>
                </button>
                </div>
                </div>
                </div>
                </motion.div>
                </div>
                </motion.li>
                )
else return (
  <motion.li
    layout
    key={params.name} 
    variants={item}
    id="project-card" 
    className="flex-col project-card hover:scale-105 relative grow shrink"
    >
                <motion.button 
                initial="visible"
                animate="hidden"
                exit="exit"
                layout
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                    <div className="flex content-center justify-center  bg-rosspurple  dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex-col items-center content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2 p-5">
                      <div className="flex h-8 -ml-8 -mt-8 ">
                          <div className="flex shrink bg-rosspurple dark:bg-rossdarkpurple  text-white px-2">
                        <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
                    </div>
                  </div>
                <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
                  <WebScreenshot url={params.url} name={params.name}/>
                </div>
                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }