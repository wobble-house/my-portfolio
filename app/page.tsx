import { NameLarge } from "../components/name"

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
      <div className="max-w-3xl py-20 mx-auto">
        <NameLarge/>
      </div>
  )
}
