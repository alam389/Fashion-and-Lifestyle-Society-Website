how # Fashion-and-Lifestyle-Society-Website

A Next.js website for the Fashion and Lifestyle Society, built with TypeScript and Tailwind CSS.

### Deployment Configuration

- **Framework**: Next.js 14
- **Build Command**: `next build`
- **Output Directory**: Next.js default (`.next`)
- **Install Command**: `npm install`
- **Root Directory**: `./` (project root)

### How to Deploy Updates

#### Method 1: Manual Deployment via CLI (Current Method)

Since GitHub integration is not yet connected, you can deploy manually:

```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

#### Method 2: Automatic Deployment via GitHub (Recommended - Once Connected)

Once GitHub is connected, simply push to your repository:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically detect the push and deploy a new version.

### Common Vercel CLI Commands

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy to preview
vercel

# View deployment logs
vercel inspect <deployment-url> --logs

# Redeploy a specific deployment
vercel redeploy <deployment-url>

# View project information
vercel ls
```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test locally)
npm run build

# Start production server locally
npm start

# Run linter
npm run lint
```

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── behind-the-scenes/  # Behind the scenes page
│   ├── meet-the-team/      # Meet the team page
│   ├── show/               # Show page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   └── Navigation.tsx      # Navigation component
├── public/                 # Static assets
│   └── images/             # Image assets
└── ...config files         # Configuration files
```

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Settings](https://vercel.com/it-managers-projects-bc1bb3df/fls-website/settings)
