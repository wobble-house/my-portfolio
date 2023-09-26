import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer({color}:{color: string}){
    const textcolor = `text-${color}`
    return (
        <div className="w-full flex bottom-0 bg-black mx-auto justify-center fixed py-2 z-50">
            <div className="ml-2 my-auto">
        </div>
        <div className="flex flex-row justify-center gap-4 text-zinc-50 mx-auto">
            <Link
                href='https://github.com/wobble-house'
                className={`Github social ${textcolor}`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
        </div>
    </div>
    )
}