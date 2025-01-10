import { Poppins, Roboto, Lato , Quicksand } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "./components/res/theme-provider";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-quicksand'
})

export const metadata = {
  title: 'Lahiru Udawaththa',
  description: 'Personal portfolio of John Doe, a passionate software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${roboto.variable} ${lato.variable} ${quicksand.variable} font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoadingScreen />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 lg:ml-64 min-h-screen">
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}