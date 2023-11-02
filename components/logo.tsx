import Image from "next/image"
export default function Logo({position,mobile}){
    return(
        <div className={`flex relative ${position}`}>
            <div className={`logoBox ${mobile == true ? "flex md:hidden" : "hidden md:flex"} z-30 ${position} justify-center items-center animate-logo-spin`}>
                <Image src={`/images/SVG/greenStar.svg`} alt="Green star" width={160} height={160} className="absolute slow"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue star" width={130} height={130} className="absolute medium"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red star" width={90} height={90} className="absolute fast"/>
                <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={60} height={60} className="drop-shadow-4xl animate-wiggle"/>
            </div>
        </div>
    )
}