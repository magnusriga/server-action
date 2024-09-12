import { ClientComponent2 } from "./client-component2";
import { ClientComponent } from "./client-component";
import { headers } from "next/headers";

function wait(ms: number) {
  return new Promise<number>((resolve) => setTimeout(() => {
    const _headers = new Map(headers());
    resolve(Math.floor(Math.random() * 100));
    console.log('headers in promise after resolve', _headers);
  }, ms))
}

export default async function Home() {
  const promise = wait(3000);
  // const value = await wait(3000);
  console.log('headers in component body', new Map(headers())); // This runs again when ClientComponent2 re-renders.

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ClientComponent promise={promise}/>
        {/* <ClientComponent2 value={value}/> */}
      </main>
    </div>
  );
}
