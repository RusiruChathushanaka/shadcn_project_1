"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderKanban,
  Github,
  Sparkles,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { categoryLabels, projects, type Project } from "@/lib/projects"

const statusVariant: Record<Project["status"], "default" | "secondary" | "outline" | "destructive"> = {
  Live: "default",
  "Open Source": "secondary",
  "In Progress": "outline",
  Archived: "outline",
}

const ALL = "all"
type Filter = typeof ALL | Project["category"]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>(ALL)

  const visible =
    filter === ALL ? projects : projects.filter((p) => p.category === filter)

  const categories: Project["category"][] = ["web", "design", "tooling", "mobile"]
  const available = new Set(projects.map((p) => p.category))

  return (
    <div className="relative isolate overflow-x-clip bg-background">
      {/* background blobs */}
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
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "gap-1.5 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* page hero */}
        <section className="flex flex-col gap-4 pb-10">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary/15 p-2 text-primary">
              <FolderKanban className="size-5" />
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            All Projects
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            A collection of production products, open-source tools, and experiments I have shipped
            over the years.
          </p>

          {/* stats row */}
          <div className="mt-2 flex flex-wrap gap-6">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Live", value: projects.filter((p) => p.status === "Live").length },
              { label: "Open Source", value: projects.filter((p) => p.status === "Open Source").length },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-bold font-heading tabular-nums">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-8" />

        {/* filter chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(ALL)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === ALL
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            All ({projects.length})
          </button>
          {categories
            .filter((c) => available.has(c))
            .map((c) => {
              const count = projects.filter((p) => p.category === c).length
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {categoryLabels[c]} ({count})
                </button>
              )
            })}
        </div>

        {/* project grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
            >
              <Card className="flex flex-col overflow-hidden border-border/70 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl h-full">
                {/* cover image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted/50">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* status badge pinned bottom-left of image */}
                  <div className="absolute bottom-3 left-3">
                    <Badge variant={statusVariant[project.status]} className="backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>
                  {/* year badge pinned top-right */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="border-white/30 bg-black/30 text-white backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-heading text-xl leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-1.5 pb-4 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </CardContent>

                <CardFooter className="pt-0 pb-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="size-3.5" />
                    {categoryLabels[project.category]}
                  </span>
                  <span className="flex items-center gap-2">
                    {project.githubUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(project.githubUrl, "_blank", "noreferrer")
                        }}
                        className="hover:text-foreground transition-colors"
                        role="button"
                        aria-label="GitHub"
                      >
                        <Github className="size-3.5" />
                      </span>
                    )}
                    {project.liveUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(project.liveUrl, "_blank", "noreferrer")
                        }}
                        className="hover:text-foreground transition-colors"
                        role="button"
                        aria-label="Live site"
                      >
                        <ExternalLink className="size-3.5" />
                      </span>
                    )}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-20 text-center text-muted-foreground">
            <FolderKanban className="size-10 opacity-30" />
            <p className="text-lg font-medium">No projects in this category yet.</p>
          </div>
        )}
      </main>

      <footer className="border-t border-border/60 mt-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>© 2026 Alex Rivera.</p>
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}
