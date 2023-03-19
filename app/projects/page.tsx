import { projects } from "@/lib/projects"
import Link from "next/link"
import { WebScreenshot } from "@/components/screenshot";

export function ProjectCard({params}: { params: { 
  url : string,
  name: string,
 }}){
  return(
<div key={params.name} id="project-card" className="flex-col project-card w-64 h-48 hover:scale-105"><Link href={params.url} target="_blank" rel="noopener noreferrer">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                <div className="flex-col items-center content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2 p-5">
                  <div className="flex h-8 -ml-8 -mt-8 ">
                      <div className="flex shrink bg-rosspurple text-white px-2">
                          <h2 className="text-xl uppercase font-bold text-left">{params.name}</h2>
                      </div>
                  </div>
                  <div className="bg-zinc-50 h-32 overflow-hidden relative mt-3">
                    <WebScreenshot url={params.url}/>
                  </div>
              </div>
          </div></Link>
      </div>
  )
}

export default function Projects() {
  return (
<>
      <div className="mx-auto w-full justify-center text-center">
      <div className="w-full 0 py-20">
          <div className="grid grid-cols-0 md:grid-cols-3 gap-10 mx-auto max-w-5xl text-center justify-center">
              {projects.map(projects => (
                  <ProjectCard key={projects.name} params={projects}/>
              ))}
          </div>
      </div>
      </div>
      </>
  )
}
