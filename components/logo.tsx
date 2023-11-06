'use client';
import Image from "next/image"

export default function Logo({additionalClassName, mobileOnly, scaleMultiplier, containerClassName, isStatic}){

return ( 
<div className={`flex relative ${additionalClassName}`}>
    <div className={`${mobileOnly != null ? (mobileOnly == true ? "flex md:hidden" : "hidden md:flex") : containerClassName } z-30 justify-center items-center ${isStatic ? '' : 'animate-logo-spin'}`}>
        <Image src={`/images/SVG/leaf-ring.svg`} alt="outer leaf ring" width={180 * scaleMultiplier} height={180 * scaleMultiplier} className=" slow drop-shadow-4xl"/>
        <Image src={`/images/SVG/leaf-ring.svg`} alt="inner leaf ring" width={120 * scaleMultiplier} height={120 * scaleMultiplier} className="absolute drop-shadow-4xl medium"/>
        <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={60 * scaleMultiplier} height={60 * scaleMultiplier} className="absolute drop-shadow-4xl animate-wiggle"/>
    </div>
</div>)
}