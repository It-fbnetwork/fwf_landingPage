"use client"

import { useEffect, useState } from "react"
import { MapPin, Menu, X } from "lucide-react"
import Image from "next/image"
import { SectionLink as Link } from "@/components/SectionLink"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

const headerLinks = [
  { label: "Liệu Trình", href: "#fox-swat" },
  { label: "Ưu Đãi", href: "#booking" },
  { label: "FAQ", href: "#faq" },
]

export function HomeHeader() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href
    return isHomePage ? href : `/${href}`
  }

  useEffect(() => {
    if (!window.location.hash) return
    const target = document.getElementById(window.location.hash.slice(1))
    if (!target) return
    target.scrollIntoView()
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search)
  }, [pathname])

  useEffect(() => {
    let previousScrollY = Math.max(0, window.scrollY)
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)
      setIsScrolled(currentScrollY > 50)

      if (currentScrollY <= 50) {
        setIsHeaderHidden(false)
      } else if (Math.abs(currentScrollY - previousScrollY) < 6) {
        return
      } else {
        setIsHeaderHidden(currentScrollY > previousScrollY)
      }
      previousScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      onFocusCapture={() => setIsHeaderHidden(false)}
      className={`fixed top-0 z-50 w-full p-2 transition-all duration-300 motion-reduce:transition-none ${isHeaderHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"} ${isScrolled || isMenuOpen ? "border-b border-orange-100 bg-white/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-[1120px] px-3 sm:px-5 lg:px-6">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[72px] lg:gap-4">
          <Link
            href="/"
            className="flex h-12 w-[86px] shrink-0 items-center sm:h-14 sm:w-[100px]"
            aria-label="Face Wash Fox"
            onClick={closeMenu}
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
          <nav className="hidden min-w-0 flex-1 items-center justify-between gap-1 rounded-full border-2 border-[#f1d3ba] bg-white/95 p-1 lg:flex">
            <Link
              href="https://menu.facewashfox.com/"
              className="inline-flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-full px-4 text-base font-bold text-[#373b43] transition-colors hover:bg-[#fff0da] hover:text-[#e97828] focus-visible:bg-[#fff0da] xl:px-5"
            >
              Fox Menu
            </Link>
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={resolveHref(link.href)}
                onClick={() => setActiveSection(link.href)}
                aria-current={activeSection === link.href ? "location" : undefined}
                className={`inline-flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-full px-4 text-base font-bold text-[#373b43] transition-colors hover:bg-[#fff0da] hover:text-[#e97828] focus-visible:bg-[#fff0da] xl:px-5 ${activeSection === link.href ? "bg-[#fff0da] text-[#e97828]" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="hidden h-10 rounded-full border-2 border-[#f1d3ba] bg-white/95 px-5 text-base font-bold text-[#373b43] shadow-none hover:bg-[#fff0da] hover:text-[#e97828] lg:inline-flex"
            >
              <Link href="https://cuahang.facewashfox.com/" target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" />
                Chi Nhánh
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full border-2 border-[#ffb66b] bg-gradient-to-b from-[#ff9d24] to-[#ff8000] px-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 lg:px-5 lg:text-base"
            >
              <Link href={resolveHref("#booking")} onClick={closeMenu}>
                <span className="lg:hidden">Đặt Lịch</span>
                <span className="hidden lg:inline">Đặt Lịch Ngay</span>
              </Link>
            </Button>
            <button
              type="button"
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mx-3 mt-2 rounded-[24px] border-2 border-[#f1d3ba] bg-white/95 p-3 shadow-sm lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="https://menu.facewashfox.com/"
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              onClick={closeMenu}
            >
              Fox Menu
            </Link>
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={resolveHref(link.href)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://cuahang.facewashfox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              onClick={closeMenu}
            >
              Chi Nhánh
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
