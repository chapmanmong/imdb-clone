import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import SearchBox from '@/components/SearchBox'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB... but better',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        <Navbar />
        <SearchBox />
        {children}
        </Providers>
        </body>
    </html>
  )
}
