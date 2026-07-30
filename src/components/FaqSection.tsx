"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import { faqItems } from "@/components/home-data"

export function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1)

  return (
    <section id="faq" className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      <Image
        src="/Senka/Liệu trình Senka-04.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(239,250,255,0.78))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-14">
          <div className="inline-flex flex-col items-center rounded-[24px] border border-white/70 bg-white/70 px-4 py-4 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.35)] backdrop-blur-sm sm:rounded-[32px] sm:px-6 sm:py-5 md:px-10 md:backdrop-blur-md">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-sky-400 drop-shadow-[0_3px_10px_rgba(14,165,233,0.18)] sm:mb-3 sm:text-sm md:text-base">
              Câu Hỏi Thường Gặp
            </p>
            <h2 className="text-2xl font-extrabold text-sky-600 drop-shadow-[0_5px_16px_rgba(14,165,233,0.14)] sm:text-3xl md:text-5xl">
              Senka Facial Combo
            </h2>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className={`w-full rounded-[20px] border bg-white/95 p-4 text-left shadow-[0_18px_50px_-30px_rgba(14,165,233,0.25)] transition-all duration-300 sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6 ${isOpen ? "border-sky-300 shadow-[0_24px_60px_-30px_rgba(14,165,233,0.35)]" : "border-sky-100 hover:-translate-y-1 hover:border-sky-200"}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors sm:mt-1 sm:h-10 sm:w-10 sm:text-sm ${isOpen ? "border-sky-300 bg-sky-100 text-sky-600" : "border-sky-200 bg-sky-50 text-sky-500"}`}>
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <h3 className="text-base font-semibold leading-snug text-stone-900 sm:text-lg md:text-xl">
                          {item.question}
                        </h3>
                        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-sky-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                      <div className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100 sm:mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="pr-0 text-sm leading-6 text-stone-600 sm:leading-7 md:pr-8 md:text-base md:leading-8">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
