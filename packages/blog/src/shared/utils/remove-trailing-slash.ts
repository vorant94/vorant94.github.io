export function removeTrailingSlash(pathname: string) {
  return /\w+\/$/.test(pathname) ? pathname.slice(0, -1) : pathname;
}
