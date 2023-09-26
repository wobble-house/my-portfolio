import 'server-only'
import Footer from './footer'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
      <link rel="icon" href="/favicon/favicon.ico" />
<body className="min-h-screen mx-auto">
        <Footer color={'white'}/>
            <main className="flex flex-col mx-auto gap-5 justify-evenly align-top">
                  {children}
            </main>
        </body>
    </html>
  )
}
