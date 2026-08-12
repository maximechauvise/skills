# Les deux familles de skills

Chaque `SKILL.md` de ce repo est un skill. L'axe qui les sépare est **l'invocation** — qui peut les atteindre :

- **User-invoked** — atteignable **uniquement** par l'humain qui tape son nom. Dans `SKILL.md` : `disable-model-invocation: true` (Claude Code) et dans `agents/openai.yaml` : `policy.allow_implicit_invocation: false` (Codex/ChatGPT). La `description` est **lisible par l'humain** : une ligne de résumé. Pas de listes de déclencheurs (« utiliser quand l'utilisateur dit… »).
- **Model-invoked** — atteignable par l'agent **ou** l'humain. C'est le défaut : ni l'un ni l'autre champ de restriction. La `description` est **écrite pour le modèle** : phrasing de déclenchement riche (« Utilise quand le user veut…, mentionne…, demande… ») pour que l'invocation automatique fonctionne. Le test pour rester model-invoked : _l'agent pourrait-il raisonnablement y aller tout seul ?_

Chaque harnais exclut un user-invoked du champ de l'agent à sa façon :

| Harnais | Emplacement lu | UX user-invoked | UX model-invoked |
| --- | --- | --- | --- |
| **Claude Code** | plugin `skills/`, `.claude/skills/` | `disable-model-invocation: true` → l'agent ne charge jamais le skill ; seul `/nom` le lance | rien à faire ; `description` riche |
| **Codex** | `.agents/skills/` (repo), `~/.agents/skills/` (user) | `agents/openai.yaml` → `policy.allow_implicit_invocation: false` ; invocation explicite `$skill` encore possible | rien à faire |
| **opencode** | `.opencode/skills/`, `~/.config/opencode/skills/` — **lit aussi `.claude/skills/` et `.agents/skills/`** | pas de champ natif d'exclusion → configurer `permission.skill` en `ask` pour exiger l'approbation avant chargement | rien à faire |
| **Cursor** | `.cursor/rules/*.mdc` (conversion nécessaire), lit aussi `AGENTS.md`/`CLAUDE.md` | règle **Manual** : ni `description` ni `globs` → déclenchée par `@nom` | règle **Agent-requested** : `description` sans `globs` → l'agent la tire quand c'est pertinent |

> **Rappel opencode** : opencode n'interprète que `name`, `description`, `license`, `compatibility`, `metadata` dans le frontmatter. Un `disable-model-invocation: true` y est ignoré — l'équivalent natif est la permission `ask` dans `opencode.json` :
> ```json
> { "permission": { "skill": { "grill-me": "ask" } } }
> ```

## Règles

- La **double marque** est obligatoire : un user-invoked est marqué dans **les deux** harnais (frontmatter `disable-model-invocation` **et** `policy.allow_implicit_invocation: false`), ou dans aucun. Sinon, un harnais permet l'invocation implicite alors que l'autre l'interdit.
- **Dépendances** : un user-invoked peut appeler des model-invoked ; **jamais** l'inverse. Un skill n'appelle jamais un autre user-invoked.
- Les dépendances s'écrivent en prose `/nom-de-skill` (« Lance le `/grilling` »), **pas** en chemins profonds `../autre-skill/FILE.md`. La doc de référence partagée vit dans le skill qui la produit ; un autre skill y accède en l'invoquant.
- Les README de bucket et le README racine regroupent les entrées en **User-invoked** et **Model-invoked**.

## Copywriting vs discipline

Lire `CONTEXT.md` pour le vocabulaire, mais quand on *documente* un skill : la « discipline réutilisable » (grilling, domain modeling, cro-loop) vit dans un skill model-invoked. Le « workflow d'orchestration » (grill-me, to-spec) vit dans un skill user-invoked qui appelle la discipline.