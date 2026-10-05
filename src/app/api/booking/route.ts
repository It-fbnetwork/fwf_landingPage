import { NextResponse } from "next/server"

type BookingPayload = {
  requestType?: "booking" | "quote"
  fullName?: string
  phone?: string
  email?: string
  note?: string
  branchId?: number
  branchName?: string
  branchAddress?: string
  branchCity?: string
  branchMapsUrl?: string
  nearestDistanceKm?: number | null
  source?: string
}

export async function POST(request: Request) {
  const bookingScriptUrl = process.env.BOOKING_APPS_SCRIPT_URL

  if (!bookingScriptUrl) {
    return NextResponse.json(
      { error: "BOOKING_APPS_SCRIPT_URL is not configured. Copy .env.example to .env.local and set the Apps Script URL." },
      { status: 500 },
    )
  }

  let payload: BookingPayload

  try {
    payload = (await request.json()) as BookingPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 })
  }

  if (!payload.fullName?.trim() || !payload.phone?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const body = {
    requestType: payload.requestType === "quote" ? "quote" : "booking",
    source: payload.source?.trim() || "combo-4-lumiglow-gymming-eye-revive",
    fullName: payload.fullName.trim(),
    phone: payload.phone.trim(),
    email: payload.email?.trim() ?? "",
    note: payload.note?.trim() ?? "",
    branchId: payload.branchId ?? "",
    branchName: payload.branchName ?? "",
    branchAddress: payload.branchAddress ?? "",
    branchCity: payload.branchCity ?? "",
    branchMapsUrl: payload.branchMapsUrl ?? "",
    nearestDistanceKm:
      typeof payload.nearestDistanceKm === "number" ? Number(payload.nearestDistanceKm.toFixed(1)) : "",
    submittedAt: new Date().toISOString(),
  }

  try {
    // Apps Script web apps often redirect; text/plain keeps the JSON body intact.
    const appsScriptResponse = await fetch(bookingScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    })

    const responseText = await appsScriptResponse.text()

    if (!appsScriptResponse.ok) {
      return NextResponse.json(
        {
          error: "Apps Script rejected the request.",
          details: responseText,
        },
        { status: 502 },
      )
    }

    try {
      const parsed = JSON.parse(responseText) as { ok?: boolean; success?: boolean; error?: string }
      if (parsed && (parsed.ok === false || parsed.success === false)) {
        return NextResponse.json(
          {
            error: parsed.error || "Apps Script returned an error.",
            details: parsed,
          },
          { status: 502 },
        )
      }
    } catch {
      // Some deployments return empty/HTML after redirect; treat HTTP 200 as success.
    }

    return NextResponse.json({ ok: true, success: true, message: "Booking saved." })
  } catch {
    return NextResponse.json({ error: "Failed to reach Apps Script." }, { status: 502 })
  }
}
