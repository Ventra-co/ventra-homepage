# Ventra Design Handoff (v1)

## 1. Design Decisions
- **Typography & Line Breaking:**
  - Applied `break-keep` and `text-balance` to headings (H1, H2) to prevent awkward orphan words and ensure balanced line breaking, particularly for Korean text.
  - Minimized manual `<br>` usage where possible, relying on CSS for responsive line breaks.
- **Section 1: Hero:**
  - Adjusted mobile typography for better legibility: H1 (44px, 1.08 line-height), Subtitle (26px, 1.35), Body (18px, 1.6).
  - Maintained desktop sizes and background overlay styling.
- **Section 2: Why This Matters:**
  - Transitioned from card-based grid (borders, shadows, white bg) to a clean, editorial information block layout.
  - Used top Navy dividers, Orange sequence numbers (01, 02), and left-aligned headers.
  - Removed constraints on the section title (`max-w-none`) to fix wrapping issues.
- **Section 3: Market View:**
  - Enhanced from a simple embedded image to a "Website Content Viewer" panel.
  - H2 and description are left-aligned. Image is placed inside a Light Slate panel with rounded corners and a subtle border.
  - Added an "원본 크게 보기 ↗" (View Original Image) link to open the original roadmap diagram in a new tab for accessibility and detail viewing.
- **Section 5: Perspective:**
  - Renamed section label from "VENTRA PERSPECTIVE" to "POINT OF VIEW".
  - Changed section title to "Ventra Perspective".

## 2. Progress Status
- ✅ **Observability, API Integration, Security:** Common `BusinessFocusTemplate.tsx` applied and refactored for Hero, Why This Matters, Market View, and Perspective sections.
- ✅ **Responsive Design:** Grid systems adapt dynamically (e.g., 3-col vs 4-col in Why This Matters) without breaking.

## 3. Next Steps
- **Focus Areas & Related Solutions:** Evaluate and refine remaining sections in the common template to match the editorial and clean aesthetic introduced in previous sections.
- **Global Typography Refinement:** Consider formalizing `word-break: keep-all`, `text-wrap: balance` for headings, and `overflow-wrap: break-word` globally rather than per-component, to ensure consistency and reduce utility class bloat.
- **Home & Solutions Pages:** Audit the main landing page and specific solution pages (UCLM, JENNIFER, SIMMS, Felice) to align with the new editorial UI patterns.
