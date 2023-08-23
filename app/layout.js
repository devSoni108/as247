import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AS247 Security Solutions',
  description: 'Your safety, our solutions',
}

function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <main>
        <body>
          {children}
        </body>
      </main>
    </html> 
  )
}

export default RootLayout
