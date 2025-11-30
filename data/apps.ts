import { App, Category, Tag } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'productivity',
    name: 'Productivity',
    description: 'Apps that help you get more done in less time.',
    iconEmoji: '⚡',
  },
  {
    slug: 'photography',
    name: 'Photography',
    description: 'Photo editing, camera apps, and visual creativity tools.',
    iconEmoji: '📸',
  },
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    description: 'Applications powered by artificial intelligence.',
    iconEmoji: '🤖',
  },
  {
    slug: 'design',
    name: 'Design',
    description: 'UI/UX design, prototyping, and creative tools.',
    iconEmoji: '🎨',
  },
  {
    slug: 'communication',
    name: 'Communication',
    description: 'Team chat, video calls, and collaboration tools.',
    iconEmoji: '💬',
  },
  {
    slug: 'note-taking',
    name: 'Note Taking',
    description: 'Apps for capturing ideas, notes, and knowledge management.',
    iconEmoji: '📝',
  },
];

export const tags: Tag[] = [
  { slug: 'cross-platform', name: 'Cross-Platform' },
  { slug: 'offline-capable', name: 'Offline Capable' },
  { slug: 'ai-powered', name: 'AI Powered' },
  { slug: 'free-tier', name: 'Free Tier' },
  { slug: 'open-source', name: 'Open Source' },
];

export const apps: App[] = [
  {
    id: 'notion-001',
    slug: 'notion',
    name: 'Notion',
    developer: 'Notion Labs, Inc.',
    developerUrl: 'https://notion.so',

    category: 'productivity',
    tags: ['cross-platform', 'offline-capable', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free / $10 per month',

    iconUrl: '/images/apps/notion/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/0a/68/2a0a6840-6f65-41c0-87ad-f3b0360d9c0b/1762b181-05a3-4dbc-98c4-819b6303c157_1_IPHONE_55.png/392x696bb.png',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2a/0a/68/2a0a6840-6f65-41c0-87ad-f3b0360d9c0b/1762b181-05a3-4dbc-98c4-819b6303c157_1_IPHONE_55.png/392x696bb.png',
        alt: 'Notion home view',
        caption: 'Your workspace at a glance',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/69/ae/52/69ae521d-1315-0bb8-73eb-796c2ed99c72/61017181-8d8e-42b3-bb77-304faf5ad9b3_2_IPHONE_55.png/392x696bb.png',
        alt: 'Notion pages and databases',
        caption: 'Organize with pages and databases',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ad/b2/39/adb2394e-0e19-0e2c-698f-d54e5ea3b3cd/e83ee545-11d8-4e9c-858e-6513d88ea711_3_IPHONE_55.png/392x696bb.png',
        alt: 'Notion AI features',
        caption: 'AI-powered productivity',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/aA7si7AmPkY',
      videoId: 'aA7si7AmPkY',
      title: 'Notion Tutorial for Beginners - Complete Guide',
      duration: 'PT15M30S',
    },

    downloadLinks: [
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/notion/id1232780281',
        label: 'Download for iPhone',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=notion.id',
      },
      {
        platform: 'web',
        url: 'https://notion.so',
      },
      {
        platform: 'macos',
        url: 'https://notion.so/desktop',
      },
      {
        platform: 'windows',
        url: 'https://notion.so/desktop',
      },
    ],

    summary: 'Notion is an all-in-one workspace that combines notes, docs, wikis, and project management into a single, flexible platform.',

    reviewContent: `
## Overview

Notion has become the Swiss Army knife of productivity apps, and for good reason. It combines the best aspects of note-taking apps, project management tools, and databases into a single, cohesive platform.

## What Makes It Stand Out

The block-based editor is incredibly flexible. Every piece of content is a block that can be moved, transformed, and linked. Want to turn a bullet list into a kanban board? Two clicks. Need to embed a Figma file next to your meeting notes? Drop it right in.

### Database Power

Where Notion truly shines is its database functionality. You can create relational databases, link entries across tables, and create multiple views (table, board, calendar, gallery, timeline) of the same data.

## Performance Considerations

The app can feel sluggish with very large workspaces. Offline mode, while improved, still has sync quirks. For enterprise users, this may require careful workspace architecture.

## Verdict

For individuals and small teams who want flexibility over rigid structure, Notion is unmatched. Power users will appreciate the depth; casual users might find the learning curve steep.
    `,

    pros: [
      'Extremely flexible block-based system',
      'Powerful relational databases',
      'Excellent cross-platform support',
      'Generous free tier',
      'Active template community',
    ],
    cons: [
      'Can be slow with large workspaces',
      'Offline mode needs improvement',
      'Steep learning curve for advanced features',
      'No true end-to-end encryption',
    ],
    verdict: 'Best for power users who want one app to rule them all.',

    rating: {
      overall: 4.5,
      usability: 4,
      performance: 3.5,
      features: 5,
      value: 4.5,
      design: 4.5,
    },
    userRatingCount: 15420,

    seo: {
      title: 'Notion Review 2024: The Ultimate All-in-One Workspace',
      description: 'In-depth Notion review covering features, pricing, pros & cons. Is Notion the right productivity app for you? Find out in our comprehensive analysis.',
      ogImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop',
      keywords: ['notion review', 'notion app', 'productivity apps', 'project management', 'note taking app'],
    },

    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-03-20T14:30:00Z',
    featured: true,
    editorsPick: true,
  },

  {
    id: 'darkroom-002',
    slug: 'darkroom',
    name: 'Darkroom',
    developer: 'Bergen Co.',
    developerUrl: 'https://darkroom.co',

    category: 'photography',
    tags: ['ai-powered', 'cross-platform'],

    pricing: 'freemium',
    priceDisplay: 'Free / $49.99 per year',

    iconUrl: '/images/apps/darkroom/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/7b/bc/e47bbcef-41ba-7fa0-4c6f-72efbd1be995/860502cb-b72a-474e-b89c-bcec75b94d34_55-1-masks.jpg/392x696bb.jpg',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/7b/bc/e47bbcef-41ba-7fa0-4c6f-72efbd1be995/860502cb-b72a-474e-b89c-bcec75b94d34_55-1-masks.jpg/392x696bb.jpg',
        alt: 'Darkroom AI masks',
        caption: 'AI-powered masking tools',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/24/61/08/246108f9-1efe-3b43-59e9-6fabd260e122/9b66e9ba-536c-4b30-bc2e-5afa6288b487_55-3-presets.jpg/392x696bb.jpg',
        alt: 'Darkroom presets',
        caption: 'Professional presets library',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/85/a8/51/85a85115-2b15-893b-2c50-327248c20758/68fdf098-026b-433c-b508-76c786090b39_55-6-batch.jpg/392x696bb.jpg',
        alt: 'Darkroom batch editing',
        caption: 'Batch edit hundreds of photos',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/vdxETxyLQtY',
      videoId: 'vdxETxyLQtY',
      title: 'Darkroom Photo & Video Editor Review',
      duration: 'PT10M00S',
    },

    downloadLinks: [
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/darkroom-photo-video-editor/id953286746',
      },
      {
        platform: 'macos',
        url: 'https://apps.apple.com/app/darkroom-photo-video-editor/id953286746',
      },
    ],

    summary: 'Darkroom brings professional photo editing to iPhone and Mac with an intuitive interface and powerful features like batch editing and RAW support.',

    reviewContent: `
## A True Mobile Darkroom

Darkroom has quietly become one of the most capable photo editors on iOS. It strikes a rare balance: powerful enough for professionals, approachable enough for casual photographers.

## RAW Support That Actually Works

Unlike many mobile editors that claim RAW support, Darkroom delivers the real thing. Full RAW editing with the dynamic range you'd expect, plus Apple ProRAW support on newer iPhones.

## The Batch Editing Advantage

Edit one photo, apply to hundreds. The batch editing system is genuinely time-saving for anyone processing multiple images from a shoot.

## Verdict

If you're serious about mobile photography and want desktop-class editing without leaving your phone, Darkroom is the answer.
    `,

    pros: [
      'Genuine RAW and ProRAW support',
      'Excellent batch editing',
      'Beautiful, intuitive interface',
      'iCloud sync across devices',
      'No subscription required for core features',
    ],
    cons: [
      'iOS/Mac only (no Android or Windows)',
      'Premium features require subscription',
      'Limited video editing capabilities',
    ],
    verdict: 'The best photo editor for Apple ecosystem users.',

    rating: {
      overall: 4.7,
      usability: 5,
      performance: 4.5,
      features: 4.5,
      value: 4,
      design: 5,
    },
    userRatingCount: 8930,

    seo: {
      title: 'Darkroom Review: Professional Photo Editing on iPhone & Mac',
      description: 'Comprehensive Darkroom app review. Explore RAW editing, batch processing, and why it is the top photo editor for Apple users.',
      ogImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=630&fit=crop',
      keywords: ['darkroom app', 'photo editor ios', 'raw photo editing iphone', 'best photo app'],
    },

    publishedAt: '2024-02-10T09:00:00Z',
    updatedAt: '2024-02-10T09:00:00Z',
    featured: false,
    editorsPick: true,
  },

  {
    id: 'runway-003',
    slug: 'runway-ml',
    name: 'Runway ML',
    developer: 'Runway AI, Inc.',
    developerUrl: 'https://runwayml.com',

    category: 'ai-tools',
    tags: ['ai-powered', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free tier / $15+ per month',

    iconUrl: '/images/apps/runway/icon.png',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        alt: 'Runway Gen-2 video generation',
        caption: 'Generate videos from text prompts',
        platform: 'web',
      },
      {
        src: 'https://images.unsplash.com/photo-1686191128892-3b37add4afc1?w=800&h=600&fit=crop',
        alt: 'Runway inpainting tool',
        caption: 'Remove and replace anything in your video',
        platform: 'web',
      },
      {
        src: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=800&h=600&fit=crop',
        alt: 'Runway motion brush',
        caption: 'Add motion to still images',
        platform: 'web',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/hk8l3ISfwRM',
      videoId: 'hk8l3ISfwRM',
      title: 'Runway ML Tutorial - How To Use The Best AI Video Generator of 2024',
      duration: 'PT15M00S',
    },

    downloadLinks: [
      {
        platform: 'web',
        url: 'https://runwayml.com',
        label: 'Try Runway Free',
      },
    ],

    summary: 'Runway ML is a browser-based AI creative suite offering text-to-video, video editing, and generative AI tools for creators.',

    reviewContent: `
## The AI Creative Revolution

Runway isn't just another AI tool—it's a glimpse into the future of creative work. From Gen-2's text-to-video capabilities to intelligent video editing, Runway packages cutting-edge AI into a surprisingly usable interface.

## Gen-2: Text to Video

The headline feature. Describe what you want to see, and Runway generates a video. Is it perfect? No. Is it magic? Absolutely. The technology is evolving rapidly, and Runway stays at the cutting edge.

## Beyond Generation

Video inpainting, motion tracking, background removal—Runway offers a suite of AI-powered editing tools that would have required expensive software and hours of work just years ago.

## The Cost Consideration

AI processing is expensive, and it shows in the pricing. The free tier is limited, and heavy users will find costs adding up quickly. This is enterprise-grade technology with enterprise-grade pricing.

## Verdict

For professionals and serious creators exploring AI-augmented workflows, Runway is essential. For casual users, the price may be prohibitive.
    `,

    pros: [
      'Cutting-edge AI video generation',
      'Powerful suite of editing tools',
      'Browser-based, no installation needed',
      'Regular model updates and improvements',
      'Active community and tutorials',
    ],
    cons: [
      'Expensive for heavy use',
      'Generated videos have quality limitations',
      'Requires good internet connection',
      'Learning curve for advanced features',
    ],
    verdict: 'The most accessible gateway to AI video creation.',

    rating: {
      overall: 4.3,
      usability: 4,
      performance: 4,
      features: 5,
      value: 3.5,
      design: 4.5,
    },
    userRatingCount: 4210,

    seo: {
      title: 'Runway ML Review: AI Video Generation & Editing Platform',
      description: 'Full Runway ML review covering Gen-2, AI video editing, pricing, and whether it is worth the investment for creators.',
      ogImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
      keywords: ['runway ml', 'ai video generator', 'text to video', 'ai editing', 'runway gen-2'],
    },

    publishedAt: '2024-03-05T11:00:00Z',
    updatedAt: '2024-03-15T16:00:00Z',
    featured: true,
    editorsPick: false,
  },

  // ─────────────────────────────────────────────────────────────────
  // FIGMA - Design
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'figma-004',
    slug: 'figma',
    name: 'Figma',
    developer: 'Figma, Inc.',
    developerUrl: 'https://figma.com',

    category: 'design',
    tags: ['cross-platform', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free / $15 per editor/month',

    iconUrl: '/images/apps/figma/icon.png',
    heroImageUrl: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&h=600&fit=crop',
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop',
        alt: 'Figma design interface',
        caption: 'Collaborative design in real-time',
        platform: 'web',
      },
      {
        src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
        alt: 'Figma prototyping',
        caption: 'Build interactive prototypes',
        platform: 'web',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/Cx2dkpBxst8',
      videoId: 'Cx2dkpBxst8',
      title: 'Figma Tutorial for Beginners - Full Course',
      duration: 'PT24M15S',
    },

    downloadLinks: [
      {
        platform: 'web',
        url: 'https://figma.com',
      },
      {
        platform: 'macos',
        url: 'https://figma.com/downloads/',
      },
      {
        platform: 'windows',
        url: 'https://figma.com/downloads/',
      },
    ],

    summary: 'Figma is a collaborative interface design tool that runs in the browser, enabling real-time collaboration for design teams of any size.',

    reviewContent: `
## The Design Tool That Changed Everything

Figma didn't just create another design tool—it reimagined how design teams work together. By putting everything in the browser, Figma eliminated the friction of file sharing, version control, and platform compatibility.

## Real-Time Collaboration

Watch your teammates' cursors move in real-time. Leave comments directly on designs. No more "final_v3_ACTUAL_FINAL.fig" files. This is the killer feature that made Figma the industry standard.

## Component System

Figma's component and variant system is incredibly powerful. Create a button once, use it everywhere, update it globally. The auto-layout feature alone saves hours of manual resizing.

## Dev Mode

The recently added Dev Mode bridges the gap between design and development. Developers can inspect designs, grab CSS, and export assets without bothering designers.

## The Free Tier

Unlike competitors, Figma's free tier is genuinely usable. Three projects, unlimited viewers, and full feature access. It's how they captured the student and indie market.
    `,

    pros: [
      'Best-in-class real-time collaboration',
      'Runs in browser - no installation needed',
      'Powerful component and variant system',
      'Generous free tier',
      'Excellent plugin ecosystem',
      'Dev Mode for developer handoff',
    ],
    cons: [
      'Requires internet connection',
      'Can be slow with very large files',
      'Learning curve for advanced features',
      'Pricing adds up for large teams',
    ],
    verdict: 'The industry standard for UI/UX design. If your team is still using something else, it is time to switch.',

    rating: {
      overall: 4.8,
      usability: 4.5,
      performance: 4,
      features: 5,
      value: 4.5,
      design: 5,
    },
    userRatingCount: 28500,

    seo: {
      title: 'Figma Review 2024: The Best Collaborative Design Tool',
      description: 'Complete Figma review covering features, pricing, collaboration, and why it is the industry standard for UI/UX design teams.',
      ogImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&h=630&fit=crop',
      keywords: ['figma review', 'figma vs sketch', 'ui design tool', 'collaborative design', 'figma pricing'],
    },

    publishedAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-03-25T14:00:00Z',
    featured: true,
    editorsPick: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // SLACK - Communication
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'slack-005',
    slug: 'slack',
    name: 'Slack',
    developer: 'Salesforce',
    developerUrl: 'https://slack.com',

    category: 'communication',
    tags: ['cross-platform', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free / $8.75 per user/month',

    iconUrl: '/images/apps/slack/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/38/e6/08/38e6085c-6bf9-e0a0-e432-055beee537cb/93f78483-ed6a-4f45-bf05-4308c2ecb92f_iOS-iPhone6.5-Screenshot01.en-GB@3x-1.png/392x696bb.png',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/38/e6/08/38e6085c-6bf9-e0a0-e432-055beee537cb/93f78483-ed6a-4f45-bf05-4308c2ecb92f_iOS-iPhone6.5-Screenshot01.en-GB@3x-1.png/392x696bb.png',
        alt: 'Slack messaging interface',
        caption: 'Organized conversations in channels',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5d/ca/6b/5dca6b63-1062-1f70-b072-84cf8cd5fd8d/9776126f-a44a-4ecb-aa3e-ac35f8128ba0_iOS-iPhone5.5-Screenshot02.en-GB@3x.png/392x696bb.png',
        alt: 'Slack channels and DMs',
        caption: 'Stay connected with your team',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8a/08/e1/8a08e19d-4d6b-cd4e-05b3-d4b45bd9f075/b56b1f8b-323c-44c7-a6ce-f1b8c497af8c_iOS-iPhone5.5-Screenshot03.en-GB@3x.png/392x696bb.png',
        alt: 'Slack huddles',
        caption: 'Quick audio and video calls',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/EYqxQGmQkVw',
      videoId: 'EYqxQGmQkVw',
      title: 'How to Use Slack - Complete Beginners Guide',
      duration: 'PT18M00S',
    },

    downloadLinks: [
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/slack/id618783545',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.Slack',
      },
      {
        platform: 'web',
        url: 'https://slack.com',
      },
      {
        platform: 'macos',
        url: 'https://slack.com/downloads/mac',
      },
      {
        platform: 'windows',
        url: 'https://slack.com/downloads/windows',
      },
    ],

    summary: 'Slack is a channel-based messaging platform that brings team communication together, replacing scattered emails with organized, searchable conversations.',

    reviewContent: `
## The App That Killed Email (Almost)

Slack transformed how teams communicate. Instead of endless email threads, conversations happen in organized channels. Instead of CCing everyone, you mention who needs to see it.

## Channel Organization

The channel system is Slack's core innovation. Create channels for projects, teams, topics, or watercooler chat. Everything is searchable, everything has context.

## Integration Heaven

Slack connects to everything. GitHub, Jira, Google Drive, Salesforce—over 2,400 apps integrate directly. Your notifications, updates, and workflows all flow into one place.

## Huddles and Clips

Quick voice calls (huddles) and video messages (clips) reduce meeting fatigue. Sometimes a 30-second clip explains what would take 10 messages.

## The Noise Problem

Slack's biggest weakness is also its strength. Without discipline, it becomes a firehose of notifications. Learning to use Do Not Disturb, mute channels, and set boundaries is essential.
    `,

    pros: [
      'Excellent channel organization',
      'Massive integration ecosystem',
      'Powerful search functionality',
      'Huddles for quick voice chats',
      'Works on every platform',
    ],
    cons: [
      'Can become overwhelming without discipline',
      'Free tier limited to 90 days of history',
      'Resource heavy on desktop',
      'Pricing per user adds up quickly',
    ],
    verdict: 'Still the gold standard for team chat, but requires intentional usage to avoid notification overload.',

    rating: {
      overall: 4.4,
      usability: 4.5,
      performance: 3.5,
      features: 5,
      value: 3.5,
      design: 4.5,
    },
    userRatingCount: 45200,

    seo: {
      title: 'Slack Review 2024: Team Communication Platform',
      description: 'In-depth Slack review covering channels, integrations, pricing, and how it compares to Microsoft Teams and Discord.',
      ogImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630&fit=crop',
      keywords: ['slack review', 'slack vs teams', 'team chat app', 'slack pricing', 'business messaging'],
    },

    publishedAt: '2024-01-25T09:00:00Z',
    updatedAt: '2024-02-15T11:00:00Z',
    featured: false,
    editorsPick: false,
  },

  // ─────────────────────────────────────────────────────────────────
  // OBSIDIAN - Note Taking
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'obsidian-006',
    slug: 'obsidian',
    name: 'Obsidian',
    developer: 'Obsidian',
    developerUrl: 'https://obsidian.md',

    category: 'note-taking',
    tags: ['offline-capable', 'free-tier', 'cross-platform'],

    pricing: 'freemium',
    priceDisplay: 'Free / $50 per year for Sync',

    iconUrl: '/images/apps/obsidian/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/d2/2f/09/d22f093d-b50c-3bb2-6277-f119c1e71986/d3dde89e-453a-4ae6-bbd1-cacd5424afb5_1.png/392x696bb.png',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/d2/2f/09/d22f093d-b50c-3bb2-6277-f119c1e71986/d3dde89e-453a-4ae6-bbd1-cacd5424afb5_1.png/392x696bb.png',
        alt: 'Obsidian note editor',
        caption: 'Write and link your notes',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/00/aa/7a/00aa7a68-e75b-e84c-9359-8215e131c432/9ee95548-8b05-406b-a4f9-f9d2b42e8cb0_2.png/392x696bb.png',
        alt: 'Obsidian graph view',
        caption: 'Visualize connections between notes',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/aa/1e/50/aa1e503e-a96a-70af-d352-3d613c293cef/769f649e-06d2-4d9b-8184-053fc5c53da8_3.png/392x696bb.png',
        alt: 'Obsidian plugins',
        caption: 'Extend with community plugins',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/OUrOfIqvGS4',
      videoId: 'OUrOfIqvGS4',
      title: 'Obsidian - The Complete Beginners Guide',
      duration: 'PT20M30S',
    },

    downloadLinks: [
      {
        platform: 'macos',
        url: 'https://obsidian.md/download',
      },
      {
        platform: 'windows',
        url: 'https://obsidian.md/download',
      },
      {
        platform: 'linux',
        url: 'https://obsidian.md/download',
      },
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/obsidian-connected-notes/id1557175442',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=md.obsidian',
      },
    ],

    summary: 'Obsidian is a powerful knowledge base that works on local Markdown files, featuring bidirectional linking and a graph view to visualize your thinking.',

    reviewContent: `
## Your Second Brain, Owned by You

Obsidian takes a fundamentally different approach to note-taking. Your notes are plain Markdown files stored locally on your device. No lock-in, no proprietary formats, complete ownership.

## Bidirectional Linking

The magic of Obsidian is [[linking notes together]]. Create connections as you write, and watch a web of knowledge emerge. The graph view visualizes these connections beautifully.

## Plugin Ecosystem

The community plugin ecosystem is staggering. Daily notes, Kanban boards, Dataview queries, Excalidraw integration—if you can imagine it, there's probably a plugin for it.

## Local-First Philosophy

Your data never leaves your device unless you choose to sync it. This means blazing fast performance, offline access, and complete privacy. Use iCloud, Dropbox, or Obsidian Sync to sync across devices.

## Learning Curve

Obsidian rewards investment. The more you learn about linking, templates, and plugins, the more powerful it becomes. But this also means it's not as immediately approachable as simpler alternatives.
    `,

    pros: [
      'Local-first, you own your data',
      'Incredibly powerful plugin system',
      'Beautiful graph visualization',
      'Plain Markdown files, no lock-in',
      'Fast and works offline',
      'Free for personal use',
    ],
    cons: [
      'Steep learning curve',
      'Sync requires paid subscription or DIY',
      'Can be overwhelming with too many plugins',
      'Mobile app less polished than desktop',
    ],
    verdict: 'The ultimate tool for serious note-takers and knowledge workers willing to invest time in learning it.',

    rating: {
      overall: 4.6,
      usability: 3.5,
      performance: 5,
      features: 5,
      value: 5,
      design: 4.5,
    },
    userRatingCount: 18900,

    seo: {
      title: 'Obsidian Review 2024: The Best Personal Knowledge Base',
      description: 'Complete Obsidian review covering bidirectional linking, plugins, graph view, and why it is the top choice for building a second brain.',
      ogImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&h=630&fit=crop',
      keywords: ['obsidian review', 'obsidian vs notion', 'note taking app', 'second brain', 'knowledge management'],
    },

    publishedAt: '2024-02-05T10:00:00Z',
    updatedAt: '2024-03-10T15:00:00Z',
    featured: true,
    editorsPick: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // TODOIST - Productivity
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'todoist-007',
    slug: 'todoist',
    name: 'Todoist',
    developer: 'Doist',
    developerUrl: 'https://todoist.com',

    category: 'productivity',
    tags: ['cross-platform', 'free-tier', 'offline-capable'],

    pricing: 'freemium',
    priceDisplay: 'Free / $5 per month',

    iconUrl: '/images/apps/todoist/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/bb/ad/59bbaddb-ba3b-c6f1-e427-b6aac515bab0/1-Organize.png/800x500bb.jpg',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/bb/ad/59bbaddb-ba3b-c6f1-e427-b6aac515bab0/1-Organize.png/800x500bb.jpg',
        alt: 'Todoist organize tasks',
        caption: 'Organize your tasks effortlessly',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/39/5d/ec/395decb0-8edf-75e4-7d2c-73f88a8ef61a/2-Achieve.png/800x500bb.jpg',
        alt: 'Todoist achieve goals',
        caption: 'Achieve your goals with clarity',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/59/e0/bd/59e0bd50-987c-1bd8-8f12-91c180b851b1/4-Quick_Add.png/800x500bb.jpg',
        alt: 'Todoist quick add',
        caption: 'Quickly add tasks with natural language',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/v-g2GUIBihc',
      videoId: 'v-g2GUIBihc',
      title: 'Todoist Tutorial for Beginners',
      duration: 'PT15M00S',
    },

    downloadLinks: [
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/todoist-to-do-list-planner/id585829637',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.todoist',
      },
      {
        platform: 'web',
        url: 'https://todoist.com',
      },
      {
        platform: 'macos',
        url: 'https://todoist.com/downloads',
      },
      {
        platform: 'windows',
        url: 'https://todoist.com/downloads',
      },
    ],

    summary: 'Todoist is a beautifully simple yet surprisingly powerful task manager that helps you organize work and life with projects, labels, and natural language input.',

    reviewContent: `
## Simplicity That Scales

Todoist proves that a task manager doesn't need to be complicated to be powerful. The interface is clean and focused, but dig deeper and you'll find a robust system that can handle complex workflows.

## Natural Language Input

Type "Call mom every Sunday at 2pm" and Todoist understands. This natural language processing makes adding tasks incredibly fast. It's the feature that keeps users loyal.

## Projects and Labels

Organize tasks into projects, add labels for context, and use filters to create custom views. The system is flexible enough to implement GTD, bullet journaling, or whatever system works for you.

## Karma and Streaks

Todoist gamifies productivity with karma points and streaks. Some find it motivating; others ignore it. It's there if you want it.

## What It Doesn't Do

Todoist is a task manager, not a project management tool. No Gantt charts, no time tracking, no team resource allocation. If you need those, look elsewhere.
    `,

    pros: [
      'Excellent natural language input',
      'Clean, distraction-free design',
      'Available on every platform',
      'Powerful filters and labels',
      'Generous free tier',
      'Quick add from anywhere',
    ],
    cons: [
      'Limited project management features',
      'No built-in time tracking',
      'Reminders require premium',
      'Collaboration features are basic',
    ],
    verdict: 'The best task manager for individuals who want simplicity without sacrificing power.',

    rating: {
      overall: 4.5,
      usability: 5,
      performance: 4.5,
      features: 4,
      value: 4.5,
      design: 5,
    },
    userRatingCount: 32100,

    seo: {
      title: 'Todoist Review 2024: Simple Yet Powerful Task Management',
      description: 'Full Todoist review covering natural language input, projects, filters, and how it compares to Things 3 and TickTick.',
      ogImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=630&fit=crop',
      keywords: ['todoist review', 'todoist vs things', 'task manager', 'todo app', 'productivity app'],
    },

    publishedAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-02-28T10:00:00Z',
    featured: false,
    editorsPick: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // LINEAR - Productivity/Design
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'linear-008',
    slug: 'linear',
    name: 'Linear',
    developer: 'Linear Orbit, Inc.',
    developerUrl: 'https://linear.app',

    category: 'productivity',
    tags: ['cross-platform', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free / $10 per user/month',

    iconUrl: '/images/apps/linear/icon.png',
    heroImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e6/0f/02/e60f023d-a9df-b584-e0a4-a0a762e44024/f3bb37e8-17f5-4e1b-94f1-31ad08d60adb_Hero.png/576x768bb.png',
    screenshots: [
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e6/0f/02/e60f023d-a9df-b584-e0a4-a0a762e44024/f3bb37e8-17f5-4e1b-94f1-31ad08d60adb_Hero.png/576x768bb.png',
        alt: 'Linear issue tracking',
        caption: 'Beautiful issue tracking interface',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/23/77/5e/23775e89-e22f-617a-3b74-f88115700530/bb111362-8e3f-428d-bdf1-648b6dc1ed5e_Inbox.png/576x768bb.png',
        alt: 'Linear inbox view',
        caption: 'Triage issues from your inbox',
        platform: 'ios',
      },
      {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8f/07/c1/8f07c1b4-70dd-0d9d-759c-e18438a78d39/4340d547-c543-4774-b4df-2f88ccec6fea_Issue.png/576x768bb.png',
        alt: 'Linear issue detail',
        caption: 'Detailed issue management',
        platform: 'ios',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/qaR4jRrc1Iw',
      videoId: 'qaR4jRrc1Iw',
      title: 'Linear App Tutorial - Project Management Guide',
      duration: 'PT12M00S',
    },

    downloadLinks: [
      {
        platform: 'web',
        url: 'https://linear.app',
      },
      {
        platform: 'macos',
        url: 'https://linear.app/download',
      },
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/linear-app/id1507953823',
      },
    ],

    summary: 'Linear is a modern issue tracking tool built for high-performance teams, featuring keyboard-first design, blazing speed, and thoughtful workflows.',

    reviewContent: `
## The Anti-Jira

Linear was built by engineers frustrated with slow, bloated issue trackers. Every interaction is instant. Every shortcut is intuitive. It's what Jira should have been.

## Keyboard-First Design

Power users will love Linear. Press Cmd+K and you can do anything—create issues, navigate, assign, change status—without touching the mouse. It's remarkably efficient.

## Cycles and Roadmaps

Linear's cycle system (like sprints, but better) and roadmap features help teams plan without drowning in project management overhead. It's opinionated in the right ways.

## GitHub Integration

The GitHub integration is seamless. Link PRs to issues, auto-close issues on merge, and keep everything in sync without manual effort.

## Not for Everyone

Linear is designed for software teams. If you're not building software, the issue-centric model might not fit. And the opinionated workflow means less flexibility than some alternatives.
    `,

    pros: [
      'Incredibly fast interface',
      'Keyboard shortcuts for everything',
      'Beautiful, thoughtful design',
      'Excellent GitHub integration',
      'Cycles and roadmaps built-in',
    ],
    cons: [
      'Primarily for software teams',
      'Less flexible than Jira',
      'Mobile app is limited',
      'Learning curve for keyboard shortcuts',
    ],
    verdict: 'The best issue tracker for fast-moving software teams who value speed and design.',

    rating: {
      overall: 4.7,
      usability: 4.5,
      performance: 5,
      features: 4.5,
      value: 4,
      design: 5,
    },
    userRatingCount: 8700,

    seo: {
      title: 'Linear Review 2024: Modern Issue Tracking for Software Teams',
      description: 'Linear app review covering keyboard shortcuts, cycles, roadmaps, and why teams are switching from Jira.',
      ogImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=630&fit=crop',
      keywords: ['linear app review', 'linear vs jira', 'issue tracking', 'project management', 'software development'],
    },

    publishedAt: '2024-03-01T09:00:00Z',
    updatedAt: '2024-03-20T11:00:00Z',
    featured: true,
    editorsPick: false,
  },

  // ─────────────────────────────────────────────────────────────────
  // CHATGPT - AI Tools
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'chatgpt-009',
    slug: 'chatgpt',
    name: 'ChatGPT',
    developer: 'OpenAI',
    developerUrl: 'https://openai.com',

    category: 'ai-tools',
    tags: ['ai-powered', 'free-tier', 'cross-platform'],

    pricing: 'freemium',
    priceDisplay: 'Free / $20 per month for Plus',

    iconUrl: '/images/apps/chatgpt/icon.png',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    screenshots: [
      {
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        alt: 'ChatGPT conversation interface',
        caption: 'Natural conversation with AI',
        platform: 'web',
      },
      {
        src: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=800&h=600&fit=crop',
        alt: 'ChatGPT code generation',
        caption: 'Generate and explain code',
        platform: 'web',
      },
    ],

    videoReview: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/JTxsNm9IdYU',
      videoId: 'JTxsNm9IdYU',
      title: 'ChatGPT Tutorial - Complete Guide for Beginners',
      duration: 'PT18M45S',
    },

    downloadLinks: [
      {
        platform: 'web',
        url: 'https://chat.openai.com',
      },
      {
        platform: 'ios',
        url: 'https://apps.apple.com/app/chatgpt/id6448311069',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.openai.chatgpt',
      },
      {
        platform: 'macos',
        url: 'https://chat.openai.com',
      },
    ],

    summary: 'ChatGPT is an AI assistant that can write, analyze, code, and converse on nearly any topic, powered by OpenAI\'s GPT models.',

    reviewContent: `
## The AI Revolution in Your Browser

ChatGPT didn't invent large language models, but it made them accessible to everyone. In just months, it became the fastest-growing consumer application in history.

## What It Does Well

Writing assistance, brainstorming, explaining complex topics, coding help, translation, summarization—ChatGPT is genuinely useful across an incredible range of tasks. It's like having a knowledgeable assistant available 24/7.

## GPT-4 vs GPT-3.5

The free tier uses GPT-3.5, which is capable but makes more mistakes. GPT-4 (Plus subscription) is significantly smarter, handles nuance better, and makes fewer errors. The difference is noticeable.

## Custom GPTs and Plugins

Plus subscribers can create custom GPTs and use plugins that connect ChatGPT to external services. This extensibility transforms it from a chatbot into a platform.

## Limitations

ChatGPT can be confidently wrong, has knowledge cutoffs, and shouldn't be trusted for critical facts without verification. It's a tool to augment your thinking, not replace it.
    `,

    pros: [
      'Incredibly versatile AI assistant',
      'Natural conversational interface',
      'Excellent for writing and coding',
      'Free tier is very capable',
      'Continuously improving',
      'Custom GPTs extend functionality',
    ],
    cons: [
      'Can hallucinate incorrect information',
      'Knowledge cutoff date',
      'GPT-4 requires subscription',
      'Can be slow during peak times',
      'Privacy considerations for sensitive data',
    ],
    verdict: 'A genuinely transformative tool that belongs in everyone\'s toolkit, with appropriate skepticism.',

    rating: {
      overall: 4.6,
      usability: 5,
      performance: 4,
      features: 4.5,
      value: 4.5,
      design: 4.5,
    },
    userRatingCount: 125000,

    seo: {
      title: 'ChatGPT Review 2024: The AI Assistant Everyone Is Using',
      description: 'Comprehensive ChatGPT review covering GPT-4 vs GPT-3.5, use cases, limitations, and whether Plus is worth the subscription.',
      ogImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
      keywords: ['chatgpt review', 'chatgpt plus', 'openai', 'ai assistant', 'gpt-4'],
    },

    publishedAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-03-28T16:00:00Z',
    featured: true,
    editorsPick: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // VIDBUZZ - AI Tools
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'vidbuzz-010',
    slug: 'vidbuzz',
    name: 'VidBuzz',
    developer: 'VidBuzz',
    developerUrl: 'https://vidbuzz.io',

    category: 'ai-tools',
    tags: ['ai-powered', 'free-tier'],

    pricing: 'freemium',
    priceDisplay: 'Free tier / Premium plans available',

    iconUrl: '/images/apps/vidbuzz/icon.png',
    heroImageUrl: '/images/apps/vidbuzz/screenshot1.png',
    screenshots: [
      {
        src: '/images/apps/vidbuzz/screenshot1.png',
        alt: 'VidBuzz dashboard with TikTok and Instagram discovery',
        caption: 'Discover trending content across platforms',
        platform: 'web',
      },
      {
        src: '/images/apps/vidbuzz/screenshot2.png',
        alt: 'VidBuzz TikTok content discovery and filtering',
        caption: 'Find viral content with advanced filters',
        platform: 'web',
      },
      {
        src: '/images/apps/vidbuzz/screenshot3.png',
        alt: 'VidBuzz AI Canvas character creation mode',
        caption: 'Create custom AI characters with Character Mode',
        platform: 'web',
      },
    ],

    videoReview: {
      provider: 'other',
      embedUrl: 'https://app.heygen.com/embedded-player/29d93696590a4c15ad680127d7b109d7',
      videoId: '29d93696590a4c15ad680127d7b109d7',
      title: 'VidBuzz Review by Samira - AI Video Creation Platform',
      duration: 'PT0M27S',
    },

    downloadLinks: [
      {
        platform: 'web',
        url: 'https://vidbuzz.io',
        label: 'Try VidBuzz Free',
      },
    ],

    summary: 'VidBuzz is an AI video creation platform that lets you build custom digital characters, give them unique voices, and create professional videos at scale without animation skills.',

    reviewContent: `
## Overview

VidBuzz is an AI video creation platform that lets you build custom digital characters. You can design how they look, give them a unique voice, and use them to create videos at scale.

Think product demos, social media content, educational videos, or even customer support avatars. The best part? You don't need any animation or video editing skills.

## Key Features

### Character Customization
Create characters that match your brand identity. Choose their appearance, style, and personality. VidBuzz gives you full control over how your digital avatar looks and behaves.

### Voice Integration
VidBuzz works with voice platforms like Eleven Labs, so your character sounds exactly how you want. This integration means you can create natural, expressive voices that bring your characters to life.

### Script to Video
Just type what you want your character to say, and VidBuzz generates the video. Simple as that. No need for complex animation software or video editing skills.

### Scalability
Need ten videos or a hundred? The platform handles it without breaking a sweat. This makes VidBuzz ideal for content creators and businesses who need to produce video content regularly.

## Who Is It For?

VidBuzz is perfect for content creators who want a consistent on-screen presence without being on camera. It's great for businesses looking to scale their video marketing. And it's ideal for anyone who wants to experiment with AI-powered storytelling.

## The Verdict

The learning curve can be steep at first, and premium features require a subscription. But for what it delivers — custom AI characters, professional-quality output, and serious time savings — it's absolutely worth exploring.
    `,

    pros: [
      'Create custom AI characters that match your brand',
      'Integrates with voice platforms like Eleven Labs',
      'No animation or video editing skills required',
      'Scale video production efficiently',
      'Script-to-video workflow is intuitive',
      'Great for consistent on-screen presence',
    ],
    cons: [
      'Learning curve can be steep initially',
      'Premium features require subscription',
      'Character quality depends on input assets',
      'Limited compared to professional animation studios',
    ],
    verdict: 'An excellent platform for creators and businesses who want to scale AI video content with custom digital characters.',

    rating: {
      overall: 4.5,
      usability: 4,
      performance: 4.5,
      features: 4.5,
      value: 4,
      design: 4.5,
    },
    userRatingCount: 2100,

    seo: {
      title: 'VidBuzz Review 2024: AI Video Creation with Custom Characters',
      description: 'Complete VidBuzz review covering AI character creation, voice integration, and how to create professional videos at scale.',
      ogImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop',
      keywords: ['vidbuzz review', 'ai video creator', 'digital avatar', 'ai characters', 'video marketing'],
    },

    publishedAt: '2024-11-30T10:00:00Z',
    updatedAt: '2024-11-30T10:00:00Z',
    featured: true,
    editorsPick: true,
  },
];
