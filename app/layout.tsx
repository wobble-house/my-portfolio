import Footer from './footer'
import './globals.css'
import AuthContext from '../components/next-auth-provider'
import MyNavbar from '../components/navbar'
import MyModal from '../components/modal'
import LoginButton from '../components/login'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fas)

export const runtime = 'nodejs'

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
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
      <AuthContext>
        <main className="md:flex flex-row max-w-7xl mx-auto gap-5 justify-evenly pb-32 align-top">
        <MyNavbar><LoginButton/></MyNavbar>
          {children}</main>
        <Footer/>
        <MyModal/>
        </AuthContext>
        </body>
    </html>
  )
}
