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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10bcc0] sm:text-sm">Quy trình 50 phút</p>
          <h3 className="mt-3 text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl md:text-3xl">
            13 bước cho làn da rạng rỡ
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-stone-500 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
            Các bước được sắp xếp theo trình tự trải nghiệm tại cửa hàng,
            <span className="hidden sm:inline"> </span>
            <br className="hidden sm:block" />
            từ làm sạch, nâng cơ, thư giãn mắt đến khóa ẩm và bảo vệ da.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            {/* Mobile timeline line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-5 top-8 w-px -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgb(255_128_0)_0_2px,transparent_2px_14px)] md:hidden"
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
                stroke="rgb(255 128 0)"
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
                      <h4 className="mt-2 text-lg font-extrabold leading-snug text-[#ff7a00] sm:mt-4 sm:text-2xl md:text-3xl">
                        {title}
                      </h4>
                      <p className="mt-2 whitespace-normal text-sm font-semibold leading-6 text-stone-500 sm:mt-3 sm:text-base sm:leading-7 md:whitespace-pre-line">
                        {timelineDescriptions[index]}
                      </p>
                    </div>

                    <div
                      className={`absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-dotted bg-white text-[11px] font-black shadow-[0_16px_35px_-24px_rgba(14,165,233,0.7)] transition-all duration-700 sm:h-12 sm:w-12 sm:text-sm md:static md:col-start-2 md:mx-auto md:translate-x-0 ${
                        isVisible ? "scale-100 border-orange-300 text-orange-500" : "scale-90 border-orange-100 text-orange-300"
                      }`}
                    >
                      {item.time}
                    </div>

                    <div className={`${isLeft ? "md:col-start-3" : "md:col-start-1 md:row-start-1"} pl-14 sm:pl-16 md:pl-0`}>
                      <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[22px] border border-teal-100 bg-[radial-gradient(circle_at_top,rgba(255,207,0,0.28),transparent_64%),#e9fbfb] shadow-[0_22px_50px_-34px_rgba(8,174,181,0.45)] sm:max-w-[260px] sm:rounded-[28px] md:max-w-[280px]">
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

          <div className="relative z-10 mt-10 rounded-[22px] border border-teal-100 bg-[#10bcc0]/10 px-4 py-4 text-center shadow-[0_20px_55px_-38px_rgba(8,174,181,0.45)] sm:mt-16 sm:rounded-[28px] sm:px-6 sm:py-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10bcc0] sm:text-sm">Giá thẻ Foxie</p>
            <p className="mt-2 text-3xl font-black text-orange-500 sm:text-4xl">769.000</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-stone-500 sm:text-sm">
              Giá niêm yết 1.079.000, liệu trình 50 phút với 13 bước chăm sóc toàn diện.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const timelineDescriptions = [
  "Loại bỏ lớp trang điểm, kem chống nắng \n và bụi bẩn trên da bằng nước tẩy trang phù hợp với loại da.",
  "Sử dụng sữa rửa mặt dịu nhẹ vegan low pH \n để làm sạch da mặt với máy rửa mặt, \n loại bỏ bụi bẩn và dầu thừa.",
  "Xông mặt để làm giãn nở lỗ chân lông, giúp da \n dễ dàng hấp thụ dưỡng chất và loại bỏ bụi bẩn sâu bên trong.",
  "Bằng đầu máy công nghệ Skin scrubber, \n nhẹ nhàng lấy đi da chết mà không gây đỏ rát\n hay tổn thương.",
  "Để giúp làm mềm nhân mụn, đẩy mụn đầu đen \n và sợi bã nhờn lên bề mặt da.",
  "Bằng đầu máy Hydodermabrasion, sử dụng công nghệ xoáy xoay tốc độ cao đồng thời, nó được trang bị đầu silicon xoay 360 độ đã được cấp bằng sáng chế để Massage hệ bạch huyết phối hợp với đầu hút xoắn ốc loại bỏ tế bào sừng lão hóa, loại bỏ bã nhờn, loại bỏ triệt để mọi loại bụi bẩn bên trong nang lông, đẩy bụi bẩn dưới đáy lên trên và hút ngược ra ngoài.",
  "Dùng đầu máy công nghệ Radio Frequency Lifting & EMS \n(đầu chuyên dụng giành riêng cho toàn mặt và vùng mắt)\n sử dụng sóng điện từ tần số cao để tác động đến các mô của lớp biểu bì da và sinh nhiệt. Nhờ đó các sóng RF sẽ kích thích tăng sinh các sợi collagen, các sợi collagen cũ bị đứt gãy hoặc chùng nhão sẽ được tác động săn chắc để nâng cơ giảm nếp nhăn mắt, săn chắc lại da vùng mắt và bọng mắt.",
  "Đầu máy công nghệ Ultrasonic Handle sử dụng rung động siêu âm tần số cao giúp thư giãn lỗ chân lông và thúc đẩy thẩm thấu dưỡng chất nuôi dưỡng da từ bên trong.",
  "Để giúp các dưỡng chất thẩm thấu sâu và cân bằng da\n   và khóa ẩm hiệu quả, se khít lỗ chân lông.",
  "Sử dụng mặt nạ cao cấp từ Elravie để cung cấp dưỡng chất, \n cấp ẩm và phục hồi da.",
  "Làm sáng & đều màu da, tăng sinh collagen.",
  "Phù hợp với loại da để cung cấp độ ẩm cho da và giúp da mềm mại, mịn màng.",
  "Kem chống nắng hoàn thiện liệu trình \n và bảo vệ da sau chăm sóc.",
]
