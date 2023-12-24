import gitLogo from './git-logo.svg';
import tsLogo from './ts-logo.svg';
import yarnLogo from './yarn-logo.svg';

// bg-zinc-100 -> #f4f4f5
// bg-zinc-900 -> #18181b
// size 1064 x 808

export function TypescriptMonoreposAreAMess() {
  return (
    <main className="min-w-dvw min-h-dvh flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
      <div className="grid grid-cols-6 grid-rows-4 gap-6 m-40">
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100"></div>
        <div
          style={{
            '--bg-image-url': `url(${yarnLogo})`,
          }}
          className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] bg-[length:65%_65%] bg-center bg-no-repeat bg-[#2C8EBB]"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100 row-span-2"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100 row-span-4"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100 col-span-2"></div>
        <div
          style={{
            '--bg-image-url': `url(${gitLogo})`,
          }}
          className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] bg-[length:65%_65%] bg-center bg-no-repeat bg-[#f03c2e]"></div>
        <div
          style={{
            '--bg-image-url': `url(${tsLogo})`,
          }}
          className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] bg-cover bg-[#3178C6]"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100"></div>
        <div className="p-12 border-4 border-slate-900 dark:border-slate-100"></div>
      </div>
    </main>
  );
}
