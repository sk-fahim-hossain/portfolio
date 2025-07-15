import type { Metadata } from "next";
import { Inter, Homemade_Apple } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { navItems } from "@/Data";
import { FloatingNav } from "@/components/Navbar";
import Script from 'next/script'





const inter = Inter({ subsets: ["latin"] });
const cadaville = Homemade_Apple({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-cadaville'
});


export const metadata: Metadata = {
  title: "Fahim Hossain",
  description: "Modern and Minimilistic Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}, ${cadaville.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems}></FloatingNav>
          {children}
        </ThemeProvider>

        <Script id="tawkto-script" strategy="afterInteractive">
          {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/686ad4791b3b10191511f779/1ivgkrv21';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
        </Script>

      </body>
    </html>
  );
}
