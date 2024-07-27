import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Facebook from "./Facebook";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Branding Emocion",
  description:
    "¡Optimiza tu presencia en línea con nuestra empresa especializada en diseño web y marketing digital! Brindamos soluciones personalizadas para empresas que desean destacarse en la era digital. ¡Contáctanos hoy mismo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="AW-16654758628" />
      <Facebook />
    </html>
  );
}
