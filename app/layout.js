import { Inter } from "next/font/google";
import "./globals.css";

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
    </html>
  );
}
