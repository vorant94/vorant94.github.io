export function useMobileNav() {
  const state = useState('mobileNav', () => false);
  const isLgScreen = useMediaQuery('(min-width: 1024px)');

  watch(isLgScreen, () => {
    if (isLgScreen) {
      state.value = false;
    }
  });

  return state;
}
