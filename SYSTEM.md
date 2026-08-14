# Système

Ce dépôt est la source unique de skills partagés entre plusieurs harnais.

## Documentation

| Fichier | Responsabilité |
| --- | --- |
| `README.md` | Présenter et installer le dépôt |
| `SYSTEM.md` | Décrire le système et ses relations |
| `CONTEXT.md` | Conserver le contexte utilisateur |
| `CHANGELOG.md` | Consigner les différences entre les versions |

## Instructions des agents

| Fichier ou dossier | Responsabilité |
| --- | --- |
| `CLAUDE.md` | Donner les instructions de travail aux agents |
| `AGENTS.md` | Exposer les mêmes instructions via un symlink vers `CLAUDE.md` |
| `.agents/` | Détailler les règles communes |

## Contenu

| Dossier | Responsabilité |
| --- | --- |
| `skills/` | Contenir les sources des skills |
| `docs/` | Documenter les skills pour les humains |

## Distribution et contrôle

| Fichier ou dossier | Responsabilité |
| --- | --- |
| `.claude-plugin/` | Distribuer les skills à Claude Code |
| `package.json` | Définir la version de référence et les commandes de maintenance |
| `.github/` | Exécuter les contrôles automatiques |

## Scripts de maintenance

Les scripts ne participent pas au fonctionnement des skills.

| Script | Rôle | Utilité |
| --- | --- | --- |
| `scripts/list-skills.sh` | Lister les fichiers `SKILL.md` | Inventaire uniquement : il ne valide rien et réussit si la liste est vide |
| `scripts/sync-plugin-version.mjs` | Synchroniser ou comparer les versions de `package.json` et `.claude-plugin/plugin.json` | Utile si `package.json` reste la source de version |

Le workflow GitHub appelle les deux scripts. Seul `sync-plugin-version.mjs --check` vérifie actuellement une règle du système.

Une information appartient au fichier qui en est responsable. Les autres fichiers la référencent sans la dupliquer.
