'use client';

import React from "react"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ProjectCard, ProjectDetails } from "../app/projects/project-cards";

export function ChatModal () {
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };

    return (
        <>
            <div className="flex fixed bottom-20 right-10 w-14 h-14 bg-rosspurple border-4 border-rossblue hover:border-liberapurple">
            {!isModalOpen ? (
                <motion.button 
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                <h2 className="text-5xl ml-2 -mt-3 hover:text-black text-white text-center hover:scale-105">   ?   </h2>
            </motion.button>
                 ) : (<motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="fixed bg-rossblue p-5 w-96 shadow-2xl bottom-32 md:right-24 right-7 border-r-4 border-b-4 border-rosspurple"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <ModalInfo/>
                </motion.div>
                
                )}
            </div>
     </>
    );
    }

export function useOnClickOutside(ref, handler) {
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
      
export function ProjectModal({key, params }) {
          const ref = useRef();
          const [isModalOpen, setModalOpen] = useState(false)
          const close = () => setModalOpen(false);
          const open = () => setModalOpen(true);
          useOnClickOutside(ref, close);
          const dropIn = {
              hidden: {
                  opacity: 0,
              },
              visible: {
                  opacity: 1,
                  transition: {
                      duration: 0.5,
                      type: "spring",
                      damping: 40,
                      stiffness: 300,
                  }
              },
              exit: {
                  y:"-100vh",
                  opacity: 0,
              },
          };
          return (
                  <div ref={ref} key={key} className="flex bg-rosspurple border-4 border-rossblue hover:border-liberapurple relative">
                  {isModalOpen ? (
                    <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="fixed top-0 left-0 bg-black opacity-10 object-center mx-auto w-full h-full "
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                    <div  className="h-full overflow-hidden">
                    <ProjectDetails params={params}/>
                    </div>
                    </motion.div>
                    ) : (
                    <motion.button 
                    whileTap={{scale: 0.95}}
                    className="save-button"
                    onClick={!isModalOpen ? open : close }> 
                    <ProjectCard params={params}/>
                    </motion.button>
                    )}
                </div>
          );
        }

            
      

function ModalInfo(){

    return (
        <div>
            <div className="p4 justify-evenly rounded-xl">
                <p>I am a Full-Stack Developer with experience leading both
                     front-end and back-end development.
                     I come from an operations focused background, 
                     with the past 6 years working for a 501(c)6 not-for-profit 
                     trade organization centered within the US music business industry</p>
                </div>
        </div>
    )
}
