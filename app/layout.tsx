import type { Metadata } from 'next'
import { Open_Sans, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
})

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'Fashion & Lifestyle Society',
  description: 'Welcome to the Fashion and Lifestyle Society website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${bebasNeue.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Fashion & Lifestyle Society. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

