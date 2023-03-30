import { ProjectList } from "./projects"
import { Animation } from "../../components/animation"
import { professional, personal } from "../../lib/projects";

export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export default function Projects() {
  return (
    <Animation mode={'wait'} initial={true}>
      <div className="mx-auto max-w-3xl justify-center text-center pt-20">
      <ProjectList name={"Professional"} data={professional}/>
      <ProjectList name={"Professional"} data={professional}/>
      <ProjectList name={"Professional"} data={professional}/>
      <ProjectList name={"Professional"} data={professional}/>
      <ProjectList name={"Professional"} data={professional}/>
      <ProjectList name={"Professional"} data={professional}/>
      </div>
      </Animation>
  )
}
