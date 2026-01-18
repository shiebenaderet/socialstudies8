# Media Files Organization Guide

This directory contains all media assets for the Social Studies website, including images, videos, and documents.

## Directory Structure

```
/media/
  ├── images/
  │   ├── units/          # Hero images for unit pages
  │   ├── cards/          # Background images for landing page cards (optional)
  │   └── capstone/       # Example projects and visuals
  ├── videos/
  │   ├── unit1/          # Unit 1 video resources
  │   ├── unit2/          # Unit 2 video resources
  │   ├── unit3/          # Unit 3 video resources
  │   └── unit4/          # Unit 4 video resources
  └── documents/
      ├── worksheets/     # PDF worksheets and handouts
      ├── rubrics/        # Grading rubrics
      └── resources/      # Supplementary materials
```

## Naming Conventions

### Images

**Format:** `unit{N}-{description}-{type}.{ext}`

**Examples:**
- `unit1-colonies-hero.jpg` - Hero image for Unit 1 page
- `unit1-colonies-card.jpg` - Background image for Unit 1 card on landing page
- `unit2-trade-map.jpg` - Content image showing triangle trade routes
- `unit3-revolution-soldiers.jpg` - Revolutionary War image
- `unit4-constitution-signing.jpg` - Constitution signing image
- `capstone-example-01.jpg` - Numbered example projects

**Recommended Image Specifications:**
- **Hero images (unit pages):** 1920x600px, JPG, optimized for web (< 300KB)
- **Card backgrounds:** 800x600px, JPG, optimized (< 200KB)
- **Content images:** 1200x800px max, JPG or PNG

### Videos

**Format:** `unit{N}-{topic}-{sequence}.{ext}`

**Examples:**
- `unit1-regional-differences-01.mp4`
- `unit1-colonial-life-02.mp4`
- `unit2-triangle-trade-intro.mp4`
- `unit3-perspectives-loyalist.mp4`
- `unit3-perspectives-patriot.mp4`
- `unit4-constitution-overview.mp4`
- `unit4-branches-government-01.mp4`

**Recommended Video Specifications:**
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1280x720px (720p) or 1920x1080px (1080p)
- **Duration:** 3-10 minutes recommended
- **File size:** < 50MB per video for faster loading

### Documents

**Format:** `unit{N}-{assignment-name}.pdf`

**Examples:**
- `unit1-colonial-regions-worksheet.pdf`
- `unit1-geography-activity.pdf`
- `unit2-triangle-trade-simulation.pdf`
- `unit3-perspective-analysis.pdf`
- `unit4-constitution-study-guide.pdf`
- `capstone-rubric.pdf`
- `capstone-answer-evidence-impact-template.pdf`

**Recommended Document Specifications:**
- **Format:** PDF
- **File size:** < 5MB per document
- **Accessibility:** Include text layer (not scanned images only)

## Current Media Files

### Unit 1: The 13 Colonies
- **Hero Image:** `images/units/unit1-colonies-hero.jpg`
  - Source: Library of Congress - 1774 Map of the Thirteen Colonies
  - URL: https://www.loc.gov/resource/g3300.ct000370/

### Unit 2: The Triangle Trade
- **Hero Image:** `images/units/unit2-trade-hero.jpg`
  - Source: Library of Congress - Map of Triangle Trade Routes
  - URL: https://www.loc.gov/resource/g3200.ct003962/

### Unit 3: Revolutionary Voices
- **Hero Image:** `images/units/unit3-revolution-hero.jpg`
  - Source: National Park Service - Revolutionary War Soldiers
  - URL: https://www.nps.gov/common/uploads/photogallery/ner/park-york/8C9ABAAD-155D-451F-6737E377FDB608B3/8C9ABAAD-155D-451F-6737E377FDB608B3-large.jpg

### Unit 4: The Constitution
- **Hero Image:** `images/units/unit4-constitution-hero.jpg`
  - Source: Architect of the Capitol - Signing of the Constitution
  - URL: https://www.aoc.gov/sites/default/files/styles/hero_media_image_desktop_1x/public/2020-05/Signing_of_the_Constitution_1987_Howard_Chandler_Christy.jpg

## Image Optimization Tips

Before uploading images:

1. **Resize** to recommended dimensions
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)
3. **Convert** to appropriate format:
   - Photos: JPG
   - Graphics/diagrams: PNG
   - Consider WebP for better compression
4. **Test** loading speed after upload

## Adding New Media

### To add a new image:

1. Download/create the image
2. Optimize using the tips above
3. Rename using the naming convention
4. Place in appropriate subdirectory
5. Reference in HTML with correct path:
   ```html
   <img src="media/images/units/unit1-colonies-hero.jpg" alt="Map of 13 Colonies">
   ```
   or as background:
   ```html
   <div style="background-image: url('media/images/units/unit1-colonies-hero.jpg');"></div>
   ```

### To add a new video:

1. Ensure video meets specifications (MP4, < 50MB)
2. Rename using naming convention
3. Place in appropriate unit subdirectory (`media/videos/unit1/`, etc.)
4. Embed in HTML:
   ```html
   <video controls>
     <source src="media/videos/unit1/unit1-regional-differences-01.mp4" type="video/mp4">
     Your browser does not support the video tag.
   </video>
   ```
   or link to it:
   ```html
   <a href="media/videos/unit1/unit1-regional-differences-01.mp4">Watch: Regional Differences</a>
   ```

### To add a new document:

1. Ensure PDF is optimized and accessible
2. Rename using naming convention
3. Place in appropriate subdirectory
4. Link in HTML:
   ```html
   <a href="media/documents/worksheets/unit1-colonial-regions-worksheet.pdf" download>Download Worksheet</a>
   ```

## Maintaining This Structure

- Keep files organized by unit and type
- Delete old/unused media files periodically
- Update this README when adding new categories
- Test all media links after uploading

## Questions?

For questions about media organization or technical issues, refer to the main project documentation or contact the site administrator.
