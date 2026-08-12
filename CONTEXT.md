# Vocabulaire partagé

Utiliser ce vocabulaire dans chaque skill, page et ticket ; éviter les synonymes indiqués. `CONTEXT.md` est un nom de convention reconnu par `AGENTS.md`, `CLAUDE.md`, Claude Code, Cursor, Codex et OpenCode. Ce glossaire évolue avec le dépôt.

## Skills

- **Skill** : dossier contenant un `SKILL.md` au format Agent Skills et, si nécessaire, `agents/openai.yaml`, des scripts ou des références. Un skill se lance, sur demande de l’humain ou implicitement par l’agent, et orchestre ou encode une discipline. Éviter « outil », « commande » et « plugin » : le plugin ne sert qu’à distribuer les skills dans Claude Code.
- **Bucket** : sous-dossier de `skills/` qui regroupe les skills par domaine métier : `strategy`, `content`, `growth`, `productivity`, `misc`, `in-progress`, `deprecated`. Éviter « catégorie » et « famille ».
- **User-invoked** : skill déclenchable uniquement par l’humain. Il encode un workflow d’orchestration ou une action à effet de bord. Déclarer `disable-model-invocation: true` dans `SKILL.md` et `policy.allow_implicit_invocation: false` dans `agents/openai.yaml`. Éviter « manuel » et « lancé-à-la-main ».
- **Model-invoked** : skill que l’agent peut déclencher lorsque le contexte correspond à sa `description`. Il encode une discipline réutilisable ; sa description est écrite comme une phrase de déclenchement pour un modèle. Éviter « auto » et « autonome ».

## Relations

- Un skill vit dans un bucket.
- Un skill user-invoked peut appeler un skill model-invoked, jamais l’inverse.
