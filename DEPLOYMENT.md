# Neurolect — Deployment (Vercel)

This doc covers first deploy, environment variables, health checks, and headers/CSP rollout.

## 0) Prereqs

- Vercel account (project owner).
- GitHub repo: `Cyber-preacher/neurolect-landing`.

## 1) Import on Vercel

1. New Project → Import GitHub → select `neurolect-landing`.
2. Framework: **Next.js** (App Router).
3. Build command: **(auto)**.
4. Root directory: repo root.
5. Node: Vercel default.
6. Install command: **pnpm i** (Vercel auto-detects).
7. Output directory: **.vercel/output** (Next auto).

## 2) Environment variables

Set in **Vercel → Project → Settings → Environment Variables**:

- `ANTISPAM_SECRET` = long random string (prod & preview).
- *(Optional)* `SUPABASE_URL`, `SUPABASE_ANON_KEY` **or** `SUPABASE_SERVICE_ROLE`
  - If missing, `/api/investor` simply no-ops persistence (safe).
- *(Optional)* `PLAUSIBLE_DOMAIN` if your Analytics uses a custom domain (default code uses `plausible.io`).

After setting envs → **Redeploy**.

## 3) Domains

- Add custom domain (e.g., `neurolect.ai`).
- Set primary. Add `www` redirect to apex or vice versa.
- DNS: A/ALIAS for apex, CNAME for subdomains as instructed by Vercel.

## 4) Health & Monitoring

- Health endpoint: `GET /api/health` → returns `{ ok: true }`.
- Consider adding Vercel Alerts or external uptime checks to `/api/health`.
- Optional: Add `/_vercel/insights` (Vercel Web Analytics) if desired.

## 5) Headers & CSP (safe rollout)

We ship a **Content-Security-Policy-Report-Only** header in `next.config.ts` so nothing breaks initially.
- After deploy, visit the site, then check **Vercel → Project → Observability → Edge/Function logs** for CSP reports (if configured).
- If all good for a day or two, change the header key in `next.config.ts` from
  `Content-Security-Policy-Report-Only` → `Content-Security-Policy` and redeploy.

Notes:
- Calendly: allowed via `frame-src https://calendly.com https://*.calendly.com`.
- Plausible: allowed via `script-src` & `connect-src` to `https://plausible.io`. If using a custom domain, add it to CSP.

## 6) Preview flows

- All PRs from `dev` → preview URLs auto.
- Merge to `main` → Production.

## 7) Local dev vs Vercel

- Local: prefer **Webpack** with setx NEXT_WEBPACK_USE_TURBOPACK 0

new shell

pnpm dev -p 3050

- Vercel build uses Turbopack by default; safe for prod.

## 8) Post-deploy checklist

- [ ] `/` loads with correct metadata/Open Graph.
- [ ] `/investors` shows Calendly (if `SITE.calendly` set) + teaser PDF link works.
- [ ] `/api/investor` & `/api/lead` accept valid payloads; reject missing/invalid tokens.
- [ ] `/privacy` and `/changelog` render.
- [ ] `/api/health` returns `{ ok: true }`.
- [ ] Lighthouse: SEO/Perf/A11y/Best ≥95 on mobile & desktop.
