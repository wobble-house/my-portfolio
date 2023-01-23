import Skills from './skills'
import { MyProjects } from './projects/page'
import { AboutMe } from './about/page'

export default function Home() {
  return (
    <main >
      <div className="mx-auto justify-center text-center">
      <h2 className="text-center text-4xl py-20">Ross Ford&apos;s Portfolio</h2>
      <AboutMe/>
      <MyProjects/>
      <Skills/>
      </div>
    </main>
  )
}
