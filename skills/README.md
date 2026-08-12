# Skills

Bibliothèque de skills marketing pour agents. Chaque skill est un dossier avec un `SKILL.md` au format standard Agent Skills — voir `CLAUDE.md` pour les conventions d'ajout.

## Organisation

Les skills sont groupés en **buckets** par domaine métier :

- [`strategy/`](./strategy/) — positionnement, ICP, segmentation, recherche marché, ton de marque, briefs.
- [`content/`](./content/) — copywriting, SEO, plan éditorial, review de contenu.
- [`growth/`](./growth/) — CRO, boucles de feedback sur conversions.
- [`productivity/`](./productivity/) — primitifs réutilisables : grilling, handoff, wait-what.
- [`misc/`](./misc/) — hors des buckets promus, expérimentaux ou ponctuels.
- [`in-progress/`](./in-progress/) — skills en cours, non encore promus.
- [`deprecated/`](./deprecated/) — skills retirés (le change log nomme ce qui les a remplacés).

## L'axe d'invocation

Chaque skill est l'un des deux — voir [`.agents/invocation.md`](../../.agents/invocation.md) pour le mapping par harnais :

- **User-invoked** — lancé uniquement par l'humain (`/grill-me`, `/brief-client`). Marqué dans les deux harnais (`disable-model-invocation: true` + `policy.allow_implicit_invocation: false`).
- **Model-invoked** — déclenchable par l'agent automatiquement (`/copy`, `/research-marché`). Description riche en déclencheurs.

## État actuel

Aucun skill n'est encore livré. Les README de bucket listent les skills **prévus** — la structure est prête à les recevoir dans chaque dossier.