import 'server-only'
import ContactData from "../../components/contact-form"
import Skills from "./skills"
import AboutMe from "./about-me"
import { Animation } from "../../utils/animation/animation"
import { Header, Spacer } from "../../components/section"
import MyNavbar from "../../components/navbar"
import { Suspense } from 'react'
import Loading from '../loading'
import firebase_app from "../../utils/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

export const metadata = {
  title: 'About Me',
  description: 'Learn a lil&apos; bit more about yours truly.  Read more about ME.',
}

async function getAboutMe({type}:{type: String}){
  const about = [];
  const db = getFirestore(firebase_app)
  const q = query(collection(db, "me"), where("type", "==", type));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    let aboutme = doc.data();
    aboutme.id = doc.id;
    about.push(aboutme)
  });
  return about
};

export default async function About(){
  const visibledata = await getAboutMe({type: "real"})
  const hiddendata = await getAboutMe({type: "fake"})
  const [visible, hidden] = await Promise.all([visibledata, hiddendata])
  return (
    <>
    <MyNavbar/>
<Animation mode={'wait'} initial={true}><Suspense fallback={<Loading/>}>
    <div className="mx-auto justify-center text-center relative pb-32">
      <div className="">
        <Header/>
            <div className="flex flex-col md:flex-row gap-5 max-w-7xl">
              <AboutMe visible={visible} hidden={hidden}/>
              <Skills/>
              </div>
              <Spacer/>
            <ContactData/>
        </div>
      </div></Suspense>
</Animation>
</>
  )
}