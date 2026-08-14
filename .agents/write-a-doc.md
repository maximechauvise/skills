# Rédiger une page de skill

Chaque skill promu possède une page `docs/<bucket>/<name>.md`. Cette page aide un humain à choisir et utiliser le skill. Elle ne recopie pas `SKILL.md`.

Les skills de `misc`, `in-progress` et `deprecated` n’ont pas de page.

## Structure

Conserver cet ordre :

1. `## À quoi ça sert` : rôle distinctif du skill en deux ou trois phrases.
2. `## Quand l’utiliser` : mode d’invocation et limite du périmètre.
3. `## Prérequis` : uniquement si une ressource ou une configuration est nécessaire.
4. Une à trois sections propres au fonctionnement du skill.
5. `## Questions fréquentes` : uniquement pour des questions réellement observées.
6. `## Ça marche si` : résultats concrets et vérifiables.
7. `## Où il s’insère` : rôle dans le processus, skills voisins utiles et lien vers l’index du bucket.

## Règles

- Écrire en français, avec des phrases courtes et des verbes directs.
- Employer le vocabulaire de `CONTEXT.md`.
- Utiliser des liens relatifs au dépôt.
- Placer les commandes d’installation uniquement dans `.agents/install-block.md`.
- Ne pas mentionner d’auteur.
- Présenter les choix multiples sous forme de liste ou de tableau.
- Ne pas ajouter de section vide ni de question inventée.

## Cycle de vie

- Créer la page lors de la promotion du skill.
- Renommer ou déplacer la page avec le skill.
- Supprimer la page lors d’un passage vers `misc`, `in-progress` ou `deprecated`.
