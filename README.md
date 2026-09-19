# Habilitations Électriques — Dossier de révision

Site statique (PWA) de préparation aux habilitations électriques selon la norme **NF C18-510** : fiches de révision, mémos et quiz d'entraînement pour chaque niveau d'habilitation.

## Habilitations couvertes

| Habilitation | Description |
|---|---|
| **B0** | Non-électricien travaillant en environnement électrique |
| **H0 / H0V** | Non-électricien en environnement haute tension |
| **BS** | Intervention élémentaire BT (fusible, prise, interrupteur, réarmement) |
| **B1 / B1V** | Exécutant électricien BT, hors tension / voisinage |
| **B2 / B2V** | Chargé de travaux électriques BT, hors tension / voisinage |
| **BC / BR** | Chargé de consignation / chargé d'intervention générale BT |

Chaque habilitation dispose de sa propre fiche (`fiche.html`), de son quiz (`quiz.html`) et de ses fiches mémo (`memo.html`).

## Utilisation

Le site fonctionne hors connexion une fois chargé une première fois (service worker + manifest PWA). Il suffit d'ouvrir `index.html` dans un navigateur, ou d'installer le site comme application (bouton "Ajouter à l'écran d'accueil" / "Installer").

### Hébergement

Le site utilise des chemins relatifs, il peut donc être servi depuis la racine d'un domaine ou depuis un sous-dossier (par exemple une page de projet GitHub Pages).

## Structure du dépôt

```
index.html          Page d'accueil
manifest.json        Manifeste PWA
sw.js                Service worker (mode hors-ligne)
B0/ B1/ B2/ BC-BR/ BS/ H0/   Fiches, mémos et quiz par habilitation
icons/, img/          Ressources graphiques
*.pdf                 Documents de référence et supports de formation
```

## Documents de référence

Le dépôt inclut plusieurs PDF de supports de formation externes, fournis à titre de documentation de révision. Ils ne sont pas couverts par une licence libre.
