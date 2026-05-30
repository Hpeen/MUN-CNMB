// MUN: CNMB - global site interactions
(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');
  if (navToggle && navMain) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMain.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // ---------- Announcement bar dismiss ----------
  const announcementBar = document.querySelector('.announcement-bar');
  const announcementClose = document.querySelector('.announcement-bar .close-btn');
  if (announcementBar && announcementClose) {
    if (localStorage.getItem('announcementDismissed') === 'true') {
      announcementBar.classList.add('hidden');
    }
    announcementClose.addEventListener('click', function () {
      announcementBar.classList.add('hidden');
      localStorage.setItem('announcementDismissed', 'true');
    });
  }

  // ---------- Accordion ----------
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = trigger.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', !wasOpen);
    });
  });

  // ---------- News filters ----------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card[data-category]');
  if (filterButtons.length && newsCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.dataset.filter;
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        newsCards.forEach(function (card) {
          card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
      });
    });
  }


  // ---------- Form: handle submit (Formspree-ready, mailto fallback) ----------
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const statusEl = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const action = form.getAttribute('action');

      statusEl.className = 'form-status';
      statusEl.textContent = '';
      submitBtn.disabled = true;
      submitBtn.textContent = submitBtn.dataset.sending || 'Se trimite…';

      if (!action || action === '#') {
        // Fallback: build a mailto link with form data
        const data = new FormData(form);
        const lines = [];
        for (const [key, value] of data.entries()) {
          if (value) lines.push(key + ': ' + value);
        }
        const body = encodeURIComponent(lines.join('\n'));
        const subject = encodeURIComponent('Aplicație: ' + (form.dataset.form || 'MUN CNMB'));
        const mailto = 'mailto:president@muncnmb.com?subject=' + subject + '&body=' + body;
        window.location.href = mailto;
        statusEl.className = 'form-status success';
        statusEl.textContent = form.dataset.successMailto || 'Se deschide aplicația ta de email pentru trimitere. Dacă nu se deschide, scrie-ne direct la president@muncnmb.com.';
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.label || 'Trimite aplicația';
        return;
      }

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          form.reset();
          statusEl.className = 'form-status success';
          statusEl.textContent = form.dataset.success || 'Mulțumim! Aplicația ta a fost primită. Te vom contacta în maxim 7 zile.';
        } else {
          throw new Error('Submit failed');
        }
      } catch (err) {
        statusEl.className = 'form-status error';
        statusEl.textContent = form.dataset.error || 'A apărut o eroare. Te rugăm să încerci din nou sau să ne scrii la president@muncnmb.com.';
      }
      submitBtn.disabled = false;
      submitBtn.textContent = submitBtn.dataset.label || 'Trimite aplicația';
    });
  });

  // ---------- Page transitions ----------
  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var dest = link.href;
      document.body.classList.add('page-exit');
      setTimeout(function () { window.location.href = dest; }, 250);
    });
  });

  // ---------- Active nav link highlighting ----------
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-main a').forEach(function (link) {
    const linkPath = link.getAttribute('href').replace(/\/$/, '') || '/';
    const linkAbs = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
    if (linkAbs === currentPath || (linkAbs !== '/' && currentPath.startsWith(linkAbs))) {
      link.classList.add('active');
    }
  });
})();
