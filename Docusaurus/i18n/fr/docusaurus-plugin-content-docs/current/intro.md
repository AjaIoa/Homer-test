---
sidebar_position: 1
---

# Intro Tutorial

Découvrons **Docusaurus en moins de 5 minutes**.

## Premiers pas

Commençons par **créer un nouveau site**.

Ou **essayez Docusaurus immédiatiement** avec **[docusaurus.new](https://docusaurus.new)**.

### Ce dont vous aurez besoin

- [Node.js](https://nodejs.org/en/download/) version 16.14 ou supérieur:
  - En installant Node.js, il est recommandé de cocher toutes les cases correspondantes auc dépendances.

## Générer un nouveau site

Générez un nouveau site Docusaurus en utilisant le **"classic template"**.

Le template classique ou "classic template" sera ajouté automatiquement à votre projet après l'éxecution de la commande suivante:

```bash
npm init docusaurus@latest my-website classic
```

Vous pouvez tapez cette commande dans Prompt, Powershell, Terminal, ou autre terminal intégré à votre éditeur de code.

La commande va également installer les dépendances nécessaires pour run Docusaurus

## Lancer votre site

Lancez votre serveur développement:

```bash
cd my-website
npm run start
```

La commande `cd` change le dossier dans lequel vous êtes actuellement. Afin de travailler avec votre site Docusaurus nouvellement créé, vous devrez y naviguer avec le terminal.

La commande `npm run start` construit votre site localement et l'envoie au serveur développement, prêt pour vous via http://localhost:3000/.

Ouvrez `docs/intro.md` (cette page) et modifiez quelques lignes : le site se **recharge automatiquement** et affiche vos modifications.