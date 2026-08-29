import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { PageTransition, PageTransitionItem } from '../page-transition'

export const metadata: Metadata = {
  title: 'Attributions – mortend.co',
  description: 'Credits and attributions for assets used on mortend.co.',
}

function AttributionLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-0.5 font-medium text-zinc-700 underline decoration-zinc-300 decoration-dotted underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-500 hover:decoration-solid focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-500"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

export default function AttributionsPage() {
  return (
    <PageTransition>
      <PageTransitionItem>
        <h1 className="mt-16 mb-6 text-3xl font-semibold">Attributions</h1>
      </PageTransitionItem>

      <PageTransitionItem>
        <section className="space-y-4 text-sm leading-relaxed text-zinc-500">
          <p>
            This page lists credits and attributions for assets used on
            mortend.co.
          </p>

          <ul className="list-inside list-disc space-y-1">
            <li>
              Theme:{' '}
              <AttributionLink href="https://github.com/ibelick/nim">
                Nim
              </AttributionLink>
            </li>
            <li>
              Symbols:{' '}
              <AttributionLink href="https://freepik.com/">
                Freepik
              </AttributionLink>
            </li>
            <li>
              Illustrations:{' '}
              <AttributionLink href="https://chatgpt.com/">
                ChatGPT
              </AttributionLink>
            </li>
          </ul>

          <a
            href="https://github.com/mortend/mortend.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit leading-none"
          >
            <Image
              src="/cc.webp"
              alt="Fork on GitHub"
              width={139}
              height={58}
              className="block h-[58px] w-auto"
            />
          </a>
        </section>
      </PageTransitionItem>
    </PageTransition>
  )
}
