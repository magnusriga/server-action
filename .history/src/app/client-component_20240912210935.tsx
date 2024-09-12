'use client'

import { useEffect, useState } from "react";

export function ClientComponent({promise}: {promise: Promise<number>}) {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    promise.then((data) => {
      console.log('promise resolved inside useEffect, data is:', data)
      setData(data)
    })
  }, [ promise ]);

  return (
    <div className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded text-sm">
      {data === null ? "Loading..." : `Random number: ${data}`}
    </div>
  );
}
