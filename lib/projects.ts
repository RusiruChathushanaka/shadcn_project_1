export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  coverImage: string
  category: "web" | "mobile" | "tooling" | "design"
  tags: string[]
  year: string
  status: "Live" | "Open Source" | "In Progress" | "Archived"
  liveUrl?: string
  githubUrl?: string
  overview: string
  features: string[]
  challenges: string
  outcome: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: "nova-commerce",
    title: "Nova Commerce",
    tagline: "Modular storefront that converts.",
    description:
      "A modular e-commerce storefront with personalized recommendations, conversion-focused landing pages, and an analytics dashboard for operators.",
    coverImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "web",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    year: "2025",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
    overview:
      "Nova Commerce started as a client request for a headless storefront that could integrate with multiple purchase platforms. The goal was to reduce checkout abandonment by surfacing smart product suggestions and a streamlined purchase flow. The project evolved into a reusable template that other teams adopted internally.",
    features: [
      "Personalised product recommendations powered by collaborative filtering",
      "One-click checkout with Stripe Payment Intents and Apple/Google Pay",
      "Operator analytics dashboard: revenue, funnel drop-off, cohort retention",
      "Multi-currency and locale support with auto-detected preferences",
      "Edge-cached category pages with ISR and on-demand revalidation",
    ],
    challenges:
      "The biggest engineering challenge was keeping the cart state consistent across sessions without introducing round-trips that hurt perceived performance. We solved this with an optimistic UI layer backed by a Redis TTL cache, with a background sync to PostgreSQL.",
    outcome:
      "After launch, the client saw a 34% uplift in completed checkouts and a 22% reduction in cart abandonment within the first 60 days. The storefront consistently scores 96+ on Lighthouse across all category pages.",
    metrics: [
      { label: "Lighthouse Score", value: "96+" },
      { label: "Checkout Uplift", value: "+34%" },
      { label: "Abandonment Drop", value: "-22%" },
    ],
  },
  {
    slug: "pulse-board",
    title: "Pulse Board",
    tagline: "KPI cockpit for leadership teams.",
    description:
      "An internal data dashboard for tracking KPIs in real time, with role-based access control, alert workflows, and embeddable chart widgets.",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "web",
    tags: ["React", "tRPC", "Prisma", "Tailwind", "WebSockets"],
    year: "2024",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
    overview:
      "Pulse Board was built for a SaaS company that needed a single pane of glass for cross-team metrics. Different departments needed different data slices, so role-based layouts were critical. Alerts had to fire via Slack and email within seconds of threshold breaches.",
    features: [
      "Real-time KPI widgets via WebSocket push with graceful SSE fallback",
      "Role-based access: Admin, Editor, Viewer with granular widget permissions",
      "Alert engine: threshold, anomaly-detection, and scheduled digest modes",
      "Embeddable charts via signed public endpoints for partner portals",
      "Drag-and-drop layout builder with persistent grid configurations",
    ],
    challenges:
      "Rendering 40+ live charts simultaneously without browser jank required a virtualised canvas strategy. We moved heavy chart computations to a Web Worker pool and batched WebSocket updates to 200 ms frames, reducing main-thread blocking by 80%.",
    outcome:
      "Leadership team reduced their weekly reporting cycle from 4 hours to under 20 minutes. The alert engine prevented two major SLA breaches in the first quarter by catching anomalies 12 minutes before they became customer-visible.",
    metrics: [
      { label: "Reporting Time", value: "-80%" },
      { label: "SLA Breaches Prevented", value: "2" },
      { label: "Chart Paint Time", value: "<16 ms" },
    ],
  },
  {
    slug: "route-pilot",
    title: "Route Pilot",
    tagline: "Smart last-mile logistics planning.",
    description:
      "A lightweight logistics planner that optimises delivery routes, visualises them on live map overlays, and emits real-time tracking events to customers.",
    coverImage:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
    category: "web",
    tags: ["Next.js", "Maps API", "Redis", "Docker", "Postgres"],
    year: "2024",
    status: "Live",
    liveUrl: "#",
    githubUrl: "#",
    overview:
      "Originally a weekend project to scratch a personal itch, Route Pilot grew into a tool used by three regional delivery companies. The core algorithm chains a nearest-neighbour heuristic with 2-opt optimisation to produce routes 30–40% shorter than manual planning.",
    features: [
      "Route optimisation with time-window and vehicle capacity constraints",
      "Live driver map with GPS ping every 5 seconds via Server-Sent Events",
      "Customer tracking page with ETA recalculation on traffic changes",
      "Batch import of delivery jobs from CSV or API webhooks",
      "Mobile-friendly driver app view with turn-by-turn waypoint list",
    ],
    challenges:
      "Handling 200+ stops in real time while keeping the map responsive required breaking the route computation into streamed partial updates. Drivers see the first optimised segment in under 300 ms while the rest resolves in the background.",
    outcome:
      "Partner logistics companies reported an average 31% reduction in total daily mileage and drivers completing routes 25 minutes earlier per shift.",
    metrics: [
      { label: "Mileage Reduction", value: "-31%" },
      { label: "Shift Time Saved", value: "25 min" },
      { label: "Initial Route Paint", value: "<300 ms" },
    ],
  },
  {
    slug: "forge-ui",
    title: "Forge UI",
    tagline: "Open-source design system for product teams.",
    description:
      "A themeable component library built on Radix primitives and Tailwind. Includes 40+ components, a Figma kit, and a Storybook-based documentation site.",
    coverImage:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&q=80",
    category: "design",
    tags: ["React", "Radix UI", "Tailwind", "Storybook", "TypeScript"],
    year: "2025",
    status: "Open Source",
    githubUrl: "#",
    liveUrl: "#",
    overview:
      "Forge UI was extracted from work across four product teams who kept rebuilding the same components. By standardising on Radix primitives with a consistent Tailwind token layer, teams could ship new pages 3× faster without sacrificing accessibility or visual consistency.",
    features: [
      "40+ accessible components built on Radix UI primitives",
      "Design token system with 6 built-in themes and CSS variable overrides",
      "Storybook docs with live knobs, a11y audit panel, and code snippets",
      "Figma Community kit synced to code via token pipeline",
      "Tree-shakeable ESM bundle under 28 kB gzipped",
    ],
    challenges:
      "Keeping the Figma kit and code in sync was a constant pain point. We built a small CI step that extracts design tokens from Figma on every release and opens a PR with the diff, eliminating manual drift between design and implementation.",
    outcome:
      "Adopted by 6 internal teams and 200+ GitHub stars in 3 months. Audit showed 100% WCAG 2.1 AA compliance across all interactive components.",
    metrics: [
      { label: "GitHub Stars", value: "200+" },
      { label: "WCAG AA", value: "100%" },
      { label: "Bundle Size", value: "28 kB" },
    ],
  },
  {
    slug: "devcast",
    title: "DevCast",
    tagline: "Technical podcasts, beautifully presented.",
    description:
      "A podcast platform for developer content with transcript search, chapter markers, episode playlists, and a minimal listen-anywhere player.",
    coverImage:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    category: "web",
    tags: ["Next.js", "TypeScript", "Algolia", "Cloudflare", "Supabase"],
    year: "2023",
    status: "Archived",
    githubUrl: "#",
    overview:
      "DevCast was a passion project exploring how developer-focused audio content could be made more discoverable. Auto-generated transcripts are indexed in Algolia so listeners can full-text search across every episode ever published, then jump directly to the relevant second.",
    features: [
      "Full-text transcript search across all episodes via Algolia",
      "Chapter markers synced to timestamp with progress save across devices",
      "Minimal pip-mode audio player that persists across page navigations",
      "RSS feed aggregator supporting 120+ developer podcast feeds",
      "Social cards auto-generated for each episode via Vercel OG",
    ],
    challenges:
      "Generating and indexing transcripts for 10,000+ legacy episodes without exceeding Algolia's record limits required chunking transcripts into 60-second windows with overlapping context, preserving search relevance while staying within quotas.",
    outcome:
      "Reached 1,800 monthly active listeners within 4 months organically, with 68% of new users discovering the platform through search result clips shared on social media.",
    metrics: [
      { label: "Monthly Listeners", value: "1,800" },
      { label: "Episodes Indexed", value: "10k+" },
      { label: "Search-Led Signups", value: "68%" },
    ],
  },
  {
    slug: "inkflow",
    title: "InkFlow",
    tagline: "Collaborative writing for modern teams.",
    description:
      "A multiplayer document editor with real-time cursors, inline comments, version history, and a clean reading mode for published documents.",
    coverImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    category: "tooling",
    tags: ["React", "Yjs", "WebSockets", "Hocuspocus", "TipTap"],
    year: "2023",
    status: "In Progress",
    liveUrl: "#",
    githubUrl: "#",
    overview:
      "InkFlow came from frustration with bloated document editors that slow creative writers down. The editor intentionally has fewer than 12 formatting options, but what it does, it does immaculately — with instant collaboration, distraction-free reading mode, and beautiful typography.",
    features: [
      "Conflict-free real-time co-editing via Yjs CRDT and Hocuspocus server",
      "Ephemeral presence cursors with user avatars and name labels",
      "Inline threaded comments with resolve/reopen workflow",
      "Snapshot-based version history with named restore points",
      "One-click publish to a clean, shareable reading URL",
    ],
    challenges:
      "Reconciling Yjs document state with a PostgreSQL persistence layer without write amplification meant we had to debounce persistence at 2-second idle windows and store binary Y.js updates rather than re-serialising to JSON on every keystroke.",
    outcome:
      "Currently in private beta with 3 writer collectives and an indie game studio using it for design documents. Aiming for public launch in Q2 2026.",
    metrics: [
      { label: "Collab Latency", value: "<50 ms" },
      { label: "Beta Teams", value: "4" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const categoryLabels: Record<Project["category"], string> = {
  web: "Web App",
  mobile: "Mobile",
  tooling: "Tooling",
  design: "Design System",
}
