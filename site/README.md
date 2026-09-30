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
- **Signature** : sections en aplat bleu profond bordées de vagues organiques (SVG en `--wave`), images et portraits en arche (`.photo-arch`), cartes d'accompagnements en teintes variées, motif d'anneaux pointillés.
- **Hero de l'accueil** : sans photo (demande cliente du 2026-09-30), texte centré (`.hero-center`) sous un **bandeau bleu profond horizontal en vague**, pleine largeur sous le header (`.hero-wave`, même vague `--wave` que les autres sections).
- **Photos** : portrait de Raphaëlle sur Qui suis-je = `img/portrait-raphaelle-rose.jpg` (haut à pois, fond rose texturé ; recadré en 4:5, 1000×1250, fond de studio prolongé de 440 px vers le haut pour laisser de l'air autour du visage). Les anciens portraits `portrait-raphaelle.jpg` et `portrait-raphaelle-bleu.jpg` restent dans `img/` mais ne sont plus utilisés. Photos du cabinet en haute définition (salon, espace d'accueil, tableau du pont ; 1600 px de large). Optimisées en JPEG avec Pillow ; les originaux sont hors dépôt dans `photos-originales/` à la racine (gitignoré).
- **Bloc « Prochaine session » (page MBCT)** : sort du conteneur étroit pour occuper toute la largeur (`.session-block` / `.session-grid`) — grande carte calendrier (mois + pastilles `.day` des dates, journée intensive en pastille sable) et, à droite, Tarifs (kaki) et Inscription (bleu profond, téléphone en grand).
- **Navigation** : plus de bouton « Prendre rendez-vous » dans la barre du haut (doublon avec Contact, pas de prise de RDV en ligne) ; les appels à l'action restent dans le hero et les bandeaux CTA.
- **Sous-menu « Pourquoi consulter ? »** : pont invisible (`.sub::before`) sur l'écart + délai de fermeture de 250 ms dans `nav.js`, pour pouvoir atteindre les sous-items à la souris.

## En attente
- **Mentions légales** : les encadrés jaunes ont été retirés (demande cliente), mais la section « Hébergement du site » contient encore un texte entre crochets à remplacer par le nom et les coordonnées de l'hébergeur ; mention TVA et SIRET (00027) à confirmer.
- Session MBCT mars–mai 2027 en ligne (12, 19, 26 mars ; 3, 9, 16, 23 avril ; 14 mai ; journée intensive dimanche 18 avril) : à mettre à jour à chaque nouveau cycle. Le 3 avril 2027 est un samedi alors que les autres dates sont des vendredis — à confirmer avec la cliente.
- Les styles de placeholder `.ph` restent disponibles dans `styles.css` si une photo doit être temporairement retirée.
