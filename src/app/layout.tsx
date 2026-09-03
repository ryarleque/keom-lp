import type { Metadata, Viewport } from "next";
import { Saira_Condensed, Martian_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const saira = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
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
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${saira.variable} ${martian.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
