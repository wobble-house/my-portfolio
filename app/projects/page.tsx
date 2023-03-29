import MyProjects from "./projects"

export const metadata = {
  title: 'Projects',
  description: 'View various Projects from Ross Alan Ford&apos;s portfolio',
}

export default function Projects() {
  return (
<>
      <div className="mx-auto max-w-4xl justify-center text-center">
      <MyProjects/>
      </div>
      </>
  )
}
