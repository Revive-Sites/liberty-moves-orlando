#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'node:fs';
import { execSync } from 'node:child_process';

const files = execSync(`grep -rln '\\\\u2019\\|\\\\u2014\\|\\\\u2013\\|\\\\u201c\\|\\\\u201d' /Users/reviveagency/liberty-moves-orlando-build/src/ --include="*.tsx" --include="*.ts"`, { encoding: 'utf-8' }).trim().split('\n');

const replacements = [
  [/\\u2019/g, '\u2019'],
  [/\\u2014/g, '\u2014'],
  [/\\u2013/g, '\u2013'],
  [/\\u201c/g, '\u201c'],
  [/\\u201d/g, '\u201d'],
];

let total = 0;
for (const file of files) {
  if (!file) continue;
  let content = await readFile(file, 'utf-8');
  let count = 0;
  for (const [re, rep] of replacements) {
    const matches = content.match(re);
    if (matches) count += matches.length;
    content = content.replace(re, rep);
  }
  if (count > 0) {
    await writeFile(file, content);
    console.log(`${count.toString().padStart(3)}  ${file}`);
    total += count;
  }
}
console.log(`\nReplaced ${total} unicode escapes across ${files.filter(Boolean).length} files.`);
