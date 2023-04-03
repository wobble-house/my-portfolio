'use client';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Carousel from "react-multi-carousel";

export default function Details({title, src, alt, details, description, downloadbutton, url, urlvisit}){
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

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
      
    return(
        <div className="flex flex-col max-w-3xl relative px-4">
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
              <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-5 pb-6"> 
                    <div className="flex shrink gap-8 pb-5 align-top">
                        <div className="relative overflow-hidden px-1 md:px-5 pt-4">
                          <div className="flex w-[100px] md:w-[200px] overflow-hidden shrink">
                          <Image src={src} width={262} height={263} alt={alt} sizes="(max-width: 768px) 100vw,
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
                            {details.map((details, index ) => (
                                <motion.li
                                layout
                                initial="hidden"
                                animate="visible"
                                variants={listitem} key={index}>
                                <p>{details}</p>
                            </motion.li> ))}
                        </motion.ul>
                        {downloadbutton ? <form method="get" 
                            action="/rossalanford2.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <button className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] dark:text-white" 
                            type="submit">Download my Resume</button>
                            </form> : <></>}
                        </div>
                      </div>
              <div className="mx-auto max-w-xl overflow-auto">
              <ReactMarkdown className="paragraph line-break list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {description}
                </ReactMarkdown>
              </div>
              {urlvisit ? <button className="bg-rosspurple dark:bg-rossdarkpurple  p-2 drop-shadow hover:scale-[1.01]">
                <Link href={url} target="_blank" 
                rel="noopener noreferrer" className="text-white dark:text-white">Visit the Site</Link>
                </button> : <></>}
              </div>
            </motion.div>
            </div>
    )
}