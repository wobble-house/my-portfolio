import Header from "../../components/header";
import Nav from "../../components/nav";
import DetailsCard from "../../components/detailsCard"

export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}

export default function About() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className="flex flex-col px-8 pt-12 md:pt-8 pb-8 justify-center mx-auto gap-10">
        <Header metadata={metadata}/>
        <DetailsCard/>
      </div>
     </main>
  )
}
