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
        <div className="flex flex-col max-w-md relative px-4">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
                <h2 className=" relative text-white  text-left px-5 md:text-4xl">About Me</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
              <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-5 pb-6"> 
                    <div className="flex shrink gap-8 pb-5 align-top">
                        <div className="relative overflow-hidden px-1 md:px-5 pt-4">
                          <div className="flex w-[100px] overflow-hidden shrink">
                          <Image src={"/images/Ross.jpg"} width={262} height={263} alt={"Ross Alan Ford Headshot"} sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                          </div>
                        </div>
                        <div className="flex flex-col justify-evenly">
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
                          variants={listitem}>Pronoun: He/Him</motion.li>
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
                          variants={listitem}>Record: 69-0 (undefeated)</motion.li>
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
              <div className="mx-auto max-w-sm pb-5 overflow-auto">
              <p className="text-left dark:text-white text-overflow">
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