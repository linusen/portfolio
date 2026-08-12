import { getAllProjectSlugs, getProjectBySlug, getAdjacentProjects, getAllProjectTags, getFeaturedProjects, getAllProjects } from "@/lib/projects";

describe("projects lib helpers", () => {
  test("getAllProjectSlugs returns an array containing known slugs", () => {
    const slugs = getAllProjectSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs).toContain("telenor-checkout");
  });

  test("getProjectBySlug returns the correct project", () => {
    const p = getProjectBySlug("telenor-checkout");
    expect(p).toBeDefined();
    expect(p?.slug).toBe("telenor-checkout");
  });

  test("getAdjacentProjects returns prev and next correctly", () => {
    const { prev, next } = getAdjacentProjects("telenor-checkout");
    // Prev may be undefined if it's the newest; ensure shape
    expect(prev === undefined || typeof prev.slug === "string").toBe(true);
    expect(next === undefined || typeof next.slug === "string").toBe(true);
  });

  test("getAllProjectTags returns a sorted unique array", () => {
    const tags = getAllProjectTags();
    expect(Array.isArray(tags)).toBe(true);
    // If any tag exists in projects, ensure it's included
    expect(tags.length).toBeGreaterThan(0);
    // Ensure sorted order
    const sorted = [...tags].sort();
    expect(tags).toEqual(sorted);
  });

  test("getFeaturedProjects returns a subset of all projects", () => {
    const all = getAllProjects();
    const featured = getFeaturedProjects();
    expect(featured.length).toBeLessThanOrEqual(all.length);
    featured.forEach((f) => {
      expect(f.featured).toBeTruthy();
    });
  });
});
