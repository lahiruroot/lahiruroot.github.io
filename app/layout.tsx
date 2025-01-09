import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "./components/res/theme-provider";
import Header from "./components/Hader";
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Im Lahiru',
  description: 'Personal portfolio of Lahiru Udawaththa, a passionate software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}