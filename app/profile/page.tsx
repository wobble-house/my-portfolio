import Header from "../../components/header";
import Nav from "../../components/nav";

export const metadata = {
  title: 'Profile',
  description: 'Update your profile info here',
}

export default function Profile() {

  return (
    <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className=" flex-col px-8 pt-12 md:pt-8 pb-8 justify-center mx-auto ">
        <Header metadata={metadata}/>
      </div>
     </main>
  )
}
