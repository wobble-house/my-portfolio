import 'server-only'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GeistSans, GeistMono } from "geist/font";
import Background from '../components/background'
import Footer from '../components/footer'
import Logo from '../components/logo'
config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata = {
  title: {
    default: 'Ross Alan Ford',
    template: '%s | Ross Alan Ford',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} style={{scrollBehavior:'smooth'}}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/logos/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/logos/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/logos/favicon-16x16.png"
      />
      <link rel="icon" type="image/png" href="/logos/favicon.png"/>
<body className="min-h-content mx-auto">
  <div className='flex mx-auto max-w-5xl'>

        
                  {children}
<Background/>
                  </div>
                  <Footer/>
        </body>
    </html>
  )
}
