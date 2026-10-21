# Project Forge — projekt-init

**Ein Skill für Codex und Claude Code.** Der Skill stellt im Interview genau eine Frage pro Nachricht, erzeugt nach **einer ausdrücklichen Blueprint-Freigabe** ein Softwareprojekt mit sofort nutzbaren Tests, CI und dauerhaften Regeln für Coding-Agenten. Für spätere Features brauchst du **keinen weiteren Skill**.

## Installation

Klone oder lade dieses Repository und kopiere das **gesamte Verzeichnis** (inklusive SKILL.md, references/, templates/ und scripts/) nach:
- **Claude Code:** `~/.claude/skills/projekt-init/` — anschließend `/projekt-init` aufrufen.
- **Codex:** `~/.agents/skills/projekt-init/` — anschließend `$projekt-init` aufrufen. Slash-Syntax ist hier nicht garantiert.

## Referenzstack

React + Vite + TypeScript mit pnpm, ESLint, Vitest, React Testing Library, Playwright und GitHub Actions. Andere Frameworks werden nicht als fertige Vorlagen ausgegeben.

### Scaffold lokal testen

```bash
node scripts/scaffold.mjs --target /tmp/forge-demo --name forge-demo
cd /tmp/forge-demo
corepack pnpm install
corepack pnpm verify
corepack pnpm exec playwright install chromium
corepack pnpm test:e2e
```

Die direkte Scaffold-CLI ist ein **Entwickler-Test**, nicht der reguläre Skill-Ablauf: sie stellt kein Interview und setzt keine Genehmigung durch. Der **Skill** darf die CLI erst nach der ausdrücklich erteilten Blueprint-Freigabe nutzen. Nach erfolgreicher Installation muss ein pnpm-Lockfile erzeugt und später per `--frozen-lockfile` geprüft werden.

## Dateien

- [SKILL.md](SKILL.md) — verbindlicher Interview- und Generatorablauf
- [Interview](references/interview-checklist.md) und [Blueprint](references/blueprint-template.md)
- [Agentenregeln](references/project-agent-rules.md) und [Abnahme](references/acceptance-checklist.md)
- [Scaffold](scripts/scaffold.mjs) und [React-Vorlage](templates/react-vite-ts)
- [Session-01-Entscheidungen](docs/SESSION-01.md)

## Grenzen

Keine eigene Workflow-Datenbank, Agenten-Orchestrierungsplattform, Deployment-Engine oder weiterer Skill. Projektvorlagen erzeugen **keine** bereits erledigten fachlichen Anforderungen; der Agent muss die Docs und Tests auf den genehmigten Blueprint anpassen.

Ein GitHub-Actions-Workflow alleine schützt keinen Branch: verpflichtende Statuschecks und Branch-Protection/Rulesets musst du im jeweiligen Projekt aktivieren. Der Abschlussbericht darf Remote-CI nicht als erfolgreich bezeichnen, wenn sie nicht ausgeführt wurde.

**Verifikation:** Die enthaltenen Testvorlagen sind implementiert, aber es wurde hier noch keine erfolgreiche vollständige pnpm-/Playwright-Ausführung nachgewiesen. Das ist ein offener Abnahmepunkt und kein PASS.

MIT License.
