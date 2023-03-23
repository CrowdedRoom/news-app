import Script from "next/script";
import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";

export const metadata = {
  title: "Live News...Now!",
  description: "Latest news from around the world",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Script></Script>
      <Providers>
        <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-500'>
          <Header />
          <div className='max-w-6xl mx-auto'>{children}</div>
        </body>
      </Providers>
    </html>
  );
}