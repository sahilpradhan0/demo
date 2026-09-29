# ShipOrNah Demo: Intentionally Vulnerable Repo

Test target for the [ShipOrNah](https://github.com/) scanner. **Everything in here is insecure on purpose.**

- All API keys, tokens and JWTs are randomly generated. They match real key *formats* but were never issued by any provider, so they can't be used.
- Do not deploy this app or copy code from it into a real project.

## How to use

1. Create a **public** GitHub repo and push this folder to it (see below).
2. Paste the repo URL into ShipOrNah and scan.
3. Compare the report with [`EXPECTED_RESULTS.md`](./EXPECTED_RESULTS.md).

```bash
git init
git add -A
git commit -m "ShipOrNah demo repo"
git branch -M main
git remote add origin https://github.com/<you>/shipornah-demo-repo.git
git push -u origin main
```

> **Push blocked?** GitHub push protection may reject keys that look like Stripe, AWS, OpenAI, etc.
> It prints a link for each one: open it and choose *"It's used in tests"* to allow the push.
> Or turn off "Push protection" under the repo's Settings > Code security.

## What's inside

| Area | Files | Purpose |
|---|---|---|
| Leaked secrets | `.env*`, `src/lib/*.ts` | One leak per provider the scanner knows |
| Missing / weak RLS | `supabase/migrations/*.sql` | Tables without RLS, and RLS with `USING (true)` |
| Unprotected routes | `src/app/api/orders`, `profile/[id]`, `src/pages/api/webhook.ts` | POST/PUT/PATCH/DELETE with no auth check |
| Should NOT be flagged | `.env.example`, `src/lib/safe/`, `projects` route, `health` route, `secure.ts`, `projects` table, anon JWT | False-positive checks |
