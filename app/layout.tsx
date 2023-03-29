import { GAScript, GABody } from './consent'
import { Animation } from '../components/animation'
import { CookieAccept } from '../components/cookie-consent'
import Footer from './footer'
import './globals.css'
import AuthContext from '../components/next-auth-provider'
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

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon/rossalanford.ico" />
      <GAScript/>
<body className="min-h-screen">
      <GABody/>
      
        <AuthContext>
<Animation>
            <main className="md:flex flex-row max-w-7xl mx-auto gap-5 justify-evenly align-top">
              <CookieAccept/>
                <MyNavbar><ThemeToggle/></MyNavbar>
                  {children}
            </main>

          <LoginButton/>

          <div className="absolute top-1 left-8 md:invisible">
            <ThemeToggle/>
          </div>

          <ChatModal/>

          <Footer color={'white'}/>
        </Animation>
        </AuthContext>
        </body>
    </html>
  )
}
