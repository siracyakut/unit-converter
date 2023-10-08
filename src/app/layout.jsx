import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/store/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
