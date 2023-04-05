import { ProjectList } from "./projects"
import { Animation } from "../../components/animation"
import { professional, personal } from "../../lib/projects";
import { Header, Spacer } from "../../components/section";

export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export default function Projects() {
  return (
    <Animation mode={'wait'} initial={true}>
      <div className="mx-auto max-w-3xl justify-center text-center pb-48">
        <Header/>
      <ProjectList name={"Professional"} data={professional}/>
      <Spacer/>
      <ProjectList name={"Personal"} data={personal}/>
      </div>
      </Animation>
  )
}
