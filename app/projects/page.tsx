export default function Projects() {
  return (
    <main >
      <div className="mx-auto max-w-4xl justify-center text-center">
      <h2 className="text-center text-4xl py-20">Ross Ford&apos;s Portfolio</h2>
      <MyProjects/>
      </div>
    </main>
  )
}

export function MyProjects(){
  return (
      <div className="w-full bg-zinc-50 dark:bg-zinc-500 py-20">
          <div className="flex flex-col md:flex-row gap-5 mx-auto max-w-5xl text-center justify-center">
              <li className="list-none">
                <div className="w-64 bg-zinc-200 p-5 shadow-2xl hover:scale-105">
                <div className="bg-zinc-50 h-32"></div>
                  <h2 className="text-xl uppercase font-bold">A2IM.org</h2>
                  </div>
              </li>
              <li className="list-none">
              <div className="w-64 bg-zinc-200 p-5 shadow-2xl hover:scale-105">
                <div className="bg-zinc-50 h-32"></div>
                 <h2 className="text-xl uppercase font-bold"> Liberaawards.com</h2>
                  </div>
              </li>
              <li className="list-none">
              <div className="w-64 bg-zinc-200 p-5 shadow-2xl hover:scale-105">
              <div className="bg-zinc-50 h-32"></div>
                  <h2 className="text-xl uppercase font-bold">a2imindieweek.org</h2>
                  </div>
              </li>
              <li className="list-none">
              <div className="w-64 bg-zinc-200 p-5 shadow-2xl hover:scale-105">
              <div className="bg-zinc-50 h-32"></div>
                  <h2 className="text-xl uppercase font-bold">a2imartist.org</h2>
                  </div>
              </li>
              <li className="list-none">
              <div className="w-64 bg-zinc-200 p-5 shadow-2xl hover:scale-105">
              <div className="bg-zinc-50 h-32"></div>
                  <h2 className="text-xl uppercase font-bold">Custom CMS</h2>
                  </div>
              </li>
          </div>
      </div>
  )
}