import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from './lib/supabase/server'

export async function middleware(req: Request) {
  const supabase = await createServerSupabaseClient()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  console.log("session", session)

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/user']
}
