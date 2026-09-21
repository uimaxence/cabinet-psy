# Site Raphaëlle Beaufils — v2

Site statique (HTML/CSS/JS vanilla, aucune dépendance). Pour le voir : ouvrir `index.html` dans un navigateur.

## Pages
- `index.html` — Accueil
- `qui-suis-je.html`
- `therapie-individuelle.html`
- `therapie-de-couple.html`
- `therapie-familiale.html`
- `programme-mbct-pleine-conscience.html`
- `approche-systemique.html`
- `contact.html`
- `mentions-legales.html` — liée depuis le footer, `noindex` (ADELI, SIRET, RGPD, hébergeur à compléter)

## Direction artistique (v2.1 — palette bleu canard / kaki, typo sobre)
- **Couleurs** (bleu foncé « comme les fauteuils du cabinet ») : bleu canard `#265f72` (boutons, prix), bleu profond `#183d4b` (aplats, footer, carte 1), accent `#2a7d8c` (liens, mots accentués des titres), fond ivoire `#f7f3ec`, + accents secondaires vert kaki `#e3e6d2` (cartes, respiration) et sable `#ebdfc8` (bandeau CTA, cartes). Tokens dans `:root` de `styles.css` (`--blue*`, `--khaki*`, `--sand*`).
- **Typo** (locale, dossier `typo/`, chargée en `@font-face` — aucune dépendance Google Fonts) : **Commissioner uniquement**, plus aucune police cursive (les fichiers Gwendolyn restent dans `typo/` mais ne sont plus chargés). Titres en graisses légères, mots accentués via `<em>` en bold 700 + letter-spacing -2 %, jamais de mélange de polices dans un titre. Nom du header en Commissioner 600, sobre. Signatures de citations, titres des cartes infos et du footer en petites capitales espacées.
- **Sur-titres** : supprimés partout (demande cliente), sauf le label « Programme de groupe » sur la page MBCT (`.eyebrow`, petites capitales Commissioner).
- **Illustrations** : 4 dessins au trait (fond transparent) dans `img/illus-*.png` — cartes de l'accueil, badges du hero, en-têtes des 4 pages accompagnements (`.page-hero-illus`, masquée < 1060px) et **bandeau CTA de chaque page avec l'illustration du service concerné** (Contact : thérapie individuelle). Originaux dans `assets/`.
- **Signature** : sections en aplat bleu profond bordées de vagues organiques (SVG en `--wave`), images et portraits en arche, cartes d'accompagnements en teintes variées, motif d'anneaux pointillés.
- **Sous-menu « Pourquoi consulter ? »** : pont invisible (`.sub::before`) sur l'écart + délai de fermeture de 250 ms dans `nav.js`, pour pouvoir atteindre les sous-items à la souris.

## En attente
- **Photos** : placeholders `.ph` avec label « Photo à venir » (portrait sur Accueil et Qui suis-je). 3 photos du cabinet extraites du PDF client sont déjà dans `img/` (basse résolution — à remplacer par les originaux).
- **Dates de la prochaine session MBCT** (page MBCT).
- **Réponses FAQ MBCT** : rédigées à titre de proposition (remboursement et participation en cours de dépression validés par la cliente) — encadré jaune `.todo` à retirer une fois le reste validé.
- **Mentions légales** : page en place ; renseigner l'hébergeur et confirmer la mention TVA (encadré `.todo` à retirer ensuite).
- Vérifier si Doctolib ou autre outil de prise de RDV à intégrer au bouton « Prendre rendez-vous ».
