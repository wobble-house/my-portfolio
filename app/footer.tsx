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
        <div className="w-full flex flex-row bottom-0 bg-black text-zinc-50 mx-auto justify-center gap-4 fixed py-2 z-50">
            <Link
                href="https://www.instagram.com/rossalanford/"
                className={`Instagram social ${textcolor}`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link
                href="https://www.linkedin.com/in/rossaford/"
                className={`Linkedin social ${textcolor}`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link
                href="https://github.com/wobble-house"
                className={`Github social ${textcolor}`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
        </div>
    )
}