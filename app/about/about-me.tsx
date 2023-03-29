'use client';
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMe(){
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
          y:-100,
          transition: {
            when: "afterChildren",
          },
        },
      }
      const listitem = {
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
          y: 200,
          transition: {
            when: "afterChildren",
          },
        },
      }
    return(
        <div className="flex flex-col">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative">
                <h2 className="  text-white  text-left px-5 md:text-4xl">About Me</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className="bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mb-12 shadow-2xl relative">
              <div className=" flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-10 pb-6"> 
                    <div className="flex shrink gap-10 pb-5 align-top">
                        <div className="relative overflow-hidden">
                          <Image src={"/images/Ross.jpg"} width={800} height={1200} alt={"Ross Alan Ford Headshot"} sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                        </div>
                        <div className="flex flex-col justify-between">
                        <motion.ul 
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={list} className="text-left list-disc dark:text-white">
                          <motion.li
                          layout
                        initial="hidden"
                        animate="visible"
                        variants={listitem}>Name: Ross Ford</motion.li>
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem}>Gender: Male</motion.li>
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem}>Height: 6&apos;3&quot;</motion.li>
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem}>Weight: 175lbs</motion.li>
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem}>Record: 7-0 (undefeated)</motion.li>
                        </motion.ul>
                        <form method="get" 
                                action="/rossalanford2.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <button className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] dark:text-white" 
                            type="submit">Download my Resume</button>
                            </form></div>
                      </div>
              <div className="mx-auto max-w-2xl pb-5">
              <p className="text-left dark:text-white">
                I am a Full-Stack Developer with experience leading both front-end and back-end
                development.  I come from an operations focused background, with the past 
                6 years working for a 501(c)6 not-for-profit trade organization centered 
                within the US music business industry
                </p>
              </div>
              </div>
            </motion.div>
            </div>
    )
}