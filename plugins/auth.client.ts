export default ({ $supabase }: any, inject: any) => {
  inject('auth', $supabase.auth.user() || false);
};
