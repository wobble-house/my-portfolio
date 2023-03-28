
import Footer from './footer'
import './globals.css'
import AuthContext from '../components/next-auth-provider'
import { CookieAccept } from '../components/cookie-consent'
import ThemeToggle from '../components/theme-switcher'
import MyNavbar from '../components/navbar'
import ChatModal from '../components/modal'
import LoginButton from '../components/login'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fas, faFontAwesome)

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
      <body className="min-h-screen">
      <AuthContext>
        <main className="md:flex flex-row max-w-7xl mx-auto gap-5 justify-evenly align-top">
          <CookieAccept/>
        <MyNavbar><ThemeToggle/></MyNavbar>
          {children}
          </main>
        <Footer color={'white'}/>
        <ChatModal/>
        <div className="absolute top-1 left-8 md:invisible">
          <ThemeToggle/>
        </div>
        <LoginButton/>
        </AuthContext>
        </body>
    </html>
  )
}
