import Image from "next/image"
export default function Logo(){
    return(
        <div className="flex justify-center items-center mx-10 z-50 px-10 pb-12 md:pb-0 group-hover:animate-bounce group-hover:items-end">
            <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={100} height={100} className=" absolute z-30 drop-shadow-4xl"/>
        </div>
    )
}