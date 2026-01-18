# Image Setup Guide

## Images to Download

Download these images and save them to the `/media/images/` folder with the exact filenames shown below.

**Note:** For complete details on media organization and naming conventions, see `media/README.md`.

---

## Unit 1: The 13 Colonies

**Source URL:**
```
https://tile.loc.gov/image-services/iiif/service:gmd:gmd370m:g3701m:g3701sm:gct00482:cs000015/full/pct:12.5/0/default.jpg
```

**Save As:**
- `media/images/unit1-hero.jpg` (for hero image on unit1.html)
- Optionally also save as: `media/images/unit1-card.jpg` (for landing page card background)

**Attribution:** Library of Congress - 13 Colonies Map 1774

---

## Unit 2: The Triangle Trade

**Source URL:**
```
https://tile.loc.gov/storage-services/service/pnp/ppmsca/76600/76673r.jpg
```

**Save As:**
- `media/images/unit2-hero.jpg` (for hero image on unit2.html)
- Optionally also save as: `media/images/unit2-card.jpg` (for landing page card background)

**Attribution:** Library of Congress - Triangle Trade Map

---

## Unit 3: Revolutionary Voices

**Source URL:**
```
https://www.nps.gov/waro/learn/historyculture/images/brown-university-soldiers_1.jpg
```

**Save As:**
- `media/images/units/unit3-revolution-hero.jpg` (for hero image on unit3.html)
- Optionally also save as: `media/images/cards/unit3-revolution-card.jpg` (for landing page card background)

**Attribution:** National Park Service - Revolutionary War Soldiers

---

## Unit 4: The Constitution

**Source URL:**
```
https://www.aoc.gov/sites/default/files/2026-01/20220610_202406_SG_COMP_CROP-2000w-Howard-Chandler%20Christy-Signing-Constitution.jpg
```

**Save As:**
- `media/images/units/unit4-constitution-hero.jpg` (for hero image on unit4.html)
- Optionally also save as: `media/images/cards/unit4-constitution-card.jpg` (for landing page card background)

**Attribution:** Architect of the Capitol - Scene at the Signing of the Constitution by Howard Chandler Christy

---

## How to Download & Add Images

### Step 1: Download Images
1. Right-click each URL above or paste into browser
2. Right-click the image and "Save Image As..."
3. Save with the exact filename shown above
4. Save all images to: `/home/user/socialstudies8/images/`

### Step 2: Optimize Images (Recommended)
- Use TinyPNG (https://tinypng.com/) or similar to compress
- Target file size: under 300KB per image
- This ensures fast loading for students

### Step 3: Verify Files
After downloading, your `/images/` folder should contain:
```
images/
  ├── unit1-hero.jpg
  ├── unit2-hero.jpg
  ├── unit3-hero.jpg
  ├── unit4-hero.jpg
  ├── unit1-card.jpg (optional)
  ├── unit2-card.jpg (optional)
  ├── unit3-card.jpg (optional)
  └── unit4-card.jpg (optional)
```

### Step 4: Push to GitHub
```bash
git add images/
git commit -m "Add historical images for all units"
git push
```

---

## CSS is Already Configured!

The CSS has been set up to automatically use these images once you place them in the `/images/` folder. The images will appear:

- **Hero images:** Top of each unit page (1400px wide)
- **Card backgrounds:** (optional) Subtle backgrounds on landing page unit cards

---

## Image Credits & Alt Text

Make sure to include proper attribution. The images are already configured with alt text in the HTML for accessibility.

**Library of Congress images** are public domain.
**National Park Service images** are public domain.
**Architect of the Capitol images** are public domain.

All images selected are copyright-free for educational use.
