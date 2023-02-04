import './globals.css'
import { Montserrat } from '@next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <header>
          <div className="container">
            <div className="flex justify-between items-center">
              <h1 className='text-xl'>NextJS Fullstack</h1>
              <nav>
                <ul className='flex items-center space-x-4'>
                  {[
                    {
                      label: "Home",
                      path: "/"
                    },
                    {
                      label: "Favorites",
                      path: "/favorites"
                    },
                    {
                      label: "About",
                      path: "/about"
                    }
                  ].map(item => (
                    <li key={item.label}>
                      <Link href={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
