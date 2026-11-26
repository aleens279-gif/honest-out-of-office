// The Painfully Honest Out-of-Office — writes one reply to /output/entry.txt
// Gate: 145 chars (max 200), one sentence, no trailing newline.
// Twist: honest about the inbox, polite about the order of replies.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I am away until Monday,",
  "ignoring 400 unread emails with",
  "the same enthusiasm I had",
  "before I left, and I will",
  "answer them in the order I feel like.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
