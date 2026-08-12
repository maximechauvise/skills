# Vocabulaire du dépôt

Employer ces termes dans les skills, la documentation et les tickets.

- **Skill** : dossier autonome qui fournit à un agent des instructions et, si nécessaire, des ressources. Ne pas employer « outil », « commande » ou « plugin » pour le désigner.
- **Bucket** : sous-dossier de `skills/` qui classe les skills par rôle. Buckets autorisés : `strategy`, `content`, `growth`, `productivity`, `misc`, `in-progress` et `deprecated`.
- **Harnais** : application qui charge un skill, par exemple Claude Code, Codex, OpenCode ou Cursor.
- **User-invoked** : skill que seul l’humain peut déclencher. Ce mode convient aux procédures explicites et aux actions avec effet de bord.
- **Model-invoked** : skill que l’agent peut déclencher lorsque la demande correspond à sa `description`.
- **Skill promu** : skill stable, distribué par le plugin et documenté dans `docs/`. Les buckets promus sont `strategy`, `content`, `growth` et `productivity`.

Un skill user-invoked peut appeler un skill model-invoked. L’inverse est interdit.
