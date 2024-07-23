import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Root element not found!");
}

createRoot(rootElement).render(
	<StrictMode>
		<main className="flex min-h-dvh min-w-dvw items-center justify-center bg-slate-50 dark:bg-slate-900">
			<RouterProvider router={router} />
		</main>
	</StrictMode>,
);
