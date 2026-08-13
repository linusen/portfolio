import type { Project } from "@/lib/types";
/**
 * Add a project here. Slug becomes the URL: /projects/your-slug
 */
export const projects: Project[] = [
  {
    slug: "telenor-checkout",
    title: "Checkout Flow — Telenor & CBB",
    year: "2026",
    status: "in progress",
    role: "UX Designer (with 1 UI designer, 2 developers)",
    tools: "Figma, Capturi, Maze",
    timeline: "2024, launching July 2026",
    oneLiner:
      "End-to-end checkout redesign for two telecom brands, built on one shared system.",
    context:
      "The existing checkout was structurally broken. Users couldn't go back without starting over, and when something failed late in the flow, there was no recovery path, just a dead end and a lost order. The brief was to fix it across both Telenor and CBB, on a shared platform, without either brand feeling compromised.",
    work: `Every phase fed directly into the system I built.

**Four methods, one picture.** Think-aloud tests with 4 users, a store safari at Telenor Fields, call log analysis via Capturi, and funnel data from analytics. Each one confirmed the same structural problems from a different angle. A notable finding from the store visit: customers were starting the online checkout, getting confused, and coming into the store to finish it in person.

**Four pain points, four principles.** No way back, delivery date confusion, a progress bar that didn't track actual progress, and a hover dependency that broke the flow on mobile. Against those, four design principles became the filter for every decision that followed: simplicity, personalisation, WCAG 2.1 AA, and no hover dependency.

**The chapter model.** The fix wasn't a patch job. Individual solutions wouldn't hold without a proper system underneath. I mapped out a chapter model: Cart, Contact, Setup, Delivery, Summary, Payment, Receipt. Progress shows at chapter level only. That kept the bar honest without overwhelming users with granularity.

**Rules, not screens.** Four consistent navigation labels, used everywhere. Four modal types, each with a defined purpose and layout pattern: informative, action-oriented, guiding, and minibasket. Validation that only fires on forward movement, never preemptively. Every screen in the flow built on the same rules.`,

     media: [
       {
         src: "/images/checkout-layout.png",
         alt: "Diagram showing the checkout chapter structure: Cart, Contact, Setup, Delivery, Summary, Payment, Receipt",
         caption: "The chapter model. Progress at the top level only, so the bar stays meaningful.",
       },
       {
         src: "/images/telenor-checkout-modals.png",
         alt: "Four modal types shown side by side: informative, action-oriented, guiding, and minibasket",
         caption: "Four modal types, each with a fixed purpose and layout pattern.",
       },
     ],
    reflection:
      "Building a system rather than patching symptoms was the right call. Two brands, one codebase, zero compromises on either side. The proof will be in the numbers once it's live.",
    tags: ["UX", "Figma", "Capturi", "Maze"],
    featured: true,
  },
  {
    slug: "telenor-guided-buying",
    title: "Guided Buying Experience — Telenor",
    year: "2026",
    status: "in progress",
    role: "UX Designer (with 1 UI designer, 2 developers)",
    tools: "Figma, Maze, ProtoPie",
    timeline: "Four months",
    oneLiner:
      "A guided buying flow built around conversation design, helping customers choose a phone with confidence.",
    context:
      "New customers often struggle to understand products and pricing well enough to choose the right solution online. Store visits showed the same pattern in person, staff spend real time helping people translate \"how many photos do you take\" into \"how much storage.\" We set out to bring that same guidance online, right at the moment a decision needs to be made.",
    work: `The numbers backed up what we were seeing in stores. 47% of buyers started configuring a phone and never reached the basket, with the steepest drop at the subscription choice, the least tangible decision in the flow.

![Research: where the decision stalls](/images/guided-research.png "47% of buyers started configuring a phone and never reached the basket, with the steepest drop at the subscription choice.")

We mapped that drop-off to concrete decision points, then designed a contextual guide instead of a separate advisory page.

**Three themes from one workshop.** Kicked off with a cross-functional session that surfaced product configuration, pricing confusion, and the gap between buying in-store versus online.

**Customers need a guide, not a catalogue.** Clustered the workshop findings into How Might We questions, and they all pointed the same way. The answer was a guided digital experience, drawing on the dialogue customers have in physical stores.

![Process: placing help at the decision](/images/guided-process.png "Four steps, from mapping drop-off points to validating the guide with real shoppers.")

**One decision at a time.** Sketched solution directions that replicate the kind of conversation a good store assistant would have, rather than overwhelming users with options upfront.

**Help where the choice happens.** Translated the concept into a tangible experience focused on clarity. Guidance is informative rather than promotional, and available in both text and video so users engage in the way that suits them.

**Tested with real hesitation.** Ran the flow with nine shoppers on the live configuration steps, not in isolation. The core idea held. People who were unsure how to decide said being guided through it felt like "a genuinely good service." Testing also surfaced sharper problems: two of eight mistook an included insurance option for an ad and skipped past it, and five of nine never noticed the running price total as choices added up. Several also wanted to compare total cost against competitors before buying, something the flow doesn't support yet.

![Annotated prototype from testing](/images/guided-wireframe.png "Real annotations from the nine-person test round, layered on the working prototype.")`,
media: [
  {
    src: "/images/guided-design.png",
    alt: "Two phone screens showing the guided iPhone 16 Pro buying flow with colour and storage selection",
    caption: "The guided flow. One decision at a time, with help surfaced right where the choice happens.",
  },
  {
    src: "/images/guided-help.png",
    alt: "Phone screen showing contextual guide element with text and video help during product selection",
    caption: "The same guide, expanded into video for people who'd rather watch than read.",
  },
  {
    src: "/images/prototype-flow-2.gif",
    alt: "Prototype flow walkthrough",
    caption: "The prototype in motion, the full guided flow from selection to checkout.",
  },
],
reflection:
  "Testing validated the core bet. People wanted to be guided, and said so directly. But it also surfaced a real gap: people kept asking to compare total cost against competitors before committing, and the flow doesn't let them do that today. Smaller misses stacked up too, an insurance option read as an ad, a running price total that five of nine people never even noticed. The win was proving guidance belongs at the decision point. What's left is closing the specific holes testing found before calling it done.",
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

**What architects actually need.** Set out to define the target group, user needs, and the product and business benefits. The answer: dimensions, materials, customisation options and blueprint specs, before anyone can confidently specify a product. That information existed, it just wasn't in the catalogue. We talked extensively with architects and noted exactly what was missing.

**Three needs became the backbone.** Interviews with architects from two firms surfaced a more structured layout, detailed product specs (dimensions, materials, colours, 3D models), and easier ways to get in touch. The whole redesign hangs on those three.

**Structure before style.** Sketched how the catalogue should work for the customer and what the main elements were. Only once that was agreed did we move to colours, type, and feel. That order kept us from losing time on pixel-perfect questions before the concept was in place.

**Tested, refined, agreed.** Built high-fidelity wireframes from the insights, ran another round of user testing, and aligned on the version to take forward.`,
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
    role: "UX Researcher · solo student project",
    tools: "Figma, Google Meet, Trint",
    timeline: "Four weeks",
    oneLiner:
      "Four weeks of research on self-control and mental health, ending in clear directions for a client to build on.",
    context:
      "The brief was self-control and mental health, framed as: how might we create a behavior-switching app that gives people control? I led the research end to end, surveys, interviews, synthesis, recommendations. No prototype, just a clear set of next steps. It ran during the pandemic, which made \"control\" a loaded word. I worried the timing would skew everything. If anything it made the research sharper.",
    work: `Four phases, kept deliberately simple.

**Three hypotheses, one problem.** Defined the target group, their needs, and the product and business angles. Used the double diamond to frame the problem before chasing solutions. I started from the brief's persona, mapped assumptions about user needs, plotted them by importance, and wrote the hypotheses: that users struggle to spend time meaningfully, that they want more balance away from digital spaces, and that they want to overcome stress. Explored broadly before narrowing.

**Stress was the common thread.** Triangulated quantitative and qualitative methods, surveys first, then interviews to go deeper. Survey participants were split evenly by gender, aged 28 to 36, most reporting stress once or twice a week. Phone use ranged wildly, 30 minutes to 6 hours a day. The most common effect of stress was the inability to rest, followed by lower efficiency. I kept the small-sample limitation front of mind throughout.

**Three insights, three principles.** Built a discussion guide from the survey findings and interviewed five participants, 25 to 45 minutes each over Google Meet, transcribed with Trint. Then affinity mapping in Figma to find patterns across quotes and transcripts, and to check them against the hypotheses.

![Affinity map mapping hypotheses to user quotes, insights, and design principles](/images/mental-wellbeing-synthesis.png)

Each insight pointed to a principle:

- Daily routines crowd out time for rest. → Give users simple opportunities to reach a mindful state.
- People want to take back control of their devices, but hard restrictions backfire. → Give frequent phone users actionable self-control information, not a cutoff.
- Stressful jobs follow people home. → Prevent work stress from spilling into everyday life.

**Directions, not designs.** Boiled it down to three directions to take forward: how might we give users simple opportunities to reach a mindful state; how might we give frequent phone users actionable self-control information; how might we give people tools to overcome everyday stress. Each needs further research paired with stakeholder workshops.`,
    reflection:
      "We jumped in the deep end and learned to swim. My first real run through the UX research fundamentals, fast, with workshops pushing the creative side hard. I went in worried the pandemic would undermine everything, especially around control. The users proved otherwise. If I did it again I'd lean harder on triangulation, comparing interviews and surveys more closely in synthesis, which means a bigger, more varied dataset. The honest tradeoff in a four-week project.",
    tags: ["UX Research", "Figma", "Interviews"],
    featured: false,
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

**Do people even compare?** A short survey to validate that one assumption. They do, and confirming the behaviour existed earned the right to build anything around it.

**Stickies on a feasibility matrix.** Mapped the findings with stakeholders, each sticky a possible direction, to agree fast on where to focus.

**Three surfaces, two directions, one winner.** Sketched a campaign page, a comparison modal, and a product detail page. Iterative hall tests with a small group narrowed it to two directions, which we then A/B tested at scale. Testing shaped the details: key specs highlighted for a faster scan, CTA kept sticky at the top.

**Built from what the testing said.** The high-fidelity prototype came straight from the test results, and the team aligned on the version to ship.`,
    media: [
      {
        src: "/images/device-comparison-select.png",
        alt: "Phone list with compare checkboxes, two phones ticked, and a sticky compare bar at the top.",
        caption: "The way in. Tick the phones you're weighing up, then compare.",
      },
      {
        src: "/images/device-comparison-tool.png",
        alt: "Two phones compared side by side with an empty third slot, specs lined up and differences highlighted.",
        caption: "The comparison itself. Up to three phones, key specs lined up, differences highlighted so the choice is quick.",
      },
    ],
    metrics: [
      { value: "+256%", label: "Conversion lift when comparison was used" },
      { value: "93.51%", label: "Of orders contained the compared device" },
    ],
    reflection:
      "Validating the behaviour up front, before designing anything, is what kept a one-month timeline honest. The temptation is always to start sketching. The survey earned us the right to.",
    tags: ["UX", "Figma", "Maze", "ProtoPie"],
    links: [
      { label: "See it live", url: "https://www.telenor.dk/shop/mobiler/" },
    ],
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

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const all = getAllProjects();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: all[index - 1],
    next: all[index + 1],
  };
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