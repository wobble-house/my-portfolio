import Image from "next/image"
import Video from "../../components/video"
import ContactForm from "../../components/contact-form"

export const metadata = {
  title: 'About Me',
  description: 'Learn a lil&apos; bit more about yours truly.  Read more about ME.',
}

export default function About(){
  return (
<>
    <div className="mx-auto max-w-6xl justify-center text-center relative">
      <div className="md:pt-20 pt-5">
        <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col">
            <div className=" bg-rosspurple dark:bg-rossdarkpurple mr-auto -ml-4 -mb-2 relative">
            <h2 className="  text-white  text-left px-5 md:text-4xl">About Me</h2>
              </div>
            <div className="bg-rosspurple dark:bg-rossdarkpurple  pr-2 pb-2 mb-12 shadow-2xl">
              <div className=" flex-col gap-10 bg-rossblue dark:bg-rossdarkblue  -ml-2 -mt-2 pt-6 px-10 pb-6"> 
                    <div className="flex shrink gap-10 pb-5 align-top">
                        <div className="w-[300px] h-[180px] overflow-hidden">
                          <Image src={"/images/Ross.jpg"} width={800} height={1200} alt={"Ross Alan Ford Headshot"} sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                        </div>
                        <div className="flex flex-col justify-between">
                        <ul className="text-left list-disc dark:text-white">
                          <li>Name: Ross Ford</li>
                          <li>Gender: Male</li>
                          <li>Height: 6&apos;3&quot;</li>
                          <li>Weight: 175lbs</li>
                          <li>Record: 7-0 (undefeated)</li>
                          
                        </ul>
                        <form method="get" 
                                action="/rossalanford2.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <button className="bg-rosspurple dark:bg-rossdarkpurple  px-2 drop-shadow-lg hover:scale-[1.01] dark:text-white" 
                            type="submit">Download my Resume</button>
                            </form></div>
                      </div>
              <div className="mx-auto max-w-2xl pb-5">
              <p className="text-left dark:text-white">
                I am a Full-Stack Developer with experience leading both front-end and back-end
                development.  I come from an operations focused background, with the past 
                6 years working for a 501(c)6 not-for-profit trade organization centered 
                within the US music business industry
                </p>
              </div>
              <Video VideoURL="https://www.youtube.com/watch?v=gKQOXYB2cd8"/>
              </div>
            </div>
            </div>
            <ContactForm/>
            </div>
        </div>
      </div>
  </>
  )
}