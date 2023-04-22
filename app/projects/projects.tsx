'use client';
import Section from "../../components/section";
import { WebScreenshot } from "../../components/screenshot";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Details from "../../components/details-card";

export function ProjectList({data}){
  const Projectlist = {
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

  return(
          <Section>
          <div className="flex flex-col relative">
            <div className="flex bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mr-auto mb-10 shadow-2xl">
            <div className="flex bg-rossblue dark:bg-rossdarkblue  pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple dark:bg-rossdarkpurple  mr-auto -ml-2 -mt-2 relative px-5">Professional</h2>
            </div>
          </div>
              <motion.ul
                layout
                initial="hidden"
                whileInView="visible"
                variants={Projectlist}
                viewport={{ once: false }}
                className="flex flex-wrap gap-5 mx-auto max-w-5xl text-center place-content-center z-30">
                 {data.map(docs => (
                    <ProjectCard 
                    key={docs.id} 
                    title={docs.title}
                    url={docs.url}
                    details={docs.details}
                    description={docs.description}
                    img={docs.img}
                    urlvisit={false}/>
                 ))
                  }
              </motion.ul>
              </div>
              </Section>
  )
}

export function ProjectCard({ 
  title,
  url,
  details,
  description,
  img,
  urlvisit,
 }:{ 
  title: string,
  url : string,
  details: string[],
  description: string,
  img: {
    src: string,
    alt: string
  },
  urlvisit: boolean
 }){
  const projectref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(projectref, () => setModalOpen(false));

  const dropIn = {
      hidden: {
          opacity: 0,
          scale: 0,
          transition: {
            duration: 3,
            type: "spring",
            damping: 40,
            stiffness: 300,
          },
      },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 2,
              type: "spring",
              damping: 40,
              stiffness: 300,
          }
      },
      exit: {
          opacity: 0,
          scale:0
      },
  };
  const item = {
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    hidden: { 
      opacity: 0,
      scale: 0,
      y:-100,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
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
    key={title} 
    variants={item}
    id="project-card" 
    className="fixed top-0 left-0 w-full h-full grow max-h-screen bg-rossdarkblue dark:bg-black bg-opacity-75 dark:bg-opacity-50 z-50 mx-auto place-content-center pt-20 overflow-hidden overscroll-none"
    >
      <div className="flex project-card max-w-xl justify-center items-center mx-auto my-auto overscroll-none">
                  <motion.div
                  layout
                  ref={projectref}
                  onClick={close}
                  className="flex  mx-auto justify-center content-center items-center "
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                  <Details description={description}
                    details={details}
                    img={img}
                    title={title}
                    url={url}
                    urlvisit={urlvisit} />
                </motion.div>
                </div>
                </motion.li>
                )
else return (
  <motion.li
    layout
    key={title} 
    variants={item}
    id="project-card" 
    className="flex-col project-card hover:scale-105 relative grow shrink overscroll-none"
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
                        <h2 className="text-xl uppercase font-bold text-left">{title}</h2>
                    </div>
                  </div>
                <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
                  <WebScreenshot url={url} name={title}/>
                </div>
                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }