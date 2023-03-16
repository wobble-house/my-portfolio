import Footer from './footer'
import Name from '@/components/name'
import './globals.css'
import AuthContext from '@/components/next-auth-provider'
import MyNavbar from '@/components/navbar'
import LoginButton from '@/components/login'

export const runtime = 'nodejs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head />
      <body>
      <AuthContext>
        <main className="md:flex flex-row max-w-7xl mx-auto gap-5">
        <MyNavbar><LoginButton/></MyNavbar>
          {children}</main>
        <Footer/>
        </AuthContext>
        </body>
    </html>
  )
}
