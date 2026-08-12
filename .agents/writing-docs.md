# Rédiger les pages `docs/`

Chaque skill des buckets **promu** (`strategy/`, `content/`, `growth/`, `productivity/`) a une **page humaine** dans `docs/<bucket>/<skill-name>.md` — le miroir de `skills/`. La page **n'est pas** le skill et ne recopie ni ne résume son `SKILL.md` : elle oriente un lecteur *humain* — un marketeur qui choisit un outil — sur quand l'utiliser et comment il s'insère dans le système.

Les buckets `misc/`, `in-progress/`, `deprecated/` ne sont pas promus : aucun skill de là ne reçoit de page.

## Structure d'une page

Ordre fixe, sections conservées telles quelles :

1. **## À quoi ça sert** — deux ou trois phrases simples. La contrainte qui rend le skill *différent du défaut*. Toujours présente.
2. **## Quand l'utiliser** — le mode d'invocation (tu le tapes, ou l'agent le déclenche) + la limite de déclenchement. Toujours présente.
3. **## Prérequis** — seulement si le skill a besoin de quelque chose en place (un issue tracker configuré, un `CONTEXT.md`, des données analytics). Sinon, pas de section.
4. **Une à trois sections libres** dans le vocabulaire du skill — le mot/verbe qui porte le skill (« boucle tight », « ICP », « message », « green »).
5. **## Questions fréquentes** — les vraies questions observées ; honnêteté : un skill peu discuté a zéro ou une question, pas six inventées. (Sources : les issues du repo, le changelog, le wiki si présent.)
6. **## Ça marche si** — quelques puces de ce que le lecteur *voit* quand le skill fait son travail, vérifiables sans ouvrir `SKILL.md`.
7. **## Où il s'insère** — le rôle (séquence, setup unique, maintenance périodique, standalone) + voisins qui importent + pointeur vers l'index.

## Le champ d'application

- **Langue** : français (le repo est en français).
- **Liens** : comme les pages ne sont pas publiées sur un site dédié pour l'instant, les liens restent **relatifs au repo** (`../skills/<bucket>/<name>/SKILL.md`, `.agents/…`). Quand un site sera déployé, tous les liens d'une page deviendront absolus vers ce site.
- **Jamais de commandes d'installation dans une page** : l'install vit dans `.agents/install-block.md`, le wording canonique. Une page n'écrit pas de commandes.
- **Pas de nom d'auteur** : la page est un document technique ; l'attribution saute.
- **Branches en table ou en liste, jamais en paragraphe** : si une décision a plusieurs options, le lecteur scanne un tableau pour trouver la sienne.
- **Le vocabulaire de `CONTEXT.md`** est utilisé tel quel — un terme défini est employé, pas un synonyme inventé.

## Quand une page naît, meurt, bouge

- **Ajout** d'un skill promu → création de sa page.
- **Suppression** → suppression de la page.
- **Renommage** → la page suit le nom (`docs/<bucket>/<old>.md` → `docs/<bucket>/<new>.md`).
- **Passage d'un bucket promu à non-promu** (ou l'inverse) → la page disparaît (ou apparaît).

## Fait quand

- La page existe au bon chemin, et aucune page périmée ne survit à un renommage.
- « À quoi ça sert » énonce la contrainte définissante en prose, pas en encart.
- « Quand l'utiliser » donne le mode d'invocation **et** la limite de déclenchement.
- « Où il s'insère » nomme le rôle et pointe vers l'index du bucket.
- Les prérequis sont dits s'ils existent, absents sinon.
- Les sections dans l'ordre du template.
- Chaque branche multiple est un tableau ou une liste.
- Aucun nom d'auteur, aucune commande d'install.