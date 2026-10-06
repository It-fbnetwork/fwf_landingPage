"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCheck, ChevronDown, Gem, HandCoins, Store } from "lucide-react"
import Image from "next/image"

const showcaseImages = [
  "/399/1027 (2).png",
  "/399/RF.png",
  "/399/Ultrasonic.png",
  "/399/Cold handle.png",
]

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const imageTrack = useMemo(() => [...showcaseImages, ...showcaseImages], [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = current + 1
        return next > showcaseImages.length ? current : next
      })
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeIndex !== showcaseImages.length) return

    const resetTimer = window.setTimeout(() => {
      setIsAnimating(false)
      setActiveIndex(0)

      window.setTimeout(() => {
        setIsAnimating(true)
      }, 80)
    }, 700)

    return () => window.clearTimeout(resetTimer)
  }, [activeIndex])

  return (
    <section
      id="services"
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#e9fbfb_52%,#ffffff_100%)] py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:gap-10 md:px-8 xl:grid-cols-[minmax(0,0.94fr)_460px] xl:items-start xl:gap-12">
        <div className="max-w-[820px]">
          <div className="mb-6 max-w-2xl text-center sm:mb-8 lg:mb-10 lg:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#10bcc0] sm:text-sm md:text-base">
              Khám phá
            </p>
            <h2 className="text-xl font-bold leading-tight text-[#ff7a00] sm:text-2xl md:text-3xl lg:text-4xl">
              Vì sao Combo 4 là giải pháp <br className="hidden lg:block" />  toàn diện cho làn da rạng rỡ
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-5">
            {industries.map((industry) => (
              <details
                key={industry.name}
                className={`group rounded-[22px] bg-[linear-gradient(180deg,rgba(255,248,222,0.96),rgba(233,251,251,0.94))] p-2 shadow-[0_18px_45px_-30px_rgba(8,174,181,0.24)] transition-all duration-300 open:bg-[linear-gradient(180deg,rgba(255,248,222,0.98),rgba(211,247,247,0.84))] open:shadow-[0_24px_55px_-28px_rgba(8,174,181,0.3)] sm:rounded-[26px] sm:p-2.5 ${industry.layoutClass}`}
              >
                <summary className="flex min-h-[120px] cursor-pointer list-none flex-col justify-between overflow-visible rounded-[18px] border border-teal-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(233,251,251,0.55))] p-4 marker:hidden sm:min-h-[164px] sm:rounded-[22px] sm:p-5">
                  <div className="flex items-start justify-between gap-3 overflow-visible sm:gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-visible rounded-[14px] bg-[linear-gradient(180deg,#ff8a1d_0%,#ff6a00_100%)] text-white shadow-[0_16px_35px_-20px_rgba(255,128,0,0.8)] sm:h-16 sm:w-16 sm:rounded-[18px]">
                      <div className="absolute inset-0 rounded-[14px] bg-white/10 sm:rounded-[18px]" />
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
                        <industry.icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-white/75 text-[#10bcc0] transition-transform duration-300 group-open:rotate-180 sm:h-9 sm:w-9">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-3 max-w-[18ch] text-base font-bold leading-tight text-slate-950 sm:mt-0 sm:text-lg md:text-[1.35rem]">
                    {industry.name}
                  </h3>
                </summary>
                <div className="px-2 pb-2 pt-4">
                  <p
                    className="text-[15px] leading-6 text-stone-600"
                    dangerouslySetInnerHTML={{ __html: industry.description }}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-x-10 top-8 h-32 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.18),transparent_72%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-teal-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(233,251,251,0.82))] p-4 shadow-[0_35px_90px_-34px_rgba(8,174,181,0.28)] md:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#10bcc0]">
                  Trải nghiệm
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#ff7a00]">
                  Combo 4
                </h3>
              </div>
            </div>

            <div className="relative aspect-[2481/3508] w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#fff8de_0%,#e9fbfb_100%)]">
              <div
                className="flex h-full"
                style={{
                  width: `${imageTrack.length * 100}%`,
                  transform: `translateX(-${(activeIndex * 100) / imageTrack.length}%)`,
                  transition: isAnimating ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                }}
              >
                {imageTrack.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative h-full shrink-0 overflow-hidden"
                    style={{ width: `${100 / imageTrack.length}%` }}
                  >
                    <Image
                      src={image}
                      alt={`Combo 4 showcase ${index + 1}`}
                      fill
                      sizes="(max-width: 1280px) 92vw, 460px"
                      className="object-contain object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const industries = [
  {
    name: "Giá Foxie tối ưu",
    description: "Giá thẻ Foxie 399.000 cho liệu trình 50 phút, giá niêm yết 1.079.000.",
    layoutClass: "lg:col-start-1 lg:row-start-1",
    icon: HandCoins,
  },
  {
    name: "Chăm sóc toàn diện",
    description: "Kết hợp Lumiglow, Gymming và Eye-Revive để làm sạch, hỗ trợ săn chắc, cấp ẩm, thư giãn vùng mắt và làm da rạng rỡ hơn.",
    layoutClass: "lg:col-start-2 lg:row-start-1",
    icon: Store,
  },
  {
    name: "Dễ dàng đặt lịch",
    description: "Khách có thể chọn chi nhánh Face Wash Fox thuận tiện tại TP.HCM và Hà Nội ngay trên landing page.",
    layoutClass: "lg:col-start-1 lg:row-start-2",
    icon: CheckCheck,
  },
  {
    name: "Quy trình rõ ràng",
    description: "13 bước dịch vụ chuẩn hóa, kết hợp Hydodermabrasion, RF & EMS, Ultrasonic, điện di lạnh, mặt nạ Elravie và ánh sáng sinh học.",
    layoutClass: "lg:col-start-2 lg:row-start-2",
    icon: Gem,
  },
]
