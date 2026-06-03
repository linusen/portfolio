import type { Project } from "@/lib/types";

/**
 * Add a project here. Slug becomes the URL: /projects/your-slug
 */
export const projects: Project[] = [
  {
  slug: "telenor-comparison",
  title: "Device Comparison — Telenor",
  year: "2024",
  status: "shipped",
  role: "UX Designer (with 1 UI designer, 1 developer)",
  oneLiner:
    "A comparison tool that lets people stack phones side by side and cut through the spec noise.",
  context:
    "Part of a bigger push to turn Telenor's online shop into a flagship store experience. New customers were struggling to compare devices and find the right fit while browsing. I led the UX from discovery through to a tested prototype in one month.",
  work: `We tested at each phase to make sure we were solving the right problem before designing the solution.

**Discover.** A short survey to validate one assumption: do people actually compare phones before buying online? Confirmed the behaviour existed before building anything around it.

**Define.** Mapped the findings onto a feasibility matrix with stakeholders, each sticky a possible direction, to agree fast on where to focus.

**Ideate.** Sketched three connected surfaces: a campaign page, a comparison modal, and a product detail page. Iterative hall tests with a small group narrowed it to two directions, which we then A/B tested at scale. Testing shaped the details: key specs highlighted for a faster scan, CTA kept sticky at the top.

**Design.** Built the high-fidelity prototype from what the testing revealed, and aligned the team on the version to ship.`,
  metrics: [
    { value: "+256%", label: "Conversion lift when comparison was used" },
    { value: "93.51%", label: "Of orders contained the compared device" },
  ],
  reflection:
      "Validating the behaviour up front, before designing anything, is what kept a one-month timeline honest. The temptation is always to start sketching. The survey earned us the right to.",
  tags: ["UX", "Figma", "Maze", "ProtoPie"],
  featured: true,
},
  {
  slug: "telenor-phone-finder",
  title: "Telenor Phone Finder",
  year: "2024",
  status: "shipped",
  role: "UX Designer",
  oneLiner: "Making it easier to choose the right phone at Telenor.",
  context: "...",
  work: "...",
  tags: ["UX", "Figma"],
  featured: true,
},
  {
    slug: "pomodoro-timer",
    title: "Pomodoro Timer",
    year: "2023",
    status: "shipped",
    oneLiner: "A twenty-five minute timer that stays out of the way until you need it.",
  },
  {
    slug: "studio-site",
    title: "Studio Site",
    year: "2025",
    status: "in progress",
    role: "Design and front-end",
    oneLiner:
      "A marketing site for a ceramics studio with booking, classes, and a gallery that loads fast on older phones.",
    context:
      "My friend runs a small studio and was paying for a template site she could not edit. We agreed on something simple she could update herself, without a monthly platform fee eating into class revenue.",
    work: `I set up **Next.js** with a headless CMS so she can change copy and photos without calling me. Gallery images go through a custom loader so list pages stay light.

Booking still connects to the tool she already uses. I am wiring that flow now. Typography and color are locked. The rest is content and QA.

\`\`\`
Home → Classes → Gallery → Book
\`\`\`

She reviews changes in a staging link before anything goes live.`,
    media: [
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
        alt: "Clay bowls on wooden shelves in a studio",
        caption: "Gallery layout on a mid-range Android phone, real studio photos.",
      },
      {
        src: "https://images.unsplash.com/photo-1565193566171-7a0ee83dbe27?w=1200&q=80",
        alt: "Hands shaping clay on a pottery wheel",
        caption: "Class schedule page. Dates pull from the CMS.",
      },
    ],
    reflection:
      "The hard part was scope. She does not need a shop or a blog yet. Saying no to extras kept the timeline honest and the site maintainable.",
    tags: ["Next.js", "Sanity", "Tailwind"],
    links: [
      { label: "Staging site", url: "https://example.com" },
      { label: "Figma", url: "https://figma.com/example" },
    ],
    featured: false,
  },
  {
    slug: "neighborhood-walks",
    title: "Neighborhood Walks",
    year: "2024",
    status: "parked",
    role: "Solo build",
    oneLiner:
      "Log walks around my block with notes, photos, and a map so I remember which streets I have not tried.",
    context:
      "I kept starting walks with no record of where I had been. Notes apps felt too heavy for a five-minute loop.",
    tags: ["Next.js", "TypeScript", "Maps"],
    links: [{ label: "Source", url: "https://github.com/example/neighborhood-walks" }],
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year.localeCompare(a.year));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAllProjectTags(): string[] {
  const tags = new Set<string>();
  for (const project of projects) {
    project.tags?.forEach((tag) => tags.add(tag));
  }
  return [...tags].sort();
}
