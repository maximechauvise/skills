# Instructions du dépôt

Ce dépôt contient des skills compatibles avec Claude Code, Codex, OpenCode et Cursor.

## Rôle des fichiers

- `skills/<bucket>/<name>/SKILL.md` : instructions chargées par l’agent.
- `skills/<bucket>/<name>/agents/openai.yaml` : nom, description courte et politique d’invocation pour Codex et ChatGPT.
- `skills/<bucket>/<name>/{references,assets,scripts}/` : ressources facultatives du skill.
- `docs/` : documentation destinée aux humains pour les skills promus.
- `CONTEXT.md` : vocabulaire commun du dépôt.
- `.agents/` : règles d’invocation, de documentation et d’installation.
- `.claude-plugin/` : manifestes de distribution pour Claude Code.

## Format d’un skill

Chaque skill vit dans `skills/<bucket>/<name>/` et contient au minimum :

```text
skills/<bucket>/<name>/
├── SKILL.md
└── agents/
    └── openai.yaml
```

Le corps et la `description` de `SKILL.md` sont en français :

```yaml
---
name: nom-du-skill
description: Rôle du skill et conditions de déclenchement.
---
```

`agents/openai.yaml` contient les métadonnées d’interface :

```yaml
interface:
  display_name: "Nom lisible"
  short_description: "Rôle du skill en une phrase courte."
  default_prompt: "Utilise $nom-du-skill pour traiter cette demande."
```

La description courte contient 25 à 64 caractères. Le prompt par défaut tient en une phrase et mentionne `$nom-du-skill`.

Consulter `.agents/invocation.md` avant d’ajouter une restriction d’invocation.

## Ajouter ou modifier un skill

1. Créer ou modifier `SKILL.md` et `agents/openai.yaml`.
2. Vérifier que le nom du dossier, le champ `name` et les métadonnées correspondent.
3. Ajouter tout skill distribué à `.claude-plugin/plugin.json`.
4. Mettre à jour l’index du bucket, le `README.md` racine et `CHANGELOG.md`.
5. Pour un skill promu, créer ou mettre à jour `docs/<bucket>/<name>.md` selon `.agents/writing-docs.md`.
6. Vérifier l’invocation dans Claude Code, Codex, OpenCode et Cursor.

Créer le `README.md` d’un bucket lors de son ajout. Buckets autorisés : `strategy`, `content`, `growth`, `productivity`, `misc`, `in-progress` et `deprecated`.

## Déplacer, déprécier ou retirer un skill

- Déplacer ou renommer : mettre à jour le dossier, le champ `name`, la page `docs/`, les index et le manifeste.
- Déprécier : déplacer le skill dans `skills/deprecated/`, le retirer du manifeste et supprimer sa page `docs/`.
- Retirer : supprimer son dossier déprécié et documenter la suppression dans `CHANGELOG.md`.

Indiquer le remplacement éventuel dans `CHANGELOG.md`.

## Vérifications

- `scripts/list-skills.sh` liste tous les `SKILL.md`.
- `scripts/sync-plugin-version.mjs` copie la version de `package.json` dans `.claude-plugin/plugin.json`.
- Après une modification de l’un de ces deux fichiers, lancer `node scripts/sync-plugin-version.mjs --check`.
- Ne pas modifier directement la version du manifeste.
- Éviter les commentaires et les fichiers sans rôle opérationnel.

En cas de doute, lire dans cet ordre : `CONTEXT.md`, `.agents/invocation.md`, `.agents/writing-docs.md`, puis `.agents/install-block.md`.
