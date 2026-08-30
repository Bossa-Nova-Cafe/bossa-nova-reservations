# Bossa Nova Café — Réservations Music Night & Match Night

Site statique hébergé sur GitHub Pages, données dans Firebase (Firestore + Auth).
Interface client en 6 langues (FR, EN, DE, PT, ES, IT), gestion en français.

## 1. Firebase (≈ 10 min)

1. https://console.firebase.google.com → **Ajouter un projet** → nom `bossa-nova-cafe` (Analytics : non).
2. **Créer** → **Firestore Database** → *Créer une base* → région **`europe-west6` (Zurich)** → mode **production**.
3. Onglet **Règles** de Firestore → remplacer tout par le contenu de `firestore.rules` → **Publier**.
4. **Créer** → **Authentication** → *Commencer* → activer **E-mail/Mot de passe**.
   Onglet **Users** → *Ajouter un utilisateur* → votre e-mail + un mot de passe solide.
   C'est le compte de gestion. Personne ne peut s'inscrire seul.
5. **Paramètres du projet** (roue dentée) → *Vos applications* → icône **`</>`** (Web) → nom `site` → **Enregistrer**.
   Copier l'objet `firebaseConfig` affiché, puis le coller dans `index.html` à l'endroit marqué `// ⇩ COLLER ICI`.
6. Authentication → **Settings** → **Domaines autorisés** → ajouter `VOTRE-COMPTE.github.io`.
   *(Oubli fréquent : sans cette ligne, la connexion à la gestion échoue.)*

## 2. GitHub Pages (≈ 5 min)

1. https://github.com/new → nom `bossa-nova-reservations` → **Public** → *Create repository*.
2. *uploading an existing file* → glisser `index.html` et ce README → **Commit changes**.
3. **Settings** → **Pages** → Source : *Deploy from a branch* → Branch `main` / `/ (root)` → **Save**.
4. Après 1–2 minutes : `https://VOTRE-COMPTE.github.io/bossa-nova-reservations/`

Un nom de domaine propre s'ajoute ensuite dans Settings → Pages → *Custom domain*
(p. ex. `reservations.bossanovacafe.ch`).

## 3. Utilisation

**Réserver** — page publique à diffuser : lien Instagram, QR code sur les tables et en vitrine.
La langue se règle sur celle du navigateur du visiteur ; il peut en changer en haut à droite.

**Gestion** — connexion avec le compte créé à l'étape 1.4 :
- créer une soirée : type (Music Night / Match Night), titre, date, horaires, capacité, minimum, heures d'arrivée proposées, date limite de réservation ;
- suivre le remplissage, fermer ou rouvrir les réservations, annuler une réservation (la place est rendue automatiquement) ;
- bouton **WhatsApp** sur chaque ligne : ouvre le message de confirmation déjà rédigé **dans la langue du client** ; l'envoi reste votre geste ;
- bouton **Copier la liste** : colle directement dans Excel.

## Sécurité

- Les noms, téléphones et e-mails des clients ne sont lisibles qu'une fois connecté.
- Le public peut créer une réservation, jamais en lire, modifier ou supprimer une.
- La capacité de 40 places est vérifiée côté serveur par transaction : deux réservations simultanées ne peuvent pas dépasser la limite.

## Mettre à jour le site

Modifier `index.html` sur GitHub (icône crayon) → *Commit changes* → en ligne une minute plus tard.
