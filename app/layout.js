import './globals.css'

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
