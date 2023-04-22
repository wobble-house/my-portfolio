import { ProjectList } from "./projects"
import { Animation } from "../../utils/animation/animation"
import { Header, Spacer } from "../../components/section";
import MyNavbar from "../../components/navbar";
import { Suspense } from 'react'
import Loading from '../loading'
import firebase_app from "../../utils/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

async function getProjects({type}:{type: String}){
  const projects = [];
  const db = getFirestore(firebase_app)
  const q = query(collection(db, "Projects"), where("type", "==", type));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let projects = doc.data().title;
    projects.id = doc.id;
    projects.push(projects);
  });
  return { projects }
};

export default async function Projects() {

  return (
    <>
    <MyNavbar/>
    <Animation mode={'wait'} initial={true}><Suspense fallback={<Loading/>}>
      <div className="mx-auto max-w-3xl justify-center text-center pb-48">
        <Header/>
      <ProjectList data={getProjects({type: "Professional"})}/>
      <Spacer/>
      </div>
      </Suspense>
      </Animation>
      </>
  )
}
