export const metadata = {
  title: 'FairHire',
  description: 'AI Interview Assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
