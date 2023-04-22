import "server-only"
import { ProjectList } from "./projects"
import { Animation } from "../../utils/animation/animation"
import { Header, Spacer } from "../../components/section";
import MyNavbar from "../../components/navbar";
import { Suspense } from 'react'
import Loading from '../loading'
import firebase_app from "../../utils/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

export const metadata = {
  title: 'Projects',
  description: 'Here are a few projects that Ross has worked on.',
}

async function getProjects({type}:{type: String}){
  const projects = [];
  const db = getFirestore(firebase_app)
  const q = query(collection(db, "projects"), where("type", "==", type));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let myprojects = doc.data();
    myprojects.id = doc.id;
    projects.push(myprojects)
  });
  return projects
};

export default async function Projects() {
const professional = await getProjects({type: "professional"})
const personal = await getProjects({type: "personal"})
  return (
    <>
    <MyNavbar/>
    <Animation mode={'wait'} initial={true}><Suspense fallback={<Loading/>}>
      <div className="flex flex-col mx-auto max-w-4xl justify-center text-center pb-48">
        <Header/>
        <div className="flex bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mr-auto mb-10 shadow-2xl relative">
            <div className="flex bg-rossblue dark:bg-rossdarkblue  pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple dark:bg-rossdarkpurple  mr-auto -ml-2 -mt-2 relative px-5">Professional</h2>
            </div>
          </div>
      <ProjectList data={professional}/>
      <Spacer/>
      <div className="flex bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mr-auto mb-10 shadow-2xl">
            <div className="flex bg-rossblue dark:bg-rossdarkblue  pr-2 pb-2 -ml-2 -mt-2">
              <h2 className="text-white text-left bg-rosspurple dark:bg-rossdarkpurple  mr-auto -ml-2 -mt-2 relative px-5">Personal</h2>
            </div>
          </div>
      <ProjectList data={personal}/>
      </div>
      </Suspense>
      </Animation>
      </>
  )
}
