import type { Metadata } from 'next'
import { Open_Sans, Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'
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

const didot = localFont({
  src: '../public/fonts/Didot.otf',
  variable: '--font-didot',
  display: 'swap',
})

const didotTitle = localFont({
  src: '../public/fonts/Didot Title.otf',
  variable: '--font-didot-title',
  display: 'swap',
})

const didotItalic = localFont({
  src: '../public/fonts/Didot Italic.otf',
  variable: '--font-didot-italic',
  display: 'swap',
})

const helveticaLight = localFont({
  src: '../public/fonts/helvetica-light-587ebe5a59211.ttf',
  variable: '--font-helvetica-light',
  display: 'swap',
})

const helveticaBold = localFont({
  src: '../public/fonts/Helvetica-Bold.ttf',
  variable: '--font-helvetica-bold',
  display: 'swap',
})

const helveticaBoldOblique = localFont({
  src: '../public/fonts/Helvetica-BoldOblique.ttf',
  variable: '--font-helvetica-bold-oblique',
  display: 'swap',
})

const helveticaCompressed = localFont({
  src: '../public/fonts/helvetica-compressed.otf',
  variable: '--font-helvetica-compressed',
  display: 'swap',
})

const helveticaOblique = localFont({
  src: '../public/fonts/Helvetica-Oblique.ttf',
  variable: '--font-helvetica-oblique',
  display: 'swap',
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
      <body className={`${openSans.variable} ${bebasNeue.variable} ${didot.variable} ${didotTitle.variable} ${didotItalic.variable} ${helveticaLight.variable} ${helveticaBold.variable} ${helveticaBoldOblique.variable} ${helveticaCompressed.variable} ${helveticaOblique.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-black text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2">
              <p className="text-white">
                Anthony Lam · Sarah Schiang · Jonus Neuman · Natalie Wang
              </p>
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

