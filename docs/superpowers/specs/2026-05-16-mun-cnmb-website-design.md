# MUN: CNMB — Website Design Spec

**Data:** 2026-05-16
**Autor:** Department of IT
**Aprobat de:** Andrei D. Tulpan (President)
**Status:** Design aprobat — gata pentru implementare în Wix

---

## 1. Context & Obiective

### 1.1 Despre club
**MUN: CNMB** — Model United Nations: "Mircea cel Bătrân" National College, Râmnicu Vâlcea.
Club extracurricular condus de elevi, coordonat de profesori. Posibil primul club MUN din județul Vâlcea.

- **Fondatori:** Andrei D. Tulpan (President) și Matei H. Găman — elevi la Matematică-Informatică
- **Coordonator:** Valeria C. Antonescu — profesor de Limbă și Literatură Română
- **Motto:** *"Lead the way to Tomorrow!"*
- **Înființat:** 2026

### 1.2 Obiective site
1. Prezentarea clubului către elevi, părinți, profesori, sponsori și parteneri externi
2. Recrutare membri prin pagina de înscrieri
3. Publicare conținut periodic (News) de către departamentul de Press
4. Distribuție documente oficiale (Constituție, Rules of Procedure, planuri)
5. Suport pentru organizarea propriei conferințe MUN județene

### 1.3 Decizii tehnice de bază
- **Platformă hosting:** Wix (drag-and-drop, fără cod)
- **Limbi:** Bilingv RO + EN (Wix Multilingual, RO principal)
- **Domeniu:** `www.muncnmbvl.com`
- **Email:** sufix `@muncnmb.com`

### 1.4 Branding
- **Culoare brand:** UN Blue (cel din logo)
- **Logo:** similar cu cel ONU, folosit pe documente oficiale
- **Fonturi sugerate:** Playfair Display (titluri) + Inter (corp text) — ambele gratuite în Wix
- **Tone of voice:** profesional, accesibil, diplomatic

---

## 2. Sitemap & Navigare globală

### 2.1 Structură URL
```
/                       Homepage
/about                  About Us
/team                   Our Team
/news                   News listing
/news/[slug]            Articol individual (template Wix Blog)
/documents              Important Documents
/inscrieri              Înscrieri
/privacy                Politică confidențialitate (GDPR — nu în nav)
```

Versiunile EN sunt generate automat de Wix Multilingual: `/en/about`, `/en/team` etc.

### 2.2 Top navigation bar (toate paginile)
```
[Logo MUN: CNMB]   Home   About Us   Our Team   News   Documents   Înscrieri   [RO | EN]
```
- Logo aliniat stânga (înălțime ~40px)
- Link-uri centrate sau aliniate la dreapta logo-ului
- Switch limbă în extrema dreaptă
- Pe mobile: hamburger menu

### 2.3 Event announcement bar (opțional, dismissible)
Bandă subțire deasupra nav-ului, activabilă din Wix când e cazul.
> 📢 *Înscrieri deschise pentru [Eveniment] — [CTA →]*

### 2.4 Footer (toate paginile)
4 coloane + bară jos:

| Coloana 1 | Coloana 2 | Coloana 3 | Coloana 4 |
|---|---|---|---|
| Logo + motto<br>"Lead the way to Tomorrow!"<br>CNMB, Râmnicu Vâlcea | **Quick links**<br>About<br>Team<br>News<br>Documents<br>Înscrieri | **Contact**<br>contact@muncnmb.com<br>secpress@muncnmb.com<br>(presă)<br>president@muncnmb.com | **Social**<br>Instagram<br>Twitter/X<br>Facebook<br>Threads<br>*toate: @muncnmbvl_official* |

Bară jos: `© 2026 MUN: CNMB. All rights reserved.` + link `/privacy`

---

## 3. Pagini detaliate

### 3.1 Homepage (`/`)

| # | Secțiune | Conținut |
|---|---|---|
| 1 | **Hero** | Background: foto conferință/sala delegați + overlay UN Blue.<br>Titlu: *Model United Nations: "Mircea cel Bătrân" National College*<br>Tagline (placeholder): *"Diplomație, dezbatere, leadership la CNMB"*<br>CTA primar: `[Despre noi]` → /about<br>CTA secundar: `[Înscrie-te]` → /inscrieri |
| 2 | **About snippet** | Paragraf scurt (textul din §1.1 condensat în 3-4 rânduri).<br>Buton `[Citește mai mult →]` → /about |
| 3 | **Pillars / Ce facem** | 3 carduri orizontale:<br>🎓 **Training & Workshops** — cercetare de țară, scriere rezoluții, public speaking, scriere profesională<br>🌍 **Conferințe** — participare la MUN-uri naționale/internaționale + organizarea conferinței județene Vâlcea<br>🤝 **Comunitate** — echipă, leadership prin alegeri frecvente, diplomație, networking |
| 4 | **Latest News** | Titlu "Latest News" + `Vezi toate →` în dreapta.<br>Grid 3 articole recente (widget Wix Blog, setare "3 most recent posts" — actualizare automată) |
| 5 | **Stats / Achievements** | Bandă cu 4 cifre placeholder:<br>**23** poziții de leadership · **3** obiective · **1** județ (primul MUN din Vâlcea) · **2** fondatori |
| 6 | **Leadership preview** | Titlu "Echipa noastră" + 4-5 carduri (foto + nume + rol) pentru: General Coordinator, President, Vice-President, Secretary-General, Chief of Staff.<br>Buton `[Vezi întreaga echipă →]` → /team |
| 7 | **CTA final** | Bandă lată UN Blue.<br>Titlu mare: *"Vrei să te alături?"*<br>Buton `[Aplică acum]` → /inscrieri |
| 8 | **Footer** | Global (vezi §2.4) |

**Secțiuni obligatorii:** 1, 2, 4, 7, 8. Restul opționale (recomandate la lansare).

---

### 3.2 About Us (`/about`)

1. **Hero mic** — titlu "About Us" + subtitlu scurt
2. **Cine suntem** — paragraful complet din §1.1, plus context CNMB / Vâlcea
3. **Misiune & viziune** — 2 carduri/coloane (text de la Executive Team)
4. **Core Values** — 3-4 carduri cu iconițe:
   - **Profesionalism** — activități la standard înalt
   - **Leadership** — alegeri frecvente, mandate limitate
   - **Diplomație** — comunicare diplomatică, reprezentare de țări
5. **Obiective club** — listă numerotată:
   1. Pregătirea și trimiterea elevilor la conferințe MUN naționale/internaționale
   2. Organizarea unei conferințe MUN accesibile pentru tot județul Vâlcea
   3. Devenirea unei asociații oficiale
6. **Ce facem** — listă activități:
   - Conferințe Model UN
   - Workshopuri MUN
   - Pregătire pentru conferințe externe
   - Alte activități cu tematică ONU
7. **Comitete MUN simulate** — listă cu scurte descrieri:
   DISEC · ECOFIN · SOCHUM · SPECPOL · UNSC · Crisis Committees · (opțional: Senat SUA, Parlamentul European)
8. **Realizări** — timeline/listă cu evenimente importante și premii (gol la lansare — se completează în timp)
9. **Galerie foto** — Wix Pro Gallery (poze de la conferințe)
10. **CTA** — *"Vrei să ne cunoști?"* `[Vezi echipa →]`

---

### 3.3 Our Team (`/team`)

Structurat pe ierarhia organizatorică (23 poziții totale):

1. **Hero mic** — "Our Team" + 1 frază
2. **President's message** (opțional) — foto Andrei D. Tulpan + mesaj scurt
3. **Coordonator** — secțiune dedicată pentru General Coordinator (profesor)
4. **Executive Board** — carduri mari pentru:
   - President (ales de membri, un singur mandat pe viață)
   - Vice-President (conduce Club's Administration)
   - Secretary-General (conduce Conference Management)
5. **Club's Administration** — Chief of Staff + Deputies + restul pozițiilor *(textele complete vor fi furnizate de Executive Team — vezi §6 Open Items)*
6. **Conference Management** — pozițiile subordonate Secretary-General
7. **Departamente** — secțiuni separate per departament (IT, Press etc.), fiecare cu Head + membri
8. **Alumni** *(opțional, gol la lansare)*

**Card standard membru:**
```
┌────────────────────┐
│      [Foto]        │
│                    │
│      Nume          │
│      Rol           │
│      ─────         │
│  bio 1-2 rânduri   │
│  email (opțional)  │
└────────────────────┘
```

**Implementare Wix:** **Repeater** widget — Executive Team adaugă membri completând câmpuri într-un panou, fără să refacă design-ul.

---

### 3.4 News (`/news`)

#### Pagina listing
1. **Hero mic** — "News" + filtre/categorii (Conferințe, Anunțuri, Realizări, Behind the scenes)
2. **Articol featured** — banner mare sus (cel mai nou sau marcat manual)
3. **Grid articole** — 3 coloane: thumbnail, categorie, dată, titlu, excerpt, autor
4. **Paginare** sau "Load more"
5. **Sidebar opțional** — search, categorii populare, abonare newsletter

#### Pagina articol individual (template Wix Blog)
1. Breadcrumb: `News > Categorie > Titlu`
2. Titlu mare
3. Meta: autor + dată + categorie + timp de citire
4. Cover image
5. Conținut rich text (editor Wix Blog WYSIWYG pentru Press)
6. Tag-uri
7. Share buttons (FB, IG, copy link)
8. Related articles (3 sub conținut)
9. **Comentarii: dezactivate** (recomandare — evită moderarea pentru club școlar)

**Implementare:** Wix Blog nativ. Autor publicare: `secpress@muncnmb.com` cu rol Blog Writer în Wix.

---

### 3.5 Important Documents (`/documents`)

1. **Hero mic** — "Documente importante" + 1 frază: *"Aici găsești documentele oficiale ale clubului"*
2. **Categorii** (accordion sau secțiuni separate):
   - **Documente fondatoare** — Constituția, Statutul
   - **Reguli & proceduri** — Rules of Procedure, Code of Conduct
   - **Planuri & rapoarte** — Planul proiectului, rapoarte anuale
   - **Pentru delegați** — ghiduri, study guides, position paper template
   - **Pentru părinți/școală** — autorizații, acorduri GDPR

**Item în listă:**
```
📄  Numele documentului              [Descarcă] [Vezi online]
    versiune / dată actualizare
```

3. **Notă de jos** — *"Pentru documente neenumerate aici, contactează-ne la contact@muncnmb.com"*

**Implementare:** Wix File Share widget sau butoane spre fișiere din Media Manager.

---

### 3.6 Înscrieri (`/inscrieri`)

Suportă **mai multe formulare simultan** (membership + activități/evenimente).

1. **Hero mic** — "Înscrieri" + *"Alătură-te clubului sau participă la evenimentele noastre"*
2. **Carduri activități deschise** — fiecare card:
   ```
   ┌──────────────────────────────────┐
   │  [Iconă/imagine]                 │
   │  Titlu activitate                │
   │  Deadline: dd luna yyyy          │
   │  Descriere (2-3 rânduri)         │
   │  [Aplică acum →]                 │
   └──────────────────────────────────┘
   ```
3. **Formular** — inline sub card (recomandat) sau pagină separată `/inscrieri/[slug]`
4. **FAQ** (opțional) — "Cine se poate înscrie?", "Există taxă?", "Ce se întâmplă după aplicare?"
5. **Empty state** — când nu sunt înscrieri active: *"Nu sunt înscrieri active acum. Urmărește-ne pe @muncnmbvl_official pentru anunțuri."*

**Implementare:** Wix Forms — răspunsurile pe email + salvare automată în CMS.

**Conformitate:** fiecare formular trebuie să aibă checkbox GDPR + mențiune că minorii sub 16 ani au nevoie de acordul părintelui.

---

### 3.7 Privacy (`/privacy`)
Politică de confidențialitate GDPR (template Wix). Nu apare în nav principal, doar în footer.

---

## 4. Aspecte transversale

### 4.1 Bilingv RO/EN
- **Wix Multilingual:** Settings → Languages → RO (principal) + EN (secundar)
- Switch automat în nav (`[RO | EN]`)
- Executive Team completează ambele variante în panoul paralel
- URL-uri EN: `/en/about`, `/en/team` etc.

### 4.2 Mobile
Wix face responsive automat, dar **fiecare secțiune se verifică în Mobile Editor**.
- Nav → hamburger
- Carduri 3-coloane → 1 coloană vertical
- Hero: păstrează titlu + CTA primar (ascunde CTA secundar pe mobil)

### 4.3 Branding
- **Culoare primară:** UN Blue (extras exact din logo)
- **Culoare accent:** definită de Executive Team
- **Neutre:** alb + gri închis pentru text
- **Definite în Wix Theme Manager** o singură dată, se aplică automat global

### 4.4 SEO
Per pagină (Wix Settings → SEO):
- Title + meta description
- Favicon (logo mic)
- Open Graph image (pentru share-uri pe social)
- Sitemap.xml — generat automat

### 4.5 Analytics
- Wix Analytics (gratuit) — vizitatori, pagini populare
- Opțional: Google Analytics pentru date detaliate

### 4.6 Conformitate (obligatoriu)
- Pagina `/privacy` activă înainte de lansare
- Cookie banner nativ Wix — activat din Settings
- Formulare cu minori: checkbox consimțământ + mențiune acord părinte sub 16 ani

### 4.7 Roluri Wix
| Rol Wix | Cine | Drepturi |
|---|---|---|
| **Admin** | President + Head of IT | Full access |
| **Blog Writer** | Department of Press (secpress@) | Doar publicare în /news |
| **Contributor** | Restul Executive Team | Propune modificări, nu publică direct |

---

## 5. Implementare Wix — checklist tehnic

Ordine recomandată de build:

1. **Setup cont Wix + plan + domeniu** `muncnmbvl.com`
2. **Theme Manager** — culori brand + fonturi (Playfair Display + Inter)
3. **Header + Footer globale** — o singură dată, apar pe toate paginile
4. **Creare pagini goale** cu URL-urile din §2.1
5. **Activare Wix Multilingual** (RO + EN)
6. **Activare Wix Blog** (pentru /news) + creare categorii
7. **Configurare Wix Forms** (pentru /inscrieri)
8. **Configurare File Share / Media Manager** (pentru /documents)
9. **Build pagină cu pagină** — Homepage primul, apoi About, Team, News, Documents, Înscrieri
10. **Privacy + Cookie banner**
11. **SEO + favicon + OG images**
12. **Asignare roluri** (admin, blog writer, contributor)
13. **Verificare Mobile Editor** pe fiecare pagină
14. **Publish + test pe domeniu real**

---

## 6. Open Items (în sarcina Executive Team)

Lucruri care **nu** sunt în sarcina IT-ului — Executive Team trebuie să le furnizeze:

- [ ] Logo final (SVG sau PNG transparent)
- [ ] Culoare brand precisă (cod HEX exact pentru UN Blue)
- [ ] Tagline final pentru Hero (sau confirmare pentru placeholder)
- [ ] Texte pentru Misiune & Viziune (About page)
- [ ] Foto + bio pentru toți membrii Executive Board și Departments
- [ ] Textele pentru pozițiile din Club's Administration (de la Chief of Staff în jos)
- [ ] Documentele de încărcat în /documents (Constituție, ROP etc.)
- [ ] Politica de confidențialitate (template Wix sau text propriu)
- [ ] Imagini hero (foto de calitate de la conferințe / sala delegați)
- [ ] Galerie foto pentru About
- [ ] Stats reale (înlocuiesc placeholder-urile după primele activități)

---

## 7. Out of Scope (explicit)

Lucruri care **nu** fac parte din MVP-ul site-ului:

- Sistem de plăți (taxe conferință) — se adaugă ulterior dacă e nevoie
- Login pentru membri / portal intern — folosim Discord/email pentru comunicare internă
- Forum / sistem comentarii — dezactivat intenționat
- Streaming live / video integration — adăugat ulterior dacă organizăm conferință
- Newsletter automation avansat — Wix oferă basic email marketing, e suficient pentru început

---

## 8. Următorul pas

Aprobă acest spec → trecem la **writing-plans** pentru planul de implementare pas-cu-pas (cine face ce și în ce ordine în Wix).
