"use client"

import type { ComponentProps } from "react"
import Link from "next/link"

export function SectionLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (event.currentTarget.target && event.currentTarget.target !== "_self") return

        const url = new URL(event.currentTarget.href)
        if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return

        const target = document.getElementById(url.hash.slice(1))
        if (!target) return

        event.preventDefault()
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
        if (window.location.hash) {
          window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search)
        }
      }}
    />
  )
}
