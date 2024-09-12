'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function setCookiesAction(num: number) {
  cookies().set('name', 'value')
  // revalidatePath('/')
  return num
}
