// MUN: CNMB - Sanity CMS integration for news
// Fetches articles from Sanity's public CDN (no auth needed for published content)

(function (global) {
  'use strict';

  const PROJECT_ID = '0zxes46g';
  const DATASET = 'production';
  const API_VERSION = '2024-01-01';
  const CDN_BASE = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;

  // ---- HTTP ----
  async function query(groq, params) {
    let url = `${CDN_BASE}?query=${encodeURIComponent(groq)}`;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        url += `&%24${k}=${encodeURIComponent(JSON.stringify(v))}`;
      }
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error('Sanity query failed: ' + res.status);
    return (await res.json()).result;
  }

  // ---- Queries ----
  const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
    _id, category, publishedAt, emoji,
    "imageUrl": coverImage.asset->url,
    "imageHotspot": coverImage.hotspot,
    title_ro, "slug_ro": slug_ro.current, excerpt_ro,
    title_en, "slug_en": slug_en.current, excerpt_en
  }`;

  async function getArticles() {
    return query(ARTICLES_QUERY);
  }

  async function getArticleBySlug(slug, lang) {
    const slugField = lang === 'en' ? 'slug_en' : 'slug_ro';
    const groq = `*[_type == "article" && ${slugField}.current == $slug][0]{
      ...,
      "imageUrl": coverImage.asset->url,
      "imageHotspot": coverImage.hotspot
    }`;
    return query(groq, { slug });
  }

  // ---- Image URL builder (respects hotspot for nice cropping) ----
  function buildImageUrl(baseUrl, opts) {
    if (!baseUrl) return '';
    const params = [];
    if (opts.w) params.push('w=' + opts.w);
    if (opts.h) params.push('h=' + opts.h);
    if (opts.fit) params.push('fit=' + opts.fit);
    if (opts.hotspot && opts.fit === 'crop') {
      params.push('crop=focalpoint');
      params.push('fp-x=' + opts.hotspot.x);
      params.push('fp-y=' + opts.hotspot.y);
    }
    params.push('auto=format');
    params.push('q=85');
    return baseUrl + '?' + params.join('&');
  }

  // ---- Formatters ----
  const MONTHS = {
    ro: ['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December']
  };

  function formatDate(iso, lang) {
    const d = new Date(iso);
    const m = MONTHS[lang][d.getMonth()];
    return lang === 'en'
      ? `${m} ${d.getDate()}, ${d.getFullYear()}`
      : `${d.getDate()} ${m} ${d.getFullYear()}`;
  }

  const CATEGORY_LABELS = {
    ro: { 'announcements': 'Anunțuri', 'conferences': 'Conferințe', 'achievements': 'Realizări', 'behind-the-scenes': 'Behind the Scenes' },
    en: { 'announcements': 'Announcements', 'conferences': 'Conferences', 'achievements': 'Achievements', 'behind-the-scenes': 'Behind the Scenes' }
  };

  function escapeHtml(s) {
    return (s == null ? '' : String(s)).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  // ---- Image asset ref -> URL ----
  function imageUrlFromRef(ref) {
    if (!ref) return '';
    // image-<id>-<dim>-<ext>
    const m = ref.match(/^image-(.+)-(\d+x\d+)-(\w+)$/);
    if (!m) return '';
    return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${m[1]}-${m[2]}.${m[3]}`;
  }

  // ---- Portable Text -> HTML ----
  function renderPortableText(blocks) {
    if (!Array.isArray(blocks)) return '';
    let html = '';
    let listOpen = null;
    for (const block of blocks) {
      if (block._type === 'image' && block.asset) {
        if (listOpen) { html += `</${listOpen}>`; listOpen = null; }
        const url = block.asset._ref ? imageUrlFromRef(block.asset._ref) : (block.asset.url || '');
        if (url) html += `<img src="${url}?w=1200&auto=format&q=85" alt="" loading="lazy" class="article-img">`;
        continue;
      }
      if (block._type !== 'block') continue;

      // Build lookup table for markDefs (links, etc.)
      const markDefs = {};
      (block.markDefs || []).forEach(def => { markDefs[def._key] = def; });

      const inner = (block.children || []).map(c => {
        let t = escapeHtml(c.text);
        const marks = c.marks || [];
        // Decorator marks (strong, em, underline)
        if (marks.includes('strong')) t = `<strong>${t}</strong>`;
        if (marks.includes('em')) t = `<em>${t}</em>`;
        if (marks.includes('underline')) t = `<u>${t}</u>`;
        if (marks.includes('code')) t = `<code>${t}</code>`;
        // Link marks (annotation marks reference markDefs)
        for (const m of marks) {
          const def = markDefs[m];
          if (def && def._type === 'link' && def.href) {
            const safeHref = escapeHtml(def.href);
            const external = /^https?:\/\//i.test(def.href);
            const target = external ? ' target="_blank" rel="noopener"' : '';
            t = `<a href="${safeHref}"${target}>${t}</a>`;
          }
        }
        return t;
      }).join('');

      if (block.listItem) {
        const tag = block.listItem === 'number' ? 'ol' : 'ul';
        if (listOpen !== tag) {
          if (listOpen) html += `</${listOpen}>`;
          html += `<${tag}>`;
          listOpen = tag;
        }
        html += `<li>${inner}</li>`;
        continue;
      }
      if (listOpen) { html += `</${listOpen}>`; listOpen = null; }

      const style = block.style || 'normal';
      const tag = ['h2','h3','h4','blockquote'].includes(style) ? style : 'p';
      html += `<${tag}>${inner}</${tag}>`;
    }
    if (listOpen) html += `</${listOpen}>`;
    return html;
  }

  // ---- Card rendering for news list ----
  function renderCard(article, lang, articleBase) {
    const title = lang === 'en' ? article.title_en : article.title_ro;
    const slug = lang === 'en' ? article.slug_en : article.slug_ro;
    const excerpt = lang === 'en' ? article.excerpt_en : article.excerpt_ro;
    const catLabel = CATEGORY_LABELS[lang][article.category] || article.category;
    const date = formatDate(article.publishedAt, lang);
    const url = `${articleBase}?slug=${encodeURIComponent(slug)}`;
    const readMore = lang === 'en' ? 'Read more →' : 'Citește mai mult →';

    const imgSrc = article.imageUrl
      ? buildImageUrl(article.imageUrl, { w: 900, fit: 'max' })
      : '';
    const blurSrc = article.imageUrl
      ? buildImageUrl(article.imageUrl, { w: 60, fit: 'max' })
      : '';
    const thumb = imgSrc
      ? `<a href="${url}" class="news-thumb news-thumb--image" aria-label="${escapeHtml(title)}" style="--blur-bg:url('${blurSrc}');"><img src="${imgSrc}" alt="" loading="lazy"></a>`
      : `<a href="${url}" class="news-thumb" aria-label="${escapeHtml(title)}">${escapeHtml(article.emoji || '📰')}</a>`;

    return `
      <article class="news-card" data-category="${escapeHtml(article.category)}">
        ${thumb}
        <div class="news-body">
          <div class="news-meta">
            <span class="news-category">${escapeHtml(catLabel)}</span>
            <span>${date}</span>
          </div>
          <h3><a href="${url}">${escapeHtml(title)}</a></h3>
          <p>${escapeHtml(excerpt)}</p>
          <a href="${url}" class="news-card-link">${readMore}</a>
        </div>
      </article>
    `;
  }

  // ---- Public API ----
  global.MuncnmbSanity = {
    getArticles,
    getArticleBySlug,
    renderCard,
    renderPortableText,
    formatDate,
    buildImageUrl,
    CATEGORY_LABELS,
    escapeHtml,
  };
})(window);
