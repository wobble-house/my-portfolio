'use client';
import MainLogo from "../public/logos/RAF-logo.svg"
import LeafRing from "../public/images/SVG/leafring.svg"

export default function Logo({additionalClassName, mobileOnly, scaleMultiplier, containerClassName, isStatic}){

return ( 
<div className={`flex relative ${additionalClassName}`}>
    <div className={`${mobileOnly != null ? (mobileOnly == true ? "flex md:hidden" : "hidden md:flex") : containerClassName } z-30 justify-center items-center ${isStatic ? '' : 'animate-logo-spin'}`}>
        <LeafRing width={180 * scaleMultiplier} height={180 * scaleMultiplier} className=" slow drop-shadow-4xl"/>
        <LeafRing width={120 * scaleMultiplier} height={120 * scaleMultiplier} className="absolute drop-shadow-4xl medium"/>
        <MainLogo width={60 * scaleMultiplier} height={60 * scaleMultiplier} className="absolute drop-shadow-4xl animate-wiggle"/>
    </div>
</div>)
}