import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked HR for a raise and they gave me a mindfulness workshop, so now I'm calmly underpaid.";

// Guard: the entry must be exactly one line, no trailing newline, non-empty.
if (ENTRY.length === 0 || ENTRY.endsWith("\n")) {
  throw new Error("entry must be a single non-empty line without trailing newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
