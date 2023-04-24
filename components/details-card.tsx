'use client';
import { motion } from "framer-motion"
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageWithFallback from "./image-handler";
import { MutableRefObject } from "react";

export default function Details({ 
  description,
  details,
  img, 
  title,
  url,
  urlvisit,
}:{ 
  description: string, 
  details: string[],   
  img: { 
    src: string, 
    alt: string,
  },
  title: string, 
  url: string, 
  urlvisit: boolean,
}){
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
      };
    
      const item = {
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
      };

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
      };
      
  if (urlvisit == true) return (
        <div className="flex flex-col relative px-4">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
                <h2 className=" relative text-white  text-left px-5 md:text-4xl">{title}</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
              <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue -ml-2 -mt-2 pt-6 px-5 pb-6"> 
                    <div className="flex grow shrink gap-8 pb-5 align-top">
                          <div className="relative w-80 h-60 md:w-96 md:h-72 lg:w-[500px] lg:h-[350px] m-3">
                            <ImageWithFallback src={img.src} alt={img.alt} fallbackSrc={'/images/oof.png'}/>
                          </div>
                        <div className="flex flex-col justify-evenly">
                        <motion.ul 
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={list} className="text-left list-disc dark:text-white ">
                            {details.map((details, index ) => (
                                <motion.li
                                layout
                                initial="hidden"
                                animate="visible"
                                variants={listitem} 
                                key={index}
                                className="">
                                {details}
                            </motion.li> ))}
                        </motion.ul>
                        </div>
                      </div>
              <div className="mx-auto overflow-auto">
              <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white max-w-2xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {description}
                </ReactMarkdown>
              </div>
              <button className={` p-2 drop-shadow hover:scale-[1.01] bg-rosspurple dark:bg-rossdarkpurple`}>
                <Link href={url} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Visit the Site</Link>
                </button> 
              </div>
            </motion.div>
            </div>
    ) 
    else return (
      <div className="flex flex-col relative px-4">
      <motion.div 
          layout
          initial="hidden"
          animate="visible"
          variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
          <h2 className=" relative text-white  text-left px-5 md:text-4xl">{title}</h2>
        </motion.div>
      <motion.div layout
          initial="hidden"
          animate="visible"
          variants={list}
          className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
        <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue -ml-2 -mt-2 pt-6 px-5 pb-6"> 
              <div className="flex grow shrink gap-8 pb-5 align-top">
                    <div className="relative w-80 h-60 md:w-96 md:h-72 lg:w-[500px] lg:h-[350px] m-3">
                      <ImageWithFallback src={img.src} alt={img.alt} fallbackSrc={'/images/oof.png'}/>
                    </div>
                  <div className="flex flex-col justify-evenly">
                  <motion.ul 
                  layout
                  initial="hidden"
                  animate="visible"
                  variants={list} className="text-left list-disc dark:text-white ">
                      {details.map((details, index ) => (
                          <motion.li
                          layout
                          initial="hidden"
                          animate="visible"
                          variants={listitem} 
                          key={index}
                          className="">
                          {details}
                      </motion.li> ))}
                  </motion.ul>
                  </div>
                </div>
        <div className="mx-auto overflow-auto">
        <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white max-w-2xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
          {description}
          </ReactMarkdown>
        </div>
        </div>
      </motion.div>
      </div>
    )
}
