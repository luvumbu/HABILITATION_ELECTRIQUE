# Audit du contenu par rapport aux sources officielles

Documents de référence utilisés :
1. **INRS ED 6127 — "L'habilitation électrique"**, 3e édition, décembre 2020 (`ed6127.pdf`)
2. **"Formation à l'habilitation électrique" — support de préparation** (`DOSSIER RESSOURCE B1V BR.pdf`, 35 pages)
3. **Schneider Electric / Éduscol — "Formation de Mise à Niveau de Formateur à l'Habilitation"** (source officielle eduscol.education.fr, `1779-formation-de-mise-niveau-de-formateur-lhabilitation.pdf`)

Ce fichier journalise ce qui a été vérifié, corrigé, et ce qui reste à trancher.

---

## -1. CONFIRMATION DÉFINITIVE (source 3) — B0V n'existe pas, citation explicite

La 3e source (Schneider Electric / Éduscol, cours officiel de mise à niveau de formateurs) tranche sans aucune ambiguïté possible, avec une phrase explicite :

> *"Travaux d'ordre non électrique : Habilitation B0 - H0 ou H0V — Confiés à des personnes habilitées connaissant les risques électriques — Ils peuvent être exécutants ou chargés de chantier — **Le voisinage (V) est maintenant interdit pour les travaux d'ordre non électrique en BT**"*

C'est la 3e source indépendante à ne lister que B0/H0/H0V (jamais B0V) pour les non-électriciens, et cette fois la formulation est explicite : le "V" est **interdit** pour le B0 en BT. Le mot "maintenant" suggère que c'est une clarification/évolution de la norme — d'anciens supports ont pu mentionner B0V par le passé, mais ce n'est plus valable.

**Conclusion : correction de B0/quiz.html, B0/fiche.html, B0/memo.html appliquée (voir section 3 devenue obsolète — la question n'est plus "faut-il corriger ?" mais "c'est fait").**

---

## 0. CONFIRMATION CROISÉE (source 2) — le point B0V est tranché

Le 2e document tranche définitivement la question soulevée en section 3 ci-dessous :

- **Tableau "Limite des habilitations des non électriciens" (p.19)** : trois lignes seulement — `B0 / Basse Tension / Zone 1`, `H0 / Haute Tension / Zone 1`, `H0V / Haute Tension / Zones 1 et 2`. **Aucune ligne "B0V"**. Confirmé une deuxième fois, indépendamment de l'INRS ED 6127.
- **DLI et DMA, définitions explicites (p.17)** : *"DLI : Distance Limite d'Investigation fixée à 50 m d'une PNST en champ libre. [...] DMA : Distance Minimale d'Approche définissant la limite extérieure de la zone 3 en HT et de la zone 4 en BT."* → confirme que la correction DLI→DMA déjà appliquée (0,30 m en BT) était la bonne. La DLI, elle, vaut réellement **50 m**, pas 0,30 m.
- **BS limité à 400 V** (en plus des 32 A déjà présents dans mon contenu) — confirmé, à ajouter en complément (non bloquant).
- **Règle de cascade des habilitations** (nouveau, pas encore dans mon contenu) : une habilitation d'indice supérieur "entraîne" les indices inférieurs du même domaine — ex. *"L'habilitation BR entraîne les habilitations B0 et B1, ainsi que B1V ! L'habilitation BR n'entraîne pas les habilitations B2 et BC !"* ; *"B2V entraîne indice 0 et 1, mais pas BC ni BR."* Utile pour des questions plus fines, pas encore exploité dans mes quiz.

---

## 1. Points confirmés CORRECTS (aucune action nécessaire)

| Élément | Ce que dit ED 6127 | Ce que dit mon contenu | Statut |
|---|---|---|---|
| Seuil de réussite au QCM | "L'apprenant doit obtenir 70 % de bonnes réponses au minimum" (§5.4.1) | Mode Examen : seuil fixé à 70% | ✅ Coïncidence confirmée — pas une supposition |
| Nombre minimum de questions au QCM réel | "constitué de 15 questions minimum" (§5.4.1) | Mode Examen : 20 questions | ✅ Au-dessus du minimum réel |
| Périodicité de recyclage | "périodicité recommandée est de 3 ans" (§6.2.1) | "recyclage recommandé environ tous les 3 ans" dans les 6 quiz | ✅ Correct |
| Ordre des 4 étapes de consignation | Séparation → Condamnation → Identification → VAT (classification symbole C, cohérent avec les modules de formation §5.2.1) | BC-BR quiz : "Séparation, Condamnation, Identification, VAT" | ✅ Correct |
| BC = chargé de consignation, BR = chargé d'intervention BT générale, BS = intervention BT élémentaire | Tableau de classification p.10-11 | Conforme dans BC-BR/quiz.html | ✅ Correct |
| Calibre max BS = 32 A | "Intervention élémentaire sur des circuits terminaux (maxi 400 V et 32 A courant alternatif)" (p.14) | BS quiz : "circuits protégés ≤ 32 A" | ✅ Correct (mais incomplet, voir §3) |

---

## 2. Corrections déjà appliquées et republiées

### DMA vs DLI (terminologie de distance)
**Problème** : mon contenu affirmait partout "DLI (distance limite d'investigation) = 0,30 m en BT". Or le schéma officiel des zones (Annexe 8.1, p.40) montre que :
- **DMA** (distance minimale d'approche) = la limite la plus proche de la pièce sous tension → **0,30 m en BT** (avec la note officielle : *"en basse tension, la DLVR est confondue avec la DMA"*)
- **DLI** (distance limite d'investigation) = la limite la plus *extérieure*, bien plus grande, séparant la zone 0 (aucune habilitation nécessaire) de la zone 1

**Correction appliquée** : remplacement de "DLI" par "DMA" dans B0, H0, B1, B2, BC-BR (BS n'était pas concerné, pas de question sur ce thème). Valeurs numériques conservées (0,30 m en BT, ~2 m en HTA, ~5 m en HTB — approximations standard, cohérentes avec la courbe DMA du schéma officiel).

**Statut** : ✅ Corrigé dans les 5 fichiers, republié en ligne (versions B0 v15, H0 v6, B1 v6, B2 v5, BC-BR v5).

---

## 3. Le symbole "B0V" — CORRIGÉ

Confirmé par les 3 sources (voir sections -1 et 0) : **B0V n'existe pas**. En BT, il n'y a pas de variante "renforcée" du symbole non-électricien — seul **B0** existe. En HT, **H0V** existe bel et bien pour le voisinage renforcé.

**Corrigé et republié** dans B0/quiz.html (8 occurrences), B0/fiche.html (5), B0/memo.html (2). Les questions concernées ont été réécrites pour tester directement cette règle (« B0V n'existe pas, contrairement à H0V ») plutôt que de la présupposer fausse.

---

## 3bis. Erreur d'inversion découverte en creusant la question B0V — CORRIGÉE

En vérifiant B0V contre les tableaux des sources 2 et 3, une **deuxième erreur, plus large**, est apparue : mon contenu affirmait systématiquement que l'attribut **« V » ne donne accès qu'à la zone de voisinage SIMPLE, jamais renforcée** — pour H0V, B1V, B2V, et implicitement BC/BR. C'est l'**inverse** de la réalité :

- Le symbole *sans* V (B1, B2, H0) est déjà limité à la zone de voisinage **simple** (zone 1).
- L'attribut **V** est précisément ce qui ajoute l'accès à la zone de voisinage **renforcée** (zone 2 en HT / zone 4 en BT) — tableau "Limite des habilitations" p.19-22 du document 2 : *"H0V : Zones 1 et 2"*, *"B1V et B2V : Zones 1 et 4"*, *"BC/BR : Zones 1 et 4"* (accès inclus nativement, sans besoin de V).

**Corrigé et republié** dans :
- H0/quiz.html (2 questions), H0/fiche.html, H0/memo.html
- B1/quiz.html (3 questions + 1 phrase de mise en situation), B1/fiche.html, B1/memo.html
- B2/quiz.html (2 questions), B2/fiche.html, B2/memo.html
- BC-BR/quiz.html (2 questions), BC-BR/memo.html

C'était une erreur bien plus étendue que le simple B0V, présente dans 4 des 6 habilitations. Elle inversait littéralement la réponse correcte sur un point qui est très probablement testé à l'examen (le rôle de l'attribut V).

---

## 4. Compléments — AJOUTÉS

- **BS** : ajouté la limite de **400 V max** (en plus des 32 A déjà présents) — 1 question ajoutée (BS 70→71).
- **BR** : ajouté "connexion et déconnexion en présence de tension sous certaines conditions (maxi 500 V, 63 A en courant alternatif, hors charge)" — 1 question ajoutée (BC-BR 67→69, qui inclut aussi la règle de cascade ci-dessous).
- **Règle de cascade des habilitations** : ajoutée sous forme de questions —
  - *"L'habilitation BR entraîne B0, B1 et B1V, mais jamais B2 ni BC"* (BC-BR)
  - *"Le B2V entraîne les indices 0 et 1, mais jamais BC ni BR"* (B2, 65→66)
  - *"Le B1V entraîne l'indice 0 (B0)"* (B1, 65→66)
- **QCM réel — non modifié, limite connue** : la norme exige qu'au moins 30% des questions portent sur "distances et zones d'environnement" et 30% sur "limites des opérations". Mon Mode Examen pioche au hasard sans garantir ces proportions — dans la pratique rarement un problème vu la taille des banques, mais ce n'est pas garanti à chaque tirage. Non traité (changement d'architecture du tirage, pas juste du contenu).

**Statut : ✅ Tous les compléments identifiés ont été ajoutés et republiés**, sauf la limite du QCM (choix d'architecture, pas une info manquante).

---

## 5. État des fichiers (au moment de cet audit)

| Habilitation | Questions | Mode Examen | DMA/DLI corrigé | Attribut V corrigé |
|---|---|---|---|---|
| B0 | 94 | ✅ | ✅ (quiz+fiche+mémo) | ✅ B0V retiré (quiz+fiche+mémo) |
| BS | 70 | ✅ | N/A (pas concerné) | N/A (pas d'attribut V pour BS) |
| H0/H0V | 63 | ✅ | ✅ (quiz+fiche+mémo) | ✅ H0V = zone renforcée (quiz+fiche+mémo) |
| B1/B1V | 65 | ✅ | ✅ (quiz+fiche+mémo) | ✅ B1V = zone renforcée (quiz+fiche+mémo) |
| B2/B2V | 65 | ✅ | ✅ (quiz+fiche+mémo) | ✅ B2V = zone renforcée (quiz+fiche+mémo) |
| BC/BR | 67 | ✅ | ✅ (quiz+fiche+mémo) | ✅ accès natif zone renforcée (quiz+mémo) |

Toutes les corrections de cette section ont été republiées en ligne aux mêmes URLs (versions incrémentées).

---

## 6. Nouvelle passe — 4 PDF supplémentaires ajoutés au dossier (2026-09-19)

Quatre nouveaux documents déposés dans le dossier ont été lus intégralement et comparés au contenu existant des 6 quiz :

1. **`7_formation_habilitation.pdf`** (support BTS électrotechnique, 14 p., basé sur NF C18-510) — très fiable, cohérent avec l'ED 6127.
2. **`Dossier-organisation-formation-Habilitation-Electrique.pdf`** (Innoprev, organisme de formation, 19 p.) — document organisationnel, mais contient une synthèse fiable des attributs V/T/N/X.
3. **`ppt1_habilitation_b0_revep_28avril2015.pdf`** (support de cours B0, Lycée Marcel Sembat, 100 p., basé sur NF C18-510 homologuée 2012) — fiable, post-réforme.
4. **`Video_prof.pdf`** (dossier pédagogique « Classes Branchées », janvier 2005) — **⚠️ écarté comme source de contenu** : antérieur à la norme NF C18-510 (2012), utilise encore B0V, les anciens domaines BTA/BTB et d'autres notions obsolètes contredites par les sections -1/0/3 ci-dessus. Consulté uniquement à titre de comparaison, aucune donnée n'en a été reprise.

### Lacunes identifiées et comblées (25 questions ajoutées au total)

Aucune contradiction avec le contenu déjà audité n'a été trouvée — uniquement des compléments absents des 6 quiz :

| Complément ajouté | Source | Quiz concernés |
|---|---|---|
| Réexamen de l'habilitation **au moins une fois par an** (distinct du recyclage à ~3 ans) | Source 1 §6.3, source 3 p.75 | B0, H0, BS, B1, B2, BC-BR (1 question chacun) |
| Degré de protection **IP2X/IPXXB (BT)** et **IP3X/IPXXC (HT)** contre les contacts directs | Source 1 §5.1 | B0, H0, B2 |
| Distance de sécurité face à un **conducteur tombé au sol** (3 m si <50 000 V, 5 m si doute/au-delà) | Source 3 p.95 | B0, H0, BC-BR |
| Technique pour éviter la **tension de pas** (petits pas/sauts, pieds serrés) | Source 3 p.95 | H0 |
| Conduite à tenir : **véhicule/engin en contact avec une ligne** (rester à bord) | Source 3 p.96 | B0, H0 |
| Distance **extincteur ↔ foyer électrique** en BT (0,5 m minimum) | Source 3 p.99 | B0 |
| **TBTS vs TBTP** (liaison à la terre côté utilisation) | Source 1 §5.1 | B1 |
| Attribut **« N » (nettoyage sous tension)** jamais accordé à un B0/H0 | Source 2 | B0, H0 |
| Attribut **« T » (travaux sous tension)** : exceptionnel, formation agréée par le Comité des Travaux Sous Tension | Source 2 | B1, B2 |
| Cascade **BR inclut BS** | Source 1 §6.2 | BC-BR |
| Calibre d'intervention **BR ≤ 63 A CA / ≤ 32 A CC** (distinct de la limite 500 V/63 A pour connexion/déconnexion déjà présente) | Source 1 §8.1 | BC-BR |
| Section max BS **6 mm² cuivre / 10 mm² alu** et calibre **16 A en courant continu** | Source 1 §8.2 | BS |

### Anomalie annexe détectée (pré-existante, sans lien avec les nouveaux PDF)

Les compteurs affichés (« Quiz (94) », « Quiz (66) »…) ne correspondaient pas exactement au nombre réel d'objets dans `BANK` pour B0 (93 réels vs 94 affichés) et B2 (64 réels vs 66 affichés) avant cette passe. Corrigé en recomptant précisément `BANK.length` de chaque fichier et en réalignant `index.html` + le compteur interne de chaque `quiz.html` sur le total réel après ajout.

### État des fichiers après cette passe

| Habilitation | Questions (avant → après) |
|---|---|
| B0 | 93 → 99 |
| H0/H0V | 63 → 69 |
| BS | 71 → 74 |
| B1/B1V | 65 → 68 |
| B2/B2V | 64 → 67 |
| BC/BR | 69 → 73 |

**Non traité dans cette passe** : `fiche.html` et `memo.html` n'ont pas été mis à jour avec ces mêmes compléments (seul `quiz.html` a été demandé). À faire si besoin, en suivant la méthode des sections précédentes.

---

## 7. Passe exhaustive fait par fait — 3 audits parallèles (2026-09-19)

Suite à la question « est-ce que tout est complet ? », un audit systématique (pas seulement ciblé par mots-clés) a été mené via 3 agents en parallèle, chacun relisant intégralement une ou plusieurs sources contre les 6 `BANK` :

- **Agent A** : `1779-formation-de-mise-niveau-de-formateur-lhabilitation.pdf` (76 p., source 3 de l'audit original) contre les 6 quiz.
- **Agent B** : `DOSSIER RESSOURCE B1V BR.pdf` (35 p., source 2 de l'audit original) contre les 6 quiz.
- **Agent C** : re-vérification exhaustive de `7_formation_habilitation.pdf`, `Dossier-organisation-formation-Habilitation-Electrique.pdf` et `ppt1_habilitation_b0...pdf` (les 3 PDF déjà utilisés en section 6, mais qui n'avaient été comparés que par recherche de mots-clés).

### ⚠️ Erreur trouvée dans le contenu PRÉ-EXISTANT (avant toute intervention de cette session) — CORRIGÉE

L'Agent C a signalé que `B0`, `BS`, `B1`, `B2`, `BC-BR` (quiz + fiche + mémo, et `programme.md` pour B0) enseignaient une subdivision **BTA (50-500 V) / BTB (500-1000 V)** de la basse tension — ~10 questions plus les tableaux de référence. Vérification : cette subdivision provient de l'ancienne norme UTE C18-510 (pré-2012) et n'apparaît que dans `Video_prof.pdf` (2005, déjà écarté comme obsolète en section 6). Les **5 autres sources actuelles** (7_formation, Dossier-organisation, ppt1, 1779-formation, DOSSIER RESSOURCE — toutes post-homologation NF C18-510 du 21/01/2012) définissent un domaine **BT unique, 50 V < U ≤ 1000 V**, sans BTA/BTB.

**Corrigé dans tous les fichiers concernés** : B0 (quiz+fiche+mémo+programme.md), BS/B1/B2/BC-BR (quiz+fiche+mémo), H0/fiche.html (une ligne de rappel BTB isolée). Les questions testant spécifiquement BTA/BTB ont été réécrites pour tester le domaine BT unifié (et, pour une question par fichier, expliciter que BTA/BTB n'existe plus dans la norme actuelle, pour éviter la confusion si l'apprenant croise d'anciens supports).

### 21 nouvelles questions ajoutées (vérifiées, aucune contradiction avec l'existant)

| Complément | Source | Quiz |
|---|---|---|
| Seuil de dangerosité 10 mA CA / 40 mA CC | DOSSIER RESSOURCE p.5 | B0 |
| Tension de contact dangereuse selon milieu (50V sec / 25V humide / 12V immergé) | DOSSIER RESSOURCE p.5 | B0 |
| DLI = 50 m, délimite la zone 0 | DOSSIER RESSOURCE p.17 | B0 |
| Zone 0 = zone d'investigation | 7_formation / ppt1 | B0 |
| 3 cas où l'habilitation est obligatoire | 7_formation §1 | B0 |
| Classe II (double isolation) jamais reliée à la terre | ppt1 p.50 | B0, H0 |
| Tension limite conventionnelle 50V/5s | ppt1 p.34 | B0 |
| Agent de sécurité en ronde, local fermé : pas d'habilitation requise | Dossier-organisation | B0 |
| Travailleur indépendant : pas d'habilitation mais preuve de formation requise | 7_formation §1 | B0 |
| Zone d'approche prudente autour d'un câble isolé (0,50 m) | DOSSIER RESSOURCE p.17 | H0 |
| Zone 3 = travaux sous tension, HT uniquement | DOSSIER RESSOURCE p.16 | H0 |
| Formule DMA = 0,005×Un + g | 1779-formation p.24 | H0 |
| Catégories de gants isolants IEC 60903 (00 à 4, 500V à 36000V) | 1779-formation p.74 | H0 |
| BS limité à 600 V en courant continu (en plus des 400 V CA déjà présents) | 1779-formation p.47 | BS |
| Écran facial obligatoire : 4 cas précis | DOSSIER RESSOURCE p.33 | B1 |
| Intérimaire habilité par l'entreprise utilisatrice, pas par l'ETT | 7_formation §6.1 | B1 |
| Câble enterré : grillage avertisseur rouge, incertitude ~1,5 m | DOSSIER RESSOURCE p.13 | B2 |
| BR peut diriger un exécutant électricien, contrairement au BS | 1779-formation p.46-47 | BC-BR |
| Réexamen après interruption de pratique ~6 mois (précision du motif) | 1779-formation p.31 | BC-BR |
| 5ème opération de consignation : MALT/CC après la VAT | 7_formation §9 | BC-BR |

Chaque fait a été revérifié directement dans le texte source extrait avant intégration (pas de confiance aveugle dans les rapports d'agents).

### Points écartés par prudence (non ajoutés)

- Exceptions réglementaires permettant à une personne non habilitée d'effectuer certaines manœuvres/remplacements sous conditions IP2X très spécifiques (1779-formation p.54/61/62) — risque de contredire le message pédagogique central « le non-habilité ne touche jamais à l'électricité ».
- Chiffre « D0 = 2,50 m » (1779-formation p.23) — contexte insuffisant dans le texte extrait pour être sûr de sa définition exacte.
- Valeurs précises en mA des effets du courant : les sources divergent légèrement entre elles (7_formation : 0,5/5/10/25/40/50/2000 mA ; ppt1 : 0,5/10/20/30/1000 mA). Le contenu actuel des quiz reste un compromis raisonnable ; à trancher contre l'ED 6127 (absent du dossier) si on veut aller plus loin.
- Attribut « X » (opérations spéciales) — mentionné mais marginal, valeur pédagogique faible.

### État des fichiers après cette passe

| Habilitation | Questions (avant la journée → après section 6 → après section 7) |
|---|---|
| B0 | 93 → 99 → 108 |
| H0/H0V | 63 → 69 → 74 |
| BS | 71 → 74 → 75 |
| B1/B1V | 65 → 68 → 70 |
| B2/B2V | 64 → 67 → 68 |
| BC/BR | 69 → 73 → 76 |

**Couverture des sources** : les 6 PDF présents dans le dossier ont maintenant tous été lus intégralement et comparés fait par fait aux quiz, à l'exception de `Video_prof.pdf` (exclu, obsolète). `fiche.html`/`memo.html`/`programme.md` ont reçu uniquement la correction BTA/BTB (pas les 21 nouvelles questions, qui ne concernent que `quiz.html`).

---

## 8. Bug de compteurs corrigé + mise en place PWA (2026-09-19)

### Bug corrigé — compteurs de questions désynchronisés

Après les ajouts des sections 6 et 7, deux affichages par quiz n'avaient pas été mis à jour en même temps que le compteur `stat-row` (celui-là avait bien été corrigé à chaque étape) :
- le texte d'en-tête `<span class="eyebrow">Entraînement — N questions</span>`
- le bouton `Test complet (N questions)`

Les deux affichaient encore l'ancien total (ex. « 94 » pour B0 au lieu de 108). Corrigé dans les 6 `quiz.html` : B0 (108), H0 (74), BS (75), B1 (70), B2 (68), BC-BR (76).

### Mise en place PWA (Progressive Web App)

Objectif : proposer automatiquement une « installation » de type application mobile une fois le site hébergé en ligne (HTTPS), sans passer par le Play Store.

**Fichiers ajoutés à la racine du projet :**
- `manifest.json` — nom, icônes, couleurs (`#14161a` / accent `#f0b42d`), `display: standalone`, `start_url: /index.html`. Chemins **absolus** (`/manifest.json`, `/icons/...`, `/sw.js`), qui supposent un hébergement à la racine d'un domaine (confirmé par l'utilisateur — à revoir si l'hébergement change pour un sous-dossier type GitHub Pages projet).
- `sw.js` — service worker : stratégie réseau d'abord avec repli sur le cache si hors-ligne ; précharge toutes les pages `fiche.html`/`memo.html`/`quiz.html` des 6 habilitations + les assets (icônes, favicon, bannière). Version de cache `v2` (à incrémenter à chaque mise à jour notable du contenu pour forcer le rafraîchissement chez les utilisateurs déjà installés).
- `icons/` — icône d'application (éclair ambre sur fond sombre, généré par script Python/PIL) en plusieurs tailles : `icon-192.png`, `icon-512.png`, versions `maskable` (192/512, zone de sécurité Android), `apple-touch-icon.png`, `favicon-16.png`, `favicon-32.png`.
- `favicon.ico` — multi-résolution (16/32/48px), même dessin que l'icône d'app.
- `img/quiz-banner.png` — image d'illustration (triangle de danger + éclair, fond transparent, lignes de circuit décoratives) affichée en haut des 6 pages `quiz.html`.

**Intégration** : les 19 pages HTML du site (index + fiche/mémo/quiz × 6 habilitations) ont reçu dans leur `<head>` : lien manifest, meta theme-color, meta mobile-web-app-capable (Android + iOS), lien apple-touch-icon, et les 3 liens favicon (ico + png 32/16). Un script d'enregistrement du service worker a été ajouté avant `</body>` sur chacune des 19 pages.

**Statut connu** : après mise en ligne par l'utilisateur, le bandeau d'installation automatique de Chrome Android ne s'est pas déclenché spontanément (comportement fréquent — Chrome exige parfois plusieururs visites/un certain engagement avant de proposer le bandeau automatique ; l'option manuelle via le menu ⋮ du navigateur reste généralement disponible si le manifest/service worker sont valides). Non creusé plus loin à la demande de l'utilisateur — diagnostic (HTTPS actif ? manifest/service worker accessibles à l'URL réelle ? icônes qui chargent ?) à reprendre si besoin, idéalement avec l'URL d'hébergement en main.
