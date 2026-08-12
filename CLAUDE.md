# CLAUDE.md

Ce dépôt regroupe des skills pour Claude Code, Cursor, Codex et OpenCode.

## Structure d’un skill

Chaque skill est un dossier `skills/<bucket>/<name>/` :

```
skills/<bucket>/<name>/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/       # facultatif
├── assets/           # facultatif
└── scripts/          # facultatif
```

`SKILL.md` contient le skill, avec un frontmatter obligatoire. Son corps et sa `description` sont en français.

```yaml
---
name: nom-du-skill
description: Description du déclenchement.
---
```

`agents/openai.yaml` définit les métadonnées Codex et ChatGPT :

```yaml
interface:
  display_name: "nom-du-skill"
  short_description: "Description du déclenchement."
policy:
  allow_implicit_invocation: false
```

## Invocation et dépendances

L’invocation est indépendante du contenu. Consulter `.agents/invocation.md` pour le mapping par harnais.

- **User-invoked** : déclenché par l’utilisateur, notamment pour les workflows et actions à effet de bord. Ajouter `disable-model-invocation: true` dans `SKILL.md` et `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`. La description s’adresse à un humain.
- **Model-invoked** : déclenchable par l’agent lorsque le contexte convient. N’ajouter aucune restriction d’invocation. La description doit préciser les situations de déclenchement pour un modèle.

Un skill user-invoked peut appeler un skill model-invoked ; l’inverse est interdit. Écrire les dépendances en prose sous la forme `/nom-du-skill`, jamais comme des chemins relatifs.

## Ajouter ou modifier un skill

1. Créer `SKILL.md` et `agents/openai.yaml` avec une politique d’invocation cohérente.
2. Ajouter le dossier au tableau `"skills"` de `.claude-plugin/plugin.json`.
3. Mettre à jour `skills/<bucket>/README.md`, le `README.md` racine, `docs/<bucket>/<name>.md` et le `CHANGELOG.md`. Créer aussi un changset lorsque la pipeline sera en place.
4. Créer un `README.md` d’index si le bucket n’en a pas. Buckets : `strategy`, `content`, `growth`, `productivity`, `misc`, `in-progress`, `deprecated`.

Scripts utiles : `scripts/list-skills.sh` liste les `SKILL.md` du dépôt ; `scripts/sync-plugin-version.mjs` synchronise la version de `package.json` vers `.claude-plugin/plugin.json`.

La version de `.claude-plugin/plugin.json` est gérée par ce dernier script, jamais à la main. Après toute modification de `package.json` ou `plugin.json`, vérifier la synchronisation :

```sh
node scripts/sync-plugin-version.mjs --check
```

## Retirer ou renommer un skill

- **Retirer** : supprimer le dossier, son entrée dans `plugin.json`, sa page `docs/` et les références dans les README. Documenter dans le changset ce qui le remplace ou la raison de son retrait.
- **Renommer** : déplacer le dossier ; le nom du dossier, le champ `name`, la page `docs/`, les README et `plugin.json` doivent suivre le nouveau nom.

Ne jamais supprimer un dossier sans le documenter dans le changset.

## Règles communes

- Éviter les commentaires superflus dans les fichiers générés.
- Après avoir modifié un skill, vérifier la cohérence de tous les sous-harnais : Claude, Codex, OpenCode et `.claude-plugin/plugin.json`.

## Références utiles

En cas de doute, lire dans cet ordre :

1. `CONTEXT.md` — vocabulaire du domaine.
2. `.agents/invocation.md` — invocation par harnais.
3. `.agents/writing-docs.md` — rédaction des pages de documentation.
4. `.agents/install-block.md` — bloc d’installation canonique.
