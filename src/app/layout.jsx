import './globals.css'
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <header>
          <h1>Logo</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
