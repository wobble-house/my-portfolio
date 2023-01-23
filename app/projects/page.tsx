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
          <ul>
              <li>
                  Project 1
              </li>
              <li>
                  Project 2
              </li>
              <li>
                  Project 3
              </li>
              <li>
                  Project 4
              </li>
              <li>
                  Project 5
              </li>
          </ul>
      </div>
  )
}