import { Inter } from 'next/font/google'
import Header from '@/components/Header'
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
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* Searchbar */}
        {children}
        </body>
    </html>
  )
}
