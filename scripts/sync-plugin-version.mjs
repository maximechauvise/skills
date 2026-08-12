#!/usr/bin/env node
// Copie la version de package.json dans le manifeste du plugin.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const packagePath = join(repoDir, "package.json");
const pluginPath = join(repoDir, ".claude-plugin", "plugin.json");

const { version } = JSON.parse(readFileSync(packagePath, "utf8"));
const source = readFileSync(pluginPath, "utf8");
const plugin = JSON.parse(source);

if (plugin.version === version) {
  console.log(`Versions synchronisées : ${version}`);
  process.exit(0);
}

if (process.argv.includes("--check")) {
  console.error(
    `Versions différentes : package.json=${version}, plugin.json=${plugin.version}.`,
  );
  process.exit(1);
}

const updated = source.replace(/"version"\s*:\s*"[^"]*"/, `"version": "${version}"`);

if (JSON.parse(updated).version !== version) {
  console.error(`Champ version introuvable dans ${pluginPath}.`);
  process.exit(1);
}

writeFileSync(pluginPath, updated);
console.log(`Version du plugin : ${plugin.version} -> ${version}`);
