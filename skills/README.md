# Skills

Bibliothèque de skills marketing pour agents. Chaque skill est un dossier avec un `SKILL.md` au format Agent Skills ; les conventions d’ajout sont dans [`CLAUDE.md`](../CLAUDE.md).

## Organisation

Les skills sont regroupés dans les buckets disponibles :

- [`growth/`](./growth/) — CRO, boucles de feedback sur conversions.
- [`productivity/`](./productivity/) — primitifs réutilisables : grilling, handoff, wait-what.
- [`in-progress/`](./in-progress/) — skills en cours, non encore promus.
- [`deprecated/`](./deprecated/) — skills retirés ; le changelog indique leur remplacement.

## L'axe d'invocation

Chaque skill est user-invoked ou model-invoked. Voir [`.agents/invocation.md`](../.agents/invocation.md) pour le mapping par harnais :

- **User-invoked** — lancé uniquement par l'humain (`/grill-me`, `/brief-client`). Marqué dans les deux harnais (`disable-model-invocation: true` + `policy.allow_implicit_invocation: false`).
- **Model-invoked** — déclenchable par l'agent automatiquement (`/copy`, `/research-marché`). Description riche en déclencheurs.

## État actuel

Aucun skill n’est encore livré. Les README de bucket listent les skills prévus ; la structure est prête à les accueillir.
