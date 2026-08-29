type Project = {
  name: string
  description: string
  status: 'In development' | 'Published'
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Skill = {
  title: string
  title2?: string
  level: string
  level2?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Book = {
  id: string
  title: string
  subtitle: string
  publisher: string
  year: number
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Incubase',
    description:
      'Exploring faster ways to build, deploy, and evolve application systems.',
    status: 'In development',
    link: '#',
    image: '/images/projects/incubase.webp',
    id: 'project-incubase',
  },
  {
    name: 'ScanFX',
    description:
      'Document parsing, currency conversion and market intelligence for CFOs and analysts.',
    status: 'In development',
    link: '/project/scanfx',
    image: '/images/projects/scanfx.webp',
    id: 'project-scanfx',
  },
  {
    name: 'VibbVapp',
    description:
      'Creative workspace for building and sharing interactive ideas—where design and logic meet.',
    status: 'In development',
    link: '/project/vibbvapp',
    image: '/images/projects/vibbvapp.webp',
    id: 'project-vibbvapp',
  },
  {
    name: 'OrganizERR',
    description:
      'AI-powered home organizer: Get smart suggestions for optimal storage and labeling.',
    status: 'In development',
    link: '/project/organizer',
    image: '/images/projects/organizer.webp',
    id: 'project-organizer',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'MDF Consult',
    title: 'Founder · Consultant',
    start: '2025',
    end: 'Present',
    link: 'https://mdfornes.com',
    id: 'work-mdfconsult',
  },
  {
    company: 'Build & Run',
    title: 'Founder · Consultant',
    start: '2021',
    end: '2025',
    link: 'https://brun.sh',
    id: 'work-brun',
  },
  {
    company: 'Fuse X · Fuseapps (Korea)',
    title: 'Co-Founder · CTO',
    start: '2018',
    end: '2023',
    link: 'https://fuse-x.com',
    id: 'work-fuse-x',
  },
  {
    company: 'Disraptor · nHack (China)',
    title: 'Co-Founder · CEO',
    start: '2018',
    end: '2018',
    link: '#',
    id: 'work-disraptor',
  },
  {
    company: 'Movi',
    title: 'Co-Founder · Engineer',
    start: '2016',
    end: '2019',
    link: '#',
    id: 'work-movi',
  },
  {
    company: 'Fuse (Oslo & Palo Alto)',
    title: 'Co-Founder · CTO',
    start: '2015',
    end: '2018',
    link: 'https://fuse.no',
    id: 'work-fuse',
  },
  {
    company: 'Zpindler',
    title: 'Co-Founder · Engineer',
    start: '2014',
    end: '2016',
    link: '#',
    id: 'work-zpindler',
  },
  {
    company: 'Outracks',
    title: 'Co-Founder · CTO',
    start: '2011',
    end: '2015',
    link: 'https://outracks.com',
    id: 'work-outracks',
  },
  {
    company: 'ARM Norway',
    title: 'Trainee · Engineer',
    start: '2008',
    end: '2011',
    link: 'https://arm.com',
    id: 'work-arm',
  },
]

export const OPEN_SOURCE_EXPERIENCE: WorkExperience[] = [
  {
    company: 'RNUnity2 · Unity integration for React Native',
    title: 'Maintainer · Contributor',
    start: '2022',
    end: '2026',
    link: 'https://github.com/fusetools/react-native-unity2',
    id: 'open-source-react-native-unity2',
  },
  {
    company: 'Uno · Native cross-platform language and compiler',
    title: 'Maintainer · Contributor',
    start: '2018',
    end: '2023',
    link: 'https://github.com/fuse-open/uno',
    id: 'open-source-uno-compiler',
  },
  {
    company: 'Fuselibs · Cross-platform UI framework for Fuse apps',
    title: 'Maintainer · Contributor',
    start: '2018',
    end: '2023',
    link: 'https://github.com/fuse-open/fuselibs',
    id: 'open-source-fuselibs',
  },
  {
    company: 'Fuse Studio · Visual desktop tool suite for Fuse',
    title: 'Maintainer · Contributor',
    start: '2018',
    end: '2023',
    link: 'https://github.com/fuse-open/fuse-studio',
    id: 'open-source-fuse-studio',
  },
]

export const DEMOSCENE_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Bruce Leet · Demo group',
    title: 'Graphics Programmer',
    start: '2026',
    end: 'Present',
    link: 'https://tjokk.net/',
    id: 'demoscene-bruce-leet',
  },
  {
    company: 'Outracks · Demo group',
    title: 'Graphics Programmer',
    start: '2008',
    end: '2015',
    link: 'https://pouet.net/groups.php?which=2323',
    id: 'demoscene-outracks',
  },
  {
    company: 'Illuminatics · Game developer',
    title: 'Graphics Programmer',
    start: '2008',
    end: '2010',
    link: 'https://youtu.be/s-VI6qz9eL4',
    id: 'demoscene-illuminatics',
  },
  {
    company: 'Nazareth · Demo group',
    title: 'Graphics Programmer',
    start: '2004',
    end: '2010',
    link: 'https://pouet.net/groups.php?which=4851',
    id: 'demoscene-nazareth',
  },
]

export const TECHNICAL_SKILLS: Skill[] = [
  {
    title: 'Cross-platform product engineering',
    level: '1337',
    id: 'skill-tech',
  },
  {
    title: 'Compilers / Parsers / Runtimes / Tooling',
    level: '1337',
    id: 'skill-compilers',
  },
  {
    title: 'Frontend / Backend / Realtime / Graphics',
    level: '1337',
    id: 'skill-fullstack',
  },
  {
    title: 'C / C++ / C# / Objective-C / Java / Kotlin / Swift',
    title2: 'TypeScript',
    level: '',
    level2: '1337',
    id: 'skill-coding',
  },
  {
    title: 'OpenGL / DirectX / shaders / fixed function',
    level: '1337',
    id: 'skill-realtime',
  },
  {
    title: 'React Native / Android / iOS',
    level: '1337',
    id: 'skill-mobile',
  },
  {
    title: 'Browsers / HTML / CSS / Web APIs',
    level: '1337',
    id: 'skill-web',
  },
  {
    title: 'Data systems / SQL / NoSQL',
    level: '1337',
    id: 'skill-data',
  },
  {
    title: 'DOS / Unix / terminal era survival',
    level: '1993',
    id: 'skill-dos',
  },
]

export const BOOKS: Book[] = [
  {
    id: 'book-living-whole',
    title: 'The Living Whole',
    subtitle: 'A field guide to mind, body, discipline, meaning & return',
    publisher: 'Nazareth Editions',
    year: 2026,
    link: '/books/living-whole',
  },
]

export const PATENTS: BlogPost[] = [
  {
    title: 'Google Patents · NO334888B1',
    description:
      'Procedure for automatically generating drawing operations from graphics resources',
    link: 'https://patents.google.com/patent/NO334888B1/en',
    uid: 'patent-1',
  },
]

export const NEWS_ARTICLES: BlogPost[] = [
  {
    title:
      'Fuse Announces $12 Million Series A to Boldly Launch Future of App Development',
    description: 'Business Wire · January 24, 2017',
    link: 'https://kommunikasjon.ntb.no/pressemelding/14029474/fuse-announces-12-million-series-a-to-boldly-launch-future-of-app-development?publisherId=90063',
    uid: 'news-fuse-series-a-2017',
  },
  {
    title:
      'Fuse Emerges From Stealth to Fix App Development, Secures $2.8M New Funding',
    description: 'Yahoo Finance · January 27, 2015',
    link: 'https://sg.finance.yahoo.com/news/fuse-emerges-stealth-fix-app-120000563.html',
    uid: 'news-fuse-stealth-2015',
  },
  {
    title: 'Outracks raises $3.5 million from Northzone and Alliance Venture',
    description: 'Nordic 9 · June 14, 2014',
    link: 'https://nordic9.com/news/outracks-raises-3-5-million-from-northzone-and-alliance-venture-northzone-news6200483459/',
    uid: 'news-outracks-northzone-2014',
  },
  {
    title:
      'Springfondet has invested NOK 3 million seed capital in the Norwegian software company Outracks …',
    description: 'Nordic 9 · November 16, 2012',
    link: 'https://nordic9.com/news/springfondet-has-invested-nok-3-million-seed-capital-in-the-norwegian-software-company-outracks-tech-news5683064960/',
    uid: 'news-outracks-springfondet-2012',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/mortend',
  },
  {
    label: 'NPM.js',
    link: 'https://npmjs.com/~mortend',
  },
  {
    label: 'NuGet',
    link: 'https://nuget.org/profiles/mortend',
  },
  {
    label: 'Medium',
    link: 'https://mortend.medium.com/',
  },
]

export const EMAIL = 'hi@mortend.co'
