import type { Metadata } from "next";
import { Inter, Homemade_Apple} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const cadaville = Homemade_Apple({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-cadaville'
});


export const metadata: Metadata = {
  title: "Fahim Hossain",
  description: "Modern and Minimilistic Frontend Developer",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
