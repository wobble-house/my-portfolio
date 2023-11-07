import Image from "next/image"
export default function DetailsCard(){
    return(
    <div className={`relative flex flex-col border-[6px] border-solid border-primary bg-foreground rounded-lg max-w-lg mx-auto `}>
        <div className={`relative flex flex-col md:flex-row  rounded-lg overflow-none px-4 py-4 gap-8 md:gap-4 items-start justify-start z-30`}>
            <Image src={'/images/Ross.png'} alt={'image'} fill sizes={'100vw'} style={{objectFit: 'cover'}} className='flex'/>
            <div className={`relative flex flex-col bg-gradient-to-r drop-shadow-4xl from-foreground to-transparent px-4 pt-2 pb-4 rounded-xl group`}>
                <h2 className={`text-[1.5rem] font-extrabold uppercase drop-shadow-2xl group-hover:text-[1.6rem] transition-all ease-in-out`}>Ross Alan Ford</h2>
                <hr></hr>
                <ul className="list-inside list-disc">
                    <h3 className={`text-2xl font-mono text-accent`}>Skills:</h3>
                    <li className={`text-accent`}>
                        Being Cool
                    </li>
                    <li className={`text-accent`}>
                        Being Cool
                    </li>
                    <h3 className={`text-accent font-bold text-xl py-2`}>&</h3>
                    <li className={`text-accent`}>
                        Chillin&apos; out
                    </li>
                    <li className={`text-accent`}>
                        Maxin&apos;
                    </li>
                    <li className={`text-accent`}>
                        ..and Relaxxin&apos;
                    </li>
                </ul>
            </div>
        </div>
        <div className={`flex flex-col p-4 gap-1 bg-accent pt-8 rounded-b-lg group`}>
            <h2 className={`text-2xl font-extrabold text-primary group-hover:text-3xl transition-all ease-in-out`}>BIO</h2>
            <hr className="border-primary border-2 w-full group-hover:w-4/5 my-2 transition-all ease-in-out"></hr>
            <p className={`font-mono`}>
            I am a Full-Stack Developer and overall Business Operations whiz with experience leading teams of varying sizes and scope. I come from an operations focused background, with the past 6 years working for a 501(c)6 not-for-profit trade organization called A2IM, which is focused within the US music business industry. At A2IM I established a modern, cloud-based IT and web infrastructure alongside managing live event production contractors & varying other teams. In conjunction with the development of new business operations with policies & procedures, I also participated in many of the numerous in-person networking events as well as moderated live panels & a few webinars.
<br></br>
<br></br>
Before working for A2IM I helped grow a chain of retail stores in an emerging disruptive technology located in Manhattan & Brooklyn. After originally taking a part-time position out of interest in a hobby, I ended up creating inventory and tracking systems that were scaled across 10+ stores as the industry exploded. I then took a position managing teams across multiple site locations.
<br></br>
<br></br>
In prior experience I have held various other operations & management roles within a few different industries including industrial fiber optics/network installation, medical insurance, big-box retail, and even unfortunately, the pawn shop industry. I have recently been working on a contract with an organization that focuses on physical therapy for traumatic brain injury patients.  I have been tasked to modernize their web infrastructure & create new features that integrate into their existing systems.
<br></br>
<br></br>
On a personal note: I&apos;m a father, musician and a gamer. I enjoy playing FPS games and tinkering with analogue synthesizers & various other electronic gadgets. Being a musician, live music originally brought me from my hometown in Tampa, Florida to Tennessee.  After spending a couple years there I eventually ventured to New York City to fulfill my creative destiny! I subsequently traveled back nearly a decade later during the covid-19 pandemic. Not long after moving back, my son Alan was born and we now enjoy our time outdoors together at our home in Chattanooga with our super cute cat named Dwayne.

            </p>
        </div>
    </div>
    )
}