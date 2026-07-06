/* =============================================================
   Dr. med. Iryna Lipko — Fachärztin für Neurologie, Oldenburg
   main.js — progressive enhancement, vanilla JS, no dependencies.
   Loaded with `defer` on every page. The site remains fully usable
   without this file; it only sharpens the interactive edges.
   ============================================================= */
(function () {
  'use strict';

  /* ---------- 1. Mobile navigation ----------
     The menu is toggled purely in CSS via the #navtoggle checkbox.
     Here we add the behaviours CSS can't express: aria state,
     keyboard support and closing the menu after a choice. */
  var toggle = document.getElementById('navtoggle');
  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.nav-menu');
  var header = document.querySelector('.nav');

  if (toggle && burger && menu) {
    burger.setAttribute('role', 'button');
    burger.setAttribute('tabindex', '0');
    burger.setAttribute('aria-controls', 'main');

    function syncBurger() {
      burger.setAttribute('aria-expanded', toggle.checked ? 'true' : 'false');
    }
    syncBurger();
    toggle.addEventListener('change', syncBurger);

    function closeMenu() {
      if (toggle.checked) {
        toggle.checked = false;
        syncBurger();
      }
    }

    // Activate the <label> burger from the keyboard.
    burger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.checked = !toggle.checked;
        syncBurger();
      }
    });

    // Close after choosing a destination (matters for in-page anchors).
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Close when tapping outside the header. Ignoring the whole header
    // also skips the synthesized click the label fires on the checkbox,
    // which would otherwise re-close the menu the instant it opens.
    document.addEventListener('click', function (e) {
      if (!toggle.checked) return;
      if (header && header.contains(e.target)) return;
      closeMenu();
    });
  }

  /* ---------- 2. Contact form ----------
     The form carries `novalidate`, so validation is ours to run.
     With no backend wired up (action="#"), we confirm the request
     client-side instead of reloading into a dead anchor. Point the
     form's `action` at a real endpoint and it will POST normally. */
  var form = document.querySelector('form');
  var submitBtn = form && form.querySelector('button[type="submit"]');

  if (form && submitBtn) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }

      var action = (form.getAttribute('action') || '').trim();
      var hasEndpoint = action !== '' && action !== '#';

      if (!hasEndpoint) {
        e.preventDefault();
        confirmRequest();
      }
      // A real endpoint → let the browser submit the form as usual.
    });
  }

  function confirmRequest() {
    // Don't stack multiple confirmations on repeated submits.
    var existing = form.querySelector('.form-success');
    if (existing) existing.remove();

    var note = document.createElement('div');
    note.className = 'form-success';
    note.setAttribute('role', 'status');
    note.setAttribute('aria-live', 'polite');
    note.innerHTML =
      '<strong>Vielen Dank für Ihre Terminanfrage.</strong>' +
      '<span>Wir haben Ihre Angaben erhalten und melden uns zeitnah bei Ihnen ' +
      'zurück. In dringenden Fällen erreichen Sie uns telefonisch unter ' +
      '<a href="tel:+4944136143970">0441&nbsp;/&nbsp;361&nbsp;439&nbsp;70</a>.</span>';

    form.reset();
    form.insertBefore(note, form.firstChild);
    note.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
})();
