
import ContactForm from "../../components/contact-form"
import Skills from "../../components/skills"
import Details from "../../components/details-card"
import { Animation } from "../../components/animation"
import Section from "../../components/section"
import { Me } from "../../lib/me"

export const metadata = {
  title: 'About Me',
  description: 'Learn a lil&apos; bit more about yours truly.  Read more about ME.',
}

export default function About(){

  return (
<Animation mode={'wait'} initial={true}>
    <div className="mx-auto justify-center text-center relative -mt-48">
      <div className="">
          <Section>
            <div className="flex flex-col md:flex-row gap-5 max-w-7xl">
              <Details title={Me.title} src={Me.img.src} alt={Me.img.alt} description={Me.description} details={Me.details} downloadbutton={true} url="" urlvisit={false}/>
              <Skills/></div>
              </Section>
            <ContactForm/>
        </div>
      </div>
</Animation>
  )
}