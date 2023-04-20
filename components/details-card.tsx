'use client';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function Details({ params }: { params: { 
  id: number,
  downloadbutton: boolean, 
  description: string, 
  details: string[],   
  img: { 
    src: string, 
    alt: string,
  },   
  title: string, 
  url: string, 
  urlvisit: boolean
}}){

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
      
  return (
        <div className="flex flex-col max-w-3xl relative px-4">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
                <h2 className=" relative text-white  text-left px-5 md:text-4xl">{params.title}</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
              <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-5 pb-6"> 
                    <div className="flex shrink gap-8 pb-5 align-top">
                        <div className="relative overflow-hidden px-1 md:px-5 pt-4">
                          <div className="flex overflow-hidden w-full h-full shrink">
                          <Image src={params.img.src} width={262} height={263} alt={params.img.alt} sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                          </div>
                        </div>
                        <div className="flex flex-col justify-evenly">
                        <motion.ul 
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={list} className="text-left list-disc dark:text-white ">
                            {params.details.map((details, index ) => (
                                <motion.li
                                layout
                                initial="hidden"
                                animate="visible"
                                variants={listitem} 
                                key={index}
                                className="">
                                <p>{details}</p>
                            </motion.li> ))}
                        </motion.ul>
                        </div>
                      </div>
              <div className="mx-auto max-w-xl overflow-auto">
              <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {params.description}
                </ReactMarkdown>
              </div>
              {params.urlvisit ? <button className="bg-rosspurple dark:bg-rossdarkpurple  p-2 drop-shadow hover:scale-[1.01]">
                <Link href={params.url} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Visit the Site</Link>
                </button> : <></>}
              </div>
            </motion.div>
            </div>
    )
}
