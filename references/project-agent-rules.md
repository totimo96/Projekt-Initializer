# Dauerhafte Regeln für generiertes Projekt
1. Vor jeder Änderung docs/PROJECT.md, docs/ARCHITECTURE.md, docs/QUALITY.md und relevante Implementierung lesen.
2. Normale Feature-Aufträge ohne einen zusätzlichen projekt-init/feature-init-Skill erledigen.
3. Testbare Akzeptanzkriterien ableiten, bei wesentlichen Risiken nachfragen.
4. Architekturgrenzen achten; grundlegende Änderungen vorher freigeben lassen.
5. Sinnvolle Unit-, Komponenten-, Integrations- und E2E-Tests passend zum Verhalten ergänzen.
6. Während der Arbeit relevante Checks und vor Abschluss verpflichtende Full Verification ausführen.
7. Keine Tests entfernen/skippen, Coverage absenken oder CI ausschalten, um einen PASS zu erzwingen.
8. Anforderungen und wesentliche Architekturänderungen dokumentieren.
9. Reale Befehle und Resultate melden; Nichtausführung nicht als PASS bezeichnen.
10. Keine Secrets commiten, kein ungefragtes Deployment.
Projektregeln allein sind keine Sicherheitsgrenze: CI/Branchschutz im Hosting aktivieren.
