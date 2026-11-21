---
name: "Pixel Apple & Scrapbook Meadow"
description: "Playful retro pixel-art browser window & apple sticker aesthetic blended with a hand-crafted scrapbook & grassy meadow paper note system for Fabiane Naura Aftani's portfolio."
---

## Overview

The **Pixel Apple & Scrapbook Meadow** design system powers Fabiane Naura Aftani's personal portfolio. It pairs the nostalgic warmth of 90s pixel-art desktop windows, crisp apple stickers, and repeating pixel-cat marquee strips with the tactile charm of tilted paper notes, Polaroid frames, sticky notes, masking tape, and a sunlit grassy meadow backdrop.

- **Brand Personality:** Playful, resourceful, energetic, and grounded — balancing technical clarity (Information Systems, Project Management, AI & Data) with approachable, hand-crafted warmth.
- **Target Audience:** Tech recruiters, hackathon/community collaborators (Google Developer Groups, AWS), startup clients, and fellow builders.
- **Design Style:** Retro Pixel-Art + Tactile Scrapbook Editorial. Crisp 2px ink outlines, hard-offset shadows, slight organic card rotations, and pixel-rendered sky/cloud/apple motifs sit over warm cream and paper surfaces.

## Colors

The palette anchors on rich **Crimson** (`#C6332A`) and warm **Cream** (`#F4ECD3`) for the retro browser frame and marquee, transitioning into sunlit **Meadow Green** (`#4C7A34`) and **Sky Blue** (`#79B4E8` → `#B8DCF8`) for the scrapbook landscape. Content lives on **Paper** (`#FAF8F3`) and **Sticky Note** (`#FFF6B8`) surfaces with high-contrast **Ink** (`#161616`).

- **Primary (`#C6332A`):** Crimson red used for the top browser frame, "PORTFOLIO" display lettering, pixel-cat marquee dividers, and primary highlights.
- **Secondary (`#4C7A34`):** Lush meadow green anchoring the About Me & Polaroid hillside section.
- **Tertiary (`#2F5BEA`):** Cobalt blue used for featured project cards (Kidilent), digital product tickets, and interactive links.
- **Paper & Cream (`#FAF8F3` / `#F4ECD3`):** Warm tactile surfaces for tilted scrapbook notes, Polaroid borders, and marquee strips.
- **Selection Blue (`#5A96D4`):** Used exclusively for the dashed selection bounding box and 10px solid corner handles framing key scrapbook sections.

```yaml
colors:
  primary: "#C6332A"
  on-primary: "#FFFFFF"
  secondary: "#4C7A34"
  on-secondary: "#FFFFFF"
  tertiary: "#2F5BEA"
  on-tertiary: "#FFFFFF"
  surface: "#FAF8F3"
  on-surface: "#161616"
  surface-cream: "#F4ECD3"
  on-surface-cream: "#161616"
  surface-dark: "#141414"
  on-surface-dark: "#F1F0EC"
  sticky-note: "#FFF6B8"
  on-sticky-note: "#161616"
  sky-top: "#79B4E8"
  sky-bot: "#B8DCF8"
  selection-blue: "#5A96D4"
  accent-green: "#1F9D55"
  highlight-yellow: "#FFD54A"
  highlight-mint: "#8EE59B"
  book-red: "#E8392B"
  ink: "#161616"
  ink-soft: "#4A4A4A"
  outline: "#161616"
```

## Typography

A three-font pairing balances retro pixel nostalgia, structured UI clarity, and personal handwritten warmth:

- **Silkscreen (Pixel Display):** Used for the marquee strip (`FABI`), section tags, window labels, and pixel badges.
- **Archivo (Display & UI Sans):** Used for bold uppercase/condensed headings, project titles, dates, toolkit badges, and readable body descriptions.
- **Caveat (Handwritten):** Used for the "About me" heading, personal story copy, sticky-note testimonial label, and Polaroid/scrapbook photo captions.

```yaml
typography:
  display-lg:
    fontFamily: "Archivo"
    fontSize: 64px
    fontWeight: 900
    lineHeight: 60px
    letterSpacing: -1.5px
  display-lg-mobile:
    fontFamily: "Archivo"
    fontSize: 32px
    fontWeight: 900
    lineHeight: 34px
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Archivo"
    fontSize: 36px
    fontWeight: 800
    lineHeight: 42px
    letterSpacing: -0.6px
  display-md-mobile:
    fontFamily: "Archivo"
    fontSize: 26px
    fontWeight: 800
    lineHeight: 30px
    letterSpacing: -0.4px
  headline-lg:
    fontFamily: "Caveat"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: 0px
  headline-lg-mobile:
    fontFamily: "Caveat"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: 0px
  headline-md:
    fontFamily: "Caveat"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: 0px
  title-lg:
    fontFamily: "Silkscreen"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 26px
    letterSpacing: 1px
  title-md:
    fontFamily: "Silkscreen"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0.5px
  body-lg:
    fontFamily: "Archivo"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0px
  body-md:
    fontFamily: "Archivo"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Archivo"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: 0.3px
  label-sm:
    fontFamily: "Archivo"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.2px
```

## Layout & Spacing

The layout uses a **Fluid-to-Fixed-Max-Width Grid** (max width `1160px` on desktop, `100%` with `16px–24px` page margins on mobile and tablet). Sections alternate full-bleed color/meadow bands with framed scrapbook containers so every chapter has distinct visual rhythm without horizontal overflow.

- **Breakpoints:** Mobile (`375px–759px`, single column, tilted cards capped at `±1.5deg` to prevent clipping), Tablet (`760px–999px`, 2-column grids), Desktop (`1000px–1440px`, multi-column asymmetric scrapbook spreads).
- **Spacing Rhythm:** Built on a strict `4px` / `8px` grid.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 64px
  page-margin: 24px
```

## Elevation & Depth

Depth is **tactile and graphic**, never soft-blurred glassmorphism:

- **Hard-Offset Ink Shadows:** Scrapbook cards, Polaroids, sticker buttons, and digital product tickets use crisp `2px` `#161616` borders paired with solid offset shadows (`4px 4px 0 #161616` or `6px 6px 0 #161616`).
- **Paper & Tape Layering:** Cards sit at slight organic angles (`-3.5deg` to `+3deg`) with semi-translucent masking tape strips (`rgba(255,255,255,0.65)`) or dashed selection bounding boxes (`1.5px dashed #5A96D4` with `10px` solid corner squares).
- **No Blur / No Glassmorphism:** Surfaces remain opaque and crisp to preserve the retro pixel and paper-craft aesthetic.

## Shapes

Shapes contrast **crisp pixel geometry** (sharp `0px` corners on pixel clouds, apples, selection handles, and marquee icons) with **soft retro browser frames** (`18px` radius) and **tactile paper cards** (`4px–12px` radius).

```yaml
rounded:
  none: 0px
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 18px
  full: 9999px
```

## Motion & Micro-interaction

Motion feels crisp, playful, and tactile, honoring `prefers-reduced-motion`:

- **Marquee Loop:** The `FABI` + pixel-cat cream strip glides continuously (`40s linear infinite`), pauses on hover, and stops completely when reduced motion is preferred.
- **Hover Lift & Straighten:** Tilted paper cards and sticker buttons gently straighten (`rotate(0deg) translateY(-3px)`) on hover with a fast `200ms` ease curve.
- **Modal / Lightbox Enter:** Scrapbook year books and photo lightboxes pop in cleanly with `transform` and `opacity` only.

```yaml
motion:
  state-change:
    duration: 180ms
    delay: 0ms
    timingFunction: cubic-bezier(0.65, 0.05, 0.25, 1)
  surface-enter:
    duration: 260ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 160ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Tone of Voice:** Warm, curious, and builder-focused — written in first person ("Hello everyone, I'm Fabiane Naura Aftani") for personal notes, and crisp outcome-driven bullets for projects.
- **Capitalisation:** Title Case for section headers and project names; lowercase handwritten style for casual scrapbook captions (`"what they said"`, `"asking a question at Google I/O"`).
- **Action Labels:** Clear, direct verb phrases (`View project`, `Get Thesis — IDR 80K`, `Open 2026 Book`, `Email Fabi`).
- **Numbers & Dates:** Consistent `YYYY` or `YYYY – Now` year spans and `IDR 80K` / `IDR 150K` pricing format.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html`: `chip-action`, `chip-input`, `chip-with-icon`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
