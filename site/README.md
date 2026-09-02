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

## Direction artistique (v2 — d'après les inspirations du dossier `../inspiration/`)
- **Couleurs** (adaptées de #9c338c / #ece6db pour l'écran) : prune `#7c2a6f` (boutons), prune profonde `#4b1a43` (aplats, footer), accent `#9c338c` (liens, italiques), fond ivoire `#f7f3ec`, + accents secondaires sauge `#e4e8d8` et blush `#f0cfc8` (cartes, bandeau CTA). Tokens dans `:root` de `styles.css`.
- **Typo** (locale, dossier `typo/`, chargée en `@font-face` — plus aucune dépendance Google Fonts) : Commissioner (titres en graisses légères, texte, boutons ; mots accentués des titres via `<em>` en bold 700 + letter-spacing -2 %, jamais de mélange de polices dans un titre) + Gwendolyn (script, éléments isolés uniquement : logo du header, eyebrows, titres des cartes infos, signatures de citations, titres du footer).
- **Illustrations** : 4 dessins au trait (fond transparent, taches blush/sauge) dans `img/illus-*.png` — cartes de l'accueil + en-têtes des 4 pages accompagnements (`.page-hero-illus`, masquée < 1060px). Originaux dans `assets/`.
- **Signature** : sections en aplat prune profond bordées de vagues organiques (SVG en `--wave`), images et portraits en arche, cartes d'accompagnements en teintes variées, bandeau de chiffres serif, motif d'anneaux pointillés.

## En attente
- **Photos** : placeholders `.ph` avec label « Photo à venir » (portrait sur Accueil et Qui suis-je). 3 photos du cabinet extraites du PDF client sont déjà dans `img/` (basse résolution — à remplacer par les originaux).
- **Dates de la prochaine session MBCT** (page MBCT).
- **Réponses FAQ MBCT** : rédigées à titre de proposition, à valider avec la cliente (encadré jaune `.todo` à retirer ensuite).
- **Embed Google Maps** (page Contact, placeholder en place).
- **Mentions légales / RGPD** (lien footer inactif).
- Vérifier si Doctolib ou autre outil de prise de RDV à intégrer au bouton « Prendre rendez-vous ».
