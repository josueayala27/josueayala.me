import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ebvfuihwszgosgtpqsni.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidmZ1aWh3c3pnb3NndHBxc25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5MDg4MzksImV4cCI6MTk3MzQ4NDgzOX0.1n8i0pQvDyhve9WqfdqDPnOufKBA7SpY8lAScX4XDds'
);

export default (_: null, inject: any) => {
  inject('supabase', supabase);
};
