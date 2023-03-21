import Image from "next/image"
import Video from "../../components/video"
export default function About(){
  return (
<>
    <div className="mx-auto max-w-5xl justify-center text-center">
      <div className="py-20">
        <div className="  flex flex-col">

            <h2 className=" bg-rosspurple text-white mr-auto text-left -ml-4 -mb-2 relative px-5">About</h2>

            <div className="bg-rosspurple pr-2 pb-2 mb-12 shadow-2xl">
              <div className=" flex-col gap-10 bg-rossblue -ml-2 -mt-2 pt-6 px-10 pb-6">
                      
                      <div className="flex shrink gap-10 pb-5 align-bottom items-end">
                        <div className="w-[300px] h-[180px] overflow-hidden">
                          <Image src={"/images/Ross.jpg"} width={800} height={1200} alt={"Ross Alan Ford Headshot"} sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                        </div>
                        <ul className="text-left list-disc">
                          <li>Name: Ross Ford</li>
                          <li>Gender: Male</li>
                          <li>Height: 6&apos;3&quot;</li>
                          <li>Weight: 175lbs</li>
                          <li>Record: 7-0 (undefeated)</li>
                        </ul>
                      </div>
              <div className="mx-auto max-w-2xl pb-5">
              <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised 
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
              passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <Video VideoURL="https://www.youtube.com/watch?v=gKQOXYB2cd8"/>

              </div>
            </div>
            </div>
        </div>
      </div>
  </>
  )
}