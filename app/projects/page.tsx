import { personal, professional } from "../../lib/projects"
import Link from "next/link"
import { WebScreenshot } from "../../components/screenshot";

export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export function ProjectCard({params}: { params: { 
  url : string,
  name: string,
 }}){
  return(
<div key={params.name} id="project-card" className="flex-col project-card w-64 h-48 hover:scale-105">
  <Link href={params.url} target="_blank" rel="noopener noreferrer">
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
</Link>
</div>
  )
}

export default function Projects() {
  return (
<>
      <div className="mx-auto max-w-4xl justify-center text-center">
      <div className="w-full py-20">

        <div className="flex flex-col py-10 pb-20">
          <div className="flex bg-rosspurple pr-2 pb-2 mr-auto mb-10 shadow-2xl">
            <div className="flex bg-rossblue pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple mr-auto -ml-2 -mt-2 relative px-5">Professional</h2>
            </div>
          </div>
            
              <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-5xl text-center justify-center">
                  {professional.map(professional => (
                      <ProjectCard key={professional.name} params={professional}/>
                  ))}
              </div>
        </div>

        <div className="flex flex-col py-10">
        <div className="flex bg-rosspurple pr-2 pb-2 mr-auto mb-10 shadow-2xl">
            <div className="flex bg-rossblue pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple mr-auto -ml-2 -mt-2 relative px-5">Personal</h2>
            </div>
          </div>
            <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-5xl text-center justify-center">
                {personal.map(personal => (
                    <ProjectCard key={personal.name} params={personal}/>
                ))}
            </div>
        </div>
      </div>
      </div>
      </>
  )
}
