# Quality

- Quick check: `pnpm verify` (lint, typecheck, unit/component tests, build).
- Full check: `pnpm verify:full` (includes Playwright Chromium).
- Browser setup: `pnpm exec playwright install --with-deps chromium`.
- For every feature, add appropriate behavior and negative tests.
- Never disable tests or CI to manufacture PASS.
- GitHub Actions: .github/workflows/verify.yml; separately enable branch protection.
