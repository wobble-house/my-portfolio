import Image from "next/image"
export default function Background(){
    return(
        <div className="fixed top-0 left-0 z-0">
            <div className="fixed flex animate-logo-spin items-center justify-center z-30 top-[-400px] left-[-400px] ">
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={900} height={900} className="relative slowest drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={740} height={740} className="absolute slower drop-shadow-4xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={600} height={600} className="absolute medSlow drop-shadow-4xl"/>
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={400} height={400} className="absolute medFast drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={280} height={280} className="absolute fast drop-shadow-3xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={160} height={160} className="absolute fastest drop-shadow-3xl"/>
            </div>
            <div className="fixed flex animate-logo-spin-reverse items-center justify-center z-20 bottom-[-400px] left-[-400px] ">
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={900} height={900} className="relative slowest drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={740} height={740} className="absolute slower drop-shadow-4xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={600} height={600} className="absolute medSlow drop-shadow-4xl"/>
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={400} height={400} className="absolute medFast drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={280} height={280} className="absolute fast drop-shadow-3xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={160} height={160} className="absolute fastest drop-shadow-3xl"/>
            </div>
            <div className="fixed flex animate-logo-spin items-center justify-center z-20 bottom-[-400px] right-[-400px] ">
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={900} height={900} className="relative slowest drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={740} height={740} className="absolute slower drop-shadow-4xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={600} height={600} className="absolute medSlow drop-shadow-4xl"/>
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={400} height={400} className="absolute medFast drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={280} height={280} className="absolute fast drop-shadow-3xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={160} height={160} className="absolute fastest drop-shadow-3xl"/>
            </div>
            <div className="fixed flex animate-logo-spin-reverse items-center justify-center z-20 top-[-400px] right-[-400px]">
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={900} height={900} className="relative slowest drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={740} height={740} className="absolute slower drop-shadow-4xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={600} height={600} className="absolute medSlow drop-shadow-4xl"/>
                <Image src={`/images/SVG/greenStar.svg`} alt="Green Star behind main logo" width={400} height={400} className="absolute medFast drop-shadow-4xl"/>
                <Image src={`/images/SVG/blueStar.svg`} alt="Blue Star behind main logo" width={280} height={280} className="absolute fast drop-shadow-3xl"/>
                <Image src={`/images/SVG/redStar.svg`} alt="Red Star behind main logo" width={160} height={160} className="absolute fastest drop-shadow-3xl"/>
            </div>
            </div>
        
    )
}