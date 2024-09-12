'use server'

import { cookies } from "next/headers"

export function setCookies() {
  cookies().set('name', 'value')
  return 'success'
}
