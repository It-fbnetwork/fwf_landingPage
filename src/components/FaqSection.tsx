"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import { faqItems } from "@/components/home-data"

export function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1)

  return (
    <section id="faq" className="relative overflow-hidden py-20">
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
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex flex-col items-center rounded-[32px] border border-white/70 bg-white/70 px-6 py-5 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.35)] backdrop-blur-sm md:px-10 md:backdrop-blur-md">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-sky-400 drop-shadow-[0_3px_10px_rgba(14,165,233,0.18)] md:text-base">
              Câu Hỏi Thường Gặp
            </p>
            <h2 className="text-3xl font-extrabold text-sky-600 drop-shadow-[0_5px_16px_rgba(14,165,233,0.14)] md:text-5xl">
              Senka Facial Combo
            </h2>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2 lg:gap-5">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className={`w-full rounded-[24px] border bg-white/95 p-5 text-left shadow-[0_18px_50px_-30px_rgba(14,165,233,0.25)] transition-all duration-300 md:rounded-[28px] md:p-6 ${isOpen ? "border-sky-300 shadow-[0_24px_60px_-30px_rgba(14,165,233,0.35)]" : "border-sky-100 hover:-translate-y-1 hover:border-sky-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors ${isOpen ? "border-sky-300 bg-sky-100 text-sky-600" : "border-sky-200 bg-sky-50 text-sky-500"}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold leading-tight text-stone-900 md:text-xl">
                          {item.question}
                        </h3>
                        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-sky-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                      <div className={`grid transition-all duration-300 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="pr-0 text-sm leading-7 text-stone-600 md:pr-8 md:text-base md:leading-8">{item.answer}</p>
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
