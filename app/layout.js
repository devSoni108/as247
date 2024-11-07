import './globals.css'

export const metadata = {
  title: 'AS247 Security Solutions',
  description: 'Your safety, our solutions',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
