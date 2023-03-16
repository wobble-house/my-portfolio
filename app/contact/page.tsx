export default function Contact() {
  return (
<>
      <div className="mx-auto max-w-4xl justify-center text-center">
      <MyContact/>
      </div>
    </>
  )
}

export function MyContact(){
  return (
      <div className="mx-auto">
          <button className="rounded-lg hover:scale-105 p-5 uppercase bg-zinc-800 text-white">contact</button>
      </div>
  )
}