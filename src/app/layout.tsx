import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Ting Global-Eco-Citizen</title>
        <meta name="description" content="Ting Global Academy - AI-Enhanced Leadership Training" />
        <link rel="icon" href="/images/ting-global-logo.png" type="image/png" />

      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar className="relative z-50" />
        <main className="flex-grow pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
