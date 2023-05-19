
import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/navbar'
import Carousel from '@/components/carousel'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
      <Navbar/>
      <Carousel/>
      {children}
      <Footer/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  )
}
