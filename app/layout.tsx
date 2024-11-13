import type { Metadata } from "next";
import { Almarai } from "next/font/google"; // Importa a fonte do Google Fonts
import "./globals.css";

const almarai = Almarai({
  weight: ["400", "700"], // Define os pesos que você deseja carregar
  subsets: ["latin"], // Subconjuntos da fonte
  variable: "--font-almarai", // Variável CSS para referenciar a fonte
});

export const metadata: Metadata = {
  title: "Same Fitness ™",
  description: "Feito pra os mesmo corredores | Loja de Afiliados ™",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} antialiased`}>{children}</body>
    </html>
  );
}
