# Portfolio — Next.js + shadcn/ui

A responsive, accessible personal portfolio site built with **Next.js App Router** and **shadcn/ui** (base-ui variant). Features a light/dark/system theme switcher, smooth section layout, and mobile-first navigation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router, Turbopack) |
| UI Components | shadcn/ui (base-mira style, base-ui primitives) |
| Styling | Tailwind CSS v4 with OKLCH design tokens |
| Fonts | DM Sans (body) · Space Grotesk (headings) · Geist Mono |
| Theming | next-themes |
| Icons | lucide-react |

---

## Features

- **Hero section** — headline, CTA buttons, and social icon links
- **About** — brief profile summary card
- **Skills** — tabbed view (Frontend / Backend / Tooling) with badge grid
- **Projects** — card grid with tags and case-study links
- **Experience** — timeline-style card with role/company entries
- **Contact** — gradient CTA card with email and GitHub links
- **Theme switcher** — Light / Dark / System dropdown in the nav
- **Mobile nav** — collapsible sheet menu for small screens
- **Sticky header** — blurred backdrop, responsive navigation

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  globals.css        # Design tokens (OKLCH CSS variables)
  layout.tsx         # Root layout — fonts, ThemeProvider, TooltipProvider
  page.tsx           # Portfolio page (all sections)
components/
  theme-toggle.tsx   # Light/Dark/System dropdown
  theme-provider.tsx # next-themes wrapper + keyboard hotkey (D)
  ui/                # shadcn/ui components
```

---

## Customising Content

All personal data lives at the top of [app/page.tsx](app/page.tsx) as plain arrays — no CMS or config files needed:

```ts
const projects = [ ... ]    // title, description, tags, link
const experience = [ ... ]  // role, company, period, summary
const skillGroups = { ... } // frontend | backend | tooling arrays
```

Update the name, avatar URL, and social links in the **Hero** and **Footer** sections of the same file.

---

## Adding shadcn Components

```bash
npx shadcn@latest add <component>
```

Components are placed in `components/ui/`. This project uses the **base-ui** primitive layer — use the `render` prop (not `asChild`) when composing triggers with custom elements.

---

## Theme

Press **D** anywhere on the page to quickly toggle between light and dark mode, or use the **Theme** dropdown in the navigation bar.

