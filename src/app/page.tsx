import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react"
import Image from "next/image"
import { SectionLink as Link } from "@/components/SectionLink"

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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(210,238,230,0.45),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(190,229,232,0.22),transparent_38%),linear-gradient(180deg,#e8f5f0_0%,#f3faf7_48%,#ffffff_100%)] md:min-h-screen">
        <div className="container relative z-10 mx-auto px-4 pb-12 pt-20 sm:pb-16 sm:pt-24 md:pt-32">
          <div className="mx-auto mb-8 max-w-6xl text-center [container-type:inline-size] sm:mb-12 md:mb-16">
            <p className="mx-auto mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white/95 px-3.5 py-2.5 text-[10px] font-bold text-orange-500 shadow-[0_20px_40px_-28px_rgba(255,128,0,0.48)] backdrop-blur-sm sm:mb-6 sm:gap-3 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base">
              <span className="hero-status-dot h-2 w-2 rounded-full bg-orange-500 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="truncate">COMBO 4</span>
            </p>
            <h1 className="mb-4 whitespace-nowrap text-[min(4.8cqw,3.75rem)] font-black leading-tight tracking-tight text-[#ff7a00] sm:mb-6">
              Lumiglow + Gymming + Eye-Revive
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-sm font-semibold leading-7 text-stone-700 sm:mb-8 sm:text-base sm:leading-8 md:text-[20px]">
              Giải pháp toàn diện cho làn da rạng rỡ trong <span className="font-black text-[#10bcc0]">50 phút</span>. Giá niêm yết <span className="font-black text-stone-500">1079K</span>, giá thẻ Foxie <span className="font-black text-orange-500">399K</span>.
            </p>
            
          </div>

          <div className="mx-auto mb-8 max-w-[280px] sm:mb-10 sm:max-w-[320px] md:mb-12 md:max-w-[360px]">
            <div className="rounded-[28px] bg-[linear-gradient(180deg,#16c9c9_0%,#08aeb5_100%)] p-2.5 shadow-[0_28px_70px_-30px_rgba(8,174,181,0.8)] sm:rounded-[38px] sm:p-4 md:rounded-[42px] md:p-5">
              <div className="rounded-[22px] bg-white p-1.5 sm:rounded-[30px] sm:p-2 md:rounded-[34px] md:p-3">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[18px] bg-[#e9fbfb] sm:rounded-[24px] md:rounded-[28px]">
                  <video
                    src="/combo 4/e677ff14ef966a450bd66a977087ffffe00a27d9.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 mb-10">
              <Button asChild size="lg" className="min-h-11 rounded-[28px] bg-[#10bcc0] px-5 text-sm font-bold text-white hover:bg-[#08aeb5] sm:min-h-12 sm:rounded-[32px] sm:px-8 sm:text-base">
                <Link href="#fox-swat">
                  Khám phá liệu trình
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild type="button" size="lg" variant="outline" className="min-h-11 rounded-[28px] border-2 border-orange-200 bg-white px-5 text-sm font-bold text-slate-800 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.22)] hover:border-orange-500 hover:bg-white hover:text-orange-500 sm:min-h-12 sm:rounded-[32px] sm:px-8 sm:text-base">
                <Link href="#booking">Đặt lịch ngay</Link>
              </Button>
            </div>

          <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-10 lg:grid-cols-[minmax(340px,560px)_minmax(0,1fr)] lg:gap-16">
            <div className="relative order-2 mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:order-1">
              <div className="rounded-[28px] bg-[linear-gradient(180deg,#16c9c9_0%,#08aeb5_100%)] p-2.5 shadow-[0_28px_70px_-30px_rgba(8,174,181,0.8)] sm:rounded-[38px] sm:p-4 md:rounded-[42px] md:p-5">
                <div className="rounded-[22px] bg-white p-1.5 sm:rounded-[30px] sm:p-2 md:rounded-[34px] md:p-3">
                  <div className="relative mx-auto aspect-[2481/3508] w-full overflow-hidden rounded-[18px] bg-[#e9fbfb] sm:rounded-[24px] md:rounded-[28px]">
                    <Image
                      src="/399/1027 (2).png"
                      alt="Combo 4 Lumiglow Gymming Eye-Revive poster"
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
              <div className="mx-auto max-w-[360px] rounded-[28px] bg-[linear-gradient(180deg,#ff8a1d_0%,#ff6a00_100%)] p-2.5 shadow-[0_28px_70px_-30px_rgba(249,115,22,0.55)] sm:max-w-none sm:rounded-[38px] sm:p-4 md:rounded-[42px] md:p-5">
                <div className="rounded-[22px] bg-white p-1.5 sm:rounded-[30px] sm:p-2 md:rounded-[34px] md:p-3">
                  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[18px] bg-[#e9fbfb] sm:rounded-[24px] md:rounded-[28px]">
                    <Image
                      src="/399/RF.png"
                      alt="Ưu đãi Combo 4"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 620px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                <div className="rounded-[14px] border border-teal-100 bg-white/92 p-2.5 text-center shadow-[0_18px_45px_-34px_rgba(8,174,181,0.35)] sm:rounded-[20px] sm:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#10bcc0] sm:text-xs sm:tracking-[0.16em]">Thời lượng</p>
                  <p className="mt-1 text-xl font-black text-[#10bcc0] sm:mt-2 sm:text-3xl">50p</p>
                </div>
                <div className="rounded-[14px] border border-teal-100 bg-white/92 p-2.5 text-center shadow-[0_18px_45px_-34px_rgba(8,174,181,0.35)] sm:rounded-[20px] sm:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#10bcc0] sm:text-xs sm:tracking-[0.16em]">Giá Foxie</p>
                  <p className="mt-1 text-xl font-black text-orange-500 sm:mt-2 sm:text-3xl">399K</p>
                </div>
                <div className="rounded-[14px] border border-teal-100 bg-white/92 p-2.5 text-center shadow-[0_18px_45px_-34px_rgba(8,174,181,0.35)] sm:rounded-[20px] sm:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#10bcc0] sm:text-xs sm:tracking-[0.16em]">Số bước</p>
                  <p className="mt-1 text-xl font-black text-[#10bcc0] sm:mt-2 sm:text-3xl">13</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 hidden pb-8 text-center md:block">
          <ChevronDown className="mx-auto h-6 w-6 animate-bounce text-orange-500" />
        </div>
      </section>

      <FoxSwatSection />
      <WhyChooseSection />

      <BookingSection />
      <FaqSection />

      <footer className="relative overflow-hidden bg-[#ff8c00] pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white sm:pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,102,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,128,0,0.35),transparent_30%)]" />
        <div className="relative mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-6 md:px-10 md:py-10 xl:px-16">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:gap-8">
            <div className="max-w-4xl">
              <h2 className="max-w-4xl text-xl font-extrabold leading-tight md:text-xl">
                Combo 4: Lumiglow + Gymming + Eye-revive <br></br>giải pháp toàn diện cho làn da rạng rỡ trong 50 phút
              </h2>
            
            </div>

            <div className="flex flex-col gap-2.5 lg:items-end">
              <Link
                href="#booking"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#10bcc0] px-5 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_22px_45px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08aeb5] sm:min-w-[240px] sm:w-auto sm:px-6 sm:text-base"
              >
                ĐẶT LỊCH NGAY
              </Link>
              <Link
                href="https://cuahang.facewashfox.com/"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#10bcc0] px-5 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_22px_45px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08aeb5] sm:min-w-[240px] sm:w-auto sm:px-6 sm:text-base"
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
              Số lượng đăng ký trải nghiệm có hạn. Vui lòng liên hệ nhân viên để kiểm tra tình trạng quà tặng trước khi đăng ký.
            </p>
          </div>

          <div className="mt-5 border-t border-white/15 pt-4 text-xs font-medium text-orange-100/90 sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Face Wash Fox. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-4 sm:gap-3 md:bottom-8 md:right-6">
        <Link
          href="tel:0889866666"
          aria-label="Gọi điện"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:h-14 sm:w-14"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </Link>
        <Link
          href="https://zalo.me/352472932154112250"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin Zalo"
          className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 sm:h-14 sm:w-14"
        >
          <img
            src="https://i.pinimg.com/736x/1c/e6/41/1ce64129a8c06a58fb2bbc79e70d5e0d.jpg"
            alt="Zalo"
            className="h-full w-full rounded-full object-cover"
          />
        </Link>
        <Link
          href="#top"
          aria-label="Lên đầu trang"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_35px_-18px_rgba(234,88,12,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:h-14 sm:w-14"
        >
          <ChevronUp className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
