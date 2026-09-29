-- Missing RLS: no ENABLE ROW LEVEL SECURITY anywhere for these two tables.
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text
);

CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users (id),
  total_cents integer NOT NULL
);

-- Weak RLS: enabled, but the policy lets everyone read every row.
CREATE TABLE public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id uuid,
  body text
);
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read messages" ON public.messages
  FOR SELECT USING (true);

-- Correct: RLS enabled and scoped to the owner. Must NOT be reported.
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users (id),
  name text
);
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owners manage their projects" ON public.projects
  FOR ALL USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
