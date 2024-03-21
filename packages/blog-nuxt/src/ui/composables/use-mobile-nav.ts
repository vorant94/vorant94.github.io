export function useMobileNav() {
  const isMobileNavOpen = useState(() => false);
  const isLgScreen = useMediaQuery('(min-width: 1024px)');

  watchEffect(() => {
    if (!isLgScreen.value || !isMobileNavOpen.value) {
      return;
    }

    isMobileNavOpen.value = false;
  });

  watchEffect(() => {
    // to make it SSR friendly
    if (!document) {
      return;
    }

    document.body.style.overflow = isMobileNavOpen.value ? 'hidden' : 'unset';
  });

  return isMobileNavOpen;
}
