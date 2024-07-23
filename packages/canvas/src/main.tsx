import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DigitalGardenPage } from "./canvas/pages/digital-garden.page.tsx";
import { ThoughtsOnModernFrameworkFeaturesPage } from "./canvas/pages/thoughts-on-modern-framework-features.page.tsx";
import { TypescriptMonoreposAreAMessPage } from "./canvas/pages/typescript-monorepos-are-a-mess.page.tsx";
import { HomePage } from "./home/pages/home.page.tsx";
import "./index.css";
import { rootRoute } from "./ui/types/root-route.ts";

const router = createBrowserRouter([
	{
		path: rootRoute.home,
		element: <HomePage />,
	},
	{
		path: rootRoute.typescriptMonoreposAreAMess,
		element: <TypescriptMonoreposAreAMessPage />,
	},
	{
		path: rootRoute.thoughtsOnModernFrameworkFeatures,
		element: <ThoughtsOnModernFrameworkFeaturesPage />,
	},
	{
		path: rootRoute.digitalGarden,
		element: <DigitalGardenPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<main className="min-w-dvw min-h-dvh flex items-center justify-center bg-slate-50 dark:bg-slate-900">
			<RouterProvider router={router} />
		</main>
	</React.StrictMode>,
);
