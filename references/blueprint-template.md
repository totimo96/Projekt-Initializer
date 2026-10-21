# Blueprint-Review
Vor der Generierung kompakt präsentieren:
- Name, Zweck, Zielgruppe, Erfolgskriterien
- MVP-Funktionen, User-Flows und Nichtziele
- Architektur und Runtime, Package-Manager, API, Hosting
- Daten und Sicherheit, falls relevant
- UI/UX und Accessibility, falls relevant
- Akzeptanzkriterien, Tests, Quality Gates, CI und Repositoryschutz
- Annahmen, Risiken, Architekturalternativen
- Konkreter Generierungsumfang und Zielpfad

**Genau eine Freigabefrage:** „Gibst du diesen Blueprint zur Generierung frei?“
Ohne explizites Ja **keine Anwendungsdateien**. Freigabe deckt nur vereinbarten Scope ab; Betriebssystem-/Toolberechtigungen bleiben wirksam.

Nach der Freigabe erzeugen:
- docs/PROJECT.md mit Requirements/Acceptance IDs
- docs/ARCHITECTURE.md mit Komponenten und Entscheidungen
- docs/QUALITY.md mit Quality Gates und DoD
- AGENTS.md und CLAUDE.md mit denselben dauerhaften Projektregeln
