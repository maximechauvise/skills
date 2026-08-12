# Skills

Dépôt de skills compatibles avec Claude Code, Codex, OpenCode et Cursor. Il définit leur format, leur invocation, leur documentation et leur distribution.

Le dépôt ne contient encore aucun skill. Son état initial fournit uniquement la structure et les règles de maintenance.

## Installation

Choisir un seul mode. Les instructions de référence se trouvent dans [`.agents/install-block.md`](./.agents/install-block.md).

### Claude Code

```text
/plugin install maximechauvise/skills
```

### Codex et autres agents compatibles

```bash
npx skills@latest add maximechauvise/skills
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `skills/` | Skills classés par bucket |
| `docs/` | Pages humaines des skills promus |
| `.agents/` | Règles communes du dépôt |
| `.claude-plugin/` | Manifestes du plugin Claude Code |
| `scripts/` | Vérifications et opérations répétables |
| `CONTEXT.md` | Vocabulaire commun |
| `AGENTS.md` et `CLAUDE.md` | Instructions pour les agents qui modifient le dépôt |

Pour ajouter ou modifier un skill, suivre [`AGENTS.md`](./AGENTS.md). L’état des versions est consigné dans [`CHANGELOG.md`](./CHANGELOG.md).

## Licence

MIT — voir [`LICENSE`](./LICENSE).
