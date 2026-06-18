# Impresa Michielan - Correct Image Mappings

This file documents the verified contents of the client images and maps them to their correct production slots across the website.

## Client Image Auditing & Analysis

We visually audited the 36 raw images in `/public/client-images/` and verified their true contents:

| Filename | Visual Content (Verified) | Real Purpose / Project |
| :--- | :--- | :--- |
| `9.35.50 PM.jpeg` | Scaffolding on a house, banner "IMPRESA MICHIELAN", stacked white/blue **SIRAPOR** insulation panels in foreground. | In-progress insulation (Cappotto) |
| `9.35.50 PM(1).jpeg` | Balcony/terrace walls covered in white **EPS** insulation panels with red anchors. | In-progress insulation (Cappotto) |
| `9.35.51 PM.jpeg` | Close-up of brand new curved terracotta roof tiles along the ridge/hip line. | Completed Tile Roof |
| `9.35.51 PM(1).jpeg` | Finished white interior hallway with wood-look porcelain floor tiles. | Completed Interior Floor |
| `9.35.52 PM.jpeg` | Stacked brown **BASALTEK CE** panels showing texture and logo. | Basaltek material logo / Close-up |
| `9.35.52 PM(1).jpeg` | Completed white multi-story apartment building with balconies and a worker in foreground. | Completed Facade / Restauro |
| `9.35.52 PM(2).jpeg` | **Screenshot** of the Basaltek page showing the headline "IL FUTURO DELL'EDILIZIA". | Reference only (DO NOT USE) |
| `9.35.53 PM.jpeg` | **Screenshot** of the IZONIL homepage. | Reference only (DO NOT USE) |
| `9.35.53 PM(1).jpeg` | Extreme close-up of the Basaltek CE panel texture. | Basaltek material surface |
| `9.35.53 PM(2).jpeg` | **Screenshot** of the IZONIL logo and certifications. | Reference only (DO NOT USE) |
| `9.35.54 PM.jpeg` | **Screenshot** of the website footer details. | Reference only (DO NOT USE) |
| `9.35.54 PM(1).jpeg` | Vertical **composite** image of a yellow house facade. Top half: dirty facade with mold. Bottom half: clean yellow facade. | Facade cleaning (Spinea) |
| `9.35.54 PM(2).jpeg` | **Screenshot** of the Basaltek product description. | Reference only (DO NOT USE) |
| `9.35.55 PM.jpeg` | Tiled roof under demolition, old tiles stacked, underlayment exposed. | In-progress Tile Roof |
| `9.35.55 PM(1).jpeg` | Completed modern plastered ceiling with recessed LED spotlights (**Cartongesso**). | Finished Interior Ceiling (Not a roof!) |
| `9.35.55 PM(2).jpeg` | Completed industrial/commercial concrete building, crane, and company van. | Commercial project |
| `9.35.56 PM.jpeg` | Building facade under scaffolding with fresh grey plaster, arch doors at bottom, banner. | In-progress Facade (Before painting) |
| `9.35.56 PM(1).jpeg` | Same building facade with scaffolding, but finished in white. Yellow hydrant cover in foreground. | Completed Facade (After painting) |
| `9.35.56 PM(2).jpeg` | Roof under demolition, tiles stacked, chimney, scaffolding safety railings on side. | In-progress Metal Roof (Before lamiera) |
| `9.35.57 PM.jpeg` | Garden/outdoor area filled with construction rubble, dirt, and bricks. | Rubble Garden (Before paving) |
| `9.35.57 PM(1).jpeg` | Same garden/outdoor area with finished grey stone paving and green grass. | Paved Garden (After paving) |
| `9.35.57 PM(2).jpeg` | Wall completely covered in brown **BASALTEK CE** insulation panels. | Basaltek panel installation (Not a roof!) |
| `9.35.58 PM.jpeg` | Grey interior wall with channel cuts for electrical wiring. | Interior prep work |
| `9.35.58 PM(1).jpeg` | White interior wall with channel cuts for electrical wiring. | Interior prep work |
| `9.35.58 PM(2).jpeg` | Completed roof covered with brown corrugated metal sheets (**lamiera grecata**). | Completed Metal Roof |
| `9.35.59 PM.jpeg` | House with scaffolding, walls covered in white insulation panels with visible red anchors. | In-progress insulation (Cappotto) |
| `9.36.00 PM(1).jpeg` | Floor tiling in progress, rectangular wood-look tiles, red leveling clips. | Tiling in progress |
| `9.36.01 PM.jpeg` | Gutted old bathroom with blue floor tiles, stripped walls, window, radiator. | Old Bathroom (Before) |
| `9.36.01 PM(1).jpeg` | Completed modern shower stall, dark marble-look tiles with gold veins. | New Bathroom (After) |
| `9.36.01 PM(2).jpeg` | Room under construction, grey plastered walls, ladders, window on the right. | Room plastering (In progress) |
| `9.36.02 PM.jpeg` | Finished room with white walls, open door showing hallway, paint buckets on floor. | Room finished |
| `9.36.02 PM(1).jpeg` | Same room wall covered in brown Basaltek panels. | Room Basaltek (In progress) |
| `9.36.02 PM(2).jpeg` | Same room patchy wall before insulation, window frame, yellow grinder on floor. | Room patchy wall (Before) |
| `9.36.03 PM.jpeg` | Demolished bathroom corner, bare bricks, exposed pipes. | Bathroom Demolished (Stage 1) |
| `9.36.03 PM(1).jpeg` | Grey bathroom tiles being laid on the wall. | Bathroom Tiling (Stage 3) |
| `9.36.03 PM(2).jpeg` | Green waterproofing membrane applied to bathroom walls. | Bathroom Waterproofing (Stage 2) |

---

## Production Image Mapping

We will copy the client images to the following production file locations:

### 1. Before-After Pairs (`/public/images/before-after/`)

| File Slot | Client Image Source | Description |
| :--- | :--- | :--- |
| `idropulizia-before.jpg` | Crop top half of `9.35.54 PM(1).jpeg` | Yellow house facade (dirty) |
| `idropulizia-after.jpg` | Crop bottom half of `9.35.54 PM(1).jpeg` | Yellow house facade (clean) |
| `idrolavaggio-before.jpg` | `9.35.55 PM.jpeg` | Tile roof (demolition in progress) |
| `idrolavaggio-after.jpg` | `9.35.51 PM.jpeg` | Tile roof (new terracotta tiles) |
| `pavimento-before.jpg` | `9.35.57 PM.jpeg` | Outdoor garden (rubble/dirt) |
| `pavimento-after.jpg` | `9.35.57 PM(1).jpeg` | Outdoor garden (stone paving) |
| `maerne-pav-before.jpg` | `9.36.00 PM(1).jpeg` | Floor tiling (in progress with clips) |
| `maerne-pav-after.jpg` | `9.35.51 PM(1).jpeg` | Floor tiling (finished white hallway) |
| `maerne-bath-before.jpg` | `9.36.01 PM.jpeg` | Old bathroom (blue tiles, stripped walls) |
| `maerne-bath-after.jpg` | `9.36.01 PM(1).jpeg` | Finished bathroom (dark marble shower) |
| `ponzano-iso-before.jpg` | `9.36.02 PM(2).jpeg` | Wall before insulation (grinder on floor) |
| `ponzano-iso-after.jpg` | `9.36.02 PM(1).jpeg` | Wall with Basaltek panels installed |
| `idropulizia-facciate-before.jpg` | `9.35.56 PM.jpeg` | Facade restoration (grey plaster) |
| `idropulizia-facciate-after.jpg` | `9.35.56 PM(1).jpeg` | Facade restoration (finished white wall) |
| `lamiera-before.jpg` | `9.35.56 PM(2).jpeg` | Metal roof (old roof demolition/prep) |
| `lamiera-after.jpg` | `9.35.58 PM(2).jpeg` | Metal roof (finished brown lamiera sheets) |
| `cappotto-before.jpg` | `9.35.50 PM.jpeg` | Scaffolding with SIRAPOR panels |
| `cappotto-after.jpg` | `9.35.52 PM(1).jpeg` | Finished apartment building facade |

### 2. Multi-Stage Transformations (`/public/images/transformations/`)

- **ms1 - Ristrutturazione Bagno Integrale (Ponzano TV)**
  1. `bagno-ponzano/1-rovinato.jpg` -> `9.36.03 PM.jpeg` (demolished corner)
  2. `bagno-ponzano/2-verde.jpg` -> `9.36.03 PM(2).jpeg` (green waterproofing)
  3. `bagno-ponzano/3-piastrelle.jpg` -> `9.36.03 PM(1).jpeg` (grey tiling)
  4. `bagno-ponzano/4-finito.jpg` -> `9.36.01 PM(1).jpeg` (finished marble bathroom)

- **ms2 - Isolamento e Finiture Interne (Martellago VE)**
  1. `interni-martellago/1-basaltek.jpg` -> `9.36.02 PM(1).jpeg` (Basaltek panels)
  2. `interni-martellago/2-preparazione.jpg` -> `9.36.01 PM(2).jpeg` (plastered room with ladder)
  3. `interni-martellago/3-finito.jpg` -> `9.36.02 PM.jpeg` (finished painted room with open door)

### 3. Gallery Images (`/public/images/gallery/`)

- **gallery/interni/interni-04.jpg** -> `9.35.55 PM(1).jpeg` (Completed plastered ceiling with spotlights) - *this is a perfect finished interior photo of plasterboard work (cartongesso)*
- **gallery/restauri/restauri-04.jpg** -> `9.35.59 PM.jpeg` (House with scaffolding) - *fits the restoration category perfectly*
