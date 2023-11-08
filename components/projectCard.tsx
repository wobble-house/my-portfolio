'use client';
import Image from "next/image"
export default function ProjectCard({id, title, type, image}:{id, title: string, type:string, image:{src:string, alt:string}}){
    return(
        <div id={id} className={`relative flex flex-col border-[6px] border-primary rounded-xl bg-foreground group aspect-video hover:text-center overflow-hidden hover:scale-125 transition-all ease-in-out`}>
            <Image src={image.src} fill alt={image.alt} style={{objectFit: 'cover'}} sizes={'50vw'} className={`absolute blur-sm group-hover:blur-none transition-all ease-in-out group-hover:scale-125 group-hover:rotate-12 delay-100`}/>
            <div className={`relative flex flex-col p-2 justify-end group-hover:items-center bg-gradient-to-t from-foreground group-hover:from-primary from-50% to-transparent mt-auto transition ease-in-out`}>
                <h2 className={`relative hover:text-secondary text-accent font-extrabold text-2xl drop-shadow-4xl transition-all ease-in-out delay-150 scale-100 group-hover:scale-125`}>{title}</h2>
                <hr className={`relative w-full group-hover:w-4/5 justify-self-center transition-all ease-in-out delay-200`}></hr>
                <h3 className={`relative text-accent text-md font-mono text-left group-hover:text-center transition-all ease-in-out`}>{type}</h3>
            </div>
        </div>
    )
}