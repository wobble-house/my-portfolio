import Skills from '../components/skills'
import { AboutMe } from './about/page'

export default function Home() {
  return (
    <>
      <div className="max-w-3xl">
      <AboutMe/>
      <Skills/>
      </div>
    </>
  )
}
