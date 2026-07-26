# Ventra Project - Agent Guidelines

## 1. Common Template Considerations (`BusinessFocusTemplate.tsx`)
- **Strict Adherence to Structure:** `BusinessFocusTemplate.tsx` is heavily used across multiple pages (Observability, API Integration, Security). Any structural or styling changes made here will impact all dependent pages. 
- **Props & Data Injection:** Do not alter the props interfaces or data structures unless explicitly requested. Components rely on specific keys (`hero`, `whyThisMatters`, `evolutionMarketView`, `focusAreas`, `perspective`, `relatedSolutions`).
- **Responsive Logic:** Preserve dynamic grid logic (e.g., `whyThisMatters.cards.length === 4`). Ensure that desktop (3 or 4 columns) and mobile (1 column) layouts are thoroughly tested.

## 2. Code Modification Rules
- **Typography & Line Breaking (Korean Text):** 
  - Use `break-keep` to prevent Korean words from splitting across lines.
  - Use `text-balance` on headings (`h1`, `h2`, `h3`) for aesthetically pleasing line breaks.
  - Avoid adding manual `<br>` tags unless absolutely necessary for a specific visual outcome on a specific breakpoint (e.g., `<br className="hidden md:block" />`).
- **UI/UX Consistency (Editorial Design):**
  - Favor clean, editorial layouts over heavily boxed/shadowed cards.
  - Use the established color tokens: Primary (Navy), Accent (Orange), and Background Surface (Light Slate).
  - Ensure images maintain their aspect ratio (`object-contain`, `h-auto`) and are not cropped using `object-cover` unless specifically designed as a background hero.
- **Isolation of Changes:** When asked to modify a specific section (e.g., Market View), do NOT refactor other sections, change global CSS, or alter unrelated pages (like Business Building).

## 3. Verification Procedures
- **Read Before Edit:** Always use tools like `view_file` or `cat`/`grep` to inspect the exact JSX structure and class names before attempting a modification. 
- **Targeted Edits:** Use precise string replacements or custom Node.js script replacements (`fs.readFileSync` + regex) to patch specific sections without disrupting the rest of a large file.
- **Build Checks:** After any component or page modification, run `npm run build` to verify there are no TypeScript errors or missing imports.
- **Preview Checks:** Restart the dev server (`npm run dev`) if necessary and visually confirm that the changes behave correctly on both desktop and mobile viewports.
