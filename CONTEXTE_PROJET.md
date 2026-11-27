# Cahier des charges — Atlas AK 3Gen

Version de référence : 27 novembre 2026. Sources : conversation « Peindre 4 Orks en 3h » (160 pages) et dépôt https://github.com/maoux/maoux.github.io. Document de reprise, non certificat de validation.

## Objectif
Encyclopédie généraliste, illustrée et évolutive de peinture miniature, du Tabletop au Display, indépendante des factions. Priorité à la pertinence artistique, à la reproductibilité et à l'utilisation des peintures réellement disponibles plutôt qu'au nombre de recettes.

## Nuancier V11
Périmètre AK11001–AK11190 : 190 références, 184 échantillons photographiés, six indisponibles (AK11010, AK11091, AK11099, AK11104, AK11125, AK11176). Exclure ces six des nouvelles recettes; conserver les valeurs commerciales à titre comparatif. Ne pas imposer d'achat de métalliques. Conserver référence, nom officiel, disponibilité, valeurs commerciales, photographie brute et corrigée, HEX/RGB et indicateurs colorimétriques et de fiabilité. Les mesures photographiques restent approximatives; ne pas les assimiler à des mesures instrumentales.

## Recettes
Identifiants permanents, titres, catégories, rendu, références et noms AK, proportions de mélanges, variantes utiles, versions rapides, accents, glacis, patines, mémos de texture et placement des lumières. Progressions libres de 2 à 8 couleurs ou davantage; six étapes O2/O1/B/L1/L2/L3 facultatives. Contrôler valeurs, température et saturation; ne pas imposer une palette distincte pour chaque géométrie NMM. Distinguer progression et accents. Pas de variantes artificielles ni de liens forcés. Statuts : théorique, basée sur nuancier réel, cohérence colorimétrique vérifiée, validée sur figurine (uniquement après essai utilisateur).

## Couverture
Couleurs, carnations, créatures, cheveux, maquillages, textiles, denim, voiles, cuirs, bois, os, cornes, fourrures, animaux, végétation, roches, sols, eaux, saisons, paysages planétaires, NMM/TMM, cristaux, gemmes, optique, usure, OSL, ambiances et techniques. Prévoir des variantes réellement utiles et des conseils spécifiques au matériau.

## Illustrations
Préserver les 115 fiches statiques (textes, recettes et illustrations). Conserver les 308 illustrations uniques historiques. Corriger uniquement les défauts graphiques justifiés; préserver légendes et chemins. Associer les illustrations aux recettes par examen visuel, matériau, teinte, température et effet; plusieurs liens possibles, aucun si non pertinent. Un lien ouvre la rubrique, la sous-rubrique et la fiche, puis défile jusqu'à elle. Identifiants stables.

## Interface
Priorité iPhone/Safari et ordinateur. Recherche par nom, référence, matériau, couleur, technique et effet. Menus déroulants, filtres, navigation et liens directs compatibles. Pastilles HTML visibles sous les titres même fermés, reliées au nuancier corrigé, longueur variable, noms et références AK, distinction progression/accents/patines; signaler les références hors périmètre. Laboratoire de comparaison brute/corrigée/commerciale. Consultation hors connexion : objectif historique, à vérifier dans l'architecture actuelle.

## Architecture et versions
GitHub Pages : https://maoux.github.io/. Branches confirmées : main (stable), develop-v10, develop-v11 (travail), migration-atlas. HTML, assets/images, css, js, data. Préserver main jusqu'à validation. Modifications ciblées, sauvegardes et commits explicites. Ne pas reconstruire ou supprimer des contenus historiques sans justification. Unifier les recettes dans les rubriques existantes plutôt que maintenir deux catalogues parallèles; conserver les anciennes recettes repliables.

## État de reprise
Sur main, les rapports de migration indiquent 30 sections, 364 éléments details, 391 éléments image, 13 onglets, 308 images uniques, 33 CSS et 19 JS. Ces compteurs ne représentent pas le total des recettes dynamiques.
Sur develop-v11, présence vérifiée des fichiers data/recettes.json (2 147 917 octets), data/palette.json, data/palette-v11.json, data/liaisons.json et des registres d'audit. L'historique rapporte 1191 recettes dynamiques : 1107 retravaillées, 76 hors périmètre conservées, 8 techniques conservées; 115 statiques, soit 1306 fiches. Comptages et correspondances effectives à revérifier. Les 93 corrections graphiques V10 sont rapportées comme transférées dans l'historique. Les 326 liaisons historiques restent à contrôler visuellement. Les pastilles et le remplacement dynamique sont rapportés comme intégrés, sans test navigateur complet confirmé.

## Priorités et critères de recette (acceptation)
1. Auditer develop-v11 sans toucher main : intégrité JSON, identifiants uniques, inventaire exhaustif des blocs dynamiques, références AK, liens et ressources.
2. Vérifier que les 1107 remplacements sont réellement appliqués et que les 84 autres fiches et 115 statiques sont préservées. Éliminer les catalogues concurrents dans la navigation sans perte de données.
3. Vérifier le nuancier corrigé et les pastilles; signaler les anomalies et indisponibilités.
4. Contrôler individuellement les associations illustrées, sans liens forcés; documenter les cas non résolus.
5. Tester recherche, filtres, menus, liens directs, affichage des pastilles et illustrations sur ordinateur et iPhone/Safari; vérifier absence d'erreurs JS et de ressources manquantes.
6. Consigner résultats, anomalies et changements; fusionner vers main seulement après validation.

## Règles de collaboration
Ne pas annoncer un commit, transfert, test ou achèvement non vérifié. Distinguer présence d'un fichier, intégrité de son contenu, fonctionnement navigateur et validation physique. Signaler immédiatement les blocages et ne pas demander des « continue » répétés sans progrès réel. Mettre à jour ce document à chaque évolution importante.
