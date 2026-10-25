import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(`${process.cwd()}/${path}`, "utf8");
const workflow = read(".github/workflows/deploy.yml");
const config = read("vite.config.ts");

describe("GitHub Pages hosting", () => {
  it("deploys main using Bun", () => {
    expect(workflow).toContain("branches: [main]");
    expect(workflow).toContain("uses: oven-sh/setup-bun@v2");
    expect(workflow).toContain("bun-version: latest");
  });
  it("installs with frozen lockfile, falls back, then builds with bun", () => {
    expect(workflow).toContain("bun install --frozen-lockfile || bun install");
    expect(workflow).toContain("run: bun run build");
  });
  it("grants Pages deployment permissions", () => {
    for (const permission of ["contents: read", "pages: write", "id-token: write"]) {
      expect(workflow).toContain(permission);
    }
  });
  it("uploads dist and deploys through the official Pages actions", () => {
    expect(workflow).toContain("uses: actions/upload-pages-artifact@v3");
    expect(workflow).toContain("path: dist");
    expect(workflow).toContain("uses: actions/deploy-pages@v4");
  });
  it("sets the requested custom domain", () => {
    expect(read("public/CNAME").trim()).toBe("ferrer-its.com");
  });
  it("copies index.html to the Pages 404 fallback", () => {
    expect(workflow).toContain("cp dist/index.html dist/404.html");
  });
  it("keeps the Vite base at the domain root", () => {
    expect(config).toContain('vite: { base: "/" }');
  });
  it("includes a nojekyll marker in the deployed artifact", () => {
    expect(read("public/.nojekyll")).toBe("");
    expect(workflow).toContain("cp public/.nojekyll dist/.nojekyll");
  });
  it("prerenders each existing public route and removes server output from the artifact", () => {
    for (const path of ["/", "/spannzangen", "/kontakt"]) {
      expect(config).toContain(`{ path: "${path}" }`);
    }
    expect(config).toContain("autoStaticPathsDiscovery: false");
    expect(workflow).toContain('mv dist/client "$RUNNER_TEMP/ferrer-pages"');
    expect(workflow).toContain("rm -rf dist");
  });
});