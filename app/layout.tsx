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
    <Image src={'/images/background.png'} alt='main background image' fill style={{objectFit: 'cover'}} className={`top-0 left-0 z-0  `} priority/>
      {children}
    <Footer/>
  </body>
</html>
  )
}
