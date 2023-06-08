import '../styles/globals.css'
import { Inter } from 'next/font/google'

// This represent all static content of the page

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo NEXT',
  description: 'Todo next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
