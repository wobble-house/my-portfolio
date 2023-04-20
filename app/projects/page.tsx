import { ProjectList } from "./projects"
import { Animation } from "../../components/animation"
import { professional, personal } from "../../lib/projects";
import { Header, Spacer } from "../../components/section";
import MyNavbar from "../../components/navbar";

export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export default function Projects() {
  return (
    <>
    <MyNavbar/>
    <Animation mode={'wait'} initial={true}>
      <div className="mx-auto max-w-3xl justify-center text-center pb-48">
        <Header/>
      <ProjectList name={"Professional"} data={professional}/>
      <Spacer/>
      <ProjectList name={"Personal"} data={personal}/>
      </div>
      </Animation>
      </>
  )
}
