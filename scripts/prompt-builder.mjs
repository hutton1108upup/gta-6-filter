#!/usr/bin/env node
/**
 * GTA 6 Filter — Zero-Dependency CLI Prompt & Aspect-Ratio Builder
 * Companion utility for https://gta6filter.online/
 *
 * Usage:
 *   node scripts/prompt-builder.mjs
 *   node scripts/prompt-builder.mjs --list
 *   node scripts/prompt-builder.mjs --style vice-city-neon --ratio 3:4
 *   node scripts/prompt-builder.mjs --style cover-art --ratio 16:9 --scene "white Ocean Drive convertible, aviator sunglasses"
 *   node scripts/prompt-builder.mjs --video night-cruise
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataset = JSON.parse(
  readFileSync(join(__dirname, "..", "data", "presets-and-prompts.json"), "utf8")
);

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--list" || arg === "-l") {
      out.list = true;
    } else if (arg === "--help" || arg === "-h") {
      out.help = true;
    } else if (arg.startsWith("--") && i + 1 < argv.length) {
      out[arg.slice(2)] = argv[++i];
    }
  }
  return out;
}

function printSummary() {
  console.log("=== GTA 6 Filter — Open Preset & Prompt Cheat Sheet ===");
  console.log(`Live AI Studio: ${dataset.site_url}\n`);

  console.log("Photo Presets (10):");
  for (const p of dataset.photo_presets) {
    console.log(
      `  - ${p.id.padEnd(18)} | ${p.name.padEnd(16)} | max ${p.max_people}P | default ${p.default_ratio} | ${p.studio_url}`
    );
  }

  console.log("\nAnimated 8s Video Scenes (7):");
  for (const v of dataset.video_scenes) {
    console.log(
      `  - ${v.id.padEnd(18)} | ${v.name.padEnd(16)} | ${v.camera_motion.padEnd(26)} | ${v.studio_url}`
    );
  }

  console.log("\nExport Aspect Ratios (5):");
  for (const r of dataset.aspect_ratios) {
    console.log(
      `  - ${r.ratio.padEnd(5)} | ${r.label.padEnd(32)} | ${r.recommended_url}`
    );
  }

  console.log("\nBuild a custom prompt:");
  console.log(
    '  node scripts/prompt-builder.mjs --style loading-screen --ratio 3:4 --scene "pastel coral convertible, golden rim light"'
  );
}

const args = parseArgs(process.argv);

if (args.help || args.list || (!args.style && !args.video)) {
  printSummary();
  process.exit(0);
}

if (args.video) {
  const scene = dataset.video_scenes.find((s) => s.id === args.video);
  if (!scene) {
    console.error(`Unknown --video "${args.video}". Run with --list to see valid scene IDs.`);
    process.exit(1);
  }
  console.log(`=== Video Motion Preset: ${scene.name} (${scene.id}) ===`);
  console.log(`Camera Motion : ${scene.camera_motion}`);
  console.log(`Max Subjects  : ${scene.max_people}P`);
  console.log(`Summary       : ${scene.summary}`);
  console.log(`One-Click Tool: ${scene.studio_url}`);
  process.exit(0);
}

const preset = dataset.photo_presets.find((p) => p.id === args.style);
if (!preset) {
  console.error(`Unknown --style "${args.style}". Run with --list to see valid preset IDs.`);
  process.exit(1);
}

const ratioObj =
  dataset.aspect_ratios.find((r) => r.ratio === (args.ratio || preset.default_ratio)) ||
  dataset.aspect_ratios[0];

const mode = args.mode === "detailed" ? dataset.stylizer_modes[1] : dataset.stylizer_modes[0];
const extraScene = args.scene ? ` Additional scene details: ${args.scene.trim()}.` : "";
const finalPrompt = `${preset.prompt_template}${extraScene} Target framing: ${ratioObj.ratio} (${ratioObj.label}), 2K HD crisp cel-shaded linework.`;

console.log(`=== GTA 6 Filter Prompt Builder: ${preset.name} (${preset.id}) ===`);
console.log(`Aspect Ratio  : ${ratioObj.ratio} — ${ratioObj.label}`);
console.log(`Stylizer Mode : ${mode.name}`);
console.log(`Max Subjects  : Up to ${preset.max_people} person(s)`);
console.log(`Live Studio   : ${preset.studio_url}\n`);
console.log("--- Copy & Paste Prompt ---");
console.log(finalPrompt);
