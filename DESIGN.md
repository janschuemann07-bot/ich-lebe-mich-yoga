---
name: Scalantec Engineering
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#0061a5'
  on-secondary: '#ffffff'
  secondary-container: '#0095f8'
  on-secondary-container: '#002b4e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#9fcaff'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#00497e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  electric-blue: '#0099FF'
  soft-gray: '#EFEFEF'
  deep-gray: '#4D4D4D'
  charcoal: '#282828'
  error-red: '#D53B41'
  warning-amber: '#F6AB2A'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 1.3em
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 1.3em
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 1.2em
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 1.3em
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 1.3em
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 1.4em
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 1.4em
    letterSpacing: -0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 1.2em
    letterSpacing: 0.01em
  stats-display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 1.1em
    letterSpacing: -0.04em
spacing:
  margin-mobile: 1rem
  margin-desktop: 5rem
  gutter: 1.5rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

The design system embodies a **Technical Minimalism** aesthetic, reflecting a brand that is professional, outcome-oriented, and direct. It moves away from the "fluff" of traditional agencies, adopting a "tech-native" visual language that prioritizes clarity and efficiency over decoration.

The system is defined by high-contrast typography, a strict monochromatic base, and a "form follows function" philosophy. The emotional response should be one of reliability and architectural precision—positioning the product as a robust "sales system" rather than a service.

- **Minimalism:** Use expansive whitespace to frame data and outcomes.
- **Corporate / Modern:** Borrow the structural integrity of enterprise SaaS while maintaining the speed and sharpness of a modern startup.
- **Directness:** Every element on the screen must serve a purpose; if it doesn't contribute to the user's understanding of the outcome, it is removed.

## Colors

The palette is intentionally restrained to maximize the impact of outcomes and actions. 

- **Dominant Schwarz (#000000) & Weiß (#FFFFFF):** These form the core of the high-contrast interface. Schwarz is used for all primary text and headlines to command authority.
- **Electric Blau (#0099FF):** Reserved strictly for interactive elements (CTAs, links) and specific data highlights. This color acts as the "ignition" in the system.
- **Hellgrau (#EFEFEF):** Used for structural grounding. It differentiates sections, background containers, and cards without introducing visual noise.
- **Functional Accents:** Rot (#D53B41) and Bernstein (#F6AB2A) are used only for status-level communication (errors or warnings) and should never be used decoratively.

## Typography

The typography is the most distinctive element of the design system. It uses **Inter** (as the fallback for TikTok Sans) with aggressive adjustments to create a dense, "engineered" look.

- **Tight Spacing:** A universal negative letter-spacing (-0.03em for headlines) creates a premium, tech-focused density.
- **Compact Heights:** Line heights are kept tight (1.3em - 1.4em) to ensure text blocks feel unified and impactful.
- **Scale:** A large base font size (18px) communicates confidence.
- **Emphasis:** Numerical data and key results should use the `stats-display` style to make the "outcome-first" philosophy immediately visible.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (max-width 1280px) and a **Fluid Grid** on mobile.

- **Rhythm:** Use a strict 8px base grid. Vertically, spacing between sections should be generous (8rem) to allow the content to breathe, while internal component spacing should be tight to maintain the "engineered" feel.
- **Margins:** Large desktop margins (5rem) focus the user's attention on the central narrative.
- **Breakpoints:**
  - **Mobile (<768px):** 4-column grid, 1rem margins.
  - **Tablet (768px - 1024px):** 8-column grid, 2rem margins.
  - **Desktop (>1024px):** 12-column grid, 5rem margins.

## Elevation & Depth

This design system avoids traditional shadows and skeuomorphism. Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** Use `#FFFFFF` for the main background and `#EFEFEF` for secondary sections or cards. This creates a flat, stacked hierarchy.
- **Borders:** Instead of shadows, use `0.5px` or `1px` solid borders in `#EFEFEF` to define boundaries for cards and input fields.
- **Active State Elevation:** On interaction, elements do not lift; instead, they shift in color (e.g., a button might transition from Black to Electric Blue).

## Shapes

To reinforce the "direct" and "professional" personality, the shape language is **Sharp (0px)**. 

Every UI element—from buttons and input fields to cards and images—must have 90-degree corners. This evokes a sense of architectural precision and removes any "softness" that might detract from the serious, outcome-oriented messaging. 
- **Buttons:** Sharp corners.
- **Cards:** Sharp corners with 1px `#EFEFEF` borders.
- **Tags:** Sharp corners, using `#EFEFEF` with `#4D4D4D` text.

## Components

- **Buttons:** 
  - **Primary:** Background `#000000`, Text `#FFFFFF`, Sharp corners. Heavy padding (1rem 2rem).
  - **Accent:** Background `#0099FF`, Text `#FFFFFF`, Sharp corners.
  - **Ghost:** Border `1px solid #000000`, Text `#000000`.
- **Cards (Case Studies):** 
  - Use `#FFFFFF` background with a `1px solid #EFEFEF` border.
  - Headlines within cards must be sharp and numerical (e.g., "3x ROI").
- **Input Fields:** 
  - `1px solid #000000` on focus. Default is `1px solid #EFEFEF`. 
  - Background is always `#FFFFFF`.
- **Highlight Box:**
  - Background `#EFEFEF`.
  - Use a `4px solid #0099FF` left border for "Pro-Tips" or key insights.
  - Use a `4px solid #D53B41` left border for "Anti-Features" or risks.
- **Data Tables:**
  - No vertical lines. Horizontal lines should be `0.5px solid #EFEFEF`.
  - Header row: `#000000` text, Bold, 16px.
  - Alternating row colors (Zebra striping) using `#FFFFFF` and `#EFEFEF`.