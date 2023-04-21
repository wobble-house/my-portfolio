import "server-only";
import ContactForm from "../../components/contact-form"
import Skills from "./skills"
import AboutMe from "./about-me"
import { Animation } from "../../utils/animation/animation"
import { Header, Spacer } from "../../components/section"
import { Me } from "../../lib/me"
import MyNavbar from "../../components/navbar"

export const metadata = {
  title: 'About Me',
  description: 'Learn a lil&apos; bit more about yours truly.  Read more about ME.',
}

export default function About(){

  return (
    <>
    <MyNavbar/>
<Animation mode={'wait'} initial={true}>
    <div className="mx-auto justify-center text-center relative pb-32">
      <div className="">
        <Header/>
            <div className="flex flex-col md:flex-row gap-5 max-w-7xl">
              <AboutMe params={Me}/>
              <Skills/>
              </div>
              <Spacer/>
            <ContactForm/>
        </div>
      </div>
</Animation>
</>
  )
}