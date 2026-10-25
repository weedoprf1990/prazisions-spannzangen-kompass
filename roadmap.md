# GitHub Pages

## Rechtstexte

- [ ] Impressum, AGB und Datenschutzerklärung der alten Ferrer-ITS-Website recherchieren und verfügbare Originaltexte übernehmen.
- [ ] Rechtliche Seiten im Footer verlinken und für GitHub Pages einbeziehen.
- [ ] Seitenaufrufe und vorhandene Tests prüfen; fehlende Originaltexte oder notwendige Aktualisierungen benennen.

- [x] Add Node 20 deployment workflow for pushes to main with npm lockfile detection and Pages permissions.
- [x] Generate static HTML for all existing pages and publish only browser files from dist.
- [x] Add ferrer-its.com CNAME, .nojekyll, root base, and 404 fallback.
- [x] Verify hosting configuration and existing routing tests (10 tests pass; preview build OK); actual GitHub deployment awaits external activation.
- [ ] External activation: repository owner must select GitHub Actions in Pages settings and point domain DNS at GitHub Pages; repository settings and DNS are not accessible here.