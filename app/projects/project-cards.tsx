import Link from "next/link"
import { WebScreenshot } from "../../components/screenshot";

export function ProjectCard({params}: { params: { 
    url : string,
    name: string,
   }}){
    return(
  <div key={params.name} id="project-card" className="flex-col project-card w-64 h-48 hover:scale-105">
      <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
      <div className="flex-col items-center content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2 p-5">
        <div className="flex h-8 -ml-8 -mt-8 ">
            <div className="flex shrink bg-rosspurple text-white px-2">
                <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
            </div>
        </div>
      <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
        <WebScreenshot url={params.url} name={params.name}/>
      </div>
  </div>
  </div>
  </div>
    )
  }

export function ProjectDetails({params}: { params: { 
    url : string,
    name: string,
   }}){

    return (
        <div id="project-details" className="flex-col project-card hover:scale-105">
      <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
      <div className="flex-col items-center content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2 p-5">
        <div className="flex h-8 -ml-8 -mt-8 ">
            <div className="flex shrink bg-rosspurple text-white px-2">
                <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
            </div>
        </div>
      <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
        <WebScreenshot url={params.url} name={params.name}/>
      </div>
  </div>
  </div>
  </div>
    )
}