"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { categoryLabels, type Project } from "@/lib/projects"

export function ProjectDetailUI({
  project,
  otherProjects,
}: {
  project: Project
  otherProjects: Project[]
}) {
  return (
    <div className="relative isolate overflow-x-clip bg-background">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_15%_-10%,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent),radial-gradient(45rem_35rem_at_90%_0%,color-mix(in_oklch,var(--color-chart-2)_14%,transparent),transparent)]" />

      {/* header */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="rounded-md bg-primary/15 p-1 text-primary">
              <Sparkles className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">Alex Rivera</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "gap-1.5 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-4" />
              All Projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-foreground">{project.title}</span>
        </nav>

        {/* hero */}
        <section className="mb-12 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{categoryLabels[project.category]}</Badge>
              <Badge
                variant={
                  project.status === "Live"
                    ? "default"
                    : project.status === "Open Source"
                    ? "secondary"
                    : "outline"
                }
              >
                {project.status}
              </Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground italic">{project.tagline}</p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants())}
                >
                  Live Demo
                  <ExternalLink className="size-4" />
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  View Source
                  <Github className="size-4" />
                </Link>
              )}
            </div>
          </div>

          {/* metrics card */}
          {project.metrics && (
            <Card className="border-border/70 bg-card/75 backdrop-blur">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/15 p-1.5 text-primary">
                    <TrendingUp className="size-4" />
                  </span>
                  <CardTitle className="font-heading text-base">Outcomes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                    <span className="font-heading text-xl font-bold tabular-nums">{m.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </section>

        {/* cover image */}
        <div className="relative mb-14 h-72 w-full overflow-hidden rounded-2xl bg-muted/50 sm:h-96 lg:h-[480px]">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30" />
        </div>

        {/* content grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* left column */}
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </section>

            <Separator />

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Key Features</h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Engineering Challenges
              </h2>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6 text-muted-foreground leading-relaxed">
                  {project.challenges}
                </CardContent>
              </Card>
            </section>

            <Separator />

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
            </section>
          </div>

          {/* right sidebar */}
          <aside className="flex flex-col gap-6">
            <Card className="border-border/70">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/15 p-1.5 text-primary">
                    <Code2 className="size-4" />
                  </span>
                  <CardTitle className="font-heading text-base">Tech Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-base">Links</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full justify-start gap-2"
                    )}
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                    <ArrowUpRight className="ml-auto size-3.5" />
                  </Link>
                ) : (
                  <div
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full justify-start gap-2 opacity-40 cursor-not-allowed pointer-events-none"
                    )}
                  >
                    <ExternalLink className="size-4" />
                    No live demo
                  </div>
                )}
                {project.githubUrl ? (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full justify-start gap-2"
                    )}
                  >
                    <Github className="size-4" />
                    Source Code
                    <ArrowUpRight className="ml-auto size-3.5" />
                  </Link>
                ) : (
                  <div
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full justify-start gap-2 opacity-40 cursor-not-allowed pointer-events-none"
                    )}
                  >
                    <Github className="size-4" />
                    Private repo
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-base">Details</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 text-sm">
                {[
                  { label: "Year", value: project.year },
                  { label: "Category", value: categoryLabels[project.category] },
                  { label: "Status", value: project.status },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-medium">{row.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* more projects */}
        {otherProjects.length > 0 && (
          <section className="mt-20 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">More Projects</h2>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "gap-1.5 text-muted-foreground"
                )}
              >
                View all
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
                >
                  <Card className="overflow-hidden border-border/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-40 w-full overflow-hidden bg-muted/50">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="font-heading text-base leading-tight group-hover:text-primary transition-colors">
                          {p.title}
                        </CardTitle>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                      <CardDescription className="text-xs line-clamp-2">
                        {p.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border/60 mt-12">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>© 2026 Alex Rivera.</p>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            ← All projects
          </Link>
        </div>
      </footer>
    </div>
  )
}
