import { notFound } from "next/navigation"
import { getProject, projects } from "@/lib/projects"
import { ProjectDetailUI } from "./_components/project-detail-ui"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return <ProjectDetailUI project={project} otherProjects={otherProjects} />
}
