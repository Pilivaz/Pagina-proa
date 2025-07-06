import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProA Corral de Bustos',
  description: 'Sitio escolar del ProA Corral de Bustos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
