"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

const headerLinks = [
  { label: "Liệu Trình", href: "#fox-swat" },
  { label: "Ưu Đãi", href: "#booking" },
  { label: "FAQ", href: "#faq" },
]

export function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href
    return isHomePage ? href : `/${href}`
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full p-2 transition-all duration-300 ${isScrolled ? "border-b border-orange-100 bg-white/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-3 md:h-20 md:gap-6">
          <Link
            href="/"
            className="flex h-12 w-[88px] shrink-0 items-center md:h-20 md:w-[144px]"
            aria-label="Face Wash Fox"
          >
            <Image
              src="/logo_FWF/Logo tiêu chuẩn.png"
              alt="Face Wash Fox"
              width={144}
              height={144}
              className="h-full w-full object-contain"
              priority
            />
          </Link>
          <nav className="nav-shimmer hidden items-center gap-3 rounded-full border border-orange-300/80 bg-white/90 px-4 py-3 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.38)] backdrop-blur md:flex">
            <Link
              href="https://menu.facewashfox.com/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-transparent px-6 text-lg font-semibold text-slate-600 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
            >
              Fox Menu
            </Link>
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={resolveHref(link.href)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-transparent px-6 text-lg font-semibold text-slate-600 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              asChild
              variant="outline"
              className="nav-shimmer hidden h-14 rounded-full border-orange-300 bg-white/90 px-7 text-lg font-semibold text-slate-700 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.2)] hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 md:inline-flex"
            >
              <Link href="https://cuahang.facewashfox.com/" target="_blank" rel="noopener noreferrer">Chi Nhánh</Link>
            </Button>
            <Button asChild className="nav-shimmer h-11 rounded-full border border-orange-300 bg-orange-500 px-4 text-sm font-semibold text-white shadow-[0_18px_40px_-28px_rgba(234,88,12,0.45)] hover:bg-orange-600 md:h-14 md:px-10 md:text-lg">
              <Link href={resolveHref("#booking")}>
                <span className="md:hidden">Đặt Lịch</span>
                <span className="hidden md:inline">Đặt Lịch Ngay</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
