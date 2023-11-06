import Header from "../components/header";
import Logo from "../components/logo";
import Nav from "../components/nav";
export default function Loading() {
  var metadata = {
    title: "Loading",
    description: ""
  }
    return (
      <main className="flex flex-col mx-auto min-h-screen">
      <Nav/>
      <div className=" flex-col px-8 pt-12 md:pt-8 pb-8 justify-center mx-auto ">
        <Header metadata={metadata}/>
        <div role="status" className="mx-auto justify-center items-center content-center mt-14">
         <div className="flex justify-center items-center z-50 pb-6 md:pb-0 hover:scale-110 transition duration-300 delay-75 ease-in-out">
            <Logo mobileOnly={true} additionalClassName="top-0" scaleMultiplier={1} containerClassName="" isStatic={false}/>
            <Logo mobileOnly={false} additionalClassName="top-0 md:my-4" scaleMultiplier={2} containerClassName="" isStatic={false}/>
          </div>
        <span className="sr-only mx-auto text-center">Loading...</span>
        </div>
      </div>
     </main>
    );
}
