# Expected ShipOrNah results

Scanning this repo should produce **32 findings: 23 critical, 6 high, 3 medium** (health score 0).

## Secrets (23)

| Location | Expected title | Severity |
|---|---|---|
| `.env:1` | Exposed **Gemini** API key (variable name `GEMINI_API_KEY`) | critical |
| `.env:3` | Exposed OpenAI API key | critical |
| `.env:4` | Exposed Resend API key | critical |
| `.env.local:1` | Exposed **Firebase** API key (`NEXT_PUBLIC_FIREBASE_API_KEY`) | medium |
| `.env.production:1` | Exposed AWS API key | critical |
| `.env.production:2` | Exposed Anthropic API key | critical |
| `src/lib/gemini.ts:3` | Exposed Gemini API key (detected from the SDK call) | critical |
| `src/lib/firebase.ts:4` | Exposed Firebase API key (detected from the file's imports) | medium |
| `src/lib/maps.ts:1` | Exposed Google Maps API key | medium |
| `src/lib/google.ts:2` | Exposed **Google** API key (no clue, so the general label) | critical |
| `src/lib/openai.ts:3` and `:4` | Exposed OpenAI API key (project key + admin key) | critical |
| `src/lib/anthropic.ts:3` | Exposed Anthropic API key | critical |
| `src/lib/stripe.ts:3` and `:4` | Exposed Stripe API key (live secret + restricted key) | critical |
| `src/lib/clerk.ts:3` | Exposed Clerk API key | critical |
| `src/lib/payments.ts:2` | Possible Stripe or Clerk key (ambiguous on purpose) | critical |
| `src/lib/supabase-admin.ts:3` and `:4` | Supabase personal access token + service-role JWT | critical |
| `src/lib/aws.ts:5` | Exposed AWS API key | critical |
| `src/lib/twilio.ts:3` and `:4` | Twilio API secret key + account SID | critical |
| `src/lib/email.ts:3` | Exposed Resend API key | critical |

## Database (3, all critical)

| Location | Finding |
|---|---|
| `supabase/migrations/20260101000000_init.sql:2` | Missing RLS on `profiles` |
| `supabase/migrations/20260101000000_init.sql:8` | Missing RLS on `orders` |
| `supabase/migrations/20260101000000_init.sql:21` | Weak RLS policy on `messages` |

## Unprotected routes (6, all high)

| Location | Finding |
|---|---|
| `src/app/api/orders/route.ts:8` / `:14` | POST, DELETE |
| `src/app/api/profile/[id]/route.ts:4` / `:9` | PUT, PATCH |
| `src/pages/api/webhook.ts:5` / `:9` | POST, DELETE |

## Must NOT be reported

- `.env.example` (real-looking keys, but the scanner skips example files)
- `src/lib/safe/env-usage.ts` (env lookups, a key inside a comment, a `your-key-here` placeholder, and identifiers like `restore_version_...`)
- The Supabase **anon** JWT in `supabase-admin.ts` (public by design)
- `GET /api/orders`, `GET /api/health`
- `POST /api/projects` and `pages/api/secure.ts` (both check auth)
- Table `projects` (RLS on, policy scoped to `auth.uid()`)

## Not covered by a repo scan

The "publicly exposed `.env` / `.git/config` / source maps" checks are for **deployed URLs**, so a GitHub repo scan can't trigger them.
