# Skills

Dépôt de skills compatibles avec Claude Code, Codex, OpenCode et Cursor.

## Installation

Choisir un seul mode pour éviter les doublons. Voir [`.agents/install-a-harness.md`](./.agents/install-a-harness.md) pour les détails.

### Claude Code

```text
/plugin marketplace add maximechauvise/skills
/plugin install skills@maximechauvise
```

### Codex, OpenCode et Cursor

```bash
npx skills add maximechauvise/skills
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `skills/` | Skills classés par bucket |
| `docs/` | Pages humaines des skills promus |
| `.agents/` | Règles communes du dépôt |
| `.claude-plugin/` | Manifestes du plugin Claude Code |
| `scripts/` | Opérations de maintenance |
| `.github/` | Contrôles automatiques |
| `SYSTEM.md` | Organisation et relations du système |
| `CONTEXT.md` | Contexte utilisateur |
| `CLAUDE.md` | Instructions de travail des agents |
| `AGENTS.md` | Symlink vers `CLAUDE.md` |
| `CHANGELOG.md` | Historique des changements |

Pour ajouter ou modifier un skill, suivre [`AGENTS.md`](./AGENTS.md).

## Licence

MIT — voir [`LICENSE`](./LICENSE).
