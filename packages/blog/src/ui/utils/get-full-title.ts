import { profile } from '../../config/index.js';

export function getFullTitle(title?: string | null): string {
  return title ? `${title} | ${profile.title}` : profile.title;
}
