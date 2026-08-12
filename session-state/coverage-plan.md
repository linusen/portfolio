# Coverage plan — prioritized test targets

Generated: 2026-08-12T15:17:53+02:00

Top targets (prioritised for user-facing impact and testability):

1. ProjectDetail (src/components/ProjectDetail.tsx)
   - Rationale: Central project page renderer with conditional sections (media, metrics, links, prev/next) and markdown rendering; exercise many render paths.
   - Estimated effort: large (5+ tests)

2. ProjectList (src/components/ProjectList.tsx)
   - Rationale: Tag filtering logic and rendering edge cases (no tags, no results); client stateful component.
   - Estimated effort: medium (3-5 tests)

3. MarkdownContent (src/components/MarkdownContent.tsx)
   - Rationale: Custom markdown components, image fallback handling, and paragraph vs image-only behaviour.
   - Estimated effort: medium (3-5 tests)

4. proxy middleware (src/proxy.ts)
   - Rationale: Access gate logic for protected slugs, token handling and rewrite/redirect behaviour; critical for gated content.
   - Estimated effort: medium (3-5 tests)

5. lib/projects utilities (src/lib/projects.ts)
   - Rationale: Data helpers (sorting, featured filter, adjacent lookup, tag aggregation) — small pure functions easy to unit test.
   - Estimated effort: small (1-2 tests)

Other useful targets:
- ProjectCard (small): ensure link and tag rendering (small)
- StatusTag (small): status-to-label mapping (small)
- API route: app/api/gate/route.ts (small–medium): gate endpoint behaviour
- Pages (app/projects/page.tsx, app/projects/[slug]/page.tsx): integration tests or snapshot tests to ensure composition

Suggested minimal plan:
- Write focused unit tests for the top 5 targets above.
- Use React Testing Library + Jest (or existing test stack) to mount components and assert DOM and behaviour.
- Mock Next.js image/link/navigation where needed; unit-test proxy logic with mocked NextRequest/NextResponse.

Estimated total effort: medium (approx 12–18 tests across components)

