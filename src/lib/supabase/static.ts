
import { createClient } from '@supabase/supabase-js'

// Client for static generation (sitemap, robots, etc.) that acts as a public user.
// Does NOT use cookies or auth context.
export const getStaticClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}
