import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/store/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BaseSize from "@/components/base-size";
import Tables from "@/components/tables";
import About from "@/components/about";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "PX to REM converter",
  description: "Convert PX to REM, instant results, clear and easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <div className="flex flex-1 flex-col items-center gap-14 justify-center">
            {children}
            <BaseSize />
            <Tables />
            <About />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
