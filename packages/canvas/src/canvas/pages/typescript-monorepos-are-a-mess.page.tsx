import type { FC } from "react";
import gitDarkLogo from "../assets/git-logo-dark.svg";
import gitLogo from "../assets/git-logo.svg";
import tsDarkLogo from "../assets/ts-logo-dark.svg";
import tsLogo from "../assets/ts-logo.svg";
import yarnDarkLogo from "../assets/yarn-logo-dark.svg";
import yarnLogo from "../assets/yarn-logo.svg";

export const TypescriptMonoreposAreAMessPage: FC = () => (
	<div className="grid grid-cols-6 grid-rows-4 gap-6 p-40 bg-zinc-100 dark:bg-zinc-900">
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100" />
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100" />
		<div
			style={{
				"--bg-image-url": `url(${yarnLogo})`,
				"--bg-image-dark-url": `url(${yarnDarkLogo})`,
			}}
			className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-[length:65%_65%] bg-center bg-no-repeat bg-[#2C8EBB]"
		/>
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100 row-span-2" />
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100 row-span-4" />
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100 col-span-2" />
		<div
			style={{
				"--bg-image-url": `url(${gitLogo})`,
				"--bg-image-dark-url": `url(${gitDarkLogo})`,
			}}
			className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-[length:65%_65%] bg-center bg-no-repeat bg-[#f03c2e]"
		/>
		<div
			style={{
				"--bg-image-url": `url(${tsLogo})`,
				"--bg-image-dark-url": `url(${tsDarkLogo})`,
			}}
			className="p-12 col-span-2 row-span-2 bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-cover bg-[#3178C6]"
		/>
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100" />
		<div className="p-12 border-4 border-slate-900 dark:border-slate-100" />
	</div>
);

// bg-zinc-100 -> #f4f4f5
// bg-zinc-900 -> #18181b
// size 1064 x 808
