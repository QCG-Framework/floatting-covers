# Floating Covers Site

Industrial floating cover site built with Next.js App Router, TypeScript, and Tailwind.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build & run

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repo.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your production domain.

## Languages

The site ships with `/en`, `/fr`, and `/pl`. The default route redirects to `/en`.

## Image placeholders

Add images to `public/images` with the exact names below:

- `hero.jpg`
- `product-hex.jpg`
- `product-armor.jpg`
- `product-rhombo.jpg`
- `gallery-01.jpg` to `gallery-06.jpg`
- `molding.jpg`

Suggested mapping from the images you shared (adjust as you like):

```bash
mkdir -p public/images
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/012_Rhombo_clarifier_cover-6f013c90-401a-4c7e-8a95-5c9c98a4eed2.png" "public/images/hero.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/007_Hexprotect_AQUA-774112be-cddd-46ab-9726-4f1466cf24f3.png" "public/images/product-hex.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/007_Armor_Ball-205a7549-e65b-4244-a877-23cb46b16ad2.png" "public/images/product-armor.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/008_Rhombo_-_rd-c000934c-c279-462b-993f-a21a874a723d.png" "public/images/product-rhombo.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/DSC00022-6b426460-b7a9-4fde-9dce-da7fef187ca2.png" "public/images/gallery-01.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/DSC00023-b97652ef-f24a-4ec4-b360-06d23f9e52cf.png" "public/images/gallery-02.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/20190227_115231-97c026d1-713f-4d0e-8110-c209dbf54aba.png" "public/images/gallery-03.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/hexprotect-aqua-floating-cover-algae-evaporation_1-4d0512db-cef4-49a3-ac7d-08d901c9608d.png" "public/images/gallery-04.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/imagejpeg_1-7a6e0d80-9142-4e1c-b089-6c0d51efc9df.png" "public/images/gallery-05.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/101026-F-4815G-295-ed4d1323-e131-49a2-93dc-90c5060cddb0.png" "public/images/gallery-06.jpg"
cp "/Users/ja/.cursor/projects/Users-ja-H-Innov-global/assets/DSC00024-ab291e6b-dd0d-43a6-85d6-b99953bf4acd.png" "public/images/molding.jpg"
```
