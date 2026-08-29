'use client'

import { ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const DISMISSED_KEY = 'living-whole-book-banner-dismissed'

export function BookBanner() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(
      pathname === '/' && window.localStorage.getItem(DISMISSED_KEY) !== 'true',
    )
  }, [pathname])

  function dismiss() {
    window.localStorage.setItem(DISMISSED_KEY, 'true')
    setIsVisible(false)
  }

  if (pathname !== '/' || !isVisible) return null

  return (
    <aside
      aria-label="Book announcement"
      className="sticky top-0 z-50 w-full bg-zinc-100 px-12 py-2.5 text-center text-sm text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-zinc-50"
    >
      <p>
        Check out my new book:{' '}
        <Link
          href="/books/living-whole"
          className="group font-semibold underline decoration-zinc-400 decoration-dotted underline-offset-4 transition-colors hover:decoration-zinc-600 hover:decoration-solid focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
        >
          The Living Whole
          <ArrowUpRight
            aria-hidden="true"
            className="ml-0.5 inline-block h-3.5 w-3.5 align-text-bottom transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss book announcement"
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-sm p-1 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <X aria-hidden="true" className="size-4" />
      </button>
    </aside>
  )
}
