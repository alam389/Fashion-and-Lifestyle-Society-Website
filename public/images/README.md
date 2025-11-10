# Images Directory

This directory contains all images used throughout the website, organized by page/section.

## Folder Structure

- **landing/** - Images for the landing/home page
- **meet-the-team/** - Team member photos and related images
- **behind-the-scenes/** - Behind the scenes photos and content
- **show/** - Fashion show images and event photos
- **shared/** - Shared images like logos, favicons, and common assets

## Usage

When referencing images in your code, use the path starting from `/images/`:

```tsx
import Image from 'next/image'

<Image 
  src="/images/landing/hero-image.jpg" 
  alt="Hero image"
  width={1200}
  height={600}
/>
```

