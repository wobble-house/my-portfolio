export default function Contact() {
  return (
    <main >
      <div className="mx-auto max-w-4xl justify-center text-center">
      <h2 className="text-center text-4xl py-20">Ross Ford&apos;s Portfolio</h2>
      <MyContact/>
      </div>
    </main>
  )
}

export function MyContact(){
  return (
      <div className="mx-auto">
          <button className="rounded-lg hover:scale-105 p-5 uppercase bg-zinc-800 text-white">contact</button>
      </div>
  )
}