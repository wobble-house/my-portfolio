import 'server-only'
import { GAScript, GABody } from './consent'
import { CookieAccept } from '../components/cookie-consent'
import { Animation } from '../utils/animation/animation'
import Footer from './footer'
import './globals.css'
import MyModal from '../components/modal'
import Chatbot from '../components/chatbot'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { cookies } from 'next/headers';
import { AuthContextProvider } from '../utils/context/AuthContext'
import firebase_app from "../utils/firebase/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata = {
  title: {
    default: 'Ross Alan Ford',
    template: '%s | Ross Alan Ford',
  },
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/interchanges`, { next: { revalidate: 60 }});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const interchanges = await getInterchanges()
  const cookieStore = cookies();
  const data = cookieStore.get('GA-COOKIES');
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
      <link rel="icon" href="/favicon/favicon.ico" />
      <GAScript/>
<body className="min-h-screen mx-auto">
      <GABody/>
      <AuthContextProvider>
        <Footer color={'white'}/>
          <Animation mode={'wait'} initial={false}>
            <main className="flex flex-col mx-auto gap-5 justify-evenly align-top">
              <CookieAccept data={data}/>
              <MyModal><Chatbot interchanges={interchanges}></Chatbot></MyModal>
                  {children}
            </main>
            </Animation>
        </AuthContextProvider>
        </body>
    </html>
  )
}
