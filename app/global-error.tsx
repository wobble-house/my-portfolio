"use client";
import Footer from './footer'
import './globals.css'
import MyNavbar from '../components/navbar'
import MyModal from '../components/modal'
import Chatbot from '../components/chatbot';
import LoginButton from '../components/login'
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query } from 'firebase/firestore';
import firebase_app from '../utils/firebase/config';

export const metadata = {
    title: 'Error',
    description: 'Oops! If you are seeing this, Something Went Wrong!',
  }


  async function getInterchanges(){
    const interchanges = [];
    const db = getFirestore(firebase_app)
    const q = query(collection(db, "interchanges"));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      let myinterchanges = doc.data();
      myinterchanges.id = doc.id;
      interchanges.push(myinterchanges)
    });
    return interchanges
  };
  
export default async function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const interchanges = await getInterchanges()
  return (
<html lang="en" style={{scrollBehavior:'smooth'}}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon/rossalanford.ico" />
<body className="min-h-screen">
            <main className="md:flex flex-row max-w-7xl mx-auto gap-5 justify-evenly align-top">
                <MyNavbar></MyNavbar>
        <h2 className="text-center">Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>

        </main>

<LoginButton/>

<div className="absolute top-1 left-8 md:invisible">

</div>
<MyModal><Chatbot interchanges={interchanges}></Chatbot></MyModal>
<Footer color={'white'}/>
</body>
</html>
)
}
