# MUN: CNMB — Official Website

Site oficial al clubului **Model United Nations: "Mircea cel Bătrân" National College**, Râmnicu Vâlcea.

> *"Lead the way to Tomorrow!"*

Site static (HTML/CSS/JS pur, fără build step) găzduit pe **GitHub Pages** la `www.muncnmbvl.com`.

---

## 📁 Structura proiectului

```
/
├── index.html              Homepage RO
├── about.html              Despre noi
├── team.html               Echipa
├── news.html               Listing News
├── documents.html          Documente importante
├── inscrieri.html          Formular înscrieri
├── privacy.html            Politică confidențialitate
├── 404.html                Pagină 404
├── styles.css              Stilizare globală
├── main.js                 Interacțiuni (mobile menu, accordion, form)
├── sitemap.xml             Sitemap SEO
├── robots.txt              Robot rules
├── CNAME                   Domeniu custom GitHub Pages
├── .nojekyll               Forțează GitHub Pages să servească static
│
├── assets/
│   ├── favicon.svg         Favicon
│   ├── images/             Foto site (de adăugat)
│   └── icons/              Iconițe
│
├── news/                   Articole individuale RO
│   └── bine-ati-venit.html
│
├── docs/                   PDF-uri descărcabile (de adăugat)
│
└── en/                     Versiune engleză
    ├── index.html
    ├── about.html
    ├── team.html
    ├── news.html
    ├── documents.html
    ├── inscrieri.html
    ├── privacy.html
    └── news/welcome.html
```

---

## 🚀 Deployment pe GitHub Pages

### Pașii (o singură dată)

1. **Push pe repo GitHub** (de exemplu `Hpeen/MUN-CNMB`):
   ```bash
   git push -u origin main
   ```

2. **Activează GitHub Pages**:
   - Mergi la `Settings` → `Pages` în repo
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`
   - Save

3. **Conectează domeniul `muncnmbvl.com`**:
   - În `Settings` → `Pages` → câmpul **Custom domain** introdu `www.muncnmbvl.com`
   - Fișierul `CNAME` din repo conține deja `www.muncnmbvl.com`
   - La registrarul de domeniu (de unde ai cumpărat domeniul), setează DNS:
     ```
     Type: CNAME
     Name: www
     Value: Hpeen.github.io
     TTL: 3600
     ```
     Pentru root (`muncnmbvl.com` fără `www`), adaugă A records spre IP-urile GitHub:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Propagarea DNS poate dura 24-48h

4. **Activează HTTPS**: După propagare, în `Settings` → `Pages` bifează **Enforce HTTPS**.

### După fiecare schimbare

```bash
git add .
git commit -m "descriere schimbare"
git push
```

GitHub Pages redeploya automat în ~1 minut.

---

## ✏️ Cum publică Press un articol News

1. Copiază `news/bine-ati-venit.html` într-un nume nou: `news/titlu-articol.html`
2. Editează:
   - `<title>` și `<meta name="description">`
   - `<h1>` cu titlul real
   - Data în `.article-meta`
   - Conținutul în `.article-content`
   - Tag-ul categoriei (`Anunțuri` / `Conferințe` / `Realizări` / `Behind the Scenes`)
3. Adaugă un nou card în `news.html` (după primul `<article class="news-card">`):
   ```html
   <article class="news-card" data-category="anunturi">
     <a href="news/titlu-articol.html" class="news-thumb">📢</a>
     <div class="news-body">
       <div class="news-meta">
         <span class="news-category">Anunțuri</span>
         <span>20 mai 2026</span>
       </div>
       <h3><a href="news/titlu-articol.html">Titlul articolului</a></h3>
       <p>Excerpt scurt, 1-2 rânduri.</p>
     </div>
   </article>
   ```
4. Adaugă același card pe homepage `index.html` în secțiunea Latest News (înlocuiește unul vechi pentru a păstra 3 articole)
5. Adaugă URL-ul în `sitemap.xml`
6. **Tradu în engleză** și pune în `en/news/`
7. Commit + push

---

## 📎 Cum adăugăm un document PDF

1. Pune fișierul în `docs/` (ex. `docs/constitutia.pdf`)
2. În `documents.html`, găsește item-ul corespunzător și înlocuiește:
   ```html
   <div class="doc-actions">
     <span class="doc-unavailable">Va fi disponibil curând</span>
   </div>
   ```
   cu:
   ```html
   <div class="doc-actions">
     <a href="docs/constitutia.pdf" class="btn btn-primary" download>Descarcă</a>
     <a href="docs/constitutia.pdf" class="btn btn-outline-blue" target="_blank">Vezi online</a>
   </div>
   ```
3. Repetă pentru versiunea EN în `en/documents.html`

---

## 📬 Cum activăm formularul de Înscrieri

Acum formularul folosește **fallback prin mailto** (deschide aplicația de email locală). Pentru a primi aplicațiile direct pe email fără să se deschidă altă aplicație:

1. Creează cont gratis la [formspree.io](https://formspree.io) cu emailul `president@muncnmb.com`
2. Creează un Form nou și copiază ID-ul (ex. `xrgvznpd`)
3. În `inscrieri.html`, găsește:
   ```html
   <form class="form" data-form="Membership 2026" action="#" ...>
   ```
   și înlocuiește `action="#"` cu:
   ```html
   action="https://formspree.io/f/xrgvznpd"
   ```
4. Repetă în `en/inscrieri.html`
5. Confirmă în consola Formspree primul submission de test

Formspree gratis permite 50 submissions/lună — suficient pentru un club școlar.

---

## 🎨 Customizare brand

Toate culorile, fonturile și spațierile sunt centralizate în `styles.css` în secțiunea `:root` (sus de tot):

```css
:root {
  --un-blue: #009EDB;        /* Modifică cu HEX-ul exact din logo */
  --un-blue-dark: #006FA6;
  --accent: #FFCC33;         /* Auriu UN — modifică dacă vrei altă culoare accent */
  ...
}
```

Pentru fonturi, sunt încărcate de la Google Fonts în `<head>`. Schimbarea se face în CSS la `body` și `h1-h6`.

---

## 🛠️ Dezvoltare locală

Pentru a vedea site-ul pe calculatorul tău înainte de push:

**Opțiunea 1 — Python (preinstalat pe macOS/Linux):**
```bash
python3 -m http.server 8000
```
Deschide `http://localhost:8000`

**Opțiunea 2 — Node.js:**
```bash
npx http-server -p 8000
```

**Opțiunea 3 — VS Code:**
Instalează extensia "Live Server" și click dreapta pe `index.html` → "Open with Live Server".

---

## ✅ Status la lansare

### Implementat
- [x] 7 pagini publice RO + EN (Home, About, Team, News, Documents, Înscrieri, Privacy)
- [x] Pagină 404
- [x] Header sticky + Mobile menu (hamburger)
- [x] Footer cu 4 coloane + social + emailuri complete
- [x] Switch limbă RO ↔ EN pe fiecare pagină
- [x] Cookie banner GDPR
- [x] Formular Membership cu validare client-side
- [x] Accordion pe Documents și FAQ
- [x] News filtering pe categorii
- [x] Sample article (Bine ați venit / Welcome)
- [x] Sitemap.xml + robots.txt
- [x] Responsive (desktop + tablet + mobile)
- [x] Accessibility (semantic HTML, ARIA, focus styles, reduced motion)
- [x] SEO meta tags + Open Graph
- [x] HTTPS-ready (GitHub Pages forțează)

### De completat de Executive Team
- [ ] Logo real (înlocuiește `assets/favicon.svg` și updatează `<span class="logo-mark">UN</span>` din header)
- [ ] Cod HEX exact pentru UN Blue în `styles.css` (`--un-blue`)
- [ ] Foto reale (assets/images/) + actualizare hero `background` și galerie About
- [ ] Bio + foto pentru toți membrii Executive Board, Administration, Departments în `team.html` + `en/team.html`
- [ ] Documente reale PDF în `docs/` și actualizare butoane în `documents.html` + EN
- [ ] Setup Formspree pentru formular (vezi mai sus)
- [ ] Stats reale după primele activități (înlocuiește placeholdere în `index.html`)
- [ ] Tagline final (acum: "Diplomație, dezbatere, leadership la CNMB")
- [ ] Confirmare conturi social cu handle exact `@muncnmbvl_official`

---

## 📞 Contact

Pentru întrebări despre site sau bug-uri: **Department of IT** — `contact@muncnmb.com`
