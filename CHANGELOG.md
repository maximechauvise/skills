# Changelog

Toutes les changements notables de `skills` sont documentés ici, par version.

## 0.1.0 — 2026-08-12

- **Structure du repo** : buckets de skills (`strategy/`, `content/`, `growth/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`), supposés vides à ce stade.
- **Plugin Claude Code** : manifeste `.claude-plugin/plugin.json` et `marketplace.json` prêts à recevoir des skills.
- **Gouvernance** : `.agents/` documente l'axe d'invocation (user-invoked vs model-invoked), la rédaction des pages `docs/` et le bloc d'installation canonique.
- **Scripts** : `list-skills.sh` et `sync-plugin-version.mjs` (synchronisation `package.json` → `plugin.json`).
- Aucun skill livré dans cette version.