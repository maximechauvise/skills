# Vocabulaire partagé

Ce document est le **langage du domaine** pour ce repo et les skills qui y vivront. Sa lecture donne le vocabulaire exact des conversations et des docs — chaque skill, chaque page, chaque ticket devrait employer **ces termes et pas de synonymes**.

> Ce fichier est nommé `CONTEXT.md` volontairement : c'est le nom de convention reconnu par `AGENTS.md`/`CLAUDE.md` et par plusieurs agents (Claude Code, Cursor, Codex, opencode). Il évolue au fil du temps, comme un glossaire vivant.

## Langage

**Skills** :
Un skill est un dossier contenant un `SKILL.md` rédigé au format standard ouvert Agent Skills, éventuellement accompagné de `agents/openai.yaml`, de scripts et de références. Un skill se *lance* — de façon nommée par l'humain (`/grill-me`) ou de façon implicite par l'agent — et il *orchestre ou encode une discipline*.
_Avoid_ : « outils », « commandes », « plugins » (le plugin est le moyen de distribution en Claude Code, pas un skill).

**Bucket** :
Un sous-dossier de `skills/` qui regroupe des skills par domaine métier — `strategy/`, `content/`, `growth/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`.
_Avoid_ : « catégorie », « famille ».

**User-invoked** :
Un skill que **seul l'humain** peut déclencher (en tapant son nom), jamais l'agent automatiquement. Il encode des workflows d'orchestration ou à effet de bord. Dans `SKILL.md` : `disable-model-invocation: true` (Claude Code) ; dans `agents/openai.yaml` : `policy.allow_implicit_invocation: false` (Codex).
_Avoid_ : « manuel », « lancé-à-la-main ».

**Model-invoked** :
Un skill déclenchable par l'agent automatiquement, quand le contexte correspond à sa `description`. Il encode une discipline réutilisable. La `description` est écrite pour un modèle (phrases de déclenchement).
_Avoid_ : « auto », « autonome ».

**ICP** :
« Ideal Customer Profile » — le profil type du client idéal (taille, secteur, rôles, douleurs, alternative actuelle). Il ne décrit pas une personne, mais une *catégorie* de comptes.
_Avoid_ : « persona » (la persona décrit un individu fictif, l'ICP décrit un segment de comptes).

**Funnel** :
La séquence observable qui va de la découverte à l'achat (et au-delà). Un funnel a des **étapes** (stage), des **taux de passage** (conversion à chaque étape) et un **objectif terminal** (un deal, une inscription, un devis).
_Avoid_ : « tunnel », « entonnoir ».

**Brief** :
La demande d'un client (interne ou externe) reformulée en un document structuré : objectif, cible, contraintes, livrables attendus, définition du « fait ». Un brief est *décidé avant* de lancer un contenu ou une campagne.
_Avoid_ : « demande », « instruction ».

**Message** :
Une promesse au client potentiel, portée par un support (page, email, social, script de vente). Un bon message tient en une phrase : pour qui, pour quoi, pourquoi croire.
_Avoid_ : « copy » (le copy est la *rédaction* du message, pas son concept), « pitch » (oral et formel).

**Ton de marque** (`brand voice`) :
La charte éditoriale : éthique, registre, mots interdits, exemples. Elle est *maintenue à jour* comme un système vivant, pas un PDF figé.
_Avoid_ : « charte graphique » (les visuels sont hors du périmètre).

**CRO** :
« Conversion Rate Optimization » — la boucle *post-message* : observer les données, formuler une hypothèse, lancer un test, mesurer, décider. Un sibling du marketing performance.
_Avoid_ : « optimisation », « SEO » (le SEO est un canal, le CRO est une méthode), « A/B » (le A/B test est l'un des instruments du CRO).

## Relations

- Un **skill** vit dans un **bucket**.
- Un **skill user-invoked** peut appeler un **skill model-invoked** — jamais l'inverse.
- Un **brief** produit des **messages**.
- Un **message** existe pour servir un **ICP** donné, à une **étape** du **funnel**.
- Le **ton de marque** contraint la rédaction de chaque **message**.
- Le **CRO** mesure l'effet d'un **message** sur le **funnel**.

## À trancher (ambiguïtés signalées)

- **« persona » vs « ICP »** : la persona décrit un utilisateur type ; l'ICP décrit un segment de comptes. Un skill de *segmentation* peut avoir besoin des deux — si c'est le cas, définir les deux termes et leur lien au moment d'écrire le skill.
- **« copy » vs « message »** : le premier est l'acte de rédaction, le second le concept. Le skill `copy` rédigera des supports ; le skill de *positionnement* fera les messages.