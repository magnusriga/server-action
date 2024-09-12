'use client'

import { useEffect, useState } from "react";

import { setCookiesAction } from "@/action";
import { useRouter } from "next/navigation";

export function ClientComponent2({value}: {value: number}) {
  const router = useRouter();
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    console.log('in useEffect, value is', value)
  }, [value]);

  async function actionHandler() {
    console.log('before running SA')
    const saReturn = await setCookiesAction(data ?? 0)
    console.log('after SA, return value was', saReturn)
    console.log((saReturn === data) ? 'saReturn === data' : 'saReturn !== data')
    setData(saReturn)
    // router.refresh()
  }

  return (
    <div className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded text-sm">
      {data === null ? "Loading..." : `Random number: ${data}`}
      <button onClick={actionHandler} className="block mt-4 p-2 bg-black/[.1] dark:bg-white/[.1] rounded text-white dark:text-black"> Click To Set Cookies</button>
    </div>
  );
}
