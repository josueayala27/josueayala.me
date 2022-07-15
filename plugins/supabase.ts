import { createClient } from '@supabase/supabase-js';

export default ({ $config }: any, inject: any) => {
  const supabase = createClient($config.SUPABASE_URL, $config.SUPABASE_PUBLIC);
  inject('supabase', supabase);
};
