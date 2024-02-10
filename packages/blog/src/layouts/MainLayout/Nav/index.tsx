import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import {
  useEffect,
  type Dispatch,
  type FunctionComponent,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal, useIsModalOpen } from '../Modal';
import { NavLink, type LinkComponent } from './NavLink';

const Nav: NavComponent = function ({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useIsMobileNavOpen();

  return (
    <>
      <nav
        data-testid="desktop-nav"
        className="hidden lg:flex">
        <ul className="flex gap-3 md:gap-4 lg:gap-6">{children}</ul>
      </nav>

      <Button
        aria-label="mobile-nav-burger"
        className="lg:hidden"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        <Icon glyph="menu" />
      </Button>

      <Modal
        isOpen={isMobileNavOpen}
        onCloseClick={() => setIsMobileNavOpen(false)}>
        <nav
          data-testid="mobile-nav"
          className="flex-1 flex flex-col justify-center">
          <ul className="flex flex-col gap-3 px-6">{children}</ul>
        </nav>
      </Modal>
    </>
  );
};

function useIsMobileNavOpen(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isModalOpen, setIsModalOpen] = useIsModalOpen();

  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  useEffect(() => {
    if (isLgScreen && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen, isLgScreen]);

  return [isModalOpen, setIsModalOpen];
}

Nav.Link = NavLink;

export { Nav };

export interface NavComponent
  extends FunctionComponent<PropsWithChildren<NavProps>> {
  Link: LinkComponent;
}

export interface NavProps {}

export type { LinkComponent, NavLinkProps } from './NavLink';
