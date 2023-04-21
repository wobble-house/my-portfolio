'use client';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from "react";
import { resetCookieConsentValue } from "react-cookie-consent";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Section from "../../components/section";
import { getAuth } from 'firebase/auth';
import firebase_app from '../../utils/firebase/config';

const auth = getAuth(firebase_app);

export const FakeMe = {
    id: 1, 
    title:"About Me", 
    img: { 
        src:"/images/Ross.png", 
        alt:"Ross Alan Ford Headshot"
    }, 
    details:["Name: Ross Ford","Pronoun: Ho/Hohoho","Height: 9'9", "Weight: 999lbs","Other: 99-0"], 
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
  }


export default function AboutMe({params}: { params: { 
    id: number,
    img: { 
        src: string, 
        alt: string
    },
    title: string,
    description: string,
    details: string[],
   }}){
    const router = useRouter();
    const aboutref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(aboutref, () => setModalOpen(false));
    
    const detailslist = {
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
    
      const detailsitem = {
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

      const detailslistitem = {
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

    const handleConfirm = () => {
      if (confirm("Please Sign Up or Sign In to Download my Resume")){
      handleSignIn();
      } else {
      console.log("please just sign up")
      }
    }
    const handleSignIn = () => {
        resetCookieConsentValue('GA-COOKIES')
        router.push('/signin')
      }
return (
  <Section>
    <div className="flex flex-col max-w-3xl relative px-4">
    <motion.div 
        layout
        initial="hidden"
        animate="visible"
        variants={detailsitem} className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative z-30">
        <h2 className=" relative text-white  text-left px-5 md:text-4xl">{params.title}</h2>
      </motion.div>
    <motion.div layout
        initial="hidden"
        animate="visible"
        variants={detailslist}
        className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
      <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-5 pb-6"> 
            <div className="flex shrink gap-8 pb-5 align-top">
                <div className="relative overflow-hidden px-1 md:px-5 pt-4">
                  <div className="flex w-[100px] h-[100px] md:h-[200px] md:w-[200px] lg:w-[262px] lg:h-[263px] overflow-hidden shrink">
                  <Image src={params.img.src} width={262} height={263} alt={params.img.alt} sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" priority />
                  </div>
                </div>
                <div className="flex flex-col justify-evenly">
                <motion.ul 
                layout
                initial="hidden"
                animate="visible"
                variants={detailslist} className="text-left list-disc dark:text-white ">
               
               
                {auth.currentUser != null ? (
                    <>
                    {params.details.map((details, index ) => (
                        <motion.li
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={detailslistitem} 
                        key={index}
                        className="">
                        <p>{details}</p>
                    </motion.li> 
                    ))}
                    </>
                    ) : (
                    <>
                    {FakeMe.details.map((details, index ) => (
                        <motion.li
                        layout
                        initial="hidden"
                        animate="visible"
                        variants={detailslistitem} 
                        key={index}
                        className="first:blur-none blur">
                        <p>{details}</p>
                    </motion.li> ))}
                    </>
                    )}
                </motion.ul>


                {auth.currentUser != null ? (
                    <form method="get" 
                    action={process.env.RESUME}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button type="submit" className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] dark:text-white"
                    >Download my Resume</button></form> ) :(<button className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] dark:text-white" onClick={handleConfirm}
                    >Download my Resume</button> ) }
                </div>
              </div>
      <div className="mx-auto ">

      {auth.currentUser != null ? 
      (
        <div className="flex relative">
              <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white relative" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {params.description}
                </ReactMarkdown>
            </div>
        ):
        (<>
        <div className="blur w-[275px] md:w-[500px] h-[1000px] -mb-[1000px] md:h-[700px] md:-mb-[700px] z-0">
        <div className="flex flex-col">
            <div className="blur text-left text-black dark:text-white">
                <p >{FakeMe.description}</p>
            </div>
            <div className="blur text-left text-black dark:text-white">
                <p >{FakeMe.description}</p>
            </div>
            </div>
            </div>

            {  isModalOpen ? (

            <motion.div
            layout
            ref={aboutref}
            onClick={close}
            onHoverEnd={close}
            className="flex w-[275px] md:w-[500px] h-[1000px] md:h-[700px]"
            exit="exit"
            >

            { /* modal details go in here */ }

            <div className="flex content-center justify-center items-center mx-auto relative">
                <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1">
                <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 mr-auto">
                    <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignIn}>Sign in to read about me</button>
                    </div>
                    </div>
                </div>

            </motion.div>
            )
            : (
            <motion.button 
            layout
            whileTap={{scale: 0.95}}
            className="flex save-button w-[275px] md:w-[500px] h-[1000px] md:h-[700px]"
            onHoverStart={open}
            >
            { /* modal button goes in here */ }
            <div className="flex flex-col" onClick={open}>
            <div className="blur text-left text-black dark:text-white">
                <p >{FakeMe.description}</p>
            </div>
            <div className="blur text-left text-black dark:text-white">
                <p >{FakeMe.description}</p>
            </div>
            </div>
                </motion.button>
                )}</>
       )}   
            </div>
                </div>
                </motion.div>
    </div>
    </Section>
)
                        
}