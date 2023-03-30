'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMicrosoft, faSlack, faDiscord, faLinux, faApple, faUbuntu, faHtml5, faCss3, faJs, faReact, faDocker, faPython, faAws, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel, faFileWord, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";


export default function Skills(){
    return(
        <section className="text-white fill-white">
        <div className="mx-auto md:px-10 pb-32 pt-10 max-w-7xl">
        <div className="pl-5 md:pl-0 flex mr-auto">
            <div className="flex mb-10 bg-rosspurple dark:bg-rossdarkpurple pb-2 pr-2 -mt-2 pt-2">
                <div className="flex bg-rossblue dark:bg-rossdarkblue pb-2 pr-2 -ml-2 -mt-4 pt-4 relative mr-auto">
                    <div className="flex bg-rosspurple dark:bg-rossdarkpurple -ml-2 -mt-8 px-5 mr-auto relative">
                        <h2 className="md:text-4xl text-white text-left ">
                        Skills
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto md:px-10 lg:px-0 flex flex-row md:flex-col md:content-evenly relative gap-12 justify-evenly">
                <MSSkills/>
                <AdobeSkills/>
                <MediaToolsSkills/>

            </div>
        </div>
        </section>
    )
}

export function MSSkills(){
    
    return(

            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div
                    title="Microsoft Office" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faMicrosoft} size="2x"/>
                                </div >
                                <div title="Microsoft Excel" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFileExcel} size="2x"/>
                                </div>
                                <div title="Microsoft Word" className="flex bg-rosspurple  dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFileWord} size="2x"/>
                                </div>
                                <div title="Microsoft Powerpoint" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFilePowerpoint} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export function AdobeSkills(){
    return(
            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div title="Adobe Photoshop" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <Image src={"/icons/photoshop.ico"} 
                            width={40} 
                            height={39} 
                            alt="after effects logo" 
                            sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                            />
                                </div>
                                <div title="Adobe Illustrator" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <Image src={"/icons/illustrator.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw" />
                                </div>
                                <div title="Adobe Premiere" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <Image src={"/icons/premiere.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw" />
                                </div>
                                <div title="Adobe After Effects" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <Image src={"/icons/aftereffects.ico"} width={40} height={39} alt="after effects logo" sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export function MediaToolsSkills(){
    return(

            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <svg style={{color: "white"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ableton Live</title><path d="M0 6.4v11.2h1.6V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0v11.2H8V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0V8H24V6.4zm0 3.2v1.6H24V9.6zm0 3.2v1.6H24v-1.6zm0 3.2v1.6H24V16z"></path></svg>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export function FrontendSkills(){
    return(

            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-3 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                                <div title="Html5" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faHtml5} size="2x"/>
                                </div>
                                <div title="CSS3" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faCss3} size="2x"/>
                                </div>
                                <div title="Javascript" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faJs} size="2x"/>
                                </div>
                                <div title="React" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faReact} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export function BackendSkills(){
    const skill = "ROSSALANF"
    const data = skill.split("")
    return(
        <div className="flex w-[120px] h-[120px] text-white">
            <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                    <div className="grid grid-cols-3 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                                <div title="Docker" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faDocker} size="2x"/>
                                </div>
                                <div title="Python" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faPython} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export function OSSkills(){
    return (
            <div className="flex w-[120px] h-[120px]">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div title="Linux" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faLinux} size="2x"/>
                                </div>
                                <div title="Ubuntu" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faUbuntu} size="2x"/>
                                </div>
                                <div title="Windows" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faMicrosoft} size="2x"/>
                                </div>
                                <div title="macOS" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faApple} size="2x"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function RemoteSkills(){
    return(
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div title="Instagram" className="flex bg-rosspurple dark:bg-rossdarkpurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}