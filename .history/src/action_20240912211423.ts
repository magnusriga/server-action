'use server'

import { cookies } from "next/headers"

export function setCookiesAction(num: number) {
  cookies().set('name', 'value')
  return 'success'
}
