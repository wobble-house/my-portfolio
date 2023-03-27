
export default function Name(){
    const name = "ROSSALANFORD"
    const data = name.split("")
    return(
        <>
            <div className="flex w-[175px] h-[130px] text-white">
                <div className="flex content-center justify-center bg-rosspurple dark:bg-rossdarkpurple w-full h-full relative shadow-3xl">
                    <div className="flex content-center justify-center bg-rossblue dark:bg-rossdarkblue w-full h-full relative -ml-4 -mt-2">
                        <div className="grid grid-cols-4 content-evenly relative gap-1 -ml-4 -mt-4 mr-2 mb-2">
                        {data.map((data, index) => (
                            <div key={index} className="bg-rosspurple dark:bg-rossdarkpurple h-[40px] w-[40px] justify-center content-center hover:scale-105">
                                <h3 className="text-center text-2xl">{data}</h3>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}