import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

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

const SITE = "https://keom.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "KEOM · Keep Every Opportunity Moving",
  description:
    "KEOM detecta las oportunidades comerciales que se están estancando y las mueve hacia la próxima mejor acción. Menos ventas perdidas por falta de respuesta o seguimiento.",
  applicationName: "KEOM",
  openGraph: {
    title: "KEOM · Keep Every Opportunity Moving",
    description:
      "Encuentra las oportunidades que estás por perder y muévelas hacia la próxima mejor acción.",
    type: "website",
    locale: "es_PE",
    siteName: "KEOM",
  },
  twitter: {
    card: "summary_large_image",
    title: "KEOM · Keep Every Opportunity Moving",
    description:
      "Encuentra las oportunidades que estás por perder y muévelas hacia la próxima mejor acción.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f16",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${martian.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
