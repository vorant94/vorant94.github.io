import type { FC } from "react";
import { Link } from "react-router-dom";
import { type RootRoute, rootRoute } from "../../ui/types/root-route.ts";

export const HomePage: FC = () => (
	<nav>
		<ul>
			{Object.entries(routeToName).map(([link, label]) => (
				<li key={link}>
					<Link
						to={link}
						className="text-slate-500 hover:text-cyan-500"
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

const routeToName = {
	[rootRoute.home]: "HomePage",
	[rootRoute.typescriptMonoreposAreAMess]: "Typescript Monorepos Are A Mess",
	[rootRoute.thoughtsOnModernFrameworkFeatures]:
		"Thoughts on Modern Framework Features",
	[rootRoute.digitalGarden]: "Digital Garden",
} as const satisfies Record<RootRoute, string>;
