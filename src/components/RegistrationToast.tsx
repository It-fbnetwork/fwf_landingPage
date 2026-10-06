"use client"

import { useEffect, useState } from "react"
import { BadgeCheck, X } from "lucide-react"

// Sample names only; these notifications do not represent real bookings.
const sampleNames = [
  "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng",
].flatMap((surname) =>
  ["Minh Anh", "Ngọc Linh", "Thu Hà", "Hoàng Nam", "Thảo Vy", "Gia Hân", "Tuấn Kiệt", "Bảo Ngọc", "Thanh Tâm", "Khánh Chi"]
    .map((givenName) => `${surname} ${givenName}`)
)

export function RegistrationToast() {
  const [notifications, setNotifications] = useState<{ id: number; name: string }[]>([])
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    let index = 0
    let timer: ReturnType<typeof setTimeout>

    const showNext = () => {
      if (document.hidden || document.querySelector('[role="dialog"]') || document.activeElement?.closest("form")) {
        setNotifications([])
        timer = setTimeout(showNext, 1000)
        return
      }
      const notification = { id: index, name: sampleNames[index % sampleNames.length] }
      setNotifications((current) => [...current, notification].slice(-3))
      index += 1
      timer = setTimeout(showNext, 1000)
    }

    timer = setTimeout(showNext, 1000)
    return () => clearTimeout(timer)
  }, [dismissed])

  if (!notifications.length || dismissed) return null

  return (
    <aside
      aria-label="Thông báo đăng ký minh họa"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-3 z-40 flex w-[min(320px,calc(100vw-6rem))] flex-col gap-2 sm:bottom-6 sm:left-6"
    >
      {notifications.map(({ id, name }) => (
        <div
          key={id}
          className="relative flex items-center gap-3 rounded-2xl border border-teal-100 bg-white/95 p-3 pr-9 text-stone-700 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm motion-safe:animate-in motion-safe:slide-in-from-left-4 motion-safe:fade-in motion-safe:duration-300"
        >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#10bcc0]">
        <BadgeCheck className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p className="mt-0.5 text-sm leading-5"><strong>{name}</strong> vừa đăng ký</p>
        <p className="mt-0.5 text-xs font-semibold text-orange-500">Combo 4 · 399K</p>
      </div>
      <button
        type="button"
        aria-label="Tắt thông báo đăng ký"
        onClick={() => setDismissed(true)}
        className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700 focus-visible:outline-2 focus-visible:outline-teal-500"
      >
        <X className="h-4 w-4" />
      </button>
        </div>
      ))}
    </aside>
  )
}
