import { createClient } from '@supabase/supabase-js';

export default ({ $config }: any, inject: any) => {
  const supabase = createClient(
    $config.NUXT_PUBLIC_SUPABASE_URL,
    $config.NUXT_PUBLIC_SUPABASE_ANON_KEY
  );
  inject('supabase', supabase);
};
