import './globals.css'

function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <main>
          <body>
            {children}
          </body>
        </main>
      </head>
    </html> 
  )
}

export default RootLayout
