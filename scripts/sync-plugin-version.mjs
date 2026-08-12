#!/usr/bin/env node
// Synchronise la version de package.json vers .claude-plugin/plugin.json.
// Lancer après un bump de version. Avec --check, ne modifie rien et sort en erreur si les versions divergent.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const pluginPath = join(repo, ".claude-plugin", "plugin.json");

const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));
const source = readFileSync(pluginPath, "utf8");
const plugin = JSON.parse(source);

if (plugin.version === version) {
  console.log(`plugin.json version est ${version} — déjà synchronisé`);
  process.exit(0);
}

if (process.argv.includes("--check")) {
  console.error(
    `plugin.json version est ${plugin.version}, package.json est ${version}. Lancer \`node scripts/sync-plugin-version.mjs\`.`,
  );
  process.exit(1);
}

const updated = source.replace(/"version"\s*:\s*"[^"]*"/, `"version": "${version}"`);

if (JSON.parse(updated).version !== version) {
  console.error(`Impossible de trouver un champ version à réécrire dans ${pluginPath}.`);
  process.exit(1);
}

writeFileSync(pluginPath, updated);
console.log(`plugin.json version ${plugin.version} -> ${version}`);