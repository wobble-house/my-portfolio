import MyNavbar from "../components/navbar";
import LoginButton from "./login";


export default function Loading(start, end) {
    const data = [1,2,3,4,5,6,7,8,9,10]
    const loadingdata = data.slice(start,end)
    return (
      <><MyNavbar><LoginButton/></MyNavbar>
        <div className="mx-auto">
         <div className="grow shrink content-center">
<h1 className="animate-pulse pt-20 grow font-bold align-middle text-center leading-tight text-neutral-200">
  Loading
  </h1>
  </div>
        <div className="relative animate-pulse grid grid-cols-0 mx-auto p-10 gap-10 z-0 max-w-3xl">
        {loadingdata.map(data => (
            <div key={data} className="animate-pulse h-[300px] bg-gray-200 rounded-xl dark:bg-gray-700 w-full mb-[40px]">
            </div>
              )
            )}
            </div>
            </div>
            </>
    );
}
