import { mkdirSync, writeFileSync } from "node:fs";

// One office joke, one line, punchline last: a raise request answered
// with a mindfulness workshop instead of money.
const ENTRY =
  "I asked HR for a raise and they gave me a mindfulness workshop, so now I'm calmly underpaid.";

if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

// Never delete /output: the grader mounts it as a bind mount.
// Create it if missing, overwrite the file in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
