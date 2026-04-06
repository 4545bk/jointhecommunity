# EthioXHub Link-in-Bio Redirector

A premium, branded link-in-bio page built with Next.js for TikTok traffic. Implements **Option B (Direct Controlled Architecture)** from the TikTok link architecture evaluation.

## Architecture

```
links.ethioxhub.tech/
├── /                     → Branded link-in-bio page (main hub)
├── /go/website           → Soft redirect to ethioxhub.tech (3s delay)
├── /api/track            → First-party analytics endpoint
└── /api/health           → Health check for monitoring
```

## Features

- ⚡ **Premium dark-mode design** with glassmorphism and micro-animations
- 🔒 **Low detection risk** — minimal redirect chain (1–2 hops)
- 📊 **First-party analytics** — no third-party tracking scripts
- 📱 **Mobile-optimized** — designed for TikTok traffic
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Recommended: Vercel

```bash
npx vercel --prod
```

### Alternative: Cloudflare Pages

1. Connect your Git repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`

## Domain Configuration

Point `links.ethioxhub.tech` to your deployment:

| Record | Type | Name | Value |
|---|---|---|---|
| Subdomain | CNAME | `links` | Your deployment URL |

## Links Configured

| Link | Destination | Type |
|---|---|---|
| Visit Website | `/go/website` → `ethioxhub.tech` | Soft redirect (3s) |
| Telegram | `t.me/linumar` | Direct link |
| TikTok | `tiktok.com/@ethioxhub` | Direct link |
| Instagram | `instagram.com/ethioxhub` | Direct link |
| Support | `mailto:support@ethioxhub.tech` | Direct link |

## TikTok Bio Usage

Set your TikTok bio link to:
```
links.ethioxhub.tech
```
