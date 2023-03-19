
export default function Name(){
    const name = "ROSSALANFORD"
    const data = name.split("")
    return(
        <>
            <div className="flex w-[175px] h-[130px] text-white">
                <div className="flex content-center justify-center bg-rosspurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                        {data.map((data, index) => (
                            <div key={index} className="bg-rosspurple h-[40px] w-[40px] justify-center content-center hover:scale-105">
                                <h2 className="text-3xl text-center">{data}</h2>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}