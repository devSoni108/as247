import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AS247 Security Solutions',
  description: 'Your safety, our solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        {children}
      </body>
    </html>
    
  )
}
