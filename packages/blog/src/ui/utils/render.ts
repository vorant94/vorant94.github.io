import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";

// doctype cannot be added to JSX for some reason, so adding it here programmatically
export function render(Page: ReactNode): string {
	return `<!doctype html>${renderToString(Page)}`;
}
