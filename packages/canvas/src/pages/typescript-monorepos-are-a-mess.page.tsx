import gitDarkLogo from "@/assets/git-logo-dark.svg";
import gitLogo from "@/assets/git-logo.svg";
import tsDarkLogo from "@/assets/ts-logo-dark.svg";
import tsLogo from "@/assets/ts-logo.svg";
import yarnDarkLogo from "@/assets/yarn-logo-dark.svg";
import yarnLogo from "@/assets/yarn-logo.svg";
import type { FC } from "react";

// biome-ignore lint/style/useNamingConvention: AMess is two word
export const TypescriptMonoreposAreAMessPage: FC = () => (
	<div className="grid grid-cols-6 grid-rows-4 gap-6 bg-zinc-100 p-40 dark:bg-zinc-900">
		<div className="border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div className="border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div
			style={{
				"--bg-image-url": `url(${yarnLogo})`,
				"--bg-image-dark-url": `url(${yarnDarkLogo})`,
			}}
			className="col-span-2 row-span-2 bg-[#2C8EBB] bg-[image:var(--bg-image-url)] bg-[length:65%_65%] bg-center bg-no-repeat p-12 dark:bg-[image:var(--bg-image-dark-url)]"
		/>
		<div className="row-span-2 border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div className="row-span-4 border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div className="col-span-2 border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div
			style={{
				"--bg-image-url": `url(${gitLogo})`,
				"--bg-image-dark-url": `url(${gitDarkLogo})`,
			}}
			className="col-span-2 row-span-2 bg-[#f03c2e] bg-[image:var(--bg-image-url)] bg-[length:65%_65%] bg-center bg-no-repeat p-12 dark:bg-[image:var(--bg-image-dark-url)]"
		/>
		<div
			style={{
				"--bg-image-url": `url(${tsLogo})`,
				"--bg-image-dark-url": `url(${tsDarkLogo})`,
			}}
			className="col-span-2 row-span-2 bg-[#3178C6] bg-[image:var(--bg-image-url)] bg-cover p-12 dark:bg-[image:var(--bg-image-dark-url)]"
		/>
		<div className="border-4 border-slate-900 p-12 dark:border-slate-100" />
		<div className="border-4 border-slate-900 p-12 dark:border-slate-100" />
	</div>
);

// bg-zinc-100 -> #f4f4f5
// bg-zinc-900 -> #18181b
// size 1064 x 808
