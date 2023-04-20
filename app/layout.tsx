import { GAScript, GABody } from './consent'
import { CookieAccept } from '../components/cookie-consent'
import { Animation } from '../components/animation'
import Footer from './footer'
import './globals.css'
import MyModal from '../components/modal'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { cookies } from 'next/headers';
import { AuthContextProvider } from '../utils/context/AuthContext'
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
  const cookieStore = cookies();
  const data = cookieStore.get('GA-COOKIES');
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
<body className="min-h-screen mx-auto">
      <GABody/>
      <AuthContextProvider>
          <Animation mode={'wait'} initial={false}>
            <main className="flex flex-col mx-auto gap-5 justify-evenly align-top">
              <CookieAccept data={data}/>
                <MyModal/>
                  {children}
            </main>
            </Animation>
          <Footer color={'white'}/>
        </AuthContextProvider>
        </body>
    </html>
  )
}
