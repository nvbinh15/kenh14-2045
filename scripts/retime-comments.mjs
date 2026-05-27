// Retime comments so each article's comments fall AFTER its publishedAt.
// All comments were initially stamped 2045-04-25 while articles publish
// 04-26 → 05-24, making comments predate their article. This anchors each
// comment file to its article's publish time with organic, monotonic offsets.
//
// Run: node scripts/retime-comments.mjs

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const ARTICLES = path.join(ROOT, "content/articles");
const COMMENTS = path.join(ROOT, "content/comments");

const pad = (n) => String(n).padStart(2, "0");
const fmt = (d) =>
  `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T` +
  `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:00+07:00`;

// slug -> publishedAt (read from frontmatter)
const slugToPub = {};
for (const f of await fs.readdir(ARTICLES)) {
  if (!f.endsWith(".mdx")) continue;
  const raw = await fs.readFile(path.join(ARTICLES, f), "utf-8");
  const slug = raw.match(/^slug:\s*(.+)$/m)?.[1].trim();
  const pub = raw.match(/^publishedAt:\s*"(.+)"$/m)?.[1].trim();
  if (slug && pub) slugToPub[slug] = pub;
}

let files = 0,
  retimed = 0,
  skipped = 0;

for (const cf of await fs.readdir(COMMENTS)) {
  if (!cf.endsWith(".json")) continue;
  const slug = cf.replace(/\.json$/, "");
  const pub = slugToPub[slug];
  if (!pub) {
    console.warn(`no article publishedAt for ${slug} — skipping`);
    skipped++;
    continue;
  }
  // parse "2045-05-12T17:30:00+07:00" as a wall-clock base (treat as UTC for math)
  const base = new Date(pub.replace("+07:00", "Z"));
  const comments = JSON.parse(await fs.readFile(path.join(COMMENTS, cf), "utf-8"));

  comments.forEach((c, i) => {
    // first comment ~9 min after publish, then ~17 min apart (organic drift)
    const t = new Date(base.getTime() + (9 + i * 17) * 60000);
    c.timestamp = fmt(t);
    retimed++;
    (c.replies || []).forEach((r, j) => {
      const rt = new Date(t.getTime() + (6 + j * 13) * 60000);
      r.timestamp = fmt(rt);
      retimed++;
    });
  });

  await fs.writeFile(
    path.join(COMMENTS, cf),
    JSON.stringify(comments, null, 2) + "\n",
  );
  files++;
}

console.log(`retimed ${retimed} comments across ${files} files (${skipped} skipped)`);
