import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className="mx-auto max-w-4xl">
      <h2 className="text-center text-4xl">Ross Ford&apos;s Portfolio</h2>
      </div>
    </main>
  )
}
