import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OMNIMPRESA | Servizi integrati per aziende",
  description:
    "Banca e POS, energia, telefonia, siti web e automazioni AI, sicurezza e formazione finanziata. Sei divisioni, un solo interlocutore.",
  icons: { icon: "/assets/omnimpresa-mark-transparent.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
