Ce système centralise des skills compatibles avec Claude Code, Codex, OpenCode et Cursor.

Avant toute modification, lire :

- `SYSTEM.md` pour avoir le détail du système et des relations ;
- `CONTEXT.md` pour le contexte utilisateur ;
- `.agents/` pour les informations sur les agents disponibles ;

## Règles

Chaque skill est rangé dans un bucket (un sous-dossier thématique) qui regroupe des skills du même type pour faciliter l’organisation.

```
skill/
├── SKILL.md        # fiche principale
├── assets/         # ressources statiques
├── references/     # documentation, exemples et contenus de référence
├── scripts/        # scripts exécutables
├── results/        # résultats des exécutions
└── .agents/        # format yaml (OpenAI/Codex)
```

## Cycle de vie

Lors de l'ajout ou de la modification d'un skill :

1. Définir le skill à créer ou à modifier.
2. Charger le skill `.agents/write-a-skill.md` et `.agents/writing.md`.
3. Générer le skill avec le modèle.
4. Régler son invocation selon `.agents/choose-a-skill.md`.
5. Mettre à jour sa documentation selon `.agents/write-a-doc.md` si nécessaire.
6. Mettre à jour le `README.md`, le `CHANGELOG.md` et le manifeste.
