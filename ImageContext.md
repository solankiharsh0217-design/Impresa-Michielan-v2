# Impresa Michielan v2 - Image Context

## Site Overview
Construction company website (Impresa Michielan) built with Next.js. Italian language. Specializes in renovation, roofing, insulation (Basaltek/IZONIL), facades, and interiors.

## Color System
- Primary: `#1D1348`
- Secondary/CTA: `#0A2351` (Institutional Blue)
- Red `#E31611` removed
- Basaltek page: emerald theme

## Image Directories

### `/public/images/` (production images served by Next.js)
- `before-after/` - 18 files, used on `/opere` page
- `gallery/interni/` - 4 files, used on homepage and `/servizi`
- `gallery/restauri/` - 6 files, used on homepage and `/servizi`
- `gallery/tetti/` - 6 files, used on homepage and `/servizi`
- `hero/` - 4 files: `hero-main.jpg`, `hero-about.jpg`, `basaltek-main.jpg`, `basaltek-application.jpg`
- `logos/` - `izonil.png` (IZONIL logo from izonil.ba), `basaltek-material.jpg`
- `transformations/bagno-ponzano/` - 4 files (stages 1-4)
- `transformations/interni-martellago/` - 3 files (stages 1-3)

### `/public/client-images/` (36 raw WhatsApp images from client)
These are the source images. Copy from here to production directories.

---

## Image Slots - What Each Should Show

### Transformations (Multi-stage sliders on /opere)

**ms1 - Ristrutturazione Bagno Integrale (Ponzano TV)**
- `bagno-ponzano/1-rovinato.jpg` - Demolished shower stall, bare walls, exposed drain
- `bagno-ponzano/2-verde.jpg` - Same stall with green waterproofing membrane (Basaltek)
- `bagno-ponzano/3-piastrelle.jpg` - Same stall tiled with grey porcelain tiles
- `bagno-ponzano/4-finito.jpg` - Finished bathroom with dark marble-effect tiles

**ms2 - Isolamento e Finiture Interne (Martellago VE)**
- `interni-martellago/1-basaltek.jpg` - Wall with dark Basaltek insulation panels installed
- `interni-martellago/2-preparazione.jpg` - Same room, walls freshly plastered grey, ladder
- `interni-martellago/3-finito.jpg` - Finished interior (currently same as 1-basaltek - needs fixing)

### Before-After Pairs (on /opere page)

**ba1 - Idropulizia Facciate (Spinea VE)**
- before: Dirty facade (stained, algae)
- after: Clean facade after hydro-cleaning
- Description: "Risanamento estetico profondo tramite idropulizia professionale"

**ba2 - Idrolavaggio Tetti (Scorzè VE)**
- before: Dirty/mossy roof tiles
- after: Clean roof tiles
- Description: "Rimozione muschi e sedimenti per riportare le tegole al colore originale"

**ba3 - Pavimentazione Esterna (Treviso)**
- before: Rough ground/rubble (sottofondo grezzo)
- after: Finished stone paving
- Description: "Posa di pavimentazione in pietra su sottofondo grezzo"

**ba4 - Posa Pavimenti Interni (Maerne VE)**
- before: Floor tiling in progress with red leveling clips
- after: Finished floor (polished/clean)
- Description: "Lavorazione di precisione con livellatori e risultato lucido finale"

**ba5 - Ristrutturazione Bagno Moderno (Maerne VE)**
- before: Old gutted bathroom (blue tiles, stripped walls)
- after: Finished dark marble bathroom
- Description: "Trasformazione radicale di un vecchio bagno in uno spazio di design con marmi scuri"

**ba6 - Isolamento Seminterrato (Ponzano TV)**
- before: Wet/damaged walls (patchy plaster, cracks)
- after: Walls with insulation installed (Basaltek panels or finished plaster)
- Description: "Risanamento pareti umide e finitura isolante"

**ba7 - Idropulizia Facciate (Scorzè VE)**
- before: Dirty facade
- after: Clean facade
- Description: "Pulizia e ripristino estetico facciate con idropulizia professionale"

**ba8 - Tetto in Lamiera Grecata (Treviso)**
- before: Old roof (before replacement)
- after: New metal sheet roof (lamiera grecata)
- Description: "Sostituzione tetto in lamiera grecata con isolamento termico"

**ba9 - Applicazione Cappotto Esterno (Scorzè VE)**
- before: House facade before external insulation
- after: House facade after insulation application
- Description: "Applicazione cappotto termico esterno con finitura a regola d'arte"

### Gallery Images (used on homepage and /servizi)

**interni/** - Interior renovation photos
- `interni-01.jpg` - Modern finished interior (hallway/room)
- `interni-02.jpg` - Interior work in progress
- `interni-03.jpg` - Interior renovation stage
- `interni-04.jpg` - Interior finish detail

**restauri/** - Restoration/facade work photos
- `restauri-01.jpg` - Scaffolding with company banner
- `restauri-02.jpg` - Insulation panels installation
- `restauri-03.jpg` - Building exterior work
- `restauri-04.jpg` - Wall preparation/plastering
- `restauri-05.jpg` - Building facade completed
- `restauri-06.jpg` - Scaffolding/company banner

**tetti/** - Roofing work photos
- `tetti-01.jpg` - New roof tiles
- `tetti-02.jpg` - Roof work in progress
- `tetti-03.jpg` - Roof structure/old tiles
- `tetti-04.jpg` - Roof renovation stage
- `tetti-05.jpg` - Roof tiles/materials
- `tetti-06.jpg` - Completed roof work

### Hero Images
- `hero-main.jpg` - Main homepage hero (construction site with company branding)
- `hero-about.jpg` - Chi Siamo page hero (construction project)
- `basaltek-main.jpg` - Basaltek page hero (Basaltek material/application)
- `basaltek-application.jpg` - Basaltek page "Che Cos'è" section image

### Logo Images
- `izonil.png` - IZONIL company logo (downloaded from izonil.ba)
- `basaltek-material.jpg` - Basaltek material close-up

---

## WhatsApp Client Images (Source Files)

All in `/public/client-images/WhatsApp Image 2026-06-17 at [TIME].jpeg`

### Project Photos (use these)
| File | Content |
|------|---------|
| 9.35.50 PM.jpeg | Scaffolding with Michielan banner + SIRAPOR panels |
| 9.35.50 PM(1).jpeg | EPS insulation panels on wall with blue mesh |
| 9.35.51 PM.jpeg | New terracotta roof tiles close-up |
| 9.35.51 PM(1).jpeg | Modern white hallway with wood-look flooring |
| 9.35.52 PM.jpeg | Basaltek CE panels close-up (stacked) |
| 9.35.52 PM(1).jpeg | Apartment building with balconies, worker |
| 9.35.52 PM(2).jpeg | Patchy wall with window and angle grinder |
| 9.35.53 PM(1).jpeg | Basaltek material surface close-up |
| 9.35.54 PM(1).jpeg | Yellow house facade composite (dirty top / clean bottom) |
| 9.35.55 PM.jpeg | Roof tiles stacked, demolition in progress |
| 9.35.55 PM(1).jpeg | Roof with old tiles and membrane |
| 9.35.55 PM(2).jpeg | Industrial warehouse with Michielan van |
| 9.35.56 PM.jpeg | Building facade with scaffolding + Michielan sign |
| 9.35.56 PM(1).jpeg | Building facade with scaffolding + yellow hydrant |
| 9.35.56 PM(2).jpeg | Michielan banner on scaffolding |
| 9.35.57 PM.jpeg | Outdoor rubble/construction area |
| 9.35.57 PM(1).jpeg | Garden with finished stone paving |
| 9.35.57 PM(2).jpeg | Condominium roof maintenance |
| 9.35.58 PM.jpeg | Grey wall with electrical channel cuts |
| 9.35.58 PM(1).jpeg | White wall with channel cuts |
| 9.35.58 PM(2).jpeg | New brown metal sheet roof (lamiera) |
| 9.35.59 PM.jpeg | House with scaffolding + Michielan branding |
| 9.36.00 PM(1).jpeg | Floor tiling with red leveling clips |
| 9.36.01 PM.jpeg | Old gutted bathroom (blue tiles, stripped walls) |
| 9.36.01 PM(1).jpeg | Finished dark marble bathroom |
| 9.36.01 PM(2).jpeg | Room with stepladder, freshly plastered |
| 9.36.02 PM.jpeg | Room with white walls, dark carpet, paint bucket |
| 9.36.02 PM(1).jpeg | Dark Basaltek panels on wall |
| 9.36.02 PM(2).jpeg | Patchy wall with small window and grinder |
| 9.36.03 PM.jpeg | Demolished bathroom corner |
| 9.36.03 PM(1).jpeg | Grey tiles being laid |
| 9.36.03 PM(2).jpeg | Green waterproofing membrane on walls |

### Screenshots (do NOT use on site)
| File | Content |
|------|---------|
| 9.35.53 PM.jpeg | IZONIL website screenshot |
| 9.35.53 PM(2).jpeg | IZONIL website screenshot |
| 9.35.54 PM.jpeg | Website footer screenshot |
| 9.35.54 PM(2).jpeg | Basaltek page screenshot |

---

## Code References

### /app/opere/page.tsx
- Lines 37-64: `multiStages` array (ms1, ms2) - transformation sliders
- Lines 67-149: `beforeAfters` array (ba1-ba9) - before/after pairs
- All image paths are absolute from `/public/`

### /app/page.tsx (Homepage)
- Line 38: `restauri-01.jpg`
- Line 52: `restauri-02.jpg`
- Line 80: `interni-01.jpg`
- Line 108: `restauri-03.jpg`
- Line 200: `hero-main.jpg`
- Line 476: `izonil.png`

### /app/servizi/page.tsx
- Line 22: `restauri-01.jpg`
- Line 36: `restauri-02.jpg`
- Line 64: `interni-01.jpg`
- Line 92: `restauri-03.jpg`

### /app/chi-siamo/page.tsx
- Line 24: `hero-about.jpg`
- Line 55: `restauri-03.jpg`

### /app/basaltek/page.tsx
- Line 51: `basaltek-main.jpg` (hero background)
- Line 76: `basaltek-application.jpg` (Che Cos'è section)
- Line 140: `basaltek-material.jpg` (Basaltek card in Materiali Innovativi)
- Line 152: `izonil.png` (IZONIL card in Materiali Innovativi)

---

## Rules
1. All emails must be `info@impresamichielan.com`
2. SOA23 (OG1) certification prominently featured
3. Basaltek page uses emerald theme
4. "Il Futuro dell'Edilizia" badge: white bg with green text
5. Do NOT use screenshots or stock photos - only real project photos
6. Each before/after pair must show the SAME location at different stages
7. Gallery images must match their category (interni=interior, restauri=facade, tetti=roof)
