export type VideoProject = {
  id: string;
  title: string;
  channel: string;
  views: string;
  retention: string;
  duration: string;
  thumbnail: string;
  video: string;
  category: string;
  description: string;
  published: string;
};

export type VideoCategory = "documentary" | "truecrime" | "short" | "finance" | "ai";

export const VIDEO_PROJECTS: Record<VideoCategory, VideoProject[]> = {
  documentary: [
    {
      id: "doc-01",
      title: "The Quiet Year",
      channel: "Ali Vasquez",
      views: "6.8M",
      retention: "84%",
      duration: "38:00",
      thumbnail: "https://images.pexels.com/videos/10234380/beach-cliff-drone-ocean-10234380.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/10234380/10234380-uhd_3840_2160_30fps.mp4",
      category: "Documentary",
      description: "A 38-minute creator documentary paced like a held breath. Contemplative rhythm, breath-paced cuts.",
      published: "Mar 2026",
    },
    {
      id: "doc-02",
      title: "Where the Light Bends",
      channel: "Lumen Studios",
      views: "3.2M",
      retention: "78%",
      duration: "24:15",
      thumbnail: "https://images.pexels.com/videos/11937001/pexels-photo-11937001.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/11937001/11937001-uhd_3840_2160_24fps.mp4",
      category: "Documentary",
      description: "A cinematic portrait of a remote lighthouse. Desaturated coastal grading, atmospheric sound design.",
      published: "Jan 2026",
    },
  ],
  truecrime: [
    {
      id: "tc-01",
      title: "The Vanishing of Elm Street",
      channel: "Dark Truth Co.",
      views: "12.4M",
      retention: "76%",
      duration: "52:40",
      thumbnail: "/portfolio/thumbnail-truecrime.png",
      video: "https://videos.pexels.com/video-files/27239437/12100535_3840_2160_24fps.mp4",
      category: "True Crime",
      description: "Atmospheric true crime doc with suspense-driven pacing. Mid-episode twist engineered at 32:10.",
      published: "Feb 2026",
    },
    {
      id: "tc-02",
      title: "Who Killed Sarah Miller?",
      channel: "Unsolved Files",
      views: "8.9M",
      retention: "72%",
      duration: "1:02:18",
      thumbnail: "https://images.pexels.com/videos/6620873/bed-bedroom-bedtime-boy-6620873.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/6620873/6620873-uhd_3840_2160_25fps.mp4",
      category: "True Crime",
      description: "Long-form true crime with layered narrative. Evidence reveals paced at retention peaks.",
      published: "Dec 2025",
    },
  ],
  short: [
    {
      id: "short-01",
      title: "The 8-Second Empire",
      channel: "Series · 40+ shorts",
      views: "184M",
      retention: "78%",
      duration: "00:22",
      thumbnail: "https://images.pexels.com/videos/8956059/pexels-photo-8956059.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/8956059/8956059-uhd_3840_2160_24fps.mp4",
      category: "Short Form",
      description: "Modular short-form system. First-frame contradictions, 7-second reveals, forward-loop endings.",
      published: "Ongoing",
    },
    {
      id: "short-02",
      title: "60-Second Story Engine",
      channel: "Mira Chen",
      views: "47M",
      retention: "82%",
      duration: "00:58",
      thumbnail: "https://images.pexels.com/videos/4498132/pexels-photo-4498132.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/4498132/4498132-uhd_3840_2160_25fps.mp4",
      category: "Short Form",
      description: "Vertical short engine built for Reels, TikTok, and Shorts. Scaled to 40 videos across 3 channels.",
      published: "Ongoing",
    },
  ],
  finance: [
    {
      id: "fin-01",
      title: "How I Built a $2M Portfolio",
      channel: "Noah Builds",
      views: "4.7M",
      retention: "68%",
      duration: "18:40",
      thumbnail: "/portfolio/thumbnail-finance.png",
      video: "https://videos.pexels.com/video-files/9076120/9076120-uhd_4096_2160_24fps.mp4",
      category: "Finance",
      description: "Founder story cut like a thriller — not a pitch. Midpoint cliffhanger drove 31% replay rate.",
      published: "Feb 2026",
    },
    {
      id: "fin-02",
      title: "Why 90% of Investors Fail",
      channel: "Capital Flow",
      views: "2.1M",
      retention: "64%",
      duration: "14:22",
      thumbnail: "https://images.pexels.com/videos/7618426/pexels-photo-7618426.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/7618426/uhd_25fps.mp4",
      category: "Finance",
      description: "Educational finance video with data-driven visuals and retention-engineered pacing every 60s.",
      published: "Nov 2025",
    },
  ],
  ai: [
    {
      id: "ai-01",
      title: "The AI That Changed Everything",
      channel: "Tech Forward",
      views: "9.3M",
      retention: "70%",
      duration: "21:08",
      thumbnail: "/portfolio/thumbnail-ai.png",
      video: "https://videos.pexels.com/video-files/28561007/12421216_3840_2160_30fps.mp4",
      category: "AI / Tech",
      description: "Futuristic AI documentary with motion graphics and tech-driven pacing. Custom visual systems.",
      published: "Mar 2026",
    },
    {
      id: "ai-02",
      title: "Building an AI Startup in 30 Days",
      channel: "Parallel Co.",
      views: "5.6M",
      retention: "66%",
      duration: "26:50",
      thumbnail: "https://images.pexels.com/videos/33830768/pexels-photo-33830768.jpeg?auto=compress&cs=tinysrgb&w=1280",
      video: "https://videos.pexels.com/video-files/33830768/14358479_7680_4320_30fps.mp4",
      category: "AI / Tech",
      description: "Tech vlog with kinetic type and data visualization. Motion graphics system built for scale.",
      published: "Jan 2026",
    },
  ],
};

export type ThumbnailProject = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  ctr: string;
  clicks: string;
  description: string;
};

export const THUMBNAIL_PROJECTS: ThumbnailProject[] = [
  {
    id: "thumb-01",
    title: "I Lost Everything — Finance Video",
    category: "Finance",
    thumbnail: "/portfolio/thumbnail-finance.png",
    ctr: "11.4%",
    clicks: "1.2M",
    description: "High-contrast MrBeast-style thumbnail. Bold text, surprised face, red arrow. CTR +318% vs. baseline.",
  },
  {
    id: "thumb-02",
    title: "The Killer Was Inside — True Crime",
    category: "True Crime",
    thumbnail: "/portfolio/thumbnail-truecrime.png",
    ctr: "9.8%",
    clicks: "890K",
    description: "Dark moody composition. Red and black palette. Mystery-driven text that creates a curiosity gap.",
  },
  {
    id: "thumb-03",
    title: "The Last Journey — Documentary",
    category: "Documentary",
    thumbnail: "/portfolio/thumbnail-documentary.png",
    ctr: "8.2%",
    clicks: "540K",
    description: "Cinematic minimalism. Golden hour aerial, small boat in vast water. Prestige aesthetic for documentary.",
  },
  {
    id: "thumb-04",
    title: "The Quiet Year — Creator Documentary",
    category: "Documentary",
    thumbnail: "https://images.pexels.com/videos/10234380/beach-cliff-drone-ocean-10234380.jpeg?auto=compress&cs=tinysrgb&w=1280",
    ctr: "7.9%",
    clicks: "320K",
    description: "Desaturated coastal palette. Editorial serif type. Designed to feel like an A24 poster on YouTube.",
  },
  {
    id: "thumb-05",
    title: "60-Second Story — Short Form",
    category: "Short Form",
    thumbnail: "https://images.pexels.com/videos/8956059/pexels-photo-8956059.jpeg?auto=compress&cs=tinysrgb&w=1280",
    ctr: "14.2%",
    clicks: "2.1M",
    description: "Vertical-first thumbnail design. Face-forward composition, bold outline text, high emotional contrast.",
  },
  {
    id: "thumb-06",
    title: "AI Will Replace You — Tech",
    category: "AI / Tech",
    thumbnail: "/portfolio/thumbnail-ai.png",
    ctr: "10.6%",
    clicks: "670K",
    description: "Futuristic tech aesthetic. Glitch effect, neon purple gradient, provocative text. High controversy hook.",
  },
];

export type ScriptProject = {
  id: string;
  title: string;
  type: string;
  duration: string;
  words: string;
  description: string;
  excerpt: string;
  client: string;
};

export const SCRIPT_PROJECTS: ScriptProject[] = [
  {
    id: "script-01",
    title: "The Vanishing of Elm Street",
    type: "True Crime Documentary",
    duration: "52 min",
    words: "8,400",
    description: "Full script for a 52-minute true crime documentary. Three-act structure with evidence reveals paced at retention peaks.",
    excerpt: "INT. ABANDONED HOUSE — NIGHT\n\nThe camera pushes through the doorway. Dust particles float in a shaft of moonlight. Every step creaks...",
    client: "Dark Truth Co.",
  },
  {
    id: "script-02",
    title: "How I Built a $2M Portfolio",
    type: "Founder Story / Educational",
    duration: "18 min",
    words: "3,200",
    description: "Script for a founder's origin story, written as a three-act thriller. Midpoint cliffhanger engineered for replay.",
    excerpt: "EXT. GARAGE — DAWN\n\nNOAH stares at the spreadsheet. Numbers in red. The loan is due in 30 days. He closes the laptop...",
    client: "Noah Builds",
  },
  {
    id: "script-03",
    title: "Why Your Videos Flop",
    type: "Educational Long-Form",
    duration: "22 min",
    words: "4,100",
    description: "Script for a video essay on retention psychology. Four narrative loops designed to maintain 72%+ AVD.",
    excerpt: "ON CAMERA — JOHN\n\n(leans forward)\n\nYour videos aren't failing because of your topic. They're failing because of second three...",
    client: "Mira Chen",
  },
  {
    id: "script-04",
    title: "The AI That Changed Everything",
    type: "Tech Documentary",
    duration: "21 min",
    words: "3,600",
    description: "Script for a tech-focused documentary exploring AI's impact on creative work. Motion graphic cues embedded in script.",
    excerpt: "MONTAGE — LAB FOOTAGE\n\nFlashes of code. Neural network visualizations. A researcher pauses, stares at the screen...",
    client: "Tech Forward",
  },
];

export const SERVICES = [
  {
    id: "video-editing",
    n: "01",
    title: "Video Editing",
    tagline: "The main event. Engineered attention.",
    description:
      "Long-form and short-form video editing for YouTube creators, brands, and educators. Every cut is a retention decision. Every second earns the next.",
    categories: ["Documentary", "True Crime", "Short Form", "Finance", "AI / Tech"],
    deliverables: ["Long-form YouTube videos", "Shorts / Reels / TikToks", "Podcasts (long-form to watchable)", "Brand films", "Retention-optimized edits"],
    starting: "$2,000 per project",
    retainer: "From $4k/month",
  },
  {
    id: "thumbnail-design",
    n: "02",
    title: "Thumbnail Design",
    tagline: "The frame that earns the click.",
    description:
      "Custom YouTube thumbnails engineered for high CTR. Bold composition, emotional contrast, and curiosity gaps — A/B tested against channel baselines.",
    categories: ["YouTube Thumbnails", "A/B Variants", "Channel Branding", "Custom Graphics"],
    deliverables: ["3–5 thumbnail variants per video", "A/B test-ready designs", "Channel thumbnail system", "Custom illustrations when needed", "Performance analysis"],
    starting: "$250 per thumbnail",
    retainer: "From $1.5k/month",
  },
  {
    id: "scriptwriting",
    n: "03",
    title: "Scriptwriting",
    tagline: "The spine of every great video.",
    description:
      "Full scriptwriting and treatment for YouTube videos, documentaries, and brand content. Structure-first writing designed to hold attention from cold open to outro.",
    categories: ["YouTube Scripts", "Documentary Treatments", "Brand Narratives", "Short-Form Hooks"],
    deliverables: ["Full video scripts", "Hook + structure outlines", "A/B hook variants", "Documentary treatments", "Rewrites and polish passes"],
    starting: "$500 per script",
    retainer: "From $2k/month",
  },
];

export const STATS = [
  { value: "50M+", label: "Views generated" },
  { value: "100+", label: "Videos edited" },
  { value: "15+", label: "Creator partners" },
  { value: "9", label: "Years editing" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Research",
    subtitle: "Understand the audience",
    description: "Study your viewers — who they are, where they drop off, what keeps them watching. Every edit starts with the data.",
  },
  {
    step: "02",
    title: "Story Structure",
    subtitle: "Map the narrative",
    description: "Build the spine — acts, beats, hooks, payoffs. The video is designed before the timeline ever opens.",
  },
  {
    step: "03",
    title: "Retention Engineering",
    subtitle: "Engineer every second",
    description: "Every 15 seconds is a retention decision. Open loops, visual payoffs, pacing shifts, and curiosity gaps deployed where attention valleys would form.",
  },
  {
    step: "04",
    title: "Polish",
    subtitle: "Finish-grade craft",
    description: "Motion graphics, sound design, color, and final master. The last 10% that separates good videos from great ones.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "John doesn't just edit videos — he engineers attention. Our AVD jumped from 38% to 72% in a single upload.",
    author: "Mira Chen",
    role: "Creator · 4.2M subs",
    avatar: "https://images.pexels.com/photos/11701102/pexels-photo-11701102.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "He rebuilt my entire long-form format. Fourteen uploads later, I still use the structure he designed.",
    author: "Ali Vasquez",
    role: "Creator · 2.4M subs",
    avatar: "https://images.pexels.com/photos/27155225/pexels-photo-27155225.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "Most editors cut what you shot. John cuts what the audience needs. He turned a 4-hour interview into our most-watched episode.",
    author: "Daniel Park",
    role: "Host · Field Notes Podcast",
    avatar: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const CLIENT_LOGOS = [
  "Mira Chen",
  "Noah Builds",
  "Field Notes",
  "Ali Vasquez",
  "Atlas Audio",
  "Verge Mag",
  "Onyx Records",
  "Parallel Co.",
  "Halcyon",
  "Tech Forward",
];
