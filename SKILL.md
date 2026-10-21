---
name: projekt-init
description: Initialisiert ein Softwareprojekt durch ein adaptives Interview mit einer Frage je Nachricht, expliziter Blueprint-Freigabe, fertigen Tests, CI und dauerhaften Projektanweisungen.
---
# projekt-init
Dies ist der **einzige** Project-Forge-Skill. Für spätere Features wird kein separater Skill aufgerufen.

## Ressourcen
Lies vor dem Interview `references/interview-checklist.md` und `references/blueprint-template.md`; vor der Generierung `references/project-agent-rules.md` und `references/acceptance-checklist.md`.

## Verbindliche Phasen
1. **DISCOVER**: Arbeitsverzeichnis nur lesend prüfen, vorhandene Dateien respektieren. Keine destruktiven Änderungen.
2. **INTERVIEW**: **Genau eine entscheidungsrelevante Frage pro Nachricht**, Antwort abwarten. Alle anwendbaren Domänen adaptiv klären, Entscheidungen zusammenfassen, Risiken kritisch hinterfragen. Noch keine Anwendungsdateien anlegen.
3. **VALIDATE**: Konsistenz, Sicherheit, Datenmodell, Testfälle, Abdeckung und offene Risiken prüfen; nur unkritische Annahmen zulassen.
4. **REVIEW**: Vollständige kompakte Blueprint-Übersicht zeigen und **eine ausdrückliche Freigabe** erfragen. **STOPP** bis zur Zustimmung.
5. **GENERATE**: Nur nach Freigabe Projektdateien und Konfigurationen erzeugen. Für React/Vite/TypeScript nutze `scripts/scaffold.mjs` aus diesem Skill-Verzeichnis mit `--target` und `--name`. Der Generator überschreibt keine vorhandenen Dateien. Schreibe `docs/PROJECT.md`, `docs/ARCHITECTURE.md`, `docs/QUALITY.md` aus den echten Entscheidungen und passe `AGENTS.md`/`CLAUDE.md` an. Bei anderen Stacks nicht behaupten, ein getestetes Template sei vorhanden.
6. **VERIFY**: Tatsächlich installieren, eingefrorene Abhängigkeiten prüfen, Lint, Types, Unit/Komponenten, Build und erforderliche E2E-Tests ausführen. Fehler reparieren und erneut testen, niemals Tests abschalten um grün zu werden.
7. **HANDOFF**: Ergebnis als SUCCESS/PARTIAL/FAILED ausgeben. Exakte Kommandos, Exit-Status, Browser- und CI-Status, Risiken und fehlende Prüfungen angeben. Nicht ausgeführte Remote-CI ist NOT_RUN.

Keine ungefragten Pushes, Deployments, kostenpflichtigen Dienste oder Secret-Uploads. Agentenanweisungen sind kein technischer Ersatz für CI-Branchschutz. Kein eigener Agentenrouter, SQLite-Workflow-Store oder zweiter Skill.
