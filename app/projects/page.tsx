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
      <div className="mx-auto max-w-3xl justify-center text-center pb-48">
        <Header/>
      <ProjectList data={professional}/>
      <Spacer/>
      <ProjectList data={personal}/>
      </div>
      </Suspense>
      </Animation>
      </>
  )
}
