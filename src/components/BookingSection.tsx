"use client"

import { useEffect, useMemo, useState } from "react"

import { branches } from "@/data/branches"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (value: number) => (value * Math.PI) / 180
  const earthRadiusKm = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}

export function BookingSection() {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0]?.id ?? 1)
  const [nearestDistanceKm, setNearestDistanceKm] = useState<number | null>(null)
  const [locationStatus, setLocationStatus] = useState<"idle" | "loading" | "ready" | "denied">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState("")

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setLocationStatus("denied")
      return
    }

    setLocationStatus("loading")
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        let nearest = branches[0]
        let nearestDistance = Number.POSITIVE_INFINITY

        for (const branch of branches) {
          const distance = getDistanceKm(latitude, longitude, branch.lat, branch.lng)
          if (distance < nearestDistance) {
            nearest = branch
            nearestDistance = distance
          }
        }

        if (nearest) {
          setSelectedBranchId(nearest.id)
          setNearestDistanceKm(Number(nearestDistance.toFixed(1)))
          setLocationStatus("ready")
        } else {
          setLocationStatus("denied")
        }
      },
      () => {
        setLocationStatus("denied")
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 60_000,
      }
    )
  }, [])

  const selectedBranch = useMemo(
    () => branches.find((branch) => branch.id === selectedBranchId) ?? null,
    [selectedBranchId]
  )

  const handleSubmitBooking = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitError("")
    setSubmitSuccess("")

    if (!fullName.trim() || !phone.trim()) {
      setSubmitError("Vui lòng điền đầy đủ họ tên và số điện thoại.")
      return
    }

    if (!selectedBranch) {
      setSubmitError("Không tìm thấy chi nhánh đã chọn.")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "booking",
          source: "combo-4-lumiglow-gymming-eye-revive",
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          note: note.trim(),
          branchId: selectedBranch.id,
          branchName: selectedBranch.name,
          branchAddress: selectedBranch.address,
          branchCity: selectedBranch.city,
          branchMapsUrl: selectedBranch.mapsUrl,
          nearestDistanceKm,
        }),
      })

      if (!response.ok) {
        throw new Error("BOOKING_SUBMIT_FAILED")
      }

      setSubmitSuccess("Đăng ký thành công. Face Wash Fox sẽ liên hệ xác nhận lịch trải nghiệm Combo 4 trong thời gian sớm nhất!")
      setFullName("")
      setPhone("")
      setEmail("")
      setNote("")
    } catch {
      setSubmitError("Gửi thông tin thất bại. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="bg-gradient-to-b from-white via-[#e9fbfb] to-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 pb-20 sm:pb-0">
        <div className="mx-auto max-w-5xl text-center">
          <a
            href="tel:0889866666"
            className="mx-auto flex min-h-12 w-full max-w-2xl items-center justify-center rounded-[14px] bg-[#10bcc0] px-4 py-3 text-center text-base font-extrabold leading-snug text-white transition-opacity hover:opacity-90 sm:min-h-14 sm:px-6 sm:text-lg md:h-16 md:px-8 md:text-[1.65rem]"
          >
            Đặt lịch Combo 4 giá Foxie 769.000
          </a>
          <h2 className="mb-3 pt-4 text-lg font-bold leading-snug text-black sm:mb-4 sm:pt-5 sm:text-xl md:text-3xl">
            Lumiglow + Gymming + Eye-Revive đã sẵn sàng tại Face Wash Fox
          </h2>
          <p className="mb-6 text-sm leading-6 text-muted-foreground sm:mb-8 sm:leading-7 md:text-[16px]">
            Để lại thông tin và chọn chi nhánh thuận tiện nhất. FWF sẽ liên hệ xác nhận lịch trước khi bạn đến cửa hàng.
          </p>
          <form className="mx-auto mt-6 max-w-2xl space-y-4 sm:mt-8 sm:space-y-6 md:mt-10" onSubmit={handleSubmitBooking}>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <div>
                <input
                  id="booking-name"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Nhập họ và tên"
                  required
                  className="h-12 w-full rounded-[14px] border border-teal-200 bg-white px-4 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-[#10bcc0] sm:h-14 sm:px-5 md:text-[1.15rem]"
                />
              </div>
              <div>
                <input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Nhập số điện thoại"
                  required
                  className="h-12 w-full rounded-[14px] border border-teal-200 bg-white px-4 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-[#10bcc0] sm:h-14 sm:px-5 md:text-[1.15rem]"
                />
              </div>
            </div>

            <div>
              <input
                id="booking-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Nhập email"
                className="h-12 w-full rounded-[14px] border border-teal-200 bg-white px-4 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-[#10bcc0] sm:h-14 sm:px-5 md:text-[1.15rem]"
              />
            </div>

            <div className="text-left">
              <select
                id="booking-branch"
                value={selectedBranchId}
                onChange={(event) => {
                  setSelectedBranchId(Number(event.target.value))
                  setNearestDistanceKm(null)
                }}
                className="h-12 w-full rounded-[14px] border border-teal-200 bg-white px-4 text-base text-[#111827] outline-none focus:border-[#10bcc0] sm:h-14 sm:px-5 md:text-[1.15rem]"
              >
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name} - {branch.city}
                  </option>
                ))}
              </select>
              {locationStatus === "loading" ? (
                <p className="mt-2 text-xs font-semibold text-[#10bcc0]">Đang xác định chi nhánh gần bạn nhất...</p>
              ) : null}
              {locationStatus === "ready" && nearestDistanceKm !== null && selectedBranch ? (
                <p className="mt-2 text-xs font-semibold text-[#10bcc0]">
                  Đã chọn chi nhánh gần nhất: {selectedBranch.name} (~{nearestDistanceKm} km)
                </p>
              ) : null}
            </div>

            <div>
              <textarea
                id="booking-note"
                rows={4}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Ghi chú thời gian mong muốn hoặc nhu cầu chăm sóc da..."
                className="w-full rounded-[14px] border border-teal-200 bg-white px-4 py-3 text-base text-[#111827] outline-none placeholder:text-[#8b96a5] focus:border-[#10bcc0] sm:px-5 sm:py-4 md:text-[1.15rem]"
              />
            </div>

            {submitError ? <p className="text-[0.95rem] text-[#dc2626]">{submitError}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-[14px] bg-orange-500 px-4 text-base font-extrabold text-white transition-opacity hover:opacity-90 sm:h-14 sm:px-8 sm:text-lg md:h-16 md:text-[1.65rem]"
            >
              {isSubmitting ? "Đang gửi thông tin..." : "Đặt lịch Combo 4"}
            </button>
          </form>
        </div>
      </div>
      <Dialog open={Boolean(submitSuccess)} onOpenChange={(open) => !open && setSubmitSuccess("")}>
        <DialogContent className="border-teal-200 bg-white text-slate-950 sm:max-w-md">
          <DialogHeader className="space-y-3 text-center">
            <DialogTitle className="text-2xl">Đăng ký thành công</DialogTitle>
          </DialogHeader>
          <p className="text-center text-base leading-7 text-stone-600">{submitSuccess}</p>
          <Button
            type="button"
            className="w-full bg-[#10bcc0] text-white hover:bg-[#08aeb5]"
            onClick={() => setSubmitSuccess("")}
          >
            Đóng
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
