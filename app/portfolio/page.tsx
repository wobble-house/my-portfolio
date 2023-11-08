import 'server-only';
import Header from "../../components/header";
import Nav from "../../components/nav";
import ProjectList from "../../components/projectList";
import { projects } from "../../lib/data";

export const metadata = {
  title: 'Portfolio',
  description: 'Here are some of the Projects I have worked on',
}

export default async function Portfolio() {
  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className="relative flex-col px-8 pt-12 md:pt-8 pb-8 justify-center mx-auto ">
        <Header metadata={metadata}/>
        <ProjectList projects={projects}/>
      </div>
     </main>
  )
}
