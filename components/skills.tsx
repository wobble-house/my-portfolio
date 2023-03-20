
export default function Skills(){
    const name = "SKILLS"
    const data = name.split("")
    return(
        <>
         <div className="mx-auto">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="mx-auto grid grid-cols-0 md:grid-cols-2 lg:grid-cols-6 content-evenly relative gap-7">
            {data.map((data, index) => (
                <div key={index} className="bg-rosspurple mx-auto justify-center content-center hover:scale-105">
                    <h2 className="text-3xl text-center p-10 ">{data}</h2>
                    </div>
            ))}
            </div>
            </div>
        </>
    )
}