'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Mail, XIcon } from 'lucide-react'
import Image from 'next/image'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  OPEN_SOURCE_EXPERIENCE,
  DEMOSCENE_EXPERIENCE,
  WorkExperience,
  Skill,
  TECHNICAL_SKILLS,
  NEWS_ARTICLES,
  PATENTS,
  BOOKS,
} from './data'
import { Info } from '@/components/symbols'
import { Chakras, Genius } from '@/components/buttons'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function ProjectImage({ src, projectId }: { src: string; projectId: string }) {
  const thumbnailClass =
    projectId === 'project-scanfx'
      ? '-translate-x-[4%] scale-[1.13] hover:-translate-x-[4%] hover:scale-[1.30]'
      : projectId === 'project-incubase'
        ? '-translate-x-[2%] scale-[1.17] hover:-translate-x-[2%] hover:scale-[1.34]'
        : projectId === 'project-vibbvapp'
          ? 'translate-y-[4%] scale-[1.25] hover:translate-y-[4%] hover:scale-[1.40]'
          : 'translate-y-[4%] scale-[1.22] hover:translate-y-[4%] hover:scale-[1.40]'

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="overflow-hidden rounded-xl">
          <img
            src={src}
            className={`w-full cursor-zoom-in transition-transform duration-333 ease-out ${thumbnailClass}`}
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img src={src} className="w-full rounded-xl" />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

const SOCIAL_ICONS: Record<string, string> = {
  GitHub: '/images/brands/github.svg',
  'NPM.js': '/images/brands/npm.svg',
  NuGet: '/images/brands/nuget.svg',
  Medium: '/images/brands/medium.svg',
}

const SOCIAL_HOVER_CLASSES: Record<string, string> = {
  GitHub: 'group-hover:bg-[#6e40c9] dark:group-hover:bg-[#6e40c9]',
  'NPM.js': 'group-hover:bg-red-600 dark:group-hover:bg-red-600',
  NuGet: 'group-hover:bg-[#0078d4] dark:group-hover:bg-[#0078d4]',
  Medium: 'group-hover:bg-[#00ab6c] dark:group-hover:bg-[#00ab6c]',
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  const label = typeof children === 'string' ? children : 'Social link'
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white/60 py-1 pr-1 pl-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 hover:shadow-md focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
      >
        {children}
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all duration-200 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-white ${SOCIAL_HOVER_CLASSES[label] ?? 'group-hover:bg-zinc-950 dark:group-hover:bg-zinc-950'}`}
        >
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 bg-current text-zinc-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-300"
            style={{
              maskImage: `url(${SOCIAL_ICONS[label]})`,
              maskPosition: 'center',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskImage: `url(${SOCIAL_ICONS[label]})`,
              WebkitMaskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
            }}
          />
        </span>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div style={{ marginTop: -24 }}>
          <Chakras />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1" style={{ marginTop: -24 }}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            👨 {getAge().toFixed(1)} M from Norway
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I like to understand complex things, simplify them, and make them
            useful to more people.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I build software, products, and companies across developer tools,
            AI, and applied digital systems.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This site is evolving and some entries are still being expanded.
          </p>
          <p className="mt-21 text-zinc-600 dark:text-zinc-400">
            ⚡ Check out my open-source projects on{' '}
            <a
              className="group font-medium text-zinc-700 underline decoration-zinc-300 decoration-dotted underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-500 hover:decoration-solid focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-500"
              href="https://github.com/mortend"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight
                aria-hidden="true"
                className="ml-0.5 inline-block h-3.5 w-3.5 align-text-bottom transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectImage src={project.image} projectId={project.id} />
                <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-white/85 px-2.5 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm dark:bg-zinc-950/80 dark:text-zinc-300">
                  {project.status}
                </span>
              </div>
              <div className="px-1">
                {project.status === 'In development' ? (
                  <span className="font-base inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                ) : (
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                )}
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map(jobCard)}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Open Source</h3>
        <div className="flex flex-col space-y-2">
          {OPEN_SOURCE_EXPERIENCE.map(jobCard)}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">
          Demoscene{' '}
          <a
            href="https://wikipedia.org/wiki/Demoscene"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-block align-text-bottom"
            style={{ opacity: 0.5 }}
          >
            <Info size={16} title="What is the demoscene?" />
          </a>
        </h3>
        <div className="flex flex-col space-y-2">
          {DEMOSCENE_EXPERIENCE.map(jobCard)}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Technical Skills</h3>
        <div className="flex flex-col space-y-2">
          {TECHNICAL_SKILLS.map(skillCard)}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Image
          src="/images/home/divider-light.png"
          alt=""
          width={1472}
          height={299}
          aria-hidden="true"
          unoptimized
          sizes="(min-width: 768px) 736px, calc(100vw - 2rem)"
          className="-mt-12 mb-12 h-auto w-full select-none dark:hidden"
        />
        <Image
          src="/images/home/divider-dark.png"
          alt=""
          width={1472}
          height={299}
          aria-hidden="true"
          unoptimized
          sizes="(min-width: 768px) 736px, calc(100vw - 2rem)"
          className="-mt-12 mb-12 hidden h-auto w-full select-none dark:block"
        />
        <h3 className="mb-3 text-lg font-medium">Books</h3>
        <div className="flex flex-col">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          >
            {BOOKS.map((book) => (
              <Link
                key={book.id}
                href={book.link}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={book.id}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {book.title} — {book.subtitle}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {book.publisher} · {book.year}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Patents</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {PATENTS.map((patent) => (
              <Link
                key={patent.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={patent.link}
                data-id={patent.uid}
                target="_blank"
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {patent.description}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {patent.title}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Press</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {NEWS_ARTICLES.map((article) => (
              <Link
                key={article.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={article.link}
                data-id={article.uid}
                target="_blank"
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="overflow-hidden font-normal text-ellipsis whitespace-nowrap dark:text-zinc-100">
                    {article.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <figure className="mt-8 mb-20">
          <img
            src="/images/home/dev-design.webp"
            alt="Designer × Developer"
            className="h-auto w-full max-w-[420px]"
          />
        </figure>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a
            className="group inline-flex items-center gap-1 font-medium text-zinc-700 underline decoration-zinc-300 decoration-dotted underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-500 hover:decoration-solid focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-500"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
            <Mail
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </p>
        <p className="mb-1 text-zinc-600 dark:text-zinc-400">📍 Msida, Malta</p>
        <p className="mb-1 text-zinc-600 dark:text-zinc-400">
          📍 Bangkok, Thailand
        </p>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">📍 Oslo, Norway</p>
        <div className="flex flex-wrap items-center justify-start gap-2.5 pt-2.5">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
        <div style={{ marginTop: 112, marginBottom: -64 }}>
          <Genius />
        </div>
      </motion.section>
    </motion.main>
  )
}

function getAge() {
  const birth = new Date('1987-08-03')
  const now = new Date()
  const msInYear = 1000 * 60 * 60 * 24 * 365.2425 // average year length incl. leap years
  return (now.getTime() - birth.getTime()) / msInYear
}

function jobCard(job: WorkExperience) {
  const card = (
    <AnimatedBackground
      enableHover
      className="rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
    >
      <div className="flex flex-col rounded-[15px] p-4 dark:bg-zinc-950">
        <div
          className="flex flex-row justify-between"
          style={{ alignItems: 'center' }}
        >
          <div>
            <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
          </div>
          <p
            className="text-zinc-600 dark:text-zinc-400"
            style={{ minWidth: 110, textAlign: 'right' }}
          >
            {job.start}–{job.end}
          </p>
        </div>
      </div>
    </AnimatedBackground>
  )

  const className = 'rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30'

  return job.link === '#' ? (
    <UnavailableJobCard className={className} job={job} key={job.id}>
      {card}
    </UnavailableJobCard>
  ) : (
    <a
      className={className}
      href={job.link}
      target="_blank"
      rel="noopener noreferrer"
      key={job.id}
    >
      {card}
    </a>
  )
}

function UnavailableJobCard({
  children,
  className,
  job,
}: {
  children: React.ReactNode
  className: string
  job: WorkExperience
}) {
  const [showHint, setShowHint] = useState(false)
  const hintId = `${job.id}-link-hint`

  return (
    <button
      type="button"
      className={`${className} relative w-full text-left focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-offset-zinc-950`}
      aria-describedby={showHint ? hintId : undefined}
      onClick={() => setShowHint(true)}
      onBlur={() => setShowHint(false)}
    >
      {children}
      <AnimatePresence>
        {showHint && (
          <motion.span
            id={hintId}
            role="status"
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="pointer-events-none absolute top-3 right-3 z-10 rounded-full border border-zinc-200/80 bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-300"
          >
            Link unavailable
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

function skillCard(skill: Skill) {
  return (
    <a
      className="rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      target="_blank"
      rel="noopener noreferrer"
      key={skill.id}
    >
      <AnimatedBackground
        enableHover
        className="rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
      >
        <div className="flex flex-col rounded-[15px] p-4 dark:bg-zinc-950">
          <div
            className="flex flex-row justify-between"
            style={{ alignItems: 'center' }}
          >
            <div>
              <h4 className="font-normal dark:text-zinc-100">
                <span
                  style={{
                    textDecoration: skill.title2 ? 'line-through' : undefined,
                  }}
                >
                  {skill.title}
                </span>{' '}
                {skill.title2}
              </h4>
            </div>
            <p
              className="text-zinc-600 dark:text-zinc-400"
              style={{ textAlign: 'right' }}
            >
              <span
                style={{
                  textDecoration: skill.title2 ? 'line-through' : undefined,
                }}
              >
                {skill.level}
              </span>{' '}
              {skill.level2}
            </p>
          </div>
        </div>
      </AnimatedBackground>
    </a>
  )
}
