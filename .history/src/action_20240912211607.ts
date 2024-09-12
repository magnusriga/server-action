'use server'

import { cookies } from "next/headers"

export async function setCookiesAction(num: number) {
  cookies().set('name', 'value')
  return 'success'
}
