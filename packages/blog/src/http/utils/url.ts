import { URL } from "node:url";

export function isHttpUrl(string: string): boolean {
	let url: URL;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return url.protocol === "http:" || url.protocol === "https:";
}

export function isInternalUrl(string: string): boolean {
	if (isHttpUrl(string)) {
		return false;
	}

	let url: URL;
	try {
		url = new URL(string, "https://www.vorant94.io");
	} catch (_) {
		return false;
	}

	return url.hostname === "www.vorant94.io";
}
