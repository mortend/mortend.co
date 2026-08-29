import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDownToLine, Mail } from 'lucide-react'
import { PageTransition, PageTransitionItem } from '../../page-transition'

const DOWNLOADS = [
  {
    title: 'The Living Whole',
    detail: 'Complete book · PDF',
    filename: 'living-whole-ebook.pdf',
  },
  {
    title: 'Development Levels · Part I',
    detail: 'Poster · JPG',
    filename: 'development-levels-part-i.jpg',
  },
  {
    title: 'Development Levels · Part II',
    detail: 'Poster · JPG',
    filename: 'development-levels-part-ii.jpg',
  },
  {
    title: 'AQAL: The Four Quadrants',
    detail: 'Poster · JPG',
    filename: 'aqal-four-quadrants.jpg',
  },
  {
    title: 'Developmental Perspectives',
    detail: 'Poster · JPG',
    filename: 'developmental-perspectives.jpg',
  },
  {
    title: 'The Journey · Recovery Atlas',
    detail: 'Poster · JPG',
    filename: 'journey-recovery-atlas.jpg',
  },
  {
    title: 'Enneagram: Virtues, Vices & Centers',
    detail: 'Poster · JPG',
    filename: 'enneagram-virtues-vices-centers.jpg',
  },
  {
    title: 'Chakras 1–7',
    detail: 'Poster · JPG',
    filename: 'chakras-1-to-7.jpg',
  },
  {
    title: 'Chakras 8–12',
    detail: 'Poster · JPG',
    filename: 'chakras-8-to-12.jpg',
  },
  {
    title: 'Breath: The Inner Gate',
    detail: 'Poster · JPG',
    filename: 'breath-the-inner-gate.jpg',
  },
] as const

export const metadata: Metadata = {
  title: 'The Living Whole',
  description:
    'The Living Whole is a field guide to mind, body, discipline, meaning, and return—bringing together practical maps for living with greater clarity, courage, care, and freedom.',
  alternates: {
    canonical: '/books/living-whole',
  },
  openGraph: {
    title: 'The Living Whole',
    description: 'A field guide to mind, body, discipline, meaning & return.',
    url: '/books/living-whole',
    type: 'article',
    images: [
      {
        url: '/images/books/living-whole/social-preview.webp',
        width: 1200,
        height: 675,
        alt: 'The Living Whole hardcover book, showing its front, spine, and back',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Living Whole',
    description: 'A field guide to mind, body, discipline, meaning & return.',
    images: ['/images/books/living-whole/social-preview.webp'],
  },
}

const emailHref = 'mailto:hi@mortend.co'

export default function TheLivingWholePage() {
  return (
    <PageTransition>
      <PageTransitionItem>
        <header className="mt-16 grid items-center gap-8 border-b border-zinc-200 pb-12 sm:grid-cols-[minmax(0,0.95fr)_minmax(260px,1.05fr)] dark:border-zinc-800">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
              The Human Engineering Collection · Volume 1
            </p>
            <h1 className="max-w-xl text-4xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-6xl dark:text-zinc-50">
              The Living Whole
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              A field guide to mind, body, discipline, meaning &amp; return.
            </p>
          </div>
          <Image
            src="/images/books/living-whole/front-hardcover.webp"
            alt="The Living Whole hardcover book"
            width={1000}
            height={750}
            priority
            sizes="(min-width: 640px) 360px, calc(100vw - 2rem)"
            className="w-full rounded-2xl"
          />
        </header>
      </PageTransitionItem>

      <PageTransitionItem>
        <section className="grid gap-8 border-b border-zinc-200 py-12 sm:grid-cols-[0.75fr_2.25fr] dark:border-zinc-800">
          <h2 className="text-sm font-medium tracking-[0.14em] text-zinc-500 uppercase">
            About
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <i>The Living Whole</i> brings together nine visual maps and
              original artwork exploring how body, mind, relationships, stories,
              cultures, environments, and breath shape one another. Use them as
              practical tools for understanding yourself, others, and the worlds
              we build—and for living with greater clarity, courage, care, and
              freedom.
            </p>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              44 pages · A4 landscape
            </p>
          </div>
        </section>
      </PageTransitionItem>

      <PageTransitionItem>
        <section className="py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase">
                Digital edition
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">
                Download the book
              </h2>
            </div>
            <p className="text-sm text-zinc-500">1 PDF · 9 JPGs</p>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {DOWNLOADS.map((download, index) => (
              <a
                key={download.filename}
                href={`/files/living-whole/${download.filename}`}
                className="group flex items-center gap-4 py-5"
              >
                <span className="w-6 text-sm text-zinc-400 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-zinc-900 dark:text-zinc-100">
                    {download.title}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-500">
                    {download.detail}
                  </span>
                </span>
                <ArrowDownToLine className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-y-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
              </a>
            ))}
          </div>
        </section>
      </PageTransitionItem>

      <PageTransitionItem>
        <p className="mb-4 text-sm tracking-[0.14em] text-zinc-500 uppercase">
          Print edition
        </p>
        <section className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
          <Image
            src="/images/books/living-whole/social-preview.webp"
            alt="Front, spine, and back cover of The Living Whole"
            width={1200}
            height={675}
            sizes="(min-width: 768px) 736px, calc(100vw - 2rem)"
            className="h-auto w-full"
          />
        </section>
      </PageTransitionItem>

      <PageTransitionItem>
        <section className="mt-6 rounded-2xl bg-zinc-100 p-6 sm:p-8 dark:bg-zinc-900">
          <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase">
            In print
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight">
            High-resolution print edition
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            A high-resolution print version is available for purchase. Email me
            for formats, pricing and shipping. Feedback and comments are welcome
            too.
          </p>
        </section>
      </PageTransitionItem>

      <PageTransitionItem>
        <section className="mt-4 rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
          <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase">
            Open collaboration
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight">
            Contributions welcome
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            All art in the book is currently AI-generated. Want to contribute
            human-made art? Send it by email and it will be considered for the
            next edition.
          </p>
        </section>
      </PageTransitionItem>

      <PageTransitionItem>
        <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-zinc-950"
          >
            <Mail className="h-4 w-4" />
            hi@mortend.co
          </a>
          <a
            href="https://github.com/mortend/living-whole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-offset-zinc-950"
          >
            <span className="flex h-5 w-5 items-center justify-center">
              <Image
                src="/images/brands/github.svg"
                alt=""
                width={21}
                height={20}
                aria-hidden="true"
                className="h-5 w-auto brightness-0 dark:invert"
              />
            </span>
            View source on GitHub
          </a>
        </div>
      </PageTransitionItem>
    </PageTransition>
  )
}
