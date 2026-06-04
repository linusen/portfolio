import type { Project } from "@/lib/types";
/**
 * Add a project here. Slug becomes the URL: /projects/your-slug
 */
export const projects: Project[] = [
  {
    slug: "telenor-guided-buying",
    title: "Guided Buying Experience — Telenor",
    year: "2025",
    status: "shipped",
    role: "UX Designer (with 1 UI designer, 2 developers)",
    tools: "Figma, Maze, ProtoPie",
    timeline: "Four months",
    oneLiner:
      "A guided buying flow built around conversation design, helping customers choose a phone with confidence.",
    context:
      "New customers often struggle to understand products and pricing well enough to choose the right solution online. We set out to surface contextual guidance at the right moment and translate internal selling points into real customer benefits, making the experience easier to navigate.",
    work: `We tested and iterated at each phase to make sure we were solving the right problem first.

**Discovery.** Kicked off with a cross-functional workshop where three themes surfaced: product configuration, pricing confusion, and the gap between buying in-store versus online.

**Define.** Clustered the workshop findings into How Might We questions, which pointed to one clear direction: customers need more guidance when navigating products and pricing online. That led us to a guided digital experience, drawing on the dialogue customers have in physical stores.

**Ideate.** Sketched solution directions one decision at a time, replicating the kind of conversation a good store assistant would have, rather than overwhelming users with options upfront.

**Design.** Translated the concept into a tangible experience focused on clarity and guidance. Help sits exactly where decisions happen, informative rather than promotional, and available in both text and video so users engage in the way that suits them.`,
    media: [
      {
        src: "/images/telenor-guided-design.png",
        alt: "Two phone screens showing the guided iPhone 16 Pro buying flow with colour and storage selection",
        caption: "The guided flow. One decision at a time, with help surfaced right where the choice happens.",
      },
      {
        src: "/images/telenor-guided-help.png",
        alt: "Phone screen showing contextual guide element with text and video help during product selection",
        caption: "Contextual guidance placed at the decision point, informative not promotional, in text and video.",
      },
    ],
    reflection:
      "After testing, it was clear that timely, relevant guidance makes a real difference when people face complex choices. The win was placing help exactly where decisions happen, and letting people take it in whichever way suited them.",
    links: [
      { label: "Interactive prototype", url: "https://cloud.protopie.io/p/your-prototype-id" },
    ],
    tags: ["UX", "Figma", "Maze", "ProtoPie"],
    featured: true,
  },
  {
    slug: "virklund-sport",
    title: "Reimagining Virklund Sport",
    year: "2020",
    status: "shipped",
    role: "Led UX · student project with two others",
    tools: "Figma, InDesign",
    timeline: "Eight weeks",
    oneLiner:
      "Rebuilding a sports-flooring catalogue so architects can specify products without calling for answers it should already have.",
    context:
      "Virklund Sport has made indoor sports flooring since the 1960s. The products are good; the catalogue made them hard to specify. Architects need dimensions, materials, customisation options and blueprint specs to do their job, and the old catalogue didn't give them that, so they had to call Virklund for answers the catalogue should have had. We spent eight weeks fixing that, starting with the architects who use it most.",
    work: `A double diamond approach, testing and iterating at each phase to make sure we were solving the right problem first.
\`\`\`
Discover → Define → Ideate → Design
\`\`\`

**Discover.** Set out to define the target group, user needs, and the product and business benefits. Architects need dimensions, materials, customisation options and blueprint specs before they can confidently specify a product. That information existed, it just wasn't in the catalogue. We talked extensively with architects and noted exactly what they needed.

**Define.** Interviews with architects from two firms surfaced three clear needs: a more structured layout, detailed product specs (dimensions, materials, colours, 3D models), and easier ways to get in touch. Those three became the backbone of the redesign.

**Ideate.** Sketched the catalogue structure first, how it should work for the customer and what the main elements were, before touching style. Only once that was agreed did we move to colours, type, and feel. That order kept us from losing time on pixel-perfect questions before the concept was in place.

**Design.** Built high-fidelity wireframes from the insights, tested with users for another round of refinement, and aligned on the version to take forward.`,
    media: [
      {
        src: "/images/virklund-sport-introduction.jpeg",
        alt: "Catalogue welcome spread with historical photos of Virklund Sport",
        caption: "The opening spread. Sixty years of history, setting the tone before the product detail.",
      },
      {
        src: "/images/virklund-sport-contents.jpeg",
        alt: "Redesigned catalogue contents page with colour-coded product categories",
        caption: "The restructured contents page. Colour-coded categories so architects can navigate to what they need.",
      },
      {
        src: "/images/virklund-sport-specs.jpeg",
        alt: "Catalogue spread showing Pulastic flooring technical specifications and tables",
        caption: "Product specs laid out clearly, dimensions, materials, and technical data the old catalogue made architects call for.",
      },
    ],
    reflection:
      "This project made the double diamond click for me. Spending real time in discovery before jumping to solutions changed the quality of what we designed. Talking directly to architects at two firms meant the decisions had real backing, not assumptions. And the new format makes it straightforward to add products without breaking the consistency of the whole thing.",
    tags: ["UX", "Figma", "InDesign"],
    featured: true,
  },
  {
    slug: "mental-wellbeing-guidance",
    title: "Mental Wellbeing Guidance",
    year: "2021",
    status: "shipped",
    role: "UX Researcher (solo)",
    tools: "Figma, Google Meet, Trint",
    timeline: "Four weeks",
    oneLiner:
      "Four weeks of research on self-control and mental health, ending in clear directions for a client to build on.",
    context:
      "The brief was self-control and mental health, framed as: how might we create a behavior-switching app that gives people control? I led the research end to end, surveys, interviews, synthesis, recommendations. No prototype, just a clear set of next steps. It ran during the pandemic, which made \"control\" a loaded word. I worried the timing would skew everything. If anything it made the research sharper.",
    work: `Four phases, kept deliberately simple.

**Kick-start.** Defined the target group, their needs, and the product and business angles. Used the double diamond to frame the problem before chasing solutions. I started from the brief's persona, mapped assumptions about user needs, plotted them by importance, and wrote three hypotheses: that users struggle to spend time meaningfully, that they want more balance away from digital spaces, and that they want to overcome stress. Three angles on the same problem, explored broadly before narrowing.

**Fieldwork.** Triangulated quantitative and qualitative methods, surveys first, then interviews to go deeper. Survey participants were split evenly by gender, aged 28 to 36, most reporting stress once or twice a week. Phone use ranged wildly, 30 minutes to 6 hours a day. The most common effect of stress was the inability to rest, followed by lower efficiency. I kept the small-sample limitation front of mind throughout.

**Synthesis.** Built a discussion guide from the survey findings and interviewed five participants, 25 to 45 minutes each over Google Meet, transcribed with Trint. Then affinity mapping in Figma to find patterns across quotes and transcripts, and to check them against the hypotheses.

![Affinity map mapping hypotheses to user quotes, insights, and design principles](/images/mental-wellbeing-synthesis.png)

Three insights came out, each pointing to a principle:

- Daily routines crowd out time for rest. → Give users simple opportunities to reach a mindful state.
- People want to take back control of their devices, but hard restrictions backfire. → Give frequent phone users actionable self-control information, not a cutoff.
- Stressful jobs follow people home. → Prevent work stress from spilling into everyday life.

**Recommendations.** Boiled it down to three directions to take forward: how might we give users simple opportunities to reach a mindful state; how might we give frequent phone users actionable self-control information; how might we give people tools to overcome everyday stress. Each needs further research paired with stakeholder workshops.`,
    reflection:
      "We jumped in the deep end and learned to swim. My first real run through the UX research fundamentals, fast, with workshops pushing the creative side hard. I went in worried the pandemic would undermine everything, especially around control. The users proved otherwise. If I did it again I'd lean harder on triangulation, comparing interviews and surveys more closely in synthesis, which means a bigger, more varied dataset. The honest tradeoff in a four-week project.",
    tags: ["UX Research", "Figma", "Interviews"],
    featured: true,
  },
  {
    slug: "telenor-comparison",
    title: "Device Comparison — Telenor",
    year: "2024",
    status: "shipped",
    role: "UX Designer (with 1 UI designer, 1 developer)",
    tools: "Figma, Maze, ProtoPie",
    timeline: "One month",
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