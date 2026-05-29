# Prakriti Grassroots Foundation Website

<div align="center">

**Building Sustainable Futures from the Ground Up**

A modern, responsive React-based website for Prakriti Grassroots Foundation, a registered NGO dedicated to establishing self-reliant rural hubs through education, healthcare, and livelihood programs.

[Live Site](https://prakriti-foundation-website.netlify.app) • [GitHub](https://github.com/nishant-gupta911/prakriti-foundation-website) • [Contact](mailto:contact@prakritifoundation.org)

</div>

---

## 📋 Overview

Prakriti Grassroots Foundation Website is a single-page application (SPA) that showcases the organization's mission, programs, and impact across rural communities in India. The website enables visitors to learn about the foundation's initiatives, access transparency reports, and get involved through donations and volunteer opportunities.

### Key Features

- **🌍 Responsive Design** - Mobile-first approach, optimized for all devices
- **⚡ Fast Performance** - Single Page Application with client-side routing
- **♿ Accessible** - WCAG compliant with semantic HTML and ARIA labels
- **🎨 Modern UI** - Built with Tailwind CSS for a clean, professional appearance
- **🔗 Smooth Navigation** - React Router for seamless page transitions
- **📱 Progressive Web App** - Optimized for offline viewing and fast load times
- **🔍 SEO Optimized** - Proper meta tags and structured content

---

## 🎯 About Prakriti Foundation

Prakriti Grassroots Foundation, established in 2018, works across rural districts in Uttarakhand, India, addressing critical disparities in healthcare, education, and livelihood security.

### Core Programs

1. **Project Shiksha** - Resource-rich primary education support (62 active centers)
2. **Swasthya Outreach** - Mobile pediatric and maternal healthcare clinics (1,800+ monthly screenings)
3. **Green Livelihoods** - Women-led craft guilds and sustainable handicrafts (45 cooperatives, 2,400+ artisans)

### Impact Metrics

- 120+ villages reached
- 15,000+ children enrolled
- 85 active field clinics
- ₹78% of donations go directly to field operations

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19.0, TypeScript, React Router v6 |
| **Styling** | Tailwind CSS 4.1, Custom CSS |
| **Build Tool** | Vite 6.2 |
| **Deployment** | Netlify with SPA routing configuration |
| **Package Manager** | npm |
| **Node Version** | 18+ recommended |

---

## 📦 Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- **Git** for version control

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nishant-gupta911/prakriti-foundation-website.git
   cd prakriti-foundation-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm run lint
   ```

---

## 🚀 Running Locally

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

**Features in dev mode:**
- Hot reload on file changes
- Source maps for debugging
- Full TypeScript checking

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```
prakriti-foundation-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with routing
│   │   └── Footer.tsx          # Footer with links and contact info
│   ├── pages/
│   │   ├── Home.tsx            # Landing page with hero and stats
│   │   ├── About.tsx           # Organization story and values
│   │   ├── Initiatives.tsx     # Three core programs
│   │   ├── Impact.tsx          # Transparency and financial reports
│   │   └── Join.tsx            # Donation and volunteer forms
│   ├── App.tsx                 # Main app component with Router
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── dist/                       # Production build (generated)
├── netlify.toml               # Netlify SPA routing config
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

---

## 🌐 Deployment

### Deployment on Netlify

The site is pre-configured for Netlify deployment:

1. **Connect Repository:**
   - Push code to GitHub
   - Sign in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Netlify will automatically detect `netlify.toml` configuration

3. **Deploy:**
   - Netlify automatically builds and deploys on every push to main
   - SPA routing is automatically configured via `netlify.toml`

### Environment Variables

Currently, no environment variables are required. The site is fully static.

For future integrations (email, CMS, etc.), add variables in Netlify dashboard:
```
Settings → Build & Deploy → Environment
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server at localhost:3000

# Production
npm run build           # Build optimized production bundle
npm run preview         # Preview production build locally

# Quality Assurance
npm run lint            # Check TypeScript types
npm run clean           # Remove build artifacts

# Git
git push               # Push changes to GitHub (post-deployment)
```

---

## 📋 Features Breakdown

### Home Page
- Hero section with mission statement
- Impact statistics (villages, children, clinics)
- Field-driven approach explanation
- Call-to-action buttons for donations and learning more

### About Page
- Foundation origin story (since 2018)
- Operational values (transparency, community-led, resilience)
- Leadership team profiles

### Initiatives Page
- Detailed program information:
  - Project Shiksha (Education)
  - Swasthya Outreach (Healthcare)
  - Green Livelihoods (Livelihood)
- Metrics and deployment numbers for each program

### Impact Page
- Community testimonials
- Financial transparency breakdown (78% to programs)
- Quarterly audit information
- Direct links to sponsor programs

### Get Involved Page
- Donation tier selection (₹1,000, ₹3,000, ₹5,000)
- Donation form with email receipt
- Volunteer registration form
- Contact information

---

## 🎨 Design System

### Color Palette

- **Emerald** - Primary brand color (#10b981)
- **Stone** - Neutral backgrounds and text
- **Amber** - Call-to-action accents (#f59e0b)
- **White** - Content backgrounds

### Typography

- **Serif Font** - Merriweather (headings, branding)
- **Sans-Serif Font** - Inter (body text, UI)

### Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

---

## 🔒 Security & Performance

- **Security Headers** - Configured by Netlify
- **CSP Policy** - Enabled for XSS protection
- **Bundle Optimization** - Tree-shaking via Vite
- **Image Optimization** - Using external CDN (Unsplash)
- **Lighthouse Scores** - Targets 90+ across all metrics

---

## 📞 Contact & Support

**Prakriti Grassroots Foundation**

- **Email:** contact@prakritifoundation.org
- **Phone:** +91 5962 254812 (Weekdays 09:00 - 17:00 UTC +5:30)
- **Address:** Prakriti Field Center, Block B, Almora-Nainital Road, Uttarakhand, 263601, India
- **Website:** https://prakriti-foundation-website.netlify.app
- **GitHub:** https://github.com/nishant-gupta911/prakriti-foundation-website

---

## 📄 License

© 2026 Prakriti Grassroots Foundation. All rights reserved.

Registered NGO Registration No: S/19482/UK

---

## 🤝 Contributing

We welcome contributions to improve this website. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 🔄 Version History

- **v2.0** (May 2026) - React SPA with React Router and improved routing
- **v1.0** (Initial) - Static HTML pages

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Netlify Deployment Guide](https://docs.netlify.com)

---

<div align="center">

**Building Sustainable Futures from the Ground Up** 🌱

*Prakriti Grassroots Foundation*

</div>
