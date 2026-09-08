---
name: Sharad Sholapith
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1d1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353b'
  on-surface: '#e2e2ea'
  on-surface-variant: '#e1bfb9'
  inverse-surface: '#e2e2ea'
  inverse-on-surface: '#2e3037'
  outline: '#a88a85'
  outline-variant: '#59413d'
  surface-tint: '#ffb4a9'
  primary: '#ffb4a9'
  on-primary: '#690001'
  primary-container: '#c0392b'
  on-primary-container: '#ffe5e1'
  inverse-primary: '#b02d21'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ecbe8b'
  on-tertiary: '#462a03'
  tertiary-container: '#876337'
  on-tertiary-container: '#ffe7cf'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a9'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8e130c'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ecbe8b'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#5f4018'
  background: '#111319'
  on-background: '#e2e2ea'
  surface-variant: '#33353b'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 58px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  title-lg:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Noto Serif
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  max-width-audio-dock: 48rem
  max-width-content: 76rem
---

## Brand & Style

This design system delivers an evocative, spiritually immersive, and refined digital broadcast experience celebrating Durga Puja. Grounded in the exquisite Bengali artisanal heritage of sholapith (intricate white pith carving), natural bamboo and jute weaves, and sacred kumkum terracotta tones, the system merges classical reverence with contemporary, audio-first streaming ergonomics.

The visual style is **Translucent Heritage Minimalism**:
- Pristine, glass-like layered panels with subtle warmth that allow the majestic Maa Durga pandal photography to breathe through with cinematic depth.
- Controlled contrast ratios using deep slate charcoal to ensure complete textual legibility across live chants, dhak beats, radio stream metadata, and ritual schedules.
- Restraint over gaudiness: bright saturated brass or harsh digital golds are replaced with organic spun-silk creams, antique brass accents, and authentic vermilion pigments.
- The interface evokes the serene yet electrified emotional state of walking into a Kolkata pandal at dawn during Mahashtami: sacred, airy, and acoustically resonant.

## Colors

The palette is extracted directly from the sacred artisanal architecture of the pandal:
- **Primary (`#C0392B` / `#A83232` Kumkum Terracotta):** Used for primary action buttons, active live streaming beacons, devotional markers, and sacred accent highlights.
- **Secondary (`#D4AF37` / `#B8934A` Muted Antique Brass):** Replaces harsh commercial gold with warm, brushed metallic clarity for audio wave monitors, playback states, and ornate structural borders.
- **Tertiary (`#C59B6A` / `#DFC49E` Natural Jute & Bamboo):** Warm, earthy mid-tones representing bamboo armature and jute craftsmanship, providing tonal balance for auxiliary meta tags, dividers, and timestamps.
- **Neutral Deep Slate Charcoal (`#14161C` & `#0B0D12`):** Base canvas and translucent backdrop scrim. Engineered to ensure contrast against rich photography while preserving dark-mode serenity.
- **Sholapith Ivory & Pith Cream (`#F8F4EC` & `#EFE8DA`):** The primary foreground text and icon colorway, delivering soft, natural high-readability without harsh pure white glare.

### Semantic Functional Tokens
- **Surface Scrim (Glass Base):** `rgba(20, 22, 28, 0.72)` with `backdrop-filter: blur(20px)` and subtle ivory edge tinting `rgba(248, 244, 236, 0.08)`.
- **Surface Elevated:** `rgba(32, 36, 45, 0.85)`.
- **Surface Interactive Hover:** `rgba(192, 57, 43, 0.16)`.
- **Text Primary:** `#F8F4EC` (Sholapith Ivory).
- **Text Muted:** `#A69F93` (Weathered Bamboo Ash).

## Typography

The typographical system establishes an editorial dialogue between classical Bengali reverence and contemporary digital clarity.

- **Headlines & Display (Noto Serif):** Honors literary Bengali print culture, classic songbooks, and artisanal engraving. Headings feature moderate vertical contrast, balanced serifs, and proud, centered posture.
- **Body & Controls (Plus Jakarta Sans):** Selected for its humanist warmth, legible open counters, and high performance on streaming tickers, audio control scrubs, and dense schedule feeds.
- **Special Ritual & Meta Labels:** Styled in uppercase or small caps using `Noto Serif` with expanded tracking (`0.04em` to `0.08em`) to mimic temple inscriptions and commemorative festival plaques.

## Layout & Spacing

The layout is built around a full-bleed photo-scenic viewport where the pandal artwork remains central and unobstructed.

- **Grid Architecture:** A 12-column responsive layout with `1.5rem` gutters on desktop, reflowing to a 4-column compact model on mobile screens with `1rem` margins.
- **Z-Index Stratification:**
  - **Level 0 (Background Canvas):** Pandal backdrop imagery with subtle fixed parallax and vignette scrim.
  - **Level 1 (Ambient Midground):** Live chat drawer, pandal schedule cards, audio stream selector cards.
  - **Level 2 (Persistent Audio Dock):** Floating, glassmorphic broadcast player moored to the viewport bottom with `2rem` safe-margin clearance.
  - **Level 3 (Overlays & Modals):** Full pandal 360 viewer, arti video stream pip, and high-priority ritual notifications.
- **Form Factor Adaptations:**
  - **Desktop (>= 1024px):** Split-view experience; left side reserves negative space for unobstructed pandal immersion, while right side hosts live audio waveforms, queue, and pandal radio commentary.
  - **Mobile (< 768px):** Translucent bottom sheet pattern with swipeable height tiers (collapsed player, half-sheet schedule, full-sheet arti stream).

## Elevation & Depth

Visual hierarchy uses frosted sholapith glass layering rather than heavy synthetic drop shadows.

- **Pandal Scrim Layer:** A multi-stop vertical and radial gradient layer over background photography (`linear-gradient(180deg, rgba(20,22,28,0.3) 0%, rgba(20,22,28,0.75) 60%, rgba(11,13,18,0.95) 100%)`). This guarantees that Maa Durga's face and the intricate pith archways remain illuminated while UI elements achieve WCAG AAA contrast.
- **Translucent Plate Elevation:**
  - **Resting:** `background: rgba(20, 22, 28, 0.65)`, `border: 1px solid rgba(248, 244, 236, 0.12)`, `backdrop-filter: blur(16px)`.
  - **Elevated/Active:** `background: rgba(28, 32, 40, 0.82)`, `border: 1px solid rgba(212, 175, 55, 0.35)`, `box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45)`.
- **Kumkum Glow:** Key interactive elements (such as the "Listen Live" radio play toggle) utilize a soft, diffused terracotta halo: `0 0 24px rgba(192, 57, 43, 0.35)`.

## Shapes

The design uses roundedness level `2` (`0.5rem` / `8px` default radius) paired with architectural curves inspired by traditional Bengal temple cornices and pandal entrance arches.

- **Controls & Chips:** Standard radius of `0.5rem` (8px). Audio scrubber knobs and status indicators remain circular (`pill-shaped` / `9999px`).
- **Cards & Floating Player Console:** `rounded-lg` (16px) with smooth corner smoothing to mimic polished bamboo and fine ceramic woodwork.
- **Accent Frames:** Key visual cards (such as the Aarti live stream or pandal spotlight) incorporate thin, single-pixel hairline filigree borders with subtle inset radiuses on top corners.

## Components

### 1. Primary Streaming Audio Dock
- **Layout:** Floating translucent island anchored at the bottom edge.
- **Visuals:** Frosted slate charcoal base, hairline ivory top border (`rgba(248, 244, 236, 0.14)`), with live waveform visualization tinted in antique brass (`#D4AF37`).
- **Elements:** Live "ON AIR" indicator in terracotta red with an animated pulsing dot, pandal audio source title in `Noto Serif`, and high-contrast ivory playback toggles.

### 2. Devotional Action Buttons
- **Primary ("Listen Live", "Offer Pushpanjali"):** Solid terracotta red (`#C0392B`) background, ivory text (`#F8F4EC`), `rounded-md`, with a subtle hover transition to `#A83232` and a delicate amber outer ring.
- **Secondary ("Browse Pandals", "Schedule"):** Translucent slate button with a `1px` antique brass border (`rgba(212, 175, 55, 0.3)`), shifting to solid ivory text upon hover.

### 3. Pandal Radio Station Chips
- Compact, pill-shaped frequency and location selectors (e.g., "Maddox Square - Dhak Beats", "Bagbazar - Classical Chants").
- Inactive state: `rgba(248, 244, 236, 0.08)` fill with sholapith cream text.
- Active state: `#C0392B` terracotta fill with ivory text and subtle inner shadow.

### 4. Schedule & Live Ritual Lists
- **Structure:** Clean rows separated by subtle golden-sand dividers (`rgba(212, 175, 55, 0.12)`).
- **Typography:** Ritual time in antique brass `Noto Serif` tabular numerals; ritual name in sholapith ivory; priest / streaming source metadata in weathered bamboo ash (`#A69F93`).

### 5. Input Fields & Search Bars
- Background: `rgba(11, 13, 18, 0.65)` with `backdrop-filter: blur(12px)`.
- Border: `1px solid rgba(248, 244, 236, 0.15)`, transitioning to `1px solid #D4AF37` upon focus.
- Placeholder text in sholapith ivory at 50% opacity.

### 6. Interactive Scrim Card
- Used for presenting artist credits, sholapith craftsman bios, and pandal architecture history.
- Built with double-layered glass: an ambient dark scrim backplate layered beneath an ivory-tinted reading panel to guarantee reading comfort over high-complexity pandal lighting.