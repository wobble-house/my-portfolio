import { NameLarge } from "../components/name"
import MyNavbar from '../components/navbar'
import { ThemeToggle } from "../components/theme-switcher"

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default async function Home() {

  return (
    <>
    <MyNavbar/>
      <div className="max-w-3xl py-20 mx-auto">
        <NameLarge/>
      </div>
      </>
  )
}
