"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCheck, ChevronDown, Gem, HandCoins, Store } from "lucide-react"
import Image from "next/image"

const showcaseImages = [
  "/Senka/Liệu trình Senka-01.png",
  "/Senka/Liệu trình Senka-02.png",
  "/Senka/Liệu trình Senka-03.png",
  "/Senka/Liệu trình Senka-04.png",
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
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f0faff_52%,#ffffff_100%)] py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 md:px-8 xl:grid-cols-[minmax(0,0.94fr)_460px] xl:items-start xl:gap-12">
        <div className="max-w-[820px]">
          <div className="mb-8 max-w-2xl text-center lg:mb-10 lg:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-sky-300 md:text-base">
              Khám phá
            </p>
            <h2 className="text-2xl font-bold leading-tight text-sky-600 md:text-3xl lg:text-4xl">
              Vì sao Senka Facial Combo phù hợp <br className="hidden lg:block" /> cho làn da cần phục hồi độ ẩm
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-5">
            {industries.map((industry) => (
              <details
                key={industry.name}
                className={`group rounded-[26px] bg-[linear-gradient(180deg,rgba(240,249,255,0.96),rgba(224,242,254,0.94))] p-2.5 shadow-[0_18px_45px_-30px_rgba(14,165,233,0.24)] transition-all duration-300 open:bg-[linear-gradient(180deg,rgba(224,242,254,0.98),rgba(207,250,254,0.84))] open:shadow-[0_24px_55px_-28px_rgba(14,165,233,0.3)] ${industry.layoutClass}`}
              >
                <summary className="flex min-h-[164px] cursor-pointer list-none flex-col justify-between overflow-visible rounded-[22px] border border-sky-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(240,249,255,0.55))] p-5 marker:hidden">
                  <div className="flex items-start justify-between gap-4 overflow-visible">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-visible rounded-[18px] bg-[linear-gradient(180deg,#38bdf8_0%,#0ea5e9_100%)] text-white shadow-[0_16px_35px_-20px_rgba(14,165,233,0.8)]">
                      <div className="absolute inset-0 rounded-[18px] bg-white/10" />
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                        <industry.icon className="h-8 w-8" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-white/75 text-sky-400 transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="max-w-[18ch] text-lg font-bold leading-tight text-sky-950 md:text-[1.35rem]">
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
          <div className="relative overflow-hidden rounded-[36px] border border-sky-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.82))] p-4 shadow-[0_35px_90px_-34px_rgba(14,165,233,0.28)] md:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
                  Trải nghiệm
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-sky-600">
                  Senka Facial Combo
                </h3>
              </div>
            </div>

            <div className="relative aspect-[2481/3508] w-full overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#e0f7ff_0%,#f0faff_100%)]">
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
                      alt={`Senka Facial Combo showcase ${index + 1}`}
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
    name: "Giá trải nghiệm dễ chọn",
    description: "Giá trải nghiệm lần đầu 399.000, phù hợp để khách mới thử liệu trình làm sạch và cấp ẩm trong 40 phút.",
    layoutClass: "lg:col-start-1 lg:row-start-1",
    icon: HandCoins,
  },
  {
    name: "Dịu nhẹ cho nhiều loại da",
    description: "Phù hợp da dầu, da khô, da hỗn hợp, da thường, da thiếu nước và làn da nhạy cảm cần công thức không cồn, không hương liệu, không chất tạo màu.",
    layoutClass: "lg:col-start-2 lg:row-start-1",
    icon: Store,
  },
  {
    name: "Dễ dàng đặt lịch",
    description: "Khách có thể chọn một trong 12 chi nhánh Senka Pick tại TP.HCM và Hà Nội ngay trên landing page.",
    layoutClass: "lg:col-start-1 lg:row-start-2",
    icon: CheckCheck,
  },
  {
    name: "Quy trình rõ ràng",
    description: "11 bước dịch vụ chuẩn hóa, kết hợp làm sạch sâu, Ultrasonic với Deep Moist 3X HA, mặt nạ cấp ẩm và điện di lạnh.",
    layoutClass: "lg:col-start-2 lg:row-start-2",
    icon: Gem,
  },
]

