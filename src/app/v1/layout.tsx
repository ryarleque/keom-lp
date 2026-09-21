import type { Metadata } from "next";
import { Archivo, Martian_Mono, Hanken_Grotesk } from "next/font/google";

// V1 se conserva solo para comparar contra V2. Eliminar esta ruta antes de hacer merge.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KEOM V1 (referencia)",
  robots: { index: false, follow: false },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${archivo.variable} ${martian.variable} ${hanken.variable} bg-bg font-body text-ink`}
    >
      {children}
    </div>
  );
}
