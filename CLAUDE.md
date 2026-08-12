# CLAUDE.md — Conventions du repo

Ce repo est une **bibliothèque de skills marketing pour agents** (Claude Code, Cursor, Codex, opencode). C'est une architecture *prête à recevoir* des skills : aucun skill n'est encore livré. Quand tu participes à ce repo, suis ces conventions à la lettre pour que tout reste cohérent, multiplateforme et distributable.

## Le format d'un skill (standard Agent Skills + double harnais)

Un skill est **un dossier par skill** sous `skills/<bucket>/<name>/`. Dès qu'un skill est créé :

```
skills/<bucket>/<name>/
├── SKILL.md          # le contenu, frontmatter YAML + markdown (langue : français)
├── agents/
│   └── openai.yaml   # métadonnées Codex/ChatGPT + politique d'invocation
└── scripts/          # (optionnel) scripts d'aide
```

**`SKILL.md`** — frontmatter obligatoire au format standard ouvert Agent Skills :

```yaml
---
name: mon-skill
description: Phrase de déclenchement. Riche en scénarios pour un model-invoked ; une ligne lisible par l'humain pour un user-invoked.
---
```

La **langue** est le français dans le corps du skill et sur `description`. **Les noms** de skills restent en anglais (compatibilité maximale avec les modèles et les slash-commands : `/grill-me`, `/copy`, `/handoff`). Nommage : `a-z0-9` + tirets, sans tirets consécutifs, sans majuscules.

**`agents/openai.yaml`** — pour Codex et ChatGPT :

```yaml
interface:
  display_name: "Mon skill"
  short_description: "Résumé pour l'interface Codex"
policy:
  allow_implicit_invocation: false   # uniquement si le skill est user-invoked
```

## L'axe d'invocation (user vs model)

Deux familles de skills ; la règle est **orthogonale au contenu** — lire `.agents/invocation.md` pour les détails et le mapping par harnais.

- **User-invoked** : le déclenche l'humain en tapant son nom. Exemples : workflows d'orchestration (`/grill-me`, `/brief-client`), actions à effet de bord. Marquer dans les deux harnais : `disable-model-invocation: true` dans `SKILL.md` **et** `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`. La `description` est écrite pour un humain : pas de liste de déclencheurs.
- **Model-invoked** : l'agent peut le déclencher seul quand le contexte correspond. Exemples : disciplines réutilisables (`/copy`, `/research-marché`, `/cro-loop`). Ni l'un ni l'autre champ de restriction. La `description` est écrite pour un modèle : phrases de déclenchement (« Utilise quand l'utilisateur veut…, mentionne…, demande… »).

**Règle de dépendance** : un user-invoked peut appeler des model-invoked ; un skill ne peut jamais appeler un user-invoked. Exprimer les dépendances en prose `/nom-de-skill`, jamais en chemins profonds `../autre-skill/FILE.md`.

## Ajouter un skill dans ce repo (checklist)

Pour chaque nouveau skill :

1. Créer `skills/<bucket>/<name>/SKILL.md` (respecter les conventions de langue et nommage ci-dessus).
2. Créer `skills/<bucket>/<name>/agents/openai.yaml` (dont la politique d'invocation, en cohérence avec `SKILL.md`).
3. **Ajouter le chemin du dossier dans `.claude-plugin/plugin.json`** → tableau `"skills"`. C'est ce qui permet l'installation en plugin Claude Code. La version du plugin n'est **pas** à gérer manuellement : elle est gérée par `scripts/sync-plugin-version.mjs` (voir plus bas).
4. Mettre à jour `skills/<bucket>/README.md` et le `README.md` racine (le skill apparaît dans la référence).
5. Créer la page humaine `docs/<bucket>/<name>.md` (lire `.agents/writing-docs.md`).
6. Ajouter un changset (quand la pipeline changesets sera en place) et une entrée au `CHANGELOG.md`.

Un bucket dont le README n'existe pas encore : créer un `README.md` d'index (les buckets listés dans la convention sont `strategy/`, `content/`, `growth/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`).

## Déplacement / suppression d'un skill

- **Retirer** un skill : supprimer le dossier, retirer son entrée dans `.claude-plugin/plugin.json`, retirer sa page `docs/` et ses références dans les READMEs. Noter dans le changset ce qui l'a remplacé (ou pourquoi il part).
- **Renommer** : déplacer le dossier (le `name` doit correspondre au nom du dossier), la page `docs/` suit le nom, mettre à jour les READMEs et `plugin.json`.
- Ne **jamais** supprimer un dossier sans noter le changement dans le changset — le changelog documente l'historique, c'est son job.

## Scripts & automatisations

| Script | Rôle |
| --- | --- |
| `scripts/list-skills.sh` | Liste les `SKILL.md` du repo (utile pour vérifier qu'un skill est bien sourcé). |
| `scripts/sync-plugin-version.mjs` | Synchronise `package.json` → `.claude-plugin/plugin.json` (si les versions divergent). `--check` ne modifie rien et sort en erreur si les versions diffèrent. |

**Attention** : quand tu modifies `package.json` ou `plugin.json`, laisse les versions synchronisées (lancer `node scripts/sync-plugin-version.mjs --check` avant de valider).

## Normes transverses

- **Pas de commentaire superflu** dans les fichiers générés. Les skills restent peu chargés (un skill ≠ une belle encyclopédie).
- Quand tu modifies un skill, vérifie que **toutes les instances** des sous-harnais restent cohérentes (Claude + Codex + opencode, et le `.claude-plugin/plugin.json`).

## Quand tu ne sais pas

Lire dans l'ordre :
1. `CONTEXT.md` — le vocabulaire du domaine (le premier réflexe).
2. `.agents/invocation.md` — l'axe d'invocation et le mapping par harnais.
3. `.agents/writing-docs.md` — la rédaction de pages.
4. `.agents/install-block.md` — le bloc d'installation canonique.