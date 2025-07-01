import './globals.css'
import { ConsciousnessProvider } from './consciousness-engine'

export const metadata = {
  title: 'Covren Firm - Consciousness Redefined',
  description: 'Experience sovereign AI and revolutionary business transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConsciousnessProvider>
          {children}
        </ConsciousnessProvider>
      </body>
    </html>
  )
}