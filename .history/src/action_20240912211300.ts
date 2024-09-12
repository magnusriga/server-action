'use server'

import { cookies } from "next/headers"

export function setCookiesAction() {
  cookies().set('name', 'value')
  return 'success'
}
