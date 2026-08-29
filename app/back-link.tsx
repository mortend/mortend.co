import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Link>
  )
}
