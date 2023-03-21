import Video from "../components/video"

export const metadata = {
  title: 'Home',
  description: 'Ross Alan Ford is a Full-Stack Developer with a background in Operations Management',
}

export default function Home() {
  return (
    <>
      <div className="max-w-3xl py-20 mx-auto">

        <Video VideoURL="https://www.youtube.com/watch?v=gKQOXYB2cd8"/>

      </div>
    </>
  )
}
