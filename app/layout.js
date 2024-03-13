import { Inter } from  'next/font/google'
import './ui/globals.css'
import 'tailwindcss/tailwind.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  tittle: 'INCO Academy',
  description: 'Academy'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
