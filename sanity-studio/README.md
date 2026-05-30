# MUN: CNMB Sanity Studio

Admin panel pentru articolele din secțiunea News a site-ului [muncnmbvl.com](https://muncnmbvl.com).

## Quick start

```bash
cd sanity-studio
npm install
npx sanity login        # autentificare prin browser cu president.muncnmbvl@gmail.com
npx sanity dev          # rulează local pe http://localhost:3333
```

## Deploy Studio

```bash
npx sanity deploy
```

Asta hostează Studio-ul la `https://[hostname].sanity.studio` (Sanity te întreabă ce hostname vrei la primul deploy — sugestie: `muncnmb`).

## Cum adaugi un articol nou

1. Deschide [muncnmb.sanity.studio](https://muncnmb.sanity.studio)
2. Loghează-te cu contul de admin (vezi Settings → Members)
3. Click pe **+ Article** și completează ambele variante (RO + EN)
4. Click **Publish** — apare pe site instant

## Adăugare admini noi

Owner-ul (president.muncnmbvl@gmail.com) merge la [sanity.io/manage/project/0zxes46g](https://sanity.io/manage/project/0zxes46g) → **Members** → **Invite member** → adaugă email.

## Schema

Vezi `schemas/article.js`. Modificările la schemă necesită un nou `npx sanity deploy`.
