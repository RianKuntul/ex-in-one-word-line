// Entry for "Describe Your Ex in One Word" (make.fun).
// Writes a single-word verdict on an ex to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The word: "Placeholder"
// The verdict: my ex was never the real thing — just someone filling
// the spot until the actual person showed up. A placeholder, holding
// the place warm, then quietly replaced.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Placeholder";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Gate self-check: 1-111 chars, not only whitespace, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 111 || !ENTRY.trim()) {
  throw new Error("entry fails the gate");
}
