// scripts/build-investor-pack.mjs
// Render docs/investor-pack.md -> public/pack/neurolect-investor-pack.pdf
// Uses md-to-pdf (Puppeteer). Windows-friendly; no global installs needed.

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { mdToPdf } from "md-to-pdf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = resolve(__dirname, "../docs/investor-pack.md");
const outDir = resolve(__dirname, "../public/pack");
const output = resolve(outDir, "neurolect-investor-pack.pdf");

mkdirSync(outDir, { recursive: true });

const css = `
@page { size: A4; margin: 24mm 16mm; }
* { font-family: system-ui, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif; }
h1,h2 { color: #111; }
h1 { font-size: 26px; margin: 0 0 8px; }
h2 { font-size: 18px; margin: 24px 0 8px; }
p, li { font-size: 12px; line-height: 1.5; color: #222; }
header { position: running(header); }
footer { position: running(footer); }
@page {
  @top-left { content: "Neurolect — Investor Teaser"; font-size: 10px; color: #666; }
  @bottom-right { content: counter(page) " / " counter(pages); font-size: 10px; color: #666; }
}
code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
hr { border: none; border-top: 1px solid #ddd; margin: 24px 0; }
`;

const md = readFileSync(input, "utf-8");
const pdf = await mdToPdf({ content: md }, { dest: output, pdf_options: { printBackground: true }, css });

if (pdf?.content) {
  writeFileSync(output, pdf.content);
  console.log("Wrote:", output);
} else {
  console.error("Failed to render PDF");
  process.exit(1);
}
