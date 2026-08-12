# Le bloc d'installation canonique

Une histoire d'installation, une formulation. `README.md` et toute page de ce repo disent **celle-ci, rien d'autre**. Change-la d'abord ici, propage ensuite.

## Claude Code — le plugin

```bash
/plugin install maximechauvise/skills

```

Ou, dans une session :

```
/plugin marketplace add maximechauvise/skills
/plugin install skills
```

Le namespace du plugin est **`skills`** : chaque skill ainsi installé est invoqué `/skills:<nom>`.

> Note : le dépôt est aussi configuré comme **single-plugin marketplace** (`.claude-plugin/marketplace.json`) pour l'installation directe. Tant que le plugin ne figure pas dans le marketplace officiel de Claude, l'installation se fait par ce chemin. Dès qu'il y entre, le bloc ci-dessus devient : `claude plugins install skills` (updates automatiques).

## Codex, et autres agents

```bash
npx skills@latest add maximechauvise/skills
```

Choisis les skills à prendre, et sur quels coding agents les installer. **L'installeur te laisse choisir quels skills prendre.**

> L'architecture est multi-harnais de naissance : un même `SKILL.md` + `agents/openai.yaml` fonctionne dans Claude Code, Codex et opencode. Pour Cursor, une conversion en `.cursor/rules/*.mdc` est envisagée via un script dédié (non livré pour l'instant).

## Les deux chemins sont exclusifs

Le plugin est un bundle géré, en lecture seule, mis à jour par le marketplace. skills.sh écrit des fichiers que tu possèdes et peux éditer. Installer les deux laisse l'utilisateur avec chaque skill en double — dis toujours « choisis-en un ».