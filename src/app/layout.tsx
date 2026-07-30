import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "FWF - Senka Facial Combo",
  description:
    "Senka Facial Combo tại Face Wash Fox: liệu trình 40 phút sạch sâu, cấp ẩm và dịu nhẹ với 11 bước chuẩn hóa, kết hợp Ultrasonic Deep Moist 3X HA. Giá trải nghiệm lần đầu chỉ 399.000 (niêm yết 749.000), tặng sữa rửa mặt Senka 50g. Phù hợp mọi loại da, kể cả da nhạy cảm; áp dụng tại 12 chi nhánh Senka Pick ở TP.HCM và Hà Nội. Đặt lịch online ngay.",
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
