import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext1'
import DarkModeToggle from '@/components/DarkModeToggle'
import Header from '@/components/Header'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='max-w-[1200px] mx-auto border p-5 min-h-screen relative'>
              <Header></Header>
              <DarkModeToggle></DarkModeToggle>
              {children}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
