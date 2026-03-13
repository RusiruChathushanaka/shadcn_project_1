import Link from "next/link"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const projects = [
  {
    title: "Nova Commerce",
    description:
      "A modular storefront with personalized recommendations, conversion-focused landing pages, and analytics dashboards.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Pulse Board",
    description:
      "An internal KPI cockpit for leadership teams with role-based access, real-time sync, and alert workflows.",
    tags: ["React", "tRPC", "Prisma", "Tailwind"],
    link: "#",
  },
  {
    title: "Route Pilot",
    description:
      "A lightweight logistics planner that optimizes deliveries and visualizes routes with map overlays and events.",
    tags: ["Next.js", "Maps API", "Redis", "Docker"],
    link: "#",
  },
]

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Northfield Labs",
    period: "2024 - Present",
    summary:
      "Lead UI architecture and design-system adoption across four product squads.",
  },
  {
    role: "Full Stack Developer",
    company: "Blue Orbit Studio",
    period: "2021 - 2024",
    summary:
      "Built customer portals, checkout flows, and admin dashboards for SaaS startups.",
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    period: "2019 - 2021",
    summary:
      "Delivered product MVPs from concept to deployment for regional founders.",
  },
]

const skillGroups = {
  frontend: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  backend: ["Node.js", "Prisma", "PostgreSQL", "REST", "GraphQL"],
  tooling: ["GitHub Actions", "Docker", "Vercel", "Figma", "Jest"],
}

export default function Page() {
  return (
    <div className="relative isolate overflow-x-clip bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_15%_-10%,color-mix(in_oklch,var(--color-primary)_20%,transparent),transparent),radial-gradient(45rem_35rem_at_90%_0%,color-mix(in_oklch,var(--color-chart-2)_16%,transparent),transparent)]" />

      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#" className="inline-flex items-center gap-2">
            <span className="rounded-md bg-primary/15 p-1 text-primary">
              <Sparkles />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">Alex Rivera</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger
                  className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                  aria-label="Open navigation menu"
                >
                  <Menu />
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <SheetTitle className="font-heading">Navigate</SheetTitle>
                  <div className="mt-6 flex flex-col gap-3">
                    {navLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 lg:gap-20 lg:px-8 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit gap-2 rounded-full px-4 py-1">
              <Code2 />
              Building thoughtful digital products
            </Badge>

            <div className="flex flex-col gap-4">
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Full Stack Developer crafting high-impact web experiences.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                I design and build performant web platforms with a strong focus on product clarity,
                accessibility, and delightful interaction design.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="#projects" className={cn(buttonVariants())}>
                View projects
                <ArrowUpRight data-icon="inline-end" />
              </Link>
              <Link href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
                Let&apos;s collaborate
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tooltip>
                <TooltipTrigger
                  render={<Link href="https://github.com" target="_blank" rel="noreferrer" />}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                  aria-label="GitHub profile"
                >
                  <Github />
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Link href="https://linkedin.com" target="_blank" rel="noreferrer" />}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Link href="mailto:alex@example.com" />}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                  aria-label="Send email"
                >
                  <Mail />
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <Card className="border-border/70 bg-card/75 backdrop-blur">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="size-14">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" alt="Alex Rivera" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <CardTitle className="font-heading">Alex Rivera</CardTitle>
                <CardDescription>Colombo, Sri Lanka</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge>8+ years experience</Badge>
                <Badge variant="secondary">Open to remote work</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                I partner with teams to transform ideas into resilient products with maintainable
                codebases and measurable business outcomes.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary/15 p-2 text-primary">
              <BriefcaseBusiness />
            </span>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">About</h2>
          </div>
          <Card>
            <CardContent className="pt-6 text-base text-muted-foreground">
              I enjoy blending product strategy with engineering discipline. My workflow starts with
              understanding user problems, then iterating quickly through interface systems and
              backend architecture that can scale with business growth.
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary/15 p-2 text-primary">
              <Code2 />
            </span>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Skills</h2>
          </div>

          <Tabs defaultValue="frontend" className="flex flex-col gap-4">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tooling">Tooling</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-0">
              <Card>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {skillGroups.frontend.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="backend" className="mt-0">
              <Card>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {skillGroups.backend.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tooling" className="mt-0">
              <Card>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {skillGroups.tooling.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary/15 p-2 text-primary">
              <FolderKanban />
            </span>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group border-border/70 transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link
                    href={project.link}
                    className={cn(buttonVariants({ variant: "ghost" }), "px-0 text-primary hover:text-primary")}
                  >
                    Open case study
                    <ArrowUpRight data-icon="inline-end" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Experience</h2>
          <Card>
            <CardContent className="flex flex-col gap-5 pt-6">
              {experience.map((item, index) => (
                <div key={item.role} className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-medium">{item.role}</h3>
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                  <p className="text-sm font-medium text-foreground/90">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                  {index < experience.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="pb-4">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Let&apos;s build something memorable.</CardTitle>
              <CardDescription>
                I am available for freelance projects, product collaborations, and full-time
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-3">
              <Link href="mailto:alex@example.com" className={cn(buttonVariants())}>
                Start a conversation
                <Mail data-icon="inline-end" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                View GitHub
                <Github data-icon="inline-end" />
              </Link>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>2026 Alex Rivera. Crafted with Next.js and shadcn/ui.</p>
          <p>Press D to switch theme quickly.</p>
        </div>
      </footer>
    </div>
  )
}
