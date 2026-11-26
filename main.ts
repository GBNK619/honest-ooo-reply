// The Painfully Honest Out-of-Office — make.fun one-liner entry.
// Writes one painfully honest (but still polite) out-of-office auto-reply
// sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Thank you for your email; I am away until Monday, and honestly, your message will be exactly as unread then as it would have been today.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "./output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  console.log(`wrote ${target}`);
}

main();
