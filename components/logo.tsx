'use client';
import Image from "next/image"

export default function Logo({additionalClassName, mobileOnly, scaleMultiplier, containerClassName}){

return ( 
<div className={`flex relative ${additionalClassName}`}>
    <div className={`${mobileOnly != null ? (mobileOnly == true ? "flex md:hidden" : "hidden md:flex") : containerClassName } z-30 justify-center items-center animate-logo-spin`}>
        <Image src={`/images/SVG/greenStar.svg`} alt="Green star" width={160 * scaleMultiplier} height={160 * scaleMultiplier} className=" slow drop-shadow-4xl"/>
        <Image src={`/images/SVG/blueStar.svg`} alt="Blue star" width={130 * scaleMultiplier} height={130 * scaleMultiplier} className="absolute drop-shadow-4xl medium"/>
        <Image src={`/images/SVG/redStar.svg`} alt="Red star" width={90 * scaleMultiplier} height={90 * scaleMultiplier} className="absolute drop-shadow-4xl fast"/>
        <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={60 * scaleMultiplier} height={60 * scaleMultiplier} className="absolute drop-shadow-4xl animate-wiggle"/>
    </div>
</div>)
}