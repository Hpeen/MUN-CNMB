# MUN: CNMB Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Pentru Department of IT:** Acesta este un ghid de build manual în Wix Editor. Bifează fiecare pas pe măsură ce-l termini. Nu sări peste verificări — fiecare task se termină cu o verificare vizuală și/sau funcțională.

**Goal:** Construirea completă a site-ului MUN: CNMB în Wix, bilingv RO+EN, cu toate cele 7 pagini și integrările necesare (Blog, Forms, File Share, Multilingual), gata de publicare pe `www.muncnmbvl.com`.

**Architecture:** Site Wix drag-and-drop, fără cod custom. Conținutul este structurat în 7 pagini publice + 1 legală. Header și footer sunt globale (definite o dată, apar peste tot). Sistemul Wix Multilingual gestionează automat versiunile RO și EN. Wix Blog alimentează automat secțiunea Latest News de pe homepage.

**Tech Stack:** Wix Editor · Wix Multilingual · Wix Blog · Wix Forms · Wix Pro Gallery · Wix Theme Manager · Wix Members/Roles · Wix Analytics

**Spec sursă:** `docs/superpowers/specs/2026-05-16-mun-cnmb-website-design.md`

**Estimare totală:** 8-12 ore de build efectiv în Wix (poate fi spart pe 3-4 sesiuni)

---

## Prerequizite (înainte de Task 1)

Verifică că ai următoarele **înainte** să începi:

- [ ] Logo MUN: CNMB în format SVG sau PNG transparent (de la Executive Team)
- [ ] Cod HEX exact pentru UN Blue (extras din logo cu un color picker)
- [ ] Acces la contul Wix al clubului (sau credentials pentru a-l crea)
- [ ] Acces administrativ pentru cumpărarea/conectarea domeniului `muncnmbvl.com`
- [ ] Cel puțin 3-4 fotografii de calitate (hero, despre, galerie) — chiar și placeholdere temporare
- [ ] Lista completă cu emailuri Executive Team pentru rolurile Wix

Dacă lipsește ceva — anunță Executive Team și nu începe Task 1. Lansarea cu placeholdere e ok, dar **logo + culoare brand sunt blocante**.

---

## Task 1: Setup cont Wix + plan + domeniu

**Locație:** wix.com (creare cont/login)

**Obiectiv:** Cont Wix activ cu un site gol, plan Premium, domeniu conectat.

- [ ] **Step 1: Creare/login cont Wix**

Mergi la `wix.com` → Sign Up / Log In cu emailul de admin al clubului (sugerat: `president@muncnmb.com` sau `contact@muncnmb.com`).

- [ ] **Step 2: Creare site nou**

Click "Create New Site" → alege "Start from scratch" (NU template — vrem control complet) → categorie: "Community & Education" → "Educational Institution".

- [ ] **Step 3: Setare nume site intern**

Settings (rotița sus) → Site Name: `MUN CNMB Official Site`. Acesta e numele intern pentru Wix Dashboard, nu apare public.

- [ ] **Step 4: Cumpărare/conectare plan Premium**

Wix Dashboard → Upgrade → alege un plan **cu domeniu inclus** (de obicei "Light" sau "Core" sunt suficiente pentru un site școlar). Necesar pentru: domeniu propriu, eliminare ads Wix, Wix Forms cu mai mult de 5 răspunsuri/lună.

- [ ] **Step 5: Conectare domeniu `muncnmbvl.com`**

Wix Dashboard → Domains → Connect a Domain → introdu `muncnmbvl.com`. Dacă e cumpărat în altă parte, urmează instrucțiunile Wix pentru DNS (sau transferă-l la Wix). Dacă nu e cumpărat încă, cumpără-l direct din Wix.

- [ ] **Verificare Task 1**

Mergi la Wix Dashboard → site-ul apare în listă cu numele setat, statusul planului = Premium, domeniul = "Connected" (sau "Pending DNS" dacă tocmai l-ai conectat — poate dura până la 48h să se propage).

- [ ] **Save**

Wix salvează automat. Confirmă că vezi "Saved" în bara de sus a Editor-ului.

---

## Task 2: Setup Theme Manager (culori + fonturi globale)

**Locație:** Wix Editor → Site Design (icoană pensulă din meniul stânga)

**Obiectiv:** Definirea paletei de culori și a fonturilor o singură dată, ca să se aplice automat peste tot.

- [ ] **Step 1: Deschide Site Design → Site Theme**

Click pensula → Site Theme.

- [ ] **Step 2: Setare paletă culori**

Click "Color Palette" → "Customize". Setează cele 5 culori principale:

| Slot | Nume sugerat | Cod | Folosire |
|---|---|---|---|
| Color 1 | UN Blue (Primary) | *(HEX-ul exact din logo)* | Buttons primary, links, header accent |
| Color 2 | UN Blue Dark | *(versiunea ~20% mai închisă)* | Hover states, headings |
| Color 3 | Accent | *(decisă de Executive Team — sugestie: gold/galben pentru contrast diplomatic)* | CTA secundare, highlights |
| Color 4 | Dark Neutral | `#1A1A1A` | Body text |
| Color 5 | Light Neutral | `#F5F7FA` | Backgrounds secundare |

- [ ] **Step 3: Setare fonturi**

Click "Text Theme". Setează:
- **Heading 1-6:** `Playfair Display` (Bold pentru H1-H2, Regular pentru H3-H6)
- **Paragraph 1 (body):** `Inter` Regular, 16px, line-height 1.6
- **Paragraph 2 (small/meta):** `Inter` Regular, 14px

Dacă Playfair Display nu apare → "Upload Font" → descarcă de pe Google Fonts (`fonts.google.com/specimen/Playfair+Display`) și upload.

- [ ] **Verificare Task 2**

Adaugă temporar un Heading și un Paragraph oriunde pe pagină → verifică că fontul + culoarea aplicate sunt cele setate. Apoi șterge elementele.

- [ ] **Save**

---

## Task 3: Construire Header global

**Locație:** Wix Editor → orice pagină → click pe zona Header (sus)

**Obiectiv:** Header cu logo + 6 link-uri nav + switch limbă, aplicat pe toate paginile.

- [ ] **Step 1: Activare header global**

Click pe zona Header → în panoul lateral, asigură-te că "Show on all pages" este ON.

- [ ] **Step 2: Adaugă logo**

Drag & drop fișierul logo (SVG/PNG) în Header, aliniat stânga. Setează înălțime ~40px. Adaugă link spre `/` (Homepage) pe logo.

- [ ] **Step 3: Adaugă meniul de navigație**

Add (+) → Menu → Horizontal Menu → drag în Header, aliniat dreapta-centru.

Configurează în panoul Menu → "Manage Menu" → adaugă în ordine:
1. Home → `/`
2. About Us → `/about`
3. Our Team → `/team`
4. News → `/news`
5. Documents → `/documents`
6. Înscrieri → `/inscrieri`

*(Paginile țintă nu există încă — le creezi în Task 5. Wix permite link-uri către pagini neexistente; le actualizezi automat după.)*

- [ ] **Step 4: Setare styling meniu**

Font: Inter, 15px, Color 4 (Dark Neutral). Hover: Color 1 (UN Blue). Spacing între item-uri: 24px.

- [ ] **Step 5: Pregătire spațiu pentru language switch**

Lasă un spațiu gol în extrema dreaptă (~80px) — îl populezi în Task 4 după activarea Multilingual.

- [ ] **Step 6: Verificare mobile header**

Click pe iconița Mobile sus → verifică că pe mobil meniul devine hamburger automat. Dacă nu, click "Optimize for Mobile".

- [ ] **Verificare Task 3**

Navighează prin 2-3 pagini diferite în Editor → header-ul apare identic peste tot. Click pe logo → link OK.

- [ ] **Save**

---

## Task 4: Activare Wix Multilingual (RO + EN)

**Locație:** Wix Dashboard → Settings → Multilingual (sau direct prin App Market dacă nu apare)

**Obiectiv:** Activare a doua limbă (EN) cu switch automat în header.

- [ ] **Step 1: Instalare/activare Wix Multilingual**

Dashboard → Apps & Subscriptions → "Multilingual" → Install (dacă nu e deja).

- [ ] **Step 2: Setare limbi**

Settings → Languages:
- Main language: **Romanian (Română)** — flag RO
- Add language: **English** — flag GB sau US (alege ce preferi vizual)

- [ ] **Step 3: Setare URL structure**

Setează ca site-ul EN să aibă prefix `/en/` (de exemplu `muncnmbvl.com/en/about`). Asta e default-ul Wix.

- [ ] **Step 4: Adaugă language switcher în Header**

Întoarce-te în Editor → Header → Add (+) → Menu → Language Menu → drag în spațiul gol din dreapta lăsat la Task 3.

Stil: text only (`RO | EN`), font Inter 14px, Color 4. Activ = Color 1.

- [ ] **Verificare Task 4**

În Editor, comută între limbi din dropdown-ul sus stânga ("Language: RO / EN") — vezi că poți edita conținutul separat per limbă. Switch-ul din Header e funcțional în preview.

- [ ] **Save**

---

## Task 5: Creare structură pagini (goale)

**Locație:** Wix Editor → Pages & Menu (icoană foi din meniul stânga)

**Obiectiv:** Toate cele 7 pagini publice + 1 privacy create cu URL-urile corecte, încă goale.

- [ ] **Step 1: Configurare pagină Home**

Pagina default se numește deja "Home" — verifică că URL-ul ei este `/`. Setează:
- Page Name: `Home`
- Page URL: `/` (root)
- SEO title (placeholder): `MUN: CNMB — Model United Nations | Mircea cel Bătrân, Râmnicu Vâlcea`

- [ ] **Step 2: Creare pagină About Us**

"+" Add Page → Blank → numește `About Us` → URL: `/about` → Save.

- [ ] **Step 3: Creare pagină Our Team**

"+" Add Page → Blank → numește `Our Team` → URL: `/team` → Save.

- [ ] **Step 4: Activare Wix Blog (pentru News)**

Add Apps (+) sus → caută "Wix Blog" → Add to Site. Wix creează automat pagina `/news` (lista) și template-ul `/post/[slug]`. Redenumește pagina listing din "Blog" în `News` și URL-ul în `/news`.

- [ ] **Step 5: Creare pagină Documents**

"+" Add Page → Blank → numește `Documents` → URL: `/documents` → Save.

- [ ] **Step 6: Creare pagină Înscrieri**

"+" Add Page → Blank → numește `Înscrieri` → URL: `/inscrieri` → Save.

- [ ] **Step 7: Creare pagină Privacy**

"+" Add Page → Blank → numește `Privacy Policy` → URL: `/privacy` → în Page Settings: **untick "Show in menu"** (ca să NU apară în nav, doar în footer) → Save.

- [ ] **Verificare Task 5**

În panoul Pages, vezi: Home, About Us, Our Team, News (+ template Post), Documents, Înscrieri, Privacy Policy. Verifică URL-urile cu click → Page SEO → URL Slug.

- [ ] **Save**

---

## Task 6: Construire Footer global

**Locație:** Wix Editor → orice pagină → click pe zona Footer (jos)

**Obiectiv:** Footer cu 4 coloane + bară jos, aplicat pe toate paginile.

- [ ] **Step 1: Activare footer global**

Click Footer → "Show on all pages" = ON. Background: Color 2 (UN Blue Dark) sau Color 4 (Dark Neutral) — alege ce arată mai bine cu logo-ul.

- [ ] **Step 2: Adaugă Strip cu 4 coloane**

Add (+) → Strip → 4-column strip. Trage în Footer.

- [ ] **Step 3: Coloana 1 — Brand**

În prima coloană adaugă:
- Logo (versiune small/alb)
- Text: `Lead the way to Tomorrow!` (Heading 5, alb)
- Text mic: `CNMB · Râmnicu Vâlcea` (Paragraph 2, alb 70%)

- [ ] **Step 4: Coloana 2 — Quick Links**

Titlu coloană: `Quick Links` (Heading 6, alb). Sub el o listă verticală de link-uri:
- About → `/about`
- Our Team → `/team`
- News → `/news`
- Documents → `/documents`
- Înscrieri → `/inscrieri`

Stil: Inter 14px, alb 80%. Hover: alb 100%.

- [ ] **Step 5: Coloana 3 — Contact**

Titlu: `Contact` (Heading 6, alb). Sub el:
- 📧 `contact@muncnmb.com` (link `mailto:`)
- 📧 `secpress@muncnmb.com` (link `mailto:`) — text mic dreapta: `Press`
- 📧 `president@muncnmb.com` (link `mailto:`) — text mic: `President`

- [ ] **Step 6: Coloana 4 — Social**

Titlu: `Follow Us` (Heading 6, alb). Sub el o linie de iconițe social (Add → Social → Social Bar):
- Instagram → `https://instagram.com/muncnmbvl_official`
- Twitter/X → `https://x.com/muncnmbvl_official`
- Facebook → `https://facebook.com/muncnmbvl_official`
- Threads → `https://threads.net/@muncnmbvl_official`

Sub iconițe, text mic: `@muncnmbvl_official`

- [ ] **Step 7: Bara de jos**

Sub Strip-ul cu 4 coloane, adaugă un Strip subțire cu:
- Stânga: `© 2026 MUN: CNMB. All rights reserved.`
- Dreapta: link `Privacy Policy` → `/privacy`

Background: Color 2 (puțin mai închis decât footer-ul principal). Text: alb 60%.

- [ ] **Verificare Task 6**

Navighează prin 3 pagini diferite → footer-ul apare identic. Click pe fiecare social → se deschide profilul correct. Click pe Privacy Policy → ajungi la `/privacy`.

- [ ] **Save**

---

## Task 7: Build pagina Home — Hero + About snippet

**Locație:** Wix Editor → Pages → Home

**Obiectiv:** Primele 2 secțiuni din homepage (Hero + About snippet) construite și verificate.

- [ ] **Step 1: Adaugă Section Hero**

Add (+) → Section → Blank Section. Înălțime: 90vh (aproape full screen).

- [ ] **Step 2: Background hero**

Click pe Section → Change Background → Image → upload o foto de conferință/sala delegați. Adaugă overlay: Color 2 (UN Blue Dark) cu opacity 50%.

- [ ] **Step 3: Conținut hero**

Centrează în mijlocul section-ului:
- **Titlu (Heading 1):** `Model United Nations: "Mircea cel Bătrân" National College` — Playfair Display Bold, alb, ~52px desktop / ~32px mobile
- **Subtitlu (Heading 4):** `Diplomație, dezbatere, leadership la CNMB` — Inter Regular, alb 90%, 20px
- **Spațiu 32px**
- **CTA primar:** buton `Despre noi` → link `/about` → background Color 1 (UN Blue), text alb
- **CTA secundar:** buton `Înscrie-te` → link `/inscrieri` → background transparent, border 2px alb, text alb

- [ ] **Step 4: Adaugă Section About Snippet**

Sub hero, Add (+) → Section. Înălțime auto, padding 80px top/bottom. Background: Color 5 (Light Neutral).

- [ ] **Step 5: Conținut about snippet**

Container centrat, max-width 800px:
- **Heading 2:** `Despre noi` (Color 1, centrat)
- **Paragraph 1:**
  > MUN: CNMB este un club extracurricular cu tema Model United Nations, care funcționează în cadrul Colegiului Național "Mircea cel Bătrân", Râmnicu Vâlcea. Clubul este condus de elevi, coordonat de profesori, și organizează conferințe MUN, workshopuri și activități cu tematică ONU. Suntem primul club de acest fel din întregul județ Vâlcea.

- **Buton text-style:** `Citește mai mult →` → link `/about` (Color 1, fără background, underline on hover)

- [ ] **Verificare Task 7**

Preview (icoana ochi sus) → verifică Hero: titlu lizibil peste imagine, butoanele click-abile, About snippet centrat și citibil. Toggle Mobile preview → totul rămâne lizibil, butoanele rămân tap-abile (nu suprapuse).

- [ ] **Save**

---

## Task 8: Build pagina Home — Pillars + Latest News

**Locație:** Wix Editor → Pages → Home

**Obiectiv:** Secțiunile 3 (Pillars) și 4 (Latest News) din homepage.

- [ ] **Step 1: Adaugă Section Pillars**

Sub About Snippet, Add Section. Background: alb. Padding 80px.

- [ ] **Step 2: Titlu secțiune**

Heading 2: `Ce facem` (centrat, Color 1).

- [ ] **Step 3: 3 carduri orizontale**

Add (+) → Strip → 3-column. În fiecare coloană:

**Card 1:**
- Iconă mare 🎓 (sau ikonă Wix Icons "graduation cap"), Color 1
- Heading 3: `Training & Workshops`
- Paragraph: `Pregătire pentru delegați: cercetare de țară, scriere de rezoluții, public speaking, scriere profesională.`

**Card 2:**
- Iconă 🌍 / "globe", Color 1
- Heading 3: `Conferințe`
- Paragraph: `Participare la conferințe MUN naționale și internaționale; organizarea propriei conferințe accesibile pentru tot județul Vâlcea.`

**Card 3:**
- Iconă 🤝 / "handshake", Color 1
- Heading 3: `Comunitate`
- Paragraph: `Echipă, leadership prin alegeri frecvente, diplomație, networking.`

Toate carduri: background alb, border 1px Color 5, border-radius 8px, padding 32px, drop-shadow subtilă.

- [ ] **Step 4: Adaugă Section Latest News**

Add Section. Background: Color 5. Padding 80px.

- [ ] **Step 5: Header secțiune**

Strip cu 2 coloane:
- Stânga: Heading 2 `Latest News` (Color 1)
- Dreapta (aliniat la dreapta): text-link `Vezi toate →` → `/news`

- [ ] **Step 6: Widget Wix Blog "Recent Posts"**

Add (+) → Blog → "Recent Posts Widget" → trage sub header. Configurează:
- Number of posts: **3**
- Layout: Grid (3 coloane)
- Show: Image · Category · Date · Title · Excerpt (1 line)
- Hide: Author avatar (opțional, pentru claritate)

*(Widget-ul afișează automat cele mai noi 3 articole de îndată ce Press începe să publice. Acum va fi gol sau cu placeholder posts.)*

- [ ] **Verificare Task 8**

Preview → carduri Pillars aliniate corect, equal height. Latest News afișează "No posts yet" sau placeholder Wix — asta e ok pentru lansare. Pe mobil: carduri devin 1 coloană vertical, posts devin tot 1 coloană.

- [ ] **Save**

---

## Task 9: Build pagina Home — Stats + Leadership + Final CTA

**Locație:** Wix Editor → Pages → Home

**Obiectiv:** Ultimele 3 secțiuni de conținut din homepage (înainte de footer).

- [ ] **Step 1: Adaugă Section Stats**

Add Section. Background: Color 1 (UN Blue). Padding 60px. Text alb.

- [ ] **Step 2: 4 stats orizontal**

Strip 4-column. Fiecare coloană centrat:
- Cifră mare (Heading 1, alb, ~64px) + label dedesubt (Paragraph 2, alb 80%)

| Cifră | Label |
|---|---|
| **23** | poziții de leadership |
| **3** | obiective principale |
| **1** | județ (primul MUN din Vâlcea) |
| **2** | fondatori |

*(Notă în spec: actualizare după primele activități cu cifre reale — premii, delegați etc.)*

- [ ] **Step 3: Adaugă Section Leadership Preview**

Add Section. Background: alb. Padding 80px.

- [ ] **Step 4: Header**

Heading 2 centrat: `Echipa noastră` (Color 1).
Sub el, Paragraph mic: `Condusă de elevi, coordonată de profesori.`

- [ ] **Step 5: 5 carduri membri (Executive Board)**

Add (+) → Repeater → 5 elemente într-un rând. Fiecare card:
- Foto rotundă 120x120px (placeholder dacă nu există încă)
- Nume (Heading 5)
- Rol (Paragraph 2, Color 1)

Pre-populează cu:
1. *[Foto profesor]* — `Valeria C. Antonescu` — `General Coordinator`
2. *[Foto]* — `Andrei D. Tulpan` — `President`
3. *[Placeholder]* — `[TBD by Executive Team]` — `Vice-President`
4. *[Placeholder]* — `[TBD by Executive Team]` — `Secretary-General`
5. *[Placeholder]* — `[TBD by Executive Team]` — `Chief of Staff`

- [ ] **Step 6: Buton "Vezi întreaga echipă"**

Centrat sub repeater: button `Vezi întreaga echipă →` → link `/team`. Stil text-button cu border 1px Color 1.

- [ ] **Step 7: Adaugă Section Final CTA**

Add Section. Background: Color 1 (UN Blue). Padding 100px. Text alb, centrat.

- [ ] **Step 8: Conținut Final CTA**

- **Heading 2:** `Vrei să te alături?` (alb, centrat)
- **Paragraph:** `Aplicațiile pentru următoarea generație de delegați sunt deschise.` (alb 90%, max-width 600px)
- **Spațiu 24px**
- **Buton mare:** `Aplică acum` → link `/inscrieri` → background alb, text Color 1, padding mare (16px 48px), border-radius 4px.

- [ ] **Verificare Task 9**

Preview full homepage de sus în jos. Toate secțiunile aliniate, fluiditate vizuală bună. Pe mobil scroll-uiește complet → totul lizibil, butoanele tap-abile. Click pe `Aplică acum` → ajunge la `/inscrieri` (chiar dacă pagina e încă goală).

- [ ] **Save**

---

## Task 10: Build pagina About Us

**Locație:** Wix Editor → Pages → About Us

**Obiectiv:** Pagină About completă cu toate cele 10 secțiuni din spec §3.2.

- [ ] **Step 1: Hero mic**

Add Section. Înălțime 40vh. Background: Color 2 cu overlay 30% sau imagine team. Conținut centrat:
- Heading 1: `About Us` (alb)
- Subtitlu: `Cine suntem și ce facem` (alb 90%)

- [ ] **Step 2: Section "Cine suntem"**

Container max-width 800px. Heading 2: `Cine suntem`. Paragraf:
> MUN: CNMB este un club extracurricular cu tema Model United Nations, care funcționează în cadrul Colegiului Național "Mircea cel Bătrân", Râmnicu Vâlcea. Clubul este condus de elevi, coordonat de profesori, și organizează conferințe MUN, workshopuri și activități cu tematică ONU. Suntem primul club de acest fel din întregul județ Vâlcea.
>
> Fondatori: **Andrei D. Tulpan** (President) și **Matei H. Găman** — elevi la Matematică-Informatică. Coordonator: **Valeria C. Antonescu** — profesor de Limbă și Literatură Română.

- [ ] **Step 3: Section "Misiune & Viziune"**

Strip 2-column. Background: Color 5.
- Coloana 1: Heading 3 `Misiunea noastră` + paragraph placeholder `[Executive Team completează]`
- Coloana 2: Heading 3 `Viziunea noastră` + paragraph placeholder `[Executive Team completează]`

- [ ] **Step 4: Section "Valorile noastre"**

Heading 2 centrat: `Valorile noastre`. Sub el, Strip 3-column:

| Iconă | Titlu | Text |
|---|---|---|
| ⭐ | **Profesionalism** | Activitățile clubului sunt conduse la standard înalt. |
| 🏛️ | **Leadership** | Alegeri frecvente și mandate limitate asigură dezvoltarea continuă. |
| 🤝 | **Diplomație** | Comunicare diplomatică și reprezentare autentică a țărilor. |

- [ ] **Step 5: Section "Obiectivele clubului"**

Heading 2: `Obiectivele noastre`. Listă numerotată:
1. Pregătirea și trimiterea elevilor la conferințe MUN naționale și internaționale.
2. Organizarea unei conferințe MUN accesibile pentru tot județul Vâlcea.
3. Devenirea unei asociații oficiale.

- [ ] **Step 6: Section "Activități"**

Heading 2: `Ce organizăm`. Listă cu iconițe (Add → Bullet List):
- 🌐 Conferințe Model UN
- 📚 Workshopuri MUN
- ✈️ Pregătire pentru conferințe externe
- 🇺🇳 Alte activități cu tematică ONU

- [ ] **Step 7: Section "Comitete simulate"**

Heading 2: `Comitete MUN simulate`. Paragraf intro: `În cadrul activităților noastre simulăm o gamă largă de comitete:`

Strip 3-column cu carduri scurte:
- **DISEC** — Disarmament and International Security
- **ECOFIN** — Economic and Financial Committee
- **SOCHUM** — Social, Humanitarian and Cultural
- **SPECPOL** — Special Political and Decolonization
- **UNSC** — United Nations Security Council
- **Crisis Committees** — Comitete de criză cu rezolvare dinamică

Notă mică sub: *Opțional, simulăm și foruri naționale precum Senatul SUA sau Parlamentul European.*

- [ ] **Step 8: Section "Realizări"**

Heading 2: `Realizări`. Pentru lansare, placeholder:
> Clubul a fost înființat în 2026. Realizările vor fi adăugate pe măsură ce participăm la conferințe și organizăm evenimente.

- [ ] **Step 9: Section "Galerie"**

Add (+) → Gallery → Pro Gallery. Upload 6-12 imagini (chiar și placeholdere/CNMB școală pentru început). Layout: Grid 3-coloane, hover zoom.

- [ ] **Step 10: Section CTA final**

Background: Color 5. Centrat:
- Heading 3: `Vrei să ne cunoști mai bine?`
- Buton: `Vezi echipa noastră →` → `/team`

- [ ] **Verificare Task 10**

Preview pagina About → toate cele 10 secțiuni vizibile, fără gap-uri ciudate. Pe mobil: strip-urile 2/3-coloane devin 1 coloană. Galeria rămâne click-abilă.

- [ ] **Save**

---

## Task 11: Build pagina Our Team

**Locație:** Wix Editor → Pages → Our Team

**Obiectiv:** Pagină Team cu structura ierarhică (Coordonator → Executive Board → Administration → Conference Management → Departamente), folosind Repeater pentru extensibilitate.

- [ ] **Step 1: Hero mic**

Înălțime 40vh. Background Color 1. Centrat:
- Heading 1: `Our Team` (alb)
- Subtitlu: `Condusă de elevi, coordonată de profesori — 23 de poziții de leadership.` (alb 90%)

- [ ] **Step 2: Section President's Message** *(opțional — sări dacă nu există încă mesaj)*

Strip 2-column:
- Stânga: foto President 400x400px
- Dreapta: Heading 3 `Un cuvânt din partea Președintelui` + paragraph mesaj + signature `— Andrei D. Tulpan, President`

- [ ] **Step 3: Section "Coordonator"**

Heading 2 centrat: `Coordonator`. Sub el un singur card mare, centrat:
- Foto rotundă 160px
- Heading 4: `Valeria C. Antonescu`
- Paragraph Color 1: `General Coordinator`
- Bio scurt: `Profesor de Limbă și Literatură Română la CNMB. Nominalizată de membri și leadership.`

- [ ] **Step 4: Section "Executive Board"**

Heading 2: `Executive Board`. Repeater cu 3 carduri:

**Card 1 — President:**
- Foto, Nume: `Andrei D. Tulpan`, Rol: `President`
- Bio: `Cofondator MUN: CNMB. Ales de membri, un singur mandat pe viață.`

**Card 2 — Vice-President:**
- Foto placeholder, Nume: `[TBD]`, Rol: `Vice-President`
- Bio: `Ales de membri. Conduce Club's Administration.`

**Card 3 — Secretary-General:**
- Foto placeholder, Nume: `[TBD]`, Rol: `Secretary-General`
- Bio: `Ales de membri. Conduce Conference Management.`

- [ ] **Step 5: Section "Club's Administration"**

Heading 2: `Club's Administration`. Subtitle: `Condusă de Vice-President.`

Repeater (configurat să poată adăuga ușor membri pe viitor):
- Card 1: `[TBD]` — `Chief of Staff`
- Cards 2-N: placeholder pentru Deputies + restul pozițiilor

Notă vizibilă sub repeater: *Detalii suplimentare despre structură vor fi completate de Executive Team.*

- [ ] **Step 6: Section "Conference Management"**

Heading 2: `Conference Management`. Subtitle: `Condusă de Secretary-General.`

Repeater cu pozițiile relevante (placeholder până când Executive Team completează):
- `[TBD]` — `Head of Conference Logistics`
- `[TBD]` — `Head of Substantive Affairs`
- (alte poziții TBD)

- [ ] **Step 7: Section "Departments"**

Heading 2: `Departments`. Pentru fiecare departament cunoscut, sub-secțiune:

**Department of IT**
Repeater cu Head + membri (foto + nume + rol)

**Department of Press**
Repeater cu Head + membri

**(restul departamentelor — adăugate când sunt definite)**

- [ ] **Step 8: Section "Alumni"** *(opțional, gol la lansare)*

Heading 2: `Alumni`. Placeholder: `Pe măsură ce membrii absolvă, îi vom prezenta aici.`

- [ ] **Verificare Task 11**

Preview Team → toate secțiunile prezente, ierarhie clară vizual (President sus, departamente jos). Repeater-ele se extind ușor pentru adăugare. Mobile: toate carduri 1 coloană.

- [ ] **Save**

---

## Task 12: Configurare Wix Blog (pagina News)

**Locație:** Wix Dashboard → Blog (din meniul stânga)

**Obiectiv:** Blog gata de publicat: categorii definite, template article setat, autor configurat.

- [ ] **Step 1: Setare categorii**

Dashboard → Blog → Categories → adaugă în ordine:
1. `Conferințe` — Slug: `conferinte`
2. `Anunțuri` — Slug: `anunturi`
3. `Realizări` — Slug: `realizari`
4. `Behind the Scenes` — Slug: `behind-the-scenes`

Pentru fiecare: scurt description (1 frază).

- [ ] **Step 2: Configurare pagina listing /news**

Editor → Pages → News. Configurează widget-ul Blog feed:
- Layout: Grid 3-coloane
- Posts per page: 9
- Sort: Most recent first
- Show: Cover image, Category, Date, Title, Excerpt (2 rânduri), Author, Reading time

- [ ] **Step 3: Adăugare hero mic în /news**

Sus deasupra blog feed: Section înălțime 30vh, background Color 1, centrat:
- Heading 1: `News`
- Subtitle: `Anunțuri, realizări și povești din culisele MUN: CNMB.`

- [ ] **Step 4: Adăugare filtre categorii sub hero**

Add (+) → Blog → Category Menu (orizontal). Stil: butoane outline Color 1, active = filled.

- [ ] **Step 5: Configurare template Post (article individual)**

Editor → Pages → Post (Blog Post Page). Verifică elementele afișate de sus în jos:
1. Breadcrumb: `News > [Category] > [Title]`
2. Title (Heading 1)
3. Meta line: autor + dată + categorie + reading time
4. Cover image (full-width)
5. Content (rich text)
6. Tags
7. Share buttons (FB, X, IG, Copy link) — Add (+) → Social → Share Buttons
8. Related posts (3) — Add (+) → Blog → Related Posts widget

- [ ] **Step 6: Dezactivare comentarii**

În Blog Settings → Comments → toggle OFF. Confirmare: *Comentariile sunt dezactivate intenționat (decizie spec §3.4).*

- [ ] **Step 7: Configurare autor "Press Team"**

Dashboard → Site Members → invite member: email `secpress@muncnmb.com`, name `MUN: CNMB Press`, role `Blog Writer`. Acceptă invitația din emailul respectiv.

- [ ] **Step 8: Creare 1 post placeholder pentru test**

Publică un post de test: titlu `Bine ați venit pe site-ul oficial MUN: CNMB`, categorie `Anunțuri`, conținut scurt despre lansare. *Acesta apare în Latest News pe homepage — îl ștergeți după ce Press publică ceva real.*

- [ ] **Verificare Task 12**

Preview `/news` → vezi postul placeholder în grid. Click pe el → ajungi în template Post cu toate elementele afișate. Click pe categoria `Anunțuri` în filtru → filtrare funcțională. Întoarce-te la Homepage → secțiunea Latest News afișează acum postul placeholder.

- [ ] **Save**

---

## Task 13: Build pagina Documents

**Locație:** Wix Editor → Pages → Documents

**Obiectiv:** Pagină cu categorii expandabile (accordion) pentru documente oficiale.

- [ ] **Step 1: Hero mic**

Înălțime 30vh, background Color 1. Centrat:
- Heading 1: `Documente importante`
- Subtitle: `Documentele oficiale ale clubului — disponibile pentru consultare și descărcare.`

- [ ] **Step 2: Section principală — Accordion cu categorii**

Add (+) → Interactive → Accordion. Configurează 5 secțiuni:

**Secțiunea 1: Documente fondatoare**
- 📄 `Constituția MUN: CNMB` — versiune draft — `[Descarcă PDF]` `[Vezi online]`
- 📄 `Statutul Clubului` — în lucru — `[Va fi disponibil curând]`

**Secțiunea 2: Reguli & proceduri**
- 📄 `Rules of Procedure` — `[Descarcă]` `[Vezi online]`
- 📄 `Code of Conduct` — `[Descarcă]` `[Vezi online]`

**Secțiunea 3: Planuri & rapoarte**
- 📄 `Planul Proiectului 2026` — `[Descarcă]` `[Vezi online]`
- 📄 `Raport Anual` — *va fi publicat la final de an*

**Secțiunea 4: Pentru delegați**
- 📄 `Ghid Delegat — Începători` — `[Descarcă]`
- 📄 `Position Paper — Template` — `[Descarcă]`
- 📄 `Study Guides` — `[Descarcă arhivă ZIP]`

**Secțiunea 5: Pentru părinți/școală**
- 📄 `Acord parental — Conferințe` — `[Descarcă]`
- 📄 `Acord GDPR — Date Personale` — `[Descarcă]`

- [ ] **Step 3: Adăugare fișiere în Media Manager**

Wix Dashboard → Media → upload toate documentele primite de la Executive Team. Pentru fiecare buton `Descarcă` din accordion: setează link → Document → alege fișierul.

- [ ] **Step 4: Stil item documente**

Fiecare rând de document:
- Iconă PDF stânga (32px, Color 1)
- Nume document (Inter 16px) + sub el versiune/dată (Inter 12px, gray)
- Butoane dreapta: outline Color 1

- [ ] **Step 5: Notă de jos**

Sub accordion, paragraph mic centrat:
> Pentru documente neenumerate aici, contactează-ne la **contact@muncnmb.com**.

- [ ] **Verificare Task 13**

Preview Documents → click pe fiecare categorie → se expandează corect. Click pe `Descarcă` la un document upload-at → se descarcă PDF-ul. Pentru documentele neupload-ate, butonul e prezent dar fără fișier (înlocuiește textul cu `[Disponibil curând]`).

- [ ] **Save**

---

## Task 14: Configurare Wix Forms + build pagina Înscrieri

**Locație:** Wix Editor → Pages → Înscrieri + Wix Dashboard → Forms

**Obiectiv:** Pagină Înscrieri cu carduri activități + formulare funcționale care trimit email.

- [ ] **Step 1: Hero mic**

Înălțime 30vh, background Color 1. Centrat:
- Heading 1: `Înscrieri`
- Subtitle: `Alătură-te clubului sau participă la evenimentele noastre.`

- [ ] **Step 2: Section principală — Carduri activități**

Heading 2: `Activități deschise pentru înscriere`.

Repeater cu carduri (1 card per activitate deschisă). Pentru lansare, cel puțin un card:

**Card 1 — Membership 2026:**
- Iconă/imagine: logo MUN: CNMB
- Heading 4: `Membership 2026`
- Linie deadline: `📅 Deadline: [data setată de Executive Team]`
- Paragraph: `Devino membru activ al MUN: CNMB. Participă la workshopuri, conferințe și viața clubului.`
- Buton: `Aplică acum →` → deschide formularul (Step 4)

**Card 2 — Placeholder pentru viitor:**
- Empty state card cu text: `Următoarele evenimente vor fi anunțate aici.`

- [ ] **Step 3: Creare formular "Membership 2026"**

Editor → Add (+) → Contact & Forms → New Form. Numește: `Membership Application 2026`.

Câmpuri:
1. **Nume complet** (text, required)
2. **Email** (email, required) — pattern validation auto
3. **Telefon** (phone, optional)
4. **Clasa și profilul** (text, required) — ex. `11 Mate-Info`
5. **De ce vrei să te alături MUN: CNMB?** (textarea, required, max 500 chars)
6. **Experiență MUN anterioară** (textarea, optional)
7. **Limbi vorbite** (checkboxes: Română, Engleză, Franceză, Germană, Alta)
8. **Disponibilitate** (radio: 2-3 ore/săpt, 4-6 ore/săpt, 7+ ore/săpt)
9. **Consimțământ GDPR** (checkbox, required): `Sunt de acord cu prelucrarea datelor personale conform Politicii de Confidențialitate.`
10. **Minor sub 16 ani** (checkbox): `Sunt minor sub 16 ani și am acordul părintelui/tutorelui pentru această aplicație.`

Setări:
- Submit button text: `Trimite aplicația`
- After submit message: `Mulțumim! Aplicația ta a fost primită. Te vom contacta în maxim 7 zile.`
- Notificare email către: `president@muncnmb.com` + `vicepresident@muncnmb.com`

- [ ] **Step 4: Integrare formular în pagină**

Sub Repeater de carduri, adaugă o secțiune `Formular înscriere membership` cu formularul creat. Initial poate fi vizibil direct (toate într-un singur scroll) sau ascuns până la click pe `Aplică acum` (Wix Lightbox).

Recomandare pentru simplitate: **vizibil inline, scroll smooth la click**. Setează: butonul `Aplică acum` → Anchor link → ancoră pe Section formular.

- [ ] **Step 5: Section FAQ**

Background: Color 5. Accordion cu 3-4 întrebări:
- `Cine se poate înscrie?` → `Orice elev al CNMB. Pentru evenimente externe, putem accepta și delegați din alte școli.`
- `Există taxă de membership?` → `[Răspuns de la Executive Team]`
- `Ce se întâmplă după ce aplic?` → `Aplicația ta este evaluată de Executive Team. Te contactăm prin email în maxim 7 zile.`
- `Cât timp îmi va lua?` → `Activitățile clubului ocupă în medie 3-5 ore pe săptămână, mai mult în perioadele de conferință.`

- [ ] **Step 6: Empty state când nu sunt înscrieri active**

Pregătește o variantă a Section principală cu un singur container centrat:
- Iconă mare ⏳ (Color 1)
- Heading 3: `Nu sunt înscrieri active momentan`
- Paragraph: `Urmărește @muncnmbvl_official pe Instagram pentru anunțuri viitoare.`
- Buton: `Mergi pe Instagram →` (link extern)

Această variantă se activează manual de către admin când nu sunt înscrieri deschise (ștergi/ascunzi Repeater-ul).

- [ ] **Verificare Task 14**

Preview Înscrieri → carduri activități vizibile → click `Aplică acum` → scroll la formular → completează cu date test → submit → vezi mesajul de confirmare → verifică emailul `president@muncnmb.com` (testează cu un email real). Verifică Forms Dashboard → submission apare în lista de răspunsuri.

- [ ] **Save**

---

## Task 15: Build pagina Privacy + Cookie Banner

**Locație:** Wix Editor → Pages → Privacy Policy + Wix Dashboard → Settings → Cookies & Privacy

**Obiectiv:** Pagină Privacy GDPR-compliant + cookie banner activ.

- [ ] **Step 1: Generare Privacy Policy**

Editor → Pages → Privacy Policy → Add (+) → Text → Wix Privacy Policy Generator. Răspunde la întrebări:
- Site collects email (Forms, Newsletter)
- Site collects personal data (Forms)
- Site uses cookies (Wix Analytics)
- Site is for an organization (educational)
- Contact email: `contact@muncnmb.com`

Wix generează textul juridic standard. Editează doar:
- Numele organizației: `MUN: CNMB`
- Adresa: `Colegiul Național "Mircea cel Bătrân", Râmnicu Vâlcea, jud. Vâlcea, România`
- Contact: `contact@muncnmb.com`

- [ ] **Step 2: Adăugare hero mic la /privacy**

Înălțime 25vh, background Color 5 (subtle). Heading 1: `Politică de Confidențialitate`.

- [ ] **Step 3: Activare Cookie Banner**

Wix Dashboard → Settings → Cookies and Tracking → Add Banner. Configurează:
- Stil: discreet bottom bar
- Text: `Folosim cookies pentru a îmbunătăți experiența ta pe site. Continuând navigarea, ești de acord cu Politica noastră de Confidențialitate.`
- Buton: `Accept`
- Link: `Află mai multe` → `/privacy`

- [ ] **Step 4: Activare consent mode pentru Analytics**

Asigură-te că Wix Analytics + orice tracker extern (Google Analytics dacă-l adaugi) respectă Cookie Consent. Settings → Privacy → enable "Don't track until consent".

- [ ] **Verificare Task 15**

Preview homepage incognito → cookie banner apare jos → click `Află mai multe` → ajunge la `/privacy` → conținut complet → click `Accept` pe banner → banner dispare → reload → banner nu mai apare.

- [ ] **Save**

---

## Task 16: Traducere RO → EN pentru toate paginile

**Locație:** Wix Editor → toggle Language (sus stânga, RO → EN)

**Obiectiv:** Toate paginile au și varianta EN completă (pot fi placeholdere brute la lansare, dar nu pagini goale).

- [ ] **Step 1: Comută la EN în Editor**

Sus stânga: dropdown Language → `English`. Editor-ul rămâne pe aceeași pagină dar acum editezi varianta EN.

- [ ] **Step 2: Traducere Homepage**

Treci prin fiecare secțiune și traduce textele. Reguli rapide:
- Nume oficial club rămâne identic (e englez deja)
- Motto rămâne identic (e englez)
- Tagline: `Diplomacy, debate, leadership at CNMB`
- About snippet → traduce paragraf integral
- Pillars: `Training & Workshops` / `Conferences` / `Community`
- Latest News → `Latest News` (rămâne)
- Stats labels: `leadership positions` / `core objectives` / `county (first MUN in Vâlcea)` / `co-founders`
- Final CTA: `Want to join us?` / `Apply now`

- [ ] **Step 3: Traducere About**

Tradu toate cele 10 secțiuni. Cheie: păstrează numele proprii (Andrei, Matei, Valeria, CNMB, Râmnicu Vâlcea) neschimbate.

- [ ] **Step 4: Traducere Team**

Titluri secțiuni: `Coordinator` / `Executive Board` / `Club's Administration` / `Conference Management` / `Departments` / `Alumni` (deja EN). Bio-urile se traduc.

- [ ] **Step 5: Traducere News**

Hero subtitle: `Announcements, achievements, and stories behind the scenes of MUN: CNMB.`
Categorii: `Conferences` / `Announcements` / `Achievements` / `Behind the Scenes`.

*(Notă: postările individuale în Wix Blog se traduc per post — Press scrie ambele variante.)*

- [ ] **Step 6: Traducere Documents**

Titluri categorii:
- `Founding documents`
- `Rules & procedures`
- `Plans & reports`
- `For delegates`
- `For parents/school`

Numele documentelor: lasă originalul (sunt în RO oficial) sau adaugă în paranteze EN.

- [ ] **Step 7: Traducere Înscrieri → "Apply"**

Heading 1: `Apply` (sau `Applications`).
Tradu carduri activități, label-uri formular, FAQ. Mesajul GDPR în EN trebuie verificat juridic — sau lasă cu mențiunea că formularul oficial e în RO.

- [ ] **Step 8: Traducere Privacy**

Wix Privacy Generator are și template EN — generează versiunea EN și pune-o.

- [ ] **Step 9: Verificare Header + Footer în EN**

Sigur, header navigation se traduce automat la `Home / About Us / Our Team / News / Documents / Apply`. Verifică în panoul Menu că labelurile EN sunt setate.

Footer: tradu `Quick Links` titlul, `Contact`, `Follow Us`, bara de jos `© 2026 MUN: CNMB. All rights reserved.`

- [ ] **Verificare Task 16**

Preview → switch RO/EN din header → toate paginile au conținut EN, nu mai apar texte RO rămase. URL-uri EN funcționale (`/en/about` etc.).

- [ ] **Save**

---

## Task 17: SEO + favicon + Open Graph

**Locație:** Wix Dashboard → SEO Tools + Settings → Site Info

**Obiectiv:** Site indexabil corect de Google, link-uri sociale arată profesional.

- [ ] **Step 1: Setare favicon**

Settings → Site Info → Favicon → upload logo versiune 64x64 sau 128x128 PNG/ICO.

- [ ] **Step 2: Setare site title + description globale**

Settings → SEO → Homepage:
- Site Name: `MUN: CNMB — Model United Nations`
- Tagline: `Lead the way to Tomorrow!`
- Default meta description: `Clubul oficial Model United Nations al Colegiului Național "Mircea cel Bătrân", Râmnicu Vâlcea. Diplomație, dezbatere, leadership.`

- [ ] **Step 3: SEO per pagină**

Pentru fiecare pagină (Home, About, Team, News, Documents, Înscrieri, Privacy):
Dashboard → SEO → Pages → click pagina → setează:
- **Page Title:** `[Pagină] | MUN: CNMB`
- **Meta Description:** 1 frază specifică paginii (120-160 caractere)
- **URL Slug:** verifică că e cel corect (`/about`, `/team` etc.)

Exemplu pentru About:
- Title: `About Us | MUN: CNMB`
- Description: `Aflăm mai multe despre primul club Model UN din județul Vâlcea — fondatori, misiune, valori și obiective.`

- [ ] **Step 4: Open Graph images**

Pentru fiecare pagină importantă (Home, About, News, Înscrieri), setează OG image:
- Dimensiune: 1200x630px
- Conținut: logo + titlu pagină + background brand
- Pentru lansare e ok 1 OG image global cu logo mare + motto

- [ ] **Step 5: Generare și submit sitemap**

Wix generează automat `sitemap.xml` la `muncnmbvl.com/sitemap.xml`. Conectează **Google Search Console**:
- Dashboard → Marketing & SEO → Google Search Console → Connect
- Submit sitemap

- [ ] **Step 6: Robots.txt**

Verifică `muncnmbvl.com/robots.txt` — Wix îl generează automat. Confirmă că nu blochează indexarea (`Disallow: /` nu trebuie să apară).

- [ ] **Verificare Task 17**

Test cu **Facebook Debugger** (`developers.facebook.com/tools/debug/`) și **Twitter Card Validator**: paste `muncnmbvl.com` → verifică că OG image + title + description apar corect.

- [ ] **Save**

---

## Task 18: Activare Wix Analytics

**Locație:** Wix Dashboard → Analytics

**Obiectiv:** Tracking vizitatori activ, dashboard configurat.

- [ ] **Step 1: Activare Wix Analytics**

Dashboard → Analytics & Reports → Enable. Wix Analytics e gratuit și nu necesită cont separat.

- [ ] **Step 2: (Opțional) Conectare Google Analytics 4**

Dacă vrei date mai detaliate:
- Creează cont GA4 la `analytics.google.com` cu emailul admin
- Copiază Measurement ID (format `G-XXXXXXX`)
- Wix Dashboard → Marketing & SEO → Marketing Integrations → Google Analytics → paste ID

- [ ] **Step 3: Verificare event tracking**

Lasă să treacă 24h după ce ai vizitatori reali. Apoi în Wix Analytics → Reports → vezi: visitors, top pages, traffic sources.

- [ ] **Save**

---

## Task 19: Asignare roluri Wix Team

**Locație:** Wix Dashboard → Roles & Permissions

**Obiectiv:** Acces controlat pentru fiecare departament.

- [ ] **Step 1: Invitare Admin secundar**

Dashboard → Roles & Permissions → Invite → email Head of IT → Role: `Admin`. Acceptă invitația din emailul respectiv.

- [ ] **Step 2: Confirmare Blog Writer**

Verifică că `secpress@muncnmb.com` invitat la Task 12 Step 7 are rol **Blog Writer** activ (acces doar la Blog Dashboard, nu poate edita design).

- [ ] **Step 3: Invitare Contributors**

Invită cu rol `Contributor` (limited admin):
- `vicepresident@muncnmb.com`
- `secgeneral@muncnmb.com`
- Alte conturi Executive Team după caz

Rol Contributor: poate edita conținut, NU poate șterge pagini sau modifica plan/billing.

- [ ] **Step 4: Documentare în spec sau wiki intern**

Notează (în Confluence/Notion/document Google al clubului) cine are ce rol — pentru când se schimbă Executive Team anul viitor.

- [ ] **Verificare Task 19**

Logout, login cu un cont Blog Writer test → vezi că accesează Blog Dashboard dar nu Editor design. Repetă pentru Contributor.

- [ ] **Save**

---

## Task 20: Verificare Mobile per pagină

**Locație:** Wix Editor → toggle Mobile (icoană telefon sus)

**Obiectiv:** Toate paginile funcționează ireproșabil pe mobil — nu doar "responsive automat".

- [ ] **Step 1: Setare general Mobile**

Switch la Mobile Editor → Wix afișează versiunea mobile. Pentru fiecare pagină repetă pașii 2-4.

- [ ] **Step 2: Verificare Header mobile**

- Hamburger menu prezent
- Click pe el → meniu se deschide cu toate link-urile + language switch
- Logo vizibil, dimensiune adecvată
- Nu se suprapune nimic

- [ ] **Step 3: Pentru fiecare pagină — verificare layout**

Scroll de sus în jos:
- Toate textele lizibile (min 16px body)
- Butoane tap-abile (min 44x44px)
- Imagini scalate corect, fără overflow
- Strip-uri multi-column → devin single column
- Hero: titlu nu se taie, CTA primar vizibil deasupra fold

- [ ] **Step 4: Ascunderi specifice mobile**

Pe mobil ascunde:
- Homepage Hero: butonul CTA secundar (lasă doar primar)
- Footer: poate consolidare coloane 1+2 într-una single

Tehnică: click element → panou → opțiunea "Hide on Mobile".

- [ ] **Step 5: Test pe device real**

Publică un Preview (icoana telefon → "Save & Preview on Mobile" → trimite QR la telefonul tău) → deschide pe iPhone/Android real → navighează prin toate paginile.

- [ ] **Verificare Task 20**

Checklist pe mobil real:
- [ ] Hamburger menu funcțional
- [ ] Switch limbă funcțional
- [ ] Toate CTA-urile click-abile (Despre, Înscrie-te, Aplică acum)
- [ ] Formular Înscrieri se completează ok pe touch keyboard
- [ ] Imagini se încarcă rapid (sub 3 secunde pe 4G)
- [ ] Footer link-uri funcționale

- [ ] **Save**

---

## Task 21: Pre-launch QA complet

**Locație:** Wix Editor → Preview Mode + browser real

**Obiectiv:** Final QA înainte de Publish — toate funcționalitățile testate end-to-end.

- [ ] **Step 1: Test navigare end-to-end**

Browser incognito → vizitează `muncnmbvl.com` (sau preview URL). Click prin TOATE link-urile:
- Top nav: toate cele 6 link-uri funcționează
- Logo → homepage
- Toate CTA-urile homepage
- Toate link-urile footer
- Switch limbă RO → EN → RO

- [ ] **Step 2: Test funcțional formulare**

- Aplică un Membership de test cu date dummy
- Verifică email primit pe `president@muncnmb.com`
- Verifică submission în Wix Forms Dashboard
- Test cu câmp gol → vezi mesaj eroare validation
- Test cu email invalid → mesaj eroare

- [ ] **Step 3: Test funcțional Blog**

- Loghează ca Blog Writer → publică un post de test
- Vezi că apare instant pe `/news`
- Vezi că apare în "Latest News" pe homepage
- Click pe post → template article afișează totul corect
- Vezi că Share buttons funcționează (test pe Twitter/X)
- Șterge postul de test

- [ ] **Step 4: Test funcțional Documents**

- Click pe fiecare buton `Descarcă` → vezi că PDF-ul se descarcă
- Click pe `Vezi online` → PDF se deschide în tab nou

- [ ] **Step 5: Test cookie banner + Privacy**

- Browser incognito → banner apare
- Click `Află mai multe` → ajungi la `/privacy` cu conținut complet
- Click `Accept` → banner dispare → reload → nu mai apare

- [ ] **Step 6: Test cross-browser**

Testează site-ul în:
- Chrome (desktop + mobile)
- Safari (Mac + iPhone dacă ai)
- Firefox
- Edge

Bug-uri comune: fonturi care nu se încarcă, layout-uri stricate, butoane care nu reacționează. Notează și fixează.

- [ ] **Step 7: Test accessibility de bază**

- Folosește **Wave** (`wave.webaim.org`) → vezi alerte pe pagina principală
- Verifică contrast text/background (Color 1 pe alb? Color 4 pe Color 5?) — minim 4.5:1 pentru body
- Toate imaginile au alt text? (Wix Editor → click imagine → ALT TEXT)

- [ ] **Step 8: Test viteză**

`pagespeed.web.dev` → paste URL → vezi scor. Sub 50 e roșu, peste 70 e ok pentru un site Wix nou. Cauze comune dacă e foarte slow: imagini ne-optimizate (Wix le optimizează automat dar verifică), prea multe widget-uri pe homepage.

- [ ] **Verificare Task 21**

Toate punctele de mai sus bifate. Eventualele bug-uri găsite → fixate înainte de publish. Nu lansezi cu probleme cunoscute.

---

## Task 22: Publish + verificare post-lansare

**Locație:** Wix Editor → buton "Publish" (dreapta sus)

**Obiectiv:** Site live pe `muncnmbvl.com`, verificat din afară.

- [ ] **Step 1: Final review în Editor**

Editor → Site Menu → "Site History" → vezi ultimul save. Confirmă că ai toate task-urile 1-21 bifate.

- [ ] **Step 2: Publish**

Buton mare albastru sus dreapta: **Publish**. Confirmă în dialog.

- [ ] **Step 3: Verificare pe domeniu real**

Browser → `muncnmbvl.com` (NU preview URL). Verifică:
- Site se încarcă pe HTTPS (lacăt verde în URL)
- Homepage afișează corect
- DNS propagat (dacă vezi încă pagina veche/error → așteaptă până la 48h)

- [ ] **Step 4: Submit la Google**

Search Console → URL Inspection → paste `muncnmbvl.com` → "Request Indexing". Repetă pentru paginile principale (About, Team, Înscrieri).

- [ ] **Step 5: Anunț intern + extern**

- Anunță Executive Team pe canalul intern (Discord/grup școală) că site-ul e live
- Postează pe `@muncnmbvl_official` cu link
- Trimite emailul de lansare profesorilor/conducerii CNMB

- [ ] **Step 6: Monitoring primele 48h**

Verifică zilnic:
- Wix Analytics → vizitatori
- Forms → cineva a aplicat? sunt bug-uri raportate?
- Inbox `contact@muncnmb.com` → feedback de la utilizatori

- [ ] **Verificare finală Task 22**

- [ ] Site accesibil la `muncnmbvl.com`
- [ ] Versiune EN accesibilă la `muncnmbvl.com/en/`
- [ ] Search Google `site:muncnmbvl.com` → apar pagini indexate (poate dura câteva zile)
- [ ] Cel puțin 1 submission de formular testat funcționează end-to-end
- [ ] Cel puțin 1 vizit înregistrat în Analytics

---

## Post-lansare — în sarcina Executive Team

Lucruri care **nu** fac parte din build-ul inițial dar trebuie urmărite în primele săptămâni după lansare:

- [ ] Press începe publicarea de articole reale în Blog (cel puțin 1/săptămână primele luni)
- [ ] Stats placeholder din homepage actualizat cu cifre reale după primele activități
- [ ] Foto + bio pentru toate cele 23 poziții de leadership completate
- [ ] Documente reale upload-ate pe `/documents` pe măsură ce sunt finalizate
- [ ] Galerie foto din About populată cu poze reale de la primele evenimente
- [ ] Tagline-ul de pe Hero confirmat sau schimbat dacă Executive Team decide altceva
- [ ] Cod HEX exact pentru UN Blue confirmat (dacă s-a folosit aproximare)
- [ ] Tagline și texte în EN revizuite de un vorbitor fluent

---

## Self-Review (intern, pre-handoff)

**Spec coverage:**
- ✅ Toate cele 7 pagini (Home, About, Team, News, Documents, Înscrieri, Privacy) → Tasks 7-15
- ✅ Bilingv RO+EN → Tasks 4 + 16
- ✅ Branding (culori, fonturi, logo) → Tasks 2 + 3
- ✅ Header + Footer global → Tasks 3 + 6
- ✅ Wix Blog config → Task 12
- ✅ Wix Forms config → Task 14
- ✅ Wix File Share → Task 13
- ✅ Cookie banner + GDPR → Task 15
- ✅ SEO + favicon + OG → Task 17
- ✅ Analytics → Task 18
- ✅ Roluri Wix → Task 19
- ✅ Mobile verification → Task 20
- ✅ QA + Publish → Tasks 21-22

**Placeholder check:** Toate `[TBD]` din task-uri sunt explicit marcate ca **conținut de la Executive Team** (nume membri, foto, tagline, cod HEX exact). Acestea NU sunt placeholdere ale planului — sunt cerințe externe documentate clar în secțiunea Prerequizite + "Post-lansare".

**Type/naming consistency:** URL-urile (`/about`, `/team`, `/news`, `/documents`, `/inscrieri`, `/privacy`), numele paginilor, și numele de widget-uri Wix folosite consistent peste tot.

**Gap-uri identificate:** Niciunul — toate elementele din spec §1-§5 acoperite.
