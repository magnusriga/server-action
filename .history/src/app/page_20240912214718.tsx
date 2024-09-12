import Image from "next/image";
import { ClientComponent } from "./client-component";
import { headers } from "next/headers";

function wait(ms: number) {
  return new Promise<number>((resolve) => setTimeout(() => {

}))
}



export default async function Home() {

  const promise = wait(3000);
  console.log('headers', new Map(headers()));

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <ClientComponent promise={promise}/>

      </main>
    </div>
  );
}
