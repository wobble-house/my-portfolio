import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel, faFileWord, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";

  
export default function Skills(){
    return(
        <div className="mx-auto px-10 pb-32 pt-10 max-w-7xl">
        <div className="flex mr-auto">
            <div className="flex mb-10 bg-rosspurple pb-2 pr-2 -mt-2 pt-2">
                <div className="flex bg-rossblue pb-2 pr-2 -ml-2 -mt-4 pt-4 relative mr-auto">
                    <div className="flex bg-rosspurple -ml-2 -mt-8 px-5 mr-auto relative">
                        <h2 className="  md:text-4xl text-white text-left ">
                        Skills
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto px-20 md:px-10 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 md:content-evenly relative gap-12 justify-evenly">
                <MSSkills/>
                <AdobeSkills/>
                <MediaToolsSkills/>
                <FrontendSkills/>
                <BackendSkills/>
                <OSSkills/>
                <RemoteSkills/>
            </div>
        </div>
    )
}

export function MSSkills(){
    const skill = "ROSS"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faMicrosoft} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFileExcel} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFileWord} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faFilePowerpoint} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function AdobeSkills(){
    const skill = "ROSS"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function MediaToolsSkills(){
    const skill = "ROSS"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-2 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[60px] w-[60px] justify-center content-center hover:scale-105 items-center">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function FrontendSkills(){
    const skill = "ROSSALANF"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-3 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function BackendSkills(){
    const skill = "ROSSALANF"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-3 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div className="flex bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export function OSSkills(){
    const skill = "ROSSALANFORD"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function RemoteSkills(){
    const skill = "ROSSALANFORD"
    const data = skill.split("")
    return(
        <>
            <div className="flex w-[120px] h-[120px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                            <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                                <div  className="flex bg-rosspurple h-[34px] w-[31px] justify-center content-center hover:scale-105 items-center">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}