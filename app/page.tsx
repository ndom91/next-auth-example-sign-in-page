import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex overflow-hidden flex-col justify-between items-center p-24 min-h-screen">
      <div className="z-10 justify-between items-center w-full max-w-5xl lg:flex">
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
              type="submit"
            >
              Signout
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button
              className="flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
              type="submit"
            >
              Signin
            </button>
          </form>
        )}
        <div className="flex fixed bottom-0 left-0 justify-center items-end w-full h-48 bg-gradient-to-t from-white via-white lg:static lg:bg-none dark:from-black dark:via-black lg:size-auto">
          <a
            className="flex gap-2 place-items-center p-8 pointer-events-none lg:p-0 lg:pointer-events-auto"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex relative place-items-center z-[-1] before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex-col items-start rounded-md backdrop-blur-xl bg-white/10">
          <h3 className="p-4 w-full rounded-t-md bg-white/10">Session</h3>
          <pre className="p-4">{JSON.stringify(session, null, 2)}</pre>
        </div>
      </div>

      <div className="grid mb-32 text-center lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="py-4 px-5 rounded-lg border border-transparent transition-colors hover:bg-gray-100 hover:border-gray-300 group hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="py-4 px-5 rounded-lg border border-transparent transition-colors hover:bg-gray-100 hover:border-gray-300 group hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="py-4 px-5 rounded-lg border border-transparent transition-colors hover:bg-gray-100 hover:border-gray-300 group hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch]">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="py-4 px-5 rounded-lg border border-transparent transition-colors hover:bg-gray-100 hover:border-gray-300 group hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50 max-w-[30ch] text-balance">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
