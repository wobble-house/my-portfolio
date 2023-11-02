import Image from "next/image"
export default function Logo(){
    return(
        <div className="flex flex-col-reverse md:flex-row-reverse rounded-md pt-2 justify-evenly md:ml-4 md:gap-2 group-hover:md:gap-8">
        <div className="flex group-hover:scale-105 drop-shadow-xl ease-in-out duration-300 text-center">
      <h1 className="absolute font-black text-secondary ml-1 mt-1 text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">Ross Alan Ford </h1>
      <h1 className=" font-black text-primary text-[6.2vw] lg:text-[3.5rem] uppercase w-full ">Ross Alan Ford </h1>
      </div>
        <div className="flex justify-center items-center z-50 pb-10 md:pb-0 hover:animate-pulse">
            <Image src={`/logos/RAF-logo.svg`} alt="Ross Alan Ford logo" width={100} height={100} className="absolute z-30 drop-shadow-4xl group-hover:animate-bounce group-hover:-mb-8"/>
        </div>
        </div>
    )
}