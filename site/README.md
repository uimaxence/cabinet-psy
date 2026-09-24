# Site Raphaëlle Beaufils — v2

Site statique (HTML/CSS/JS vanilla, aucune dépendance). Pour le voir : ouvrir `index.html` dans un navigateur.

## Pages
- `index.html` — Accueil
- `qui-suis-je.html`
- `therapie-individuelle.html` — « Accompagnement individuel » (vocabulaire cliente ; l'URL est conservée)
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
- **Illustrations** : 4 dessins au trait (fond transparent) dans `img/illus-*.png` — cartes de l'accueil, badges du hero, en-têtes des 4 pages accompagnements (`.page-hero-illus`, masquée < 1060px) et **bandeau CTA de chaque page avec l'illustration du service concerné** (Contact et bandeau « Prendre rendez-vous » de l'accueil : accompagnement individuel). Originaux dans `assets/`.
- **Signature** : sections en aplat bleu profond bordées de vagues organiques (SVG en `--wave`), images et portraits en arche (`.photo-arch`), cartes d'accompagnements en teintes variées, motif d'anneaux pointillés, et **bandeau bleu en vague dans l'angle supérieur droit du hero** (`.hero-band`, SVG inline placé dans `figure.portrait` mais positionné en absolu par rapport à `.hero` : sous le header, jusqu'au bord droit de l'écran, ~70 % de la hauteur du hero) derrière le portrait qui garde le z-index ; son bord intérieur ondule en diagonale depuis le bord gauche de la photo. Sur mobile, la figure devient positionnée et la vague s'ancre à son angle supérieur droit.
- **Photos** : portraits de Raphaëlle (`img/portrait-raphaelle.jpg` fond rose sur l'accueil, `img/portrait-raphaelle-bleu.jpg` fond bleu sur Qui suis-je, recadrés en 4:5, 1000×1250, avec le fond de studio prolongé de 440 px vers le haut au moment du recadrage pour laisser de l'air autour du visage) et photos du cabinet en haute définition (salon, espace d'accueil, tableau du pont ; 1600 px de large). Optimisées en JPEG avec Pillow ; les originaux (5 Mo chacun) sont hors dépôt dans `photos-originales/` à la racine (gitignoré).
- **Bloc « Prochaine session » (page MBCT)** : sort du conteneur étroit pour occuper toute la largeur (`.session-block` / `.session-grid`) — grande carte calendrier (mois + pastilles `.day` des dates, journée intensive en pastille sable) et, à droite, Tarifs (kaki) et Inscription (bleu profond, téléphone en grand).
- **Navigation** : plus de bouton « Prendre rendez-vous » dans la barre du haut (doublon avec Contact, pas de prise de RDV en ligne) ; les appels à l'action restent dans le hero et les bandeaux CTA.
- **Sous-menu « Pourquoi consulter ? »** : pont invisible (`.sub::before`) sur l'écart + délai de fermeture de 250 ms dans `nav.js`, pour pouvoir atteindre les sous-items à la souris.

## En attente
- **Réponses FAQ MBCT** : rédigées à titre de proposition (remboursement, participation en cours de dépression et sous traitement antidépresseur stabilisé validés par la cliente) — encadré jaune `.todo` à retirer une fois le reste validé.
- **Mentions légales** : page en place ; renseigner l'hébergeur et confirmer la mention TVA (encadré `.todo` à retirer ensuite).
- Session MBCT janvier–mars 2027 en ligne (8 vendredis 18h–20h + journée intensive le dimanche 14 février) : à mettre à jour à chaque nouveau cycle.
- Les styles de placeholder `.ph` restent disponibles dans `styles.css` si une photo doit être temporairement retirée.
