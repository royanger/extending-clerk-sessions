import { ClerkProvider } from '@clerk/nextjs'
import './styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from 'ui'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Extending Sessions',
   description: 'An example app to show off extending Clerk sessions.',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={inter.className}>
               <Header label="NextJS" />
               <main className="w-full flex flex-row justify-center">
                  <div className="container flex flex-row py-4">
                     {children}

                  </div>
               </main>
            </body>
         </html>
      </ClerkProvider>
   )
}
