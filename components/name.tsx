'use client';
import { motion, AnimatePresence } from "framer-motion"

export function NameLarge(){
    const name = "ROSSALANFORD"
    const data = name.split("")
    const list = {
        visible: { 
          opacity: 1,
          scale:1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
          },
        },
        hidden: { 
          opacity: 0,
          scale: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
    const item = {
      visible: { 
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        y:-100,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.1,
        },
      },
      exit: {
        opacity: 0,
    },
    }
    return(
      <AnimatePresence>
            <div className="flex w-[175px] h-[130px] text-white mx-auto mt-10">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                    <motion.div                 
                      layout
                      initial="hidden"
                      whileInView="visible"
                      variants={list}
                      viewport={{ once: false }} className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                        {data.map((data, index) => (
                            <motion.div 
                            layout
                            variants={item} key={index} className="bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105">
                                <h3 className="text-center text-2xl">{data}</h3>
                                </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            </AnimatePresence>
    )
}

export function NameSmall(){
    const name = "ROSSALANFORD"
    const data = name.split("")
    const list = {
      visible: { 
        opacity: 1,
        scale:1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.05,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }
  const item = {
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { 
      opacity: 0,
      scale: 0,
      y:-100,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
  },
  }
    return(
      <AnimatePresence>
            <div className="flex w-[75px] h-[56px] text-white mt-8">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-2 -mt-1">
                    <motion.div                 
                      layout
                      initial="hidden"
                      whileInView="visible"
                      variants={list}
                      viewport={{ once: false }} className="grid grid-cols-4 content-evenly relative gap-1 -ml-2 -mt-2 mr-1 mb-1">
                        {data.map((data, index) => (
                            <motion.div 
                            layout
                            variants={item} key={index} className="bg-rosspurple dark:bg-rossdarkpurple h-[15px] w-[15px] justify-center content-center hover:scale-105">
                                <p className="text-center text-xs align-middle">{data}</p>
                                </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            </AnimatePresence>
    )
}

export function NameLargeStatic(){
  const name = "ROSSALANFORD"
  const data = name.split("")
  
  return(
          <div className="flex w-[175px] h-[130px] text-white mx-auto mt-10">
              <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                  <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                  <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                      {data.map((data, index) => (
                          <div key={index} className="bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105">
                              <h3 className="text-center text-2xl">{data}</h3>
                              </div>
                      ))}
                      </div>
                  </div>
              </div>
          </div>
  )
}
