# Skills

Une bibliothèque de skills pour agents de code (Claude Code, Cursor, Codex, opencode), basée sur le standard ouvert Agent Skills. Petits, composables, multi-harnais.

Ce repo est une architecture prête à recevoir les skills : structure, gouvernance et distribution sont en place — aucun skill n'est encore livré (l'état de chaque bucket est détaillé dans `skills/`).

## Installation

Deux options :

- **Plugin Claude Code** : installe l'ensemble comme un bundle géré.
- **skills.sh** : copie des fichiers éditables dans ton repo.

Choisis-en un. Formulation canonique : [`.agents/install-block.md`](./.agents/install-block.md)

### Claude Code — le plugin

```
/plugin marketplace add maximechauvise/skills
/plugin install skills
```

Chaque skill est invoqué `/skills:<nom>`.

### Codex, et autres agents

```bash
npx skills@latest add maximechauvise/skills
```

L'installeur te laisse choisir les skills à prendre et sur quels agents les installer.

## Comment ça marche

L'idée : aligner avant de créer, partager un langage, boucler sur les données.

- **L'agent n'a pas compris** → le *grilling* : un skill d'interview qui résout chaque point avant de commencer.
- **Trop verbeux, jargon incohérent** → le **langage partagé** : `CONTEXT.md` porte le vocabulaire du domaine.
- **Le contenu ne fonctionne pas** → les **boucles de feedback** : tester, mesurer, itérer.
- **La bouillie** → la **discipline de message** : peu de messages profonds plutôt qu'un mur de contenus.

## Structure

```
skills/             les skills (buckets : strategy, content, growth, productivity, misc, in-progress, deprecated)
docs/               les pages humaines, miroir des buckets promus
.agents/            la gouvernance : invocation, writing-docs, install-block
.claude-plugin/     le plugin Claude Code (plugin.json, marketplace.json)
scripts/            utilitaires (list-skills, sync-plugin-version)
CONTEXT.md          le vocabulaire partagé du domaine
CLAUDE.md / AGENTS.md   conventions pour les agents qui travaillent sur ce repo
```

## État d'avancement

- **0.1.0** — structure complète, aucun skill. Voir [`CHANGELOG.md`](./CHANGELOG.md).

## Licence

MIT — voir [`LICENSE`](./LICENSE).
