# Abnahme (ADR-041)
Nur SUCCESS melden, wenn:
- Blueprint wurde ausdrücklich genehmigt.
- Projektdateien wurden ohne destruktive Überschreibung erstellt.
- Docs und gleichwertige AGENTS.md/CLAUDE.md existieren.
- Dependencies installiert, Lockfile vorhanden und Frozen-Install geprüft.
- Lint, Typecheck, Unit/Komponenten, Build und E2E-Smoke tatsächlich erfolgreich liefen.
- CI-YAML strukturell geprüft und im Repository vorhanden.
- Bericht enthält wirklich ausgeführte Befehle, Exit-Codes und offene Blocker.
- Remote-CI bleibt NOT_RUN, wenn nicht tatsächlich ausgeführt.

PARTIAL bei blockierten Pflichtchecks, FAILED bei unbrauchbarer Generierung. Negativtests: fehlerhafte TS-Typen, fehlerhafte Unit-Tests, kaputte Lint-Regeln, fehlender Browser, vorhandene Zieldatei und fehlende Freigabe.
