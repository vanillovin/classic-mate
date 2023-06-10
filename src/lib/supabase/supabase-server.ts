import { cookies, headers } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const createServerClient = () =>
  createServerComponentClient({
    // headers,
    cookies,
  })

export default createServerClient;