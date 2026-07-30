"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { serviceSteps } from "@/components/home-data"

export function FoxSwatSection() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [visibleItems, setVisibleItems] = useState<Set<number>>(() => new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((current) => {
          const next = new Set(current)
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number((entry.target as HTMLElement).dataset.timelineIndex)
              next.add(index)
            }
          })
          return next
        })
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="fox-swat" className="relative z-20 bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8 xl:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400 sm:text-sm">Quy trình 40 phút</p>
          <h3 className="mt-3 text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl md:text-3xl">
            11 bước làm sạch và cấp ẩm dịu nhẹ
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-stone-500 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
            Các bước được sắp xếp theo trình tự trải nghiệm tại cửa hàng,
            <span className="hidden sm:inline"> </span>
            <br className="hidden sm:block" />
            từ làm sạch đến cấp ẩm và bảo vệ da.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            {/* Mobile timeline line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-5 top-8 w-px -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgb(125_211_252)_0_2px,transparent_2px_14px)] md:hidden"
            />

            {/* Desktop timeline path */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-0 hidden h-full w-[140px] -translate-x-1/2 md:left-1/2 md:block"
              preserveAspectRatio="none"
              viewBox="0 0 140 1200"
            >
              <path
                d="M72 0 C32 125 112 220 72 345 C32 470 108 570 72 690 C36 810 106 910 72 1035 C46 1128 78 1180 72 1200"
                fill="none"
                stroke="rgb(125 211 252)"
                strokeDasharray="2 12"
                strokeLinecap="round"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="space-y-10 sm:space-y-14 md:space-y-20">
              {serviceSteps.map((item, index) => {
                const isLeft = index % 2 === 0
                const stepNumber = String(index + 1).padStart(2, "0")
                const title = item.step.replace(/^Bước\s+\d+:\s*/i, "")
                const isVisible = visibleItems.has(index)

                return (
                  <div
                    key={item.step}
                    ref={(element) => {
                      itemRefs.current[index] = element
                    }}
                    data-timeline-index={index}
                    className={`relative grid gap-4 transition-all duration-700 ease-out sm:gap-5 md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] md:items-center md:gap-6 ${
                      isLeft ? "" : "md:[&_.timeline-copy]:col-start-3"
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0 md:translate-y-14"
                    }`}
                    style={{ transitionDelay: `${Math.min(index % 3, 2) * 90}ms` }}
                  >
                    <div className={`timeline-copy pl-14 sm:pl-16 md:pl-0 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <p className="font-serif text-4xl italic leading-none text-slate-950 sm:text-5xl md:text-7xl">
                        {stepNumber}
                      </p>
                      <h4 className="mt-2 text-lg font-extrabold leading-snug text-sky-700 sm:mt-4 sm:text-2xl md:text-3xl">
                        {title}
                      </h4>
                      <p className="mt-2 whitespace-normal text-sm font-semibold leading-6 text-stone-500 sm:mt-3 sm:text-base sm:leading-7 md:whitespace-pre-line">
                        {timelineDescriptions[index]}
                      </p>
                    </div>

                    <div
                      className={`absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-dotted bg-white text-[11px] font-black shadow-[0_16px_35px_-24px_rgba(14,165,233,0.7)] transition-all duration-700 sm:h-12 sm:w-12 sm:text-sm md:static md:col-start-2 md:mx-auto md:translate-x-0 ${
                        isVisible ? "scale-100 border-sky-300 text-sky-600" : "scale-90 border-sky-100 text-sky-300"
                      }`}
                    >
                      {item.time}
                    </div>

                    <div className={`${isLeft ? "md:col-start-3" : "md:col-start-1 md:row-start-1"} pl-14 sm:pl-16 md:pl-0`}>
                      <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[22px] border border-sky-100 bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.58),transparent_64%),#f0faff] shadow-[0_22px_50px_-34px_rgba(14,165,233,0.45)] sm:max-w-[260px] sm:rounded-[28px] md:max-w-[280px]">
                        <Image
                          src={item.image}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 70vw, 280px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative z-10 mt-10 rounded-[22px] border border-sky-100 bg-sky-50/70 px-4 py-4 text-center shadow-[0_20px_55px_-38px_rgba(14,165,233,0.45)] sm:mt-16 sm:rounded-[28px] sm:px-6 sm:py-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400 sm:text-sm">Giá trải nghiệm lần đầu</p>
            <p className="mt-2 text-3xl font-black text-sky-700 sm:text-4xl">399.000</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-stone-500 sm:text-sm">
              Áp dụng tại 12 chi nhánh Senka Pick, quà tặng có giới hạn số lượng.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const timelineDescriptions = [
  "Loại bỏ lớp trang điểm, kem chống nắng \n và bụi bẩn trên bề mặt da.",
  "Làm sạch nhẹ nhàng để da thông thoáng \n trước các bước chăm sóc tiếp theo.",
  "Hơi ấm hỗ trợ làm mềm da \n và chuẩn bị cho bước xử lý bã nhờn.",
  "Lấy đi tế bào chết bề mặt để da mịn \n và dễ hấp thu dưỡng chất hơn.",
  "Làm mềm nhân mụn, \n hỗ trợ quá trình hút mụn diễn ra êm hơn.",
  "Hỗ trợ làm sạch bã nhờn \n  và tạp chất trong vùng da cần chăm sóc.",
  "Kết hợp đầu máy Ultrasonic với tinh chất Deep Moist 3X HA \n để tăng cường cấp ẩm.",
  "Bổ sung độ ẩm, giúp da dịu lại \n sau các bước làm sạch chuyên sâu.",
  "Làm mát và hỗ trợ khóa ẩm trên nền mặt nạ.",
  "Hoàn thiện lớp dưỡng để da mềm và dễ chịu hơn.",
  "Bảo vệ da sau liệu trình \n trước khi khách quay lại sinh hoạt trong ngày.",
]
