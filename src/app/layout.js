import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "./(components)/header";
import ReduxProvider from "./(providers)/reduxprovider";

const inter = Inter({ subsets: ["latin"] });

const pt_sans = PT_Sans({
  weight :  ["400", "700"],
  subsets : ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
  style : ["normal", "italic"],
  preload : true,
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pt_sans.className} overflow-x-hidden`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
