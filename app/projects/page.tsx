
import { ProjectList } from "./projects"
import { Animation } from "../../utils/animation/animation"
import { professional, personal } from "../../lib/projects";
import { Header, Spacer } from "../../components/section";
import MyNavbar from "../../components/navbar";
import { Suspense } from 'react'
import Loading from '../loading'


export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export default async function Projects() {
  return (
    <>
    <MyNavbar/>
    <Animation mode={'wait'} initial={true}><Suspense fallback={<Loading/>}>
      <div className="mx-auto max-w-3xl justify-center text-center pb-48">
        <Header/>
      <ProjectList name={"Professional"} data={professional}/>
      <Spacer/>
      <ProjectList name={"Personal"} data={personal}/>
      </div>
      </Suspense>
      </Animation>
      </>
  )
}
