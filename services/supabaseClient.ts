
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log warning instead of throwing error to prevent app crash
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are missing. Backend features will be disabled.');
}

// Export client if vars exist, otherwise null
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
