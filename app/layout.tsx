import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "OMNIMPRESA | Servizi integrati per aziende", description: "Un solo interlocutore per finanza, energia, tecnologia, digitale, sicurezza, academy e mobility." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="it"><body>{children}</body></html>; }
