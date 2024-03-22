export function useMobileNav() {
  const isMobileNavOpen = useState(() => false);
  const isLgScreen = useMediaQuery('(min-width: 1024px)');
  const route = useRoute();

  watch(
    () => isLgScreen.value,
    () => {
      if (!isLgScreen.value || !isMobileNavOpen.value) {
        return;
      }

      isMobileNavOpen.value = false;
    },
  );

  watchEffect(() => {
    // to make it SSR friendly
    if (!document) {
      return;
    }

    document.body.style.overflow = isMobileNavOpen.value ? 'hidden' : 'unset';
  });

  watch(
    () => route.path,
    () => {
      if (!isMobileNavOpen.value) {
        return;
      }

      isMobileNavOpen.value = false;
    },
  );

  return isMobileNavOpen;
}
