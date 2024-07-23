import { profile } from "../../config/globals/profile.js";

export function getFullTitle(title?: string | null): string {
	return title ? `${title} | ${profile.title}` : profile.title;
}
