export default function About() {
  return (
    <main >
      <div className="mx-auto justify-center text-center">
      <h2 className="text-center text-4xl py-20">Ross Ford&apos;s Portfolio</h2>
      <AboutMe/>
      </div>
    </main>
  )
}

export function AboutMe(){
  return (
      <div className="w-full bg-zinc-300 dark:bg-zinc-600 py-20">
          <p>About me</p>
      </div>
  )
}