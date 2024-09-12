'use client'

import { useEffect, useState } from "react";

import { setCookiesAction } from "@/action";

async function callback(num: number, resolve: (value: number) => void) {
  const saReturn = await setCookiesAction(num)
  console.log('after SA')
  console.log((saReturn === num) ? 'success' : 'failure')
  resolve(num);
}

export function ClientComponent({promise}: {promise: Promise<number>}) {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    promise.then((data) => {
      console.log('promise resolved inside useEffect, setting data state next, data is:', data)
      setData(data)
    })
  }, [ promise ]);

  return (
    <div className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded text-sm">
      {data === null ? "Loading..." : `Random number: ${data}`}
    </div>
  );
}
