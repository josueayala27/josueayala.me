import { createClient } from '@supabase/supabase-js';

export default ({ $config }: any, inject: any) => {
  const supabase = createClient(
    $config.NEXT_PUBLIC_SUPABASE_URL,
    $config.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  inject('supabase', supabase);
};
