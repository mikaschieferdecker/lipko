# Dr. med. Iryna Lipko — Fachärztin für Neurologie, Oldenburg

Website for a neurology practice in Oldenburg. Static, multi-page,
mobile-first — vanilla HTML, CSS and a small progressive-enhancement
JavaScript layer. No build step and no runtime dependencies.

## Pages

| File | Page |
|------|------|
| `index.html` | Startseite (landing) |
| `ueber-uns.html` | Über die Praxis |
| `leistungen.html` | Leistungen (Diagnostik & Therapie) |
| `expertise.html` | Expertise & Ausstattung |
| `faq.html` | Wissen & FAQ |
| `kontakt.html` | Kontakt, Terminanfrage, Anfahrt, Impressum & Datenschutz |

## Assets

- `styles.css` — the complete design system (tokens, layout, components).
- `main.js` — progressive enhancement, loaded with `defer` on every page:
  - **Mobile navigation** — keyboard support and `aria-expanded`; closes on
    link selection, `Escape`, or an outside tap (the menu itself is toggled
    in pure CSS via a checkbox, so it works even without JavaScript).
  - **Contact form** — client-side validation and an inline confirmation.
    See *Contact form* below for wiring a real backend.

Every layout is fully usable with JavaScript disabled; `main.js` only
sharpens the interactive edges.

## Preview

Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
# then open http://127.0.0.1:8000/index.html
```

## Deploy

Upload the root files (`*.html`, `styles.css`, `main.js`) to any static
host (Netlify, GitHub Pages, classic web space, …). No server runtime is
required.

## Contact form

`kontakt.html` posts to `action="#"`, so `main.js` intercepts the submit,
validates the fields and shows a confirmation without sending anything.
To deliver submissions, point the form at a real endpoint — a form
service (Formspree, Getform, …) or your own handler:

```html
<form action="https://your-endpoint.example/submit" method="post" novalidate>
```

With a non-`#` `action`, `main.js` steps aside and the browser submits the
form normally.

## Fonts

The design uses Apple's **SF Pro** where available and falls back to
**Inter** (loaded from Google Fonts) everywhere else. To ship a licensed
webfont instead, add the files and `@font-face` rules and drop the Google
Fonts `<link>`.

## Design system source

`_ds/` contains the "Schieferdecker" design-system source and notes the
pages were generated from. `uploads/` and `index-print.html` (a
print/PDF helper that auto-opens the print dialog) are export artifacts
and are not linked from the site.
