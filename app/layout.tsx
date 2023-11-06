import './globals.css'
import { GeistSans, GeistMono } from "geist/font";
import Footer from '../components/footer'
import Image from 'next/image'

export const metadata = {
  title: {
    default: 'Ross Alan Ford',
    template: '%s | Ross Alan Ford',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} style={{scrollBehavior:'smooth'}}>
<body className="relative max-w-screen overflow-y-auto no-scrollbar overscroll-auto pb-20">
  <Image src={'/images/background.png'} alt='main background image' fill sizes="100vw" style={{objectFit: 'cover'}} className={`z-0`}/>
          {children}
          <Footer/>
        </body>
    </html>
  )
}
