import "bootstrap/scss/bootstrap.scss";
import './globals.scss'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PUOK',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}