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
import ImageWithFallback from "../../components/image-handler";

const auth = getAuth(firebase_app);

export default function AboutMe({visible, hidden}){
    const router = useRouter();
    const aboutref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(aboutref, () => setModalOpen(false));
    let visibledata = {};
    for(let i = 0; i < visible.length; i++ ) {
      Object.assign(visibledata, visible[i]);
    };
    let hiddendata = {};
    for(let i = 0; i < hidden.length; i++ ) {
      Object.assign(hiddendata, hidden[i]);
    };
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
        <h2 className=" relative text-white  text-left px-5 md:text-4xl">{visibledata.title}</h2>
      </motion.div>
    <motion.div layout
        initial="hidden"
        animate="visible"
        variants={detailslist}
        className=" bg-rosspurple dark:bg-rossdarkpurple md:pr-2 pb-2 md:mb-12 shadow-2xl block">
      <div className="flex flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-5 pb-6"> 
            <div className="flex shrink gap-8 pb-5 align-top">
                <div className="relative px-1 md:px-5 pt-4">
                  <div className="flex w-32 h-48 md:w-64 md:h-72">
                      <ImageWithFallback src={visibledata.img.src} alt={visibledata.img.alt} fallbackSrc={'/images/oof.png'}/>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly">
                <motion.ul 
                layout
                initial="hidden"
                animate="visible"
                variants={detailslist} className="text-left list-disc dark:text-white ">
                    {visibledata.details.map((details, index ) => (
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
                </motion.ul>
                {auth.currentUser != null ? (
                    <form method="get" 
                    action={process.env.RESUME}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button type="submit" className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] text-white"
                    >Download my Resume</button></form> ) :(<button className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] text-white" onClick={handleConfirm}
                    >Download my Resume</button> ) }
                </div>
              </div>
      <div className="mx-auto ">

      {auth.currentUser != null ? 
      (
        <div className="flex relative">
              <ReactMarkdown className="paragraph line-break text-left text-black dark:text-white relative whitespace-pre-line" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {visibledata.description}
                </ReactMarkdown>
            </div>
        )
        :
        (<>


            {  isModalOpen ? (

                      <motion.div
                      layout
                      ref={aboutref}
                      onClick={close}
                      onHoverEnd={close}
                      className="flex w-[275px] md:w-[500px] h-[1000px]"
                      exit="exit"
                      >
                        <div className="flex mx-auto top-0 relative">
                          <div>
                        <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 mb-1 ">
                        <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 mr-auto">
                            <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" onClick={handleSignIn}>
                              Sign in to read about me
                              </button>
                            </div>
                            </div></div>
                        </div>
                    </motion.div> )
                    : 
            (<motion.button 
            layout
            whileTap={{scale: 0.95}}
            className="flex save-button w-[275px] md:w-[500px] h-[1000px]"
            onHoverStart={open}
            >
                <div className="flex flex-col" onClick={open}>
                <div className="blur text-left text-black dark:text-white">
                    <p >{hiddendata.description}</p>
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