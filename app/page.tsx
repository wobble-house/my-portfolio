import Skills from './skills'
import { MyProjects } from './projects/page'
import { AboutMe } from './about/page'

export default function Home() {
  return (
    <>
      <div>
      <AboutMe/>
      <MyProjects/>
      <Skills/>
      </div>
    </>
  )
}
