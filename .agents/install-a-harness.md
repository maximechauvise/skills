# Installer les skills

Le dépôt propose deux modes d’installation. Choisir un seul mode pour éviter les doublons.

## Claude Code

Installer le plugin complet :

```text
/plugin marketplace add maximechauvise/skills
/plugin install skills@maximechauvise
```

Les skills installés sont disponibles sous `/skills:<nom>`.

## Codex et autres agents compatibles

Installer les skills voulus :

```bash
npx skills add maximechauvise/skills
```

L’installeur demande quels skills et quels agents cibler.

## Rôle de chaque mode

- Le plugin fournit un ensemble géré par Claude Code.
- `skills` copie les fichiers sélectionnés dans l’environnement choisi.

Ne pas installer les deux modes dans le même environnement.
