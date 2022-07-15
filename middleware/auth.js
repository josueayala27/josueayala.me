export default async function ({ $supabase, $axios }) {
  $supabase.auth.user();
}
