// Reading keys from the environment is the correct pattern.
export const openaiKey = process.env.OPENAI_API_KEY;
export const stripeKey = process.env.STRIPE_SECRET_KEY;

// Identifiers that merely contain "re_" or "ai_" must not trigger the Resend rule.
export function restore_version_history_snapshot() { return true; }
export const ai_feature_used_in_dashboard = true;

// A key inside a comment is ignored: OPENAI_API_KEY=sk-proj-SaBxwwTiDi1zw0vpCs0wFDampFpMBwBIQZrKqdQ6
const template = "sk-proj-your-key-here-replace-me-1234567890";
export { template };
