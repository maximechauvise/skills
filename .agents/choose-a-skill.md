# Régler l’invocation

Chaque skill utilise un seul mode d’invocation.

## User-invoked

Seul l’humain déclenche le skill. Sa `description` résume son rôle en une phrase destinée à l’interface.

Déclarer les deux restrictions :

- `disable-model-invocation: true` dans le frontmatter de `SKILL.md` ;
- `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`.

## Model-invoked

L’agent ou l’humain peut déclencher le skill. Ne déclarer aucune restriction d’invocation. La `description` indique :

- ce que fait le skill ;
- les demandes qui doivent le déclencher ;
- les cas proches qu’il ne couvre pas, si une confusion est probable.

## Comportement par harnais

| Harnais | User-invoked | Model-invoked |
| --- | --- | --- |
| Claude Code | `disable-model-invocation: true` ; lancement avec `/nom` | aucune restriction |
| Codex et ChatGPT | `allow_implicit_invocation: false` ; lancement avec `$nom` | aucune restriction |
| OpenCode | autorisation `ask` dans `opencode.json` | aucune restriction |
| Cursor | règle `Manual`, sans `description` ni `globs` | règle `Agent-requested`, avec `description` et sans `globs` |

OpenCode ignore `disable-model-invocation`. Pour un skill user-invoked, demander une confirmation avant le chargement :

```json
{
  "permission": {
    "skill": {
      "nom-du-skill": "ask"
    }
  }
}
```

## Cohérence et dépendances

- Déclarer les deux restrictions d’un skill user-invoked, ou aucune.
- Un skill user-invoked peut appeler un skill model-invoked. L’inverse est interdit.
- Écrire une dépendance en prose avec le nom public du skill, par exemple « Lance `/nom-du-skill` ».
- Ne pas lier directement les fichiers internes d’un autre skill.
- Séparer les entrées user-invoked et model-invoked dans les index.
