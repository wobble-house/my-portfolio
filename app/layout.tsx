import Footer from './footer'
import './globals.css'
import MyNavbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-zinc-50 dark:bg-zinc-900 text-black dark:text-zinc-50">
        <MyNavbar/>
        {children}
        <Footer/>
        </body>
        
    </html>
  )
}
