# Impresa Edile Michielan - Website

Modern, responsive website for Impresa Edile Michielan, a family-run construction and renovation company in Scorzè, Venice, Italy.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Montserrat (Google Fonts)

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, clean, premium design with brand colors
- ✅ 5 main pages: Home, Services, About, Gallery, Contact
- ✅ Service modals (no separate pages for each service)
- ✅ Project gallery with filtering
- ✅ Contact form with mailto integration
- ✅ Testimonials carousel
- ✅ Google Maps integration
- ✅ Social media links (Facebook, Instagram)
- ✅ SEO optimized with metadata
- ✅ Auto-scroll to top on navigation

## Pages

1. **Home (/)** - Hero, services overview, innovative materials, benefits, testimonials, CTA
2. **Services (/servizi)** - 6 services with expandable modals
3. **About (/chi-siamo)** - Company history, team, values, certification
4. **Gallery (/opere)** - Project photos with category filtering
5. **Contact (/contatti)** - Contact form, info, map

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd variant3
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Brand Colors

- **Primary:** #1D1348 (Dark Purple)
- **Secondary/CTA:** #E31611 (Red)
- **Background:** #EDEDED (Light Gray)
- **Text:** #1A1A1A (Dark Gray)

## Contact Information

- **Company:** Impresa Michielan srl
- **Address:** Via Onaro 2/4, 30037 Scorzè (Ve), Italy
- **Phone:** +39 346 348 2617
- **Email:** impresa.michielan@gmail.com
- **P.IVA:** IT04687550279
- **Certification:** SOA23 - OG1

## Project Structure

```
variant3/
├── app/
│   ├── page.tsx              # Home page
│   ├── servizi/page.tsx      # Services page
│   ├── chi-siamo/page.tsx    # About page
│   ├── opere/page.tsx        # Gallery page
│   ├── contatti/page.tsx     # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   └── ContactModal.tsx      # Contact modal
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## License

© 2025 Impresa Michielan srl - All rights reserved
