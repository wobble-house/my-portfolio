import ContactForm from "../../components/contact-form"
import Skills from "../../components/skills"
import AboutMe from "./about-me"

export const metadata = {
  title: 'About Me',
  description: 'Learn a lil&apos; bit more about yours truly.  Read more about ME.',
}

export default function About(){

  return (

    <div className="mx-auto justify-center text-center relative">
      <div className="md:pt-20 pt-5  ">
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl">
        
<AboutMe/>
            <ContactForm/>
            </div>
        </div><Skills/>
      </div>

  )
}