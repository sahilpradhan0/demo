import { createClient } from "@supabase/supabase-js";

const accessToken = "sbp_3202abe939a72cd966255b0493d58e4ffc4e32bf";
const SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW9wcm9qZWN0cmVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzIyNTYwMCwiZXhwIjoyMDgyNzU4NDAwfQ.k5WGIFOCwEt9r--5SHbJGgXb6RsD1tAImifv6wm_N3v";
// The anon key below is public by design and must NOT be reported.
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW9wcm9qZWN0cmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyMjU2MDAsImV4cCI6MjA4Mjc1ODQwMH0.qIFJYTuMgn99uEEgtQeIr5dRfBXmOlLAnErDMBrrZbw";

export const admin = createClient("https://demoprojectref.supabase.co", SERVICE_ROLE);
export { accessToken, ANON_KEY };
