import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { BookingSection } from "@/components/BookingSection"
import { FaqSection } from "@/components/FaqSection"
import { FoxSwatSection } from "@/components/FoxSwatSection"
import { HomeHeader } from "@/components/HomeHeader"
import { WhyChooseSection } from "@/components/WhyChooseSection"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div id="top">
      <HomeHeader />
      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.46),transparent_30%),linear-gradient(180deg,#f8fdff_0%,#effaff_54%,#ffffff_100%)]">
        <div className="container relative z-10 mx-auto px-4 pb-16 pt-24 md:pt-32">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mx-auto mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-sky-200 bg-white/90 px-4 py-3 text-[11px] font-bold text-sky-500 shadow-[0_20px_40px_-28px_rgba(14,165,233,0.45)] backdrop-blur-sm sm:px-6 sm:text-sm md:px-8 md:py-4 md:text-base">
              <span className="hero-status-dot h-2.5 w-2.5 rounded-full bg-sky-500 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="truncate">SENKA FACIAL COMBO</span>
            </p>
            <h1 className="mb-6 text-2xl font-bold text-[#0097b2] sm:text-3xl md:text-4xl lg:text-3xl">
              Sạch sâu - Cấp ẩm - Dịu nhẹ <br />
              trong một liệu trình 40 phút.
            </h1>
            <p className="mb-8 text-base leading-8 text-stone-700 sm:text-[18px]">
              <span className="font-semibold text-sky-500">Giá trải nghiệm lần đầu 399.000</span> kèm quà tặng Senka tại 12 chi nhánh <span className="font-semibold text-orange-500">Face Wash Fox</span>.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-h-12 rounded-[32px] bg-sky-500 px-6 font-bold text-white hover:bg-sky-600 sm:px-8">
                <Link href="#fox-swat">
                  Khám phá liệu trình
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild type="button" size="lg" variant="outline" className="min-h-12 rounded-[32px] border-2 border-stone-200 bg-white px-6 font-bold text-slate-800 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.22)] hover:border-sky-500 hover:bg-white hover:text-sky-500 sm:px-8">
                <Link href="#booking">Đặt lịch ngay</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(340px,560px)_minmax(0,1fr)] lg:gap-16">
            <div className="relative order-2 mx-auto w-full max-w-[520px] lg:order-1">
              <div className="rounded-[38px] bg-[linear-gradient(180deg,#7dd3fc_0%,#38bdf8_100%)] p-3 shadow-[0_28px_70px_-30px_rgba(14,165,233,0.8)] sm:p-4 md:rounded-[42px] md:p-5">
                <div className="rounded-[30px] bg-white p-2 md:rounded-[34px] md:p-3">
                  <div className="relative mx-auto aspect-[2481/3508] w-full overflow-hidden rounded-[24px] bg-sky-100 md:rounded-[28px]">
                    <Image
                      src="/Senka/Liệu trình Senka-01.png"
                      alt="Senka Facial Combo poster"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-[38px] bg-[linear-gradient(180deg,#ff8a1d_0%,#ff6a00_100%)] p-3 shadow-[0_28px_70px_-30px_rgba(249,115,22,0.55)] sm:p-4 md:rounded-[42px] md:p-5">
                <div className="rounded-[30px] bg-white p-2 md:rounded-[34px] md:p-3">
                  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[24px] bg-sky-100 md:rounded-[28px]">
                    <Image
                      src="/Senka/Liệu trình Senka-05.png"
                      alt="Ưu đãi Senka Facial Combo"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 620px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[20px] border border-sky-100 bg-white/92 p-4 text-center shadow-[0_18px_45px_-34px_rgba(14,165,233,0.35)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">Thời lượng</p>
                  <p className="mt-2 text-3xl font-black text-sky-600">40p</p>
                </div>
                <div className="rounded-[20px] border border-sky-100 bg-white/92 p-4 text-center shadow-[0_18px_45px_-34px_rgba(14,165,233,0.35)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">Ưu đãi</p>
                  <p className="mt-2 text-3xl font-black text-sky-600">399K</p>
                </div>
                <div className="rounded-[20px] border border-sky-100 bg-white/92 p-4 text-center shadow-[0_18px_45px_-34px_rgba(14,165,233,0.35)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">Quà tặng</p>
                  <p className="mt-2 text-3xl font-black text-sky-600">50g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 text-center">
          <ChevronDown className="mx-auto h-6 w-6 animate-bounce text-sky-500" />
        </div>
      </section>

      <FoxSwatSection />
      <WhyChooseSection />

      <BookingSection />
      <FaqSection />

      <footer className="relative overflow-hidden bg-[#ff8c00] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,102,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,128,0,0.35),transparent_30%)]" />
        <div className="relative mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-6 md:px-10 md:py-10 xl:px-16">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:gap-8">
            <div className="max-w-4xl">
              <h2 className="max-w-4xl text-xl font-extrabold leading-tight md:text-3xl">
                Senka Facial Combo tại Face Wash Fox
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-orange-50/95 md:text-base md:leading-7">
                Sạch sâu, cấp ẩm và dịu nhẹ cho mọi loại da tại 12 chi nhánh Senka Pick.
              </p>
              <p className="mt-2 text-base font-black tracking-[0.08em] text-white md:text-lg">
                Hotline: 0889 866 666
              </p>
            </div>

            <div className="flex flex-col gap-2.5 lg:items-end">
              <Link
                href="#booking"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_22px_45px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:min-w-[240px] sm:w-auto sm:px-6 sm:text-base"
              >
                ĐẶT LỊCH NGAY
              </Link>
              <Link
                href="https://cuahang.facewashfox.com/"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_22px_45px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:min-w-[240px] sm:w-auto sm:px-6 sm:text-base"
              >
                12 CHI NHÁNH ÁP DỤNG
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/logo_FWF/Logo trên nền màu (1).png"
              alt="Face Wash Fox"
              width={180}
              height={96}
              className="w-[140px] sm:w-[160px]"
            />
            <p className="max-w-xl text-xs font-semibold leading-5 text-white/80 sm:text-sm sm:leading-6">
              Số lượng quà tặng có hạn. Vui lòng liên hệ nhân viên để kiểm tra tình trạng quà tặng trước khi đăng ký.
            </p>
          </div>

          <div className="mt-5 border-t border-white/15 pt-4 text-xs font-medium text-orange-100/90 sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Face Wash Fox. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-3 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-4 sm:gap-3 md:bottom-8 md:right-6">
        <Link
          href="tel:0889866666"
          aria-label="Gọi điện"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:h-14 sm:w-14"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </Link>
        <Link
          href="https://zalo.me/352472932154112250"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin"
          className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:h-14 sm:w-14"
        >
          <span className="text-sm font-black">Zalo</span>
        </Link>
        <Link
          href="#top"
          aria-label="Lên đầu trang"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:h-14 sm:w-14"
        >
          <ChevronUp />
        </Link>
      </div>
    </div>
  )
}
