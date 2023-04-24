'use client';
import ImageWithFallback from "../../components/image-handler";
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
          <div className="flex flex-col relative">
              <motion.ul
                layout
                initial="hidden"
                whileInView="visible"
                variants={Projectlist}
                viewport={{ once: false }}
                className="flex flex-wrap gap-5 mx-auto text-center place-content-center z-30 relative">
                 {data.map(docs => (
                    <ProjectCard 
                    key={docs.id} 
                    title={docs.title}
                    url={docs.url}
                    details={docs.details}
                    description={docs.description}
                    img={docs.img}
                    urlvisit={docs.urlvisit}/>
                 ))
                  }
              </motion.ul>
              </div>
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
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(ref, () => setModalOpen(false));

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
    id="" 
    className="fixed top-0 left-0 w-full h-full grow max-h-screen bg-rossdarkblue dark:bg-black bg-opacity-75 dark:bg-opacity-50 z-50 mx-auto place-content-center pt-20 overflow-hidden overscroll-none"
    >
      <div className="flex project-card justify-center items-center mx-auto my-auto overscroll-none">
                  <motion.div
                  layout
                  className="grid grid-cols-0"
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                    <button className="justify-self-end z-50 relative -mb-10 hover:scale-105">
                     <div className=" bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 -mt-1">
      <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-2 pt-1">
      <div className="bg-rosspurple dark:bg-rossdarkpurple p-1 -ml-1 -mt-2 text-white pt-1">
      <span className="text-xl hover:animate-pulse px-1">x</span>
        </div>
        </div>
      </div>
      </button>
                  <div ref={ref}>
                  <Details 
                  description={description}
                    details={details}
                    img={img}
                    title={title}
                    url={url}
                    urlvisit={urlvisit} />
                    </div>
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
                whileHover={{scale: 1.05}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                    <div className="flex content-center justify-center  bg-rosspurple  dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex-col items-center content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2 p-5 mb-2">
                      <div className="flex h-8 -ml-8 -mt-8 ">
                          <div className="flex shrink bg-rosspurple dark:bg-rossdarkpurple  text-white px-2">
                        <h2 className="text-xl uppercase font-bold text-left">{title}</h2>
                    </div>
                  </div>
                <div className="flex bg-zinc-50 m-2 relative mt-3 w-48 h-32 mr-5">
                  <ImageWithFallback src={img.src} alt={img.alt} fallbackSrc={'/images/oof.png'} />
                </div>
                </div>
                </div>
              </motion.button>
              </motion.li>
                )
              }