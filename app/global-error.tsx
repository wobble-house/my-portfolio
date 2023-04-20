'use client';
import Footer from './footer'
import './globals.css'
import { ThemeToggle } from '../components/theme-switcher'
import MyNavbar from '../components/navbar'
import ChatModal from '../components/modal'
import LoginButton from '../components/login'

export const metadata = {
    title: 'Error',
    description: 'Oops! If you are seeing this, Something Went Wrong!',
  }

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
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
<body className="min-h-screen">
            <main className="md:flex flex-row max-w-7xl mx-auto gap-5 justify-evenly align-top">
                <MyNavbar></MyNavbar>
        <h2 className="text-center">Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>

        </main>

<LoginButton/>

<div className="absolute top-1 left-8 md:invisible">
  <ThemeToggle mobile/>
</div>
<ChatModal/>
<Footer color={'white'}/>
</body>
</html>
)
}
