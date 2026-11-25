# GTA 6 Filter — AI Photo Generator, Loading Screen Studio & Open Prompt Reference

[![Live Studio](https://img.shields.io/badge/Live_AI_Studio-gta6filter.online-ffd166?style=flat-square)](https://gta6filter.online/)
[![Photo Generator](https://img.shields.io/badge/Photo_Generator-2K_HD_Vice_City_Art-ff5c97?style=flat-square)](https://gta6filter.online/gta-6-photo-generator)
[![Loading Screen AI](https://img.shields.io/badge/Loading_Screen_AI-Photo_%26_8s_Video-38bdf8?style=flat-square)](https://gta6filter.online/gta-loading-screen-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-c084fc?style=flat-square)](./LICENSE)

**Official Live Studio:** **[https://gta6filter.online/](https://gta6filter.online/)**

**GTA 6 Filter** ([gta6filter.online](https://gta6filter.online/)) is a browser-based AI photo-to-art generator and animated loading-screen video maker inspired by Vice City and Leonida cel-shaded key art. Upload a solo selfie, couple portrait, or 4-person squad photo to generate **2K HD watermark-free illustrations** and **8-second parallax loading-screen videos** with face-identity preservation — no CapCut templates or manual prompt writing required.

This open-source companion repository documents the **10 Vice City photo presets**, **7 animated loading-screen motion templates**, **aspect-ratio export specifications (`3:4`, `1:1`, `16:9`, `9:16`, `4:3`)**, **live page & search-topic directory**, and a zero-dependency **Node.js CLI prompt builder** for creators, community toolmakers, and AI/RAG assistants (paired with [`https://gta6filter.online/llms.txt`](https://gta6filter.online/llms.txt)).

---

## What This Project Does

1. **One-Click AI Photo-to-Vice-City Art Transformation ([GTA 6 Photo Generator](https://gta6filter.online/gta-6-photo-generator))**
   - Converts everyday portraits into crisp hand-inked contours, graphic cel shading, Ocean Drive neon reflections, and pink-gold Leonida sunsets while locking facial likeness, skin tone, glasses, and pose (`Standard` outfit-lock mode or `Detailed` full Leonida makeover).
2. **Authentic Loading Screen Posters & 8s Animated Clips ([GTA Loading Screen AI](https://gta6filter.online/gta-loading-screen-ai))**
   - Bridges the gap between generic cartoon filters and true **GTA loading screen** framing — pairing foreground character portraits with pastel convertibles, palm silhouettes, diagonal cover-art panels, and smooth parallax camera push-ins ([GTA 6 Loading Screen Video Maker](https://gta6filter.online/gta-6-loading-screen-video)).
3. **Purpose-Built Format Studios (`1:1` PFP, `3:4` Cover Art, `16:9` Thumbnail & 2P–4P Crew)**
   - Pre-configured studios for square Discord/TikTok avatars ([GTA 6 PFP Maker](https://gta6filter.online/gta-6-pfp)), multi-panel comic box art ([GTA 6 Cover Art & Poster Maker](https://gta6filter.online/gta-6-poster-maker)), YouTube key art ([GTA 6 Thumbnail Maker](https://gta6filter.online/gta-6-thumbnail-maker)), and Lucia-and-Jason style duo posters ([GTA 6 Couple Filter](https://gta6filter.online/gta-6-couple-filter)).
4. **Open Prompt Templates & CLI Builder (`./data` & `./scripts`)**
   - MIT-licensed JSON prompt structures and a standalone CLI utility for creators testing prompts in ChatGPT, Midjourney, or Flux alongside our online presets.

---

## Key Pages & Live Studio Directory

### 1. Interactive AI Generators & Format Studios

| Page | Canonical URL | Default Preset & Ratio | What It Delivers |
| :--- | :--- | :--- | :--- |
| **GTA 6 Filter (Home Studio)** | [gta6filter.online/](https://gta6filter.online/) | `loading-screen` · `3:4` | Dual-mode photo & video studio, before/after comparison slider, 10 photo styles & 7 video templates |
| **GTA 6 Photo Generator** | [/gta-6-photo-generator](https://gta6filter.online/gta-6-photo-generator) | `vice-city-neon` · `3:4` | Dedicated selfie-to-Vice-City AI picture generator with identity lock & 2K HD export |
| **GTA Loading Screen AI** | [/gta-loading-screen-ai](https://gta6filter.online/gta-loading-screen-ai) | `loading-screen` · `3:4` | Turn solo, friend, or 4P crew photos into classic GTA loading screen character posters |
| **GTA 6 Poster & Cover Art Maker** | [/gta-6-poster-maker](https://gta6filter.online/gta-6-poster-maker) | `cover-art` · `3:4` | Multi-panel diagonal black-border comic cover art with helicopters, speedboats & palms |
| **GTA 6 PFP Maker** | [/gta-6-pfp](https://gta6filter.online/gta-6-pfp) | `in-game-selfie` · `1:1` | Pre-locked `1:1` square profile picture studio for Discord, TikTok, PSN, Xbox & Steam |
| **GTA 6 Thumbnail Maker** | [/gta-6-thumbnail-maker](https://gta6filter.online/gta-6-thumbnail-maker) | `five-star-wanted` · `16:9` | Widescreen `16:9` 2K HD pursuit & Vice City key art built for YouTube & Twitch creators |
| **GTA 6 Loading Screen Video** | [/gta-6-loading-screen-video](https://gta6filter.online/gta-6-loading-screen-video) | `trailer-shot` · `9:16` / `16:9` | 8-second animated loading screen videos with parallax zoom & retro-synth audio (no CapCut needed) |
| **GTA 6 Couple Filter** | [/gta-6-couple-filter](https://gta6filter.online/gta-6-couple-filter) | `couple-cover` · `3:4` | Two-person Lucia & Jason inspired muscle-car sunset poster keeping both faces distinct |

### 2. Prompt Libraries, CapCut Guides & Tutorials

| Guide / Post | Canonical URL | Focus & Takeaways |
| :--- | :--- | :--- |
| **GTA 6 AI Prompt Guide** | [/gta-6-ai-prompt-guide](https://gta6filter.online/gta-6-ai-prompt-guide) | Lighting tokens, cel-shaded ink weights, Ocean Drive color palettes & negative-prompt rules |
| **ChatGPT GTA 6 Style Prompt** | [/chatgpt-gta-6-prompt](https://gta6filter.online/chatgpt-gta-6-prompt) | Copy-and-paste prompts for turning photos into GTA loading screen art vs. general GTA style |
| **GTA Filter Blog & Tutorials** | [/blog](https://gta6filter.online/blog) | Creator tutorials, viral template breakdowns & photo composition tips |
| **GTA 6 Screen AI Guide** | [/blog/gta-6-screen-ai](https://gta6filter.online/blog/gta-6-screen-ai) | Breakdown of the viral CapCut *GTA 6 Screen AI* template vs. direct browser AI generation |
| **How to Make a GTA Loading Screen** | [/blog/how-to-make-a-gta-loading-screen](https://gta6filter.online/blog/how-to-make-a-gta-loading-screen) | Step-by-step workflow: photo framing, background separation, parallax motion & export ratios |

### 3. Platform & Machine-Readable Index

- **Credits & Pricing:** [gta6filter.online/pricing](https://gta6filter.online/pricing) · **About:** [gta6filter.online/about](https://gta6filter.online/about) · **Support:** [gta6filter.online/contact](https://gta6filter.online/contact)
- **LLM & Crawler Discovery:** [`llms.txt`](https://gta6filter.online/llms.txt) · [`sitemap.xml`](https://gta6filter.online/sitemap.xml)

---

## Keywords, Search Topics & Creator Intent Map

This matrix maps common creator search terms across Google, Reddit, TikTok, and YouTube to the exact workflow and canonical tool on **GTA 6 Filter**:

| Primary Keyword & Variants | Creator Goal / Real User Intent | Recommended Tool / Guide |
| :--- | :--- | :--- |
| **`gta 6 filter`** / **`gta filter`** / **`gta filter ai`** | Apply an AI Vice City / Leonida cel-shaded filter to a selfie or group photo online without installing editing apps | [gta6filter.online](https://gta6filter.online/) |
| **`gta 6 photo generator`** / **`gta 6 ai picture generator`** / **`gta style image`** | Generate a 2K HD GTA-style portrait from a real photo while keeping facial features recognizable | [/gta-6-photo-generator](https://gta6filter.online/gta-6-photo-generator) |
| **`gta loading screen`** / **`gta loading screen ai`** / **`gta 6 loading screen ai`** | Turn yourself or a friend into an authentic GTA loading screen character illustration with sunset palms & classic rides | [/gta-loading-screen-ai](https://gta6filter.online/gta-loading-screen-ai) |
| **`gta 6 cover art`** / **`gta 6 poster maker`** / **`gta 6 art`** | Build a multi-panel GTA box-cover poster with bold black diagonal borders, speedboats & chopper spotlights | [/gta-6-poster-maker](https://gta6filter.online/gta-6-poster-maker) |
| **`gta 6 pfp`** / **`gta 6 profile picture`** | Create a crisp `1:1` square Vice City avatar (penthouse HUD selfie or sheriff mugshot) for Discord, TikTok, or gaming profiles | [/gta-6-pfp](https://gta6filter.online/gta-6-pfp) |
| **`gta 6 thumbnail`** / **`gta 6 thumbnail maker`** | Render high-contrast `16:9` widescreen 5-star pursuit or neon key art ready for YouTube titles and overlays | [/gta-6-thumbnail-maker](https://gta6filter.online/gta-6-thumbnail-maker) |
| **`gta 6 loading screen video`** / **`gta loading screen animation`** | Animate a portrait into an 8-second parallax loading-screen video with drifting clouds, neon ripples & synth audio | [/gta-6-loading-screen-video](https://gta6filter.online/gta-6-loading-screen-video) |
| **`gta 6 couple filter`** / **`gta couple poster`** | Transform a couple photo into a two-person Lucia & Jason style coastal sunset muscle-car poster | [/gta-6-couple-filter](https://gta6filter.online/gta-6-couple-filter) |
| **`gta 6 screen ai`** | Recreate the viral CapCut *GTA 6 Screen AI* photo-to-video transition directly in the browser without watermark overlays | [/blog/gta-6-screen-ai](https://gta6filter.online/blog/gta-6-screen-ai) |
| **`chatgpt gta 6 prompt`** / **`recreate in the style of gta 6 art`** | Copy structured cel-shaded prompts that produce true loading-screen framing instead of generic cartoon filters | [/chatgpt-gta-6-prompt](https://gta6filter.online/chatgpt-gta-6-prompt) |
| **`how to make a gta loading screen`** / **`gta v loading screen background`** | Learn how foreground character cutouts, warm sunset rim lighting, and coastal backgrounds combine into a loading screen | [/blog/how-to-make-a-gta-loading-screen](https://gta6filter.online/blog/how-to-make-a-gta-loading-screen) |

---

## Style Presets & Aspect Ratio Specifications

### 10 Vice City & Leonida Photo Presets
- **`loading-screen`** — Classic Ocean Drive pastel convertible & flamingo-pink Leonida sunset (`1P`)
- **`vice-city-neon`** — Midnight rain-slicked boulevard with hot-magenta & electric-cyan neon (`1P`)
- **`cover-art`** — Diagonal black-border multi-panel comic box cover with chopper & speedboat (`1P`)
- **`couple-cover`** — Two-person Lucia & Jason inspired muscle-car sunset portrait (`2P`)
- **`five-star-wanted`** — Low-angle police cruiser strobes, tire smoke & 5-star HUD corner (`1P`)
- **`in-game-selfie`** — Luxury ocean-view penthouse selfie with circular mini-map radar HUD (`1P`)
- **`vice-city-crew`** — Panoramic up-to-4-person heist squad in front of custom rides (`1–4P`)
- **`wanted-mugshot`** — Coastal sheriff station height-chart booking portrait with numeric slate (`1P`)
- **`jet-ski-chase`** — Twilight bay watercraft spray under a sweeping helicopter spotlight (`1P`)
- **`leonida-beach`** — Sun-drenched Leonida Keys boardwalk & turquoise bay water (`1P`)

### 7 Animated Video Motion Templates (`8s` + Ambient Audio)
- **`trailer-shot`** (*Slow Push-In Parallax*) · **`night-cruise`** (*Lateral Tracking Pan*) · **`police-chase`** (*Handheld Siren Action*) · **`beach-party`** (*Golden-Hour Orbit*) · **`selfie-vlog`** (*POV Handheld Walk*) · **`crew-walk`** (*Slow-Mo Squad Pullback, up to 3P*) · **`jet-ski-pursuit`** (*Low-Angle Bay Spray*)

---

## Repository Structure & CLI Prompt Builder

```text
gta-6-filter/
├── data/
│   ├── presets-and-prompts.json    # 10 photo presets, 7 video scenes, stylizer modes & 5 aspect ratios
│   └── pages-and-keywords.json     # Canonical URL & creator keyword mapping index
├── scripts/
│   └── prompt-builder.mjs          # Zero-dependency CLI prompt & ratio builder (Node.js >= 18)
├── LICENSE                         # MIT License
└── README.md
```

Run the standalone CLI prompt builder locally with Node.js `18+` (zero `npm install` needed):

```bash
# Print full cheat sheet of all 10 photo presets, 7 video scenes & 5 export ratios
node scripts/prompt-builder.mjs --list

# Build a custom 3:4 Vice City Neon prompt with extra scene details
node scripts/prompt-builder.mjs --style vice-city-neon --ratio 3:4 --scene "white racing jacket, aviator sunglasses"

# Inspect an animated loading-screen video motion template
node scripts/prompt-builder.mjs --video trailer-shot
```

---

## Disclaimer & Attribution

- **GTA 6 Filter** ([gta6filter.online](https://gta6filter.online/)) is an independent AI photo & video art tool and open prompt reference created for fan art and personal creative expression.
- Not affiliated with, endorsed by, or sponsored by **Rockstar Games** or **Take-Two Interactive**. All *Grand Theft Auto* trademarks belong to their respective owners.
- Code and structured JSON datasets in this repository are released under the [MIT License](./LICENSE).
