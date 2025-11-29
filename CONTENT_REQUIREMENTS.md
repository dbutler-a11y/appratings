# AppRatings Content Requirements

## App Review Checklist

Before adding a new app review, ensure the following requirements are met:

### 1. App Icon Requirements

**REQUIRED**: Every app must have a verified, correct app icon.

- [ ] Icon must be the official app icon (not a placeholder or generic image)
- [ ] Icon must be saved locally in `/public/images/apps/[app-slug]/icon.png`
- [ ] Icon should be at least 200x200 pixels (preferably 512x512)
- [ ] Icon must be a valid PNG file (verify with `file icon.png`)

**Verified Sources for Icons:**
1. **Clearbit Logo API**: `https://logo.clearbit.com/[domain].com?size=512`
2. **Official app website** (look for press kit or brand assets)
3. **App Store/Play Store** (download from listing)

**DO NOT USE:**
- Placeholder images (picsum.photos, unsplash, etc.)
- Copied icons from other apps
- Low-resolution or blurry images

### 2. YouTube Video Requirements

**REQUIRED**: Every app must have a working, relevant YouTube video.

- [ ] Video must be an actual review, tutorial, or overview of the app
- [ ] Video ID must be verified to work (test embed URL)
- [ ] Video should be from the last 2 years (prefer 2024 or newer)
- [ ] Video duration should be noted accurately

**How to Verify a YouTube Video:**
1. Visit `https://www.youtube.com/watch?v=[VIDEO_ID]`
2. Confirm the video loads and plays
3. Confirm the video is about the specific app
4. Copy the video ID (the part after `v=` in the URL)

**Embed URL Format:**
```
https://www.youtube.com/embed/[VIDEO_ID]
```

**Good Video Sources:**
- Official app YouTube channels
- Tech reviewers (MKBHD, Linus Tech Tips, etc.)
- App tutorial channels (Simpletivity, Thomas Frank, etc.)
- App Store preview videos

**DO NOT USE:**
- Random or unrelated video IDs
- "Rick Roll" or placeholder IDs (dQw4w9WgXcQ)
- Videos that have been deleted or made private
- Videos not in English (unless the app is region-specific)

### 3. App Data Requirements

**Required Fields:**
- `id`: Unique identifier (format: `appname-001`)
- `slug`: URL-friendly name (lowercase, hyphens)
- `name`: Official app name
- `developer`: Company or developer name
- `developerUrl`: Official website
- `category`: Must match an existing category slug
- `tags`: Array of existing tag slugs
- `pricing`: One of: `free`, `freemium`, `paid`, `subscription`
- `priceDisplay`: Human-readable pricing
- `iconUrl`: Local path (`/images/apps/[slug]/icon.png`)
- `heroImageUrl`: High-quality image (Unsplash OK for hero)
- `screenshots`: At least 2 screenshots with captions
- `videoReview`: Must include `provider`, `embedUrl`, `videoId`, `title`, `duration`
- `downloadLinks`: At least one platform
- `summary`: 1-2 sentence description
- `reviewContent`: Markdown-formatted in-depth review
- `pros`: Array of 4-6 pros
- `cons`: Array of 3-5 cons
- `verdict`: One-sentence recommendation
- `rating`: Overall and breakdown scores (1-5)
- `seo`: Title, description, ogImage, keywords
- `publishedAt`: ISO date string
- `updatedAt`: ISO date string

### 4. Quality Guidelines

**Content Quality:**
- Reviews should be honest and balanced
- Include both pros and cons
- Provide specific, actionable insights
- Avoid excessive marketing language
- Include pricing information
- Mention alternatives where relevant

**SEO Requirements:**
- Title should include app name and year
- Description should be 150-160 characters
- Include 5-7 relevant keywords
- OG image should be 1200x630 for social sharing

---

## Adding a New App Review

### Step-by-Step Process:

1. **Research the App**
   - Use the app yourself if possible
   - Read existing reviews for context
   - Note key features, pricing, and limitations

2. **Gather Assets**
   - Download official app icon
   - Find a working YouTube review video
   - Collect 2-3 high-quality screenshots

3. **Create Directory Structure**
   ```bash
   mkdir -p public/images/apps/[app-slug]
   ```

4. **Download Icon**
   ```bash
   curl -sL -o public/images/apps/[app-slug]/icon.png \
     "https://logo.clearbit.com/[domain].com?size=512"
   ```

5. **Verify Icon**
   ```bash
   file public/images/apps/[app-slug]/icon.png
   # Should output: PNG image data...
   ```

6. **Test YouTube Video**
   - Open `https://www.youtube.com/watch?v=[VIDEO_ID]`
   - Confirm video plays and is relevant

7. **Add App Data**
   - Add new entry to `data/apps.ts`
   - Follow the existing format
   - Include all required fields

8. **Test Locally**
   - Run `npm run dev`
   - Visit the new app page
   - Verify icon displays correctly
   - Verify video embeds and plays

---

## Troubleshooting

### Icon Not Displaying
1. Check file exists: `ls public/images/apps/[slug]/icon.png`
2. Verify it's a valid PNG: `file [path]`
3. Check for typos in `iconUrl` path
4. Clear Next.js cache: `rm -rf .next && npm run dev`

### YouTube Video Not Loading
1. Verify video ID is correct
2. Check video hasn't been deleted
3. Ensure embed URL format is correct
4. Check for region restrictions

### Build Errors
1. Verify all required fields are present
2. Check for TypeScript errors in `data/apps.ts`
3. Run `npm run build` to see detailed errors

---

## AI Character Integration (Future)

When AI characters (via VidBuzz) are ready to read reviews:

1. **Script Format**: Review content should be structured for narration
2. **Character Assignment**: Each app category may have a dedicated character
3. **Video Generation**: Scripts will be processed through VidBuzz for AI avatar videos
4. **Integration Points**:
   - Replace YouTube embed with AI-generated video
   - Or add as supplementary content alongside YouTube video

### Preparing Reviews for AI Narration:
- Keep sentences concise
- Avoid complex punctuation
- Include natural pauses (paragraph breaks)
- Highlight key points for emphasis
- Target 2-3 minute read time for video scripts
