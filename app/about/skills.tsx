'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faDocker, faPython} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../components/section";

export default function Skills(){
    const skillslist = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.8,
          },
        },
        hidden: { 
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
    const skills = {
      visible: { 
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        y:-100,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
    },
    }
    return(
        
        <Section>
            <AnimatePresence mode="wait">
            <div className="flex flex-col mx-auto md:px-10 pb-32 pt-8 md:max-w-[160px] text-white text-center justify-center items-center">
        <div className="pl-5 md:pl-0 flex mr-auto -ml-2 drop-shadow-3xl">
            <div className="flex mb-10 bg-rosspurple dark:bg-rossdarkpurple pb-2 pr-2 -mt-2 pt-2">
                <div className="flex bg-rossblue dark:bg-rossdarkblue pb-2 pr-2 -ml-2 -mt-4 pt-4 relative mr-auto">
                    <div className="flex bg-rosspurple dark:bg-rossdarkpurple -ml-2 -mt-8 px-2 mr-auto relative">
                        <h2 className="md:text-4xl text-white text-left ">
                        Skills
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <motion.div                 
            layout
            initial="hidden"
            whileInView="visible"
            variants={skillslist}
            viewport={{ once: false }}  className="flex flex-col md:content-evenly relative gap-12 justify-evenly mx-auto ">
            
            <motion.div 
                layout
                variants={skills}
                viewport={{ once: false }} >
                <CodeSkills/>
            </motion.div>

            <motion.div 
                layout
                variants={skills}
                viewport={{ once: false }} >
                <OtherSkills/>
            </motion.div>

            <motion.div 
                layout
                variants={skills}
                viewport={{ once: false }} >
                <MediaToolsSkills/>
            </motion.div>

            </motion.div>
        </div>
        </AnimatePresence>
        </Section>
    )
}

export function CodeSkills(){
    const list = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
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
        scale: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        y:-100,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
    },
    }
    return(
        <AnimatePresence mode="wait">
            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <motion.div                 
                            layout
                            initial="hidden"
                            animate="visible"
                            variants={list}
                            viewport={{ once: false }} 
                            className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                                
                                <motion.div 
                                layout
                                variants={item}
                                viewport={{ once: false }} 
                                title="JavaScript" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                    <FontAwesomeIcon icon={faJs} size="2x"/>
                                </motion.div >

                                <motion.div 
                                    layout
                                    variants={item}
                                    viewport={{ once: false }} 
                                    title="TypeScript" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] p-4 justify-center content-center hover:scale-105 items-center">
                                        <Image src={"/icons/ts-logo-128.png"} 
                                    width={40} 
                                    height={39} 
                                    alt="TypeScript logo" 
                                    sizes="(max-width: 768px) 100vw,
                                                (max-width: 1200px) 50vw,
                                                33vw"
                                    />
                                </motion.div>

                                <motion.div 
                                layout
                                variants={item}
                                viewport={{ once: false }} 
                                title="Html5" className="flex bg-rosspurple  dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faHtml5} size="2x"/>
                                </motion.div>

                                <motion.div 
                                layout
                                variants={item}
                                viewport={{ once: false }} 
                                title="CSS3" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faCss3} size="2x"/>
                                </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
</AnimatePresence>
    )
}

export function MediaToolsSkills(){
    const list = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            delay: 1.6
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
        scale: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        y:-100,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
    },
    }
    return(
        <AnimatePresence mode="wait">
            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                    <motion.div                 
                            layout
                            initial="hidden"
                            animate="visible"
                            variants={list}
                            viewport={{ once: false }} className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            
                            <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Adobe Photoshop" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <Image src={"/icons/photoshop.ico"} 
                                width={40} 
                                height={39} 
                                alt="after effects logo" 
                                sizes="(max-width: 768px) 100vw,
                                            (max-width: 1200px) 50vw,
                                            33vw"/>
                            </motion.div>

                            <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Adobe Illustrator" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <Image src={"/icons/illustrator.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw" />
                            </motion.div>

                            <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Adobe Premiere" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <Image src={"/icons/premiere.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw" />
                            </motion.div>

                            <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Adobe After Effects" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <Image src={"/icons/aftereffects.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </AnimatePresence>
    )
}

export function OtherSkills(){
    const list = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            delay: 0.9
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
        scale: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: { 
        opacity: 0,
        scale: 0,
        y:-100,
        transition: {
          when: "afterChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
    },
    }
    return(
<AnimatePresence mode="wait">
            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                    <motion.div                 
                            layout
                            initial="hidden"
                            animate="visible"
                            variants={list}
                            viewport={{ once: false }} 
                             className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                                
                        <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="React" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faReact} size="2x"/>
                                </motion.div> 
                                
                                <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Nextjs" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                    <Image src={"/icons/nextjs-icon.png"} 
                                        width={40} 
                                        height={39} 
                                        alt="nextjs logo" 
                                        sizes="(max-width: 768px) 100vw,
                                                    (max-width: 1200px) 50vw,
                                                    33vw"/>
                                </motion.div>

                                <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Docker" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faDocker} size="2x"/>
                                </motion.div>

                                <motion.div 
                                layout
                                variants={item} 
                                viewport={{ once: false }} title="Python" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faPython} size="2x"/>
                                </motion.div>
                                </motion.div>
                    </div>
                </div>
            </div>
            </AnimatePresence>

    )
}


