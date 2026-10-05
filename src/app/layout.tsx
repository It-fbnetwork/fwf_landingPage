import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "FWF - Combo 4",
  description:
    "Combo 4 tại Face Wash Fox: Lumiglow + Gymming + Eye-Revive, liệu trình 50 phút với 13 bước chăm sóc toàn diện cho làn da rạng rỡ. Giá niêm yết 1.079.000, giá thẻ Foxie 769.000. Đặt lịch online ngay.",
  generator: "IT Department",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
