'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BackLink } from './back-link'

export function Header() {
  const pathname = usePathname()

  if (pathname !== '/') {
    return (
      <header className="pt-8">
        <BackLink />
      </header>
    )
  }

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="rounded-sm font-medium text-black transition-opacity hover:opacity-60 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-white"
        >
          Morten D.
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Founder · Engineer · Builder · Explorer
        </TextEffect>
      </div>
    </header>
  )
}
