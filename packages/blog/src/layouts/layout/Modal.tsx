import { Button, Icon } from '@/components';
import { THEME } from '@/shared';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  type Dispatch,
  type FunctionComponent,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { Header } from './Header';
import styles from './Modal.module.css';

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> =
  function ({ children, isOpen, onCloseClick }) {
    // TODO make a separate SlideInSlideOut component, challenges:
    //  - it seems that css modules add a wrapping div, so position is messed up when animation is on its own
    //  - need to support triggering the slideOut animation from outside like here with close button
    const [isSlidingOut, setIsSlidingOut] = useState(false);

    return (
      isOpen && (
        <div
          className={classNames(
            'fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10',
            isSlidingOut ? styles.slidingOut : styles.slidingIn,
          )}
          onAnimationEnd={() => {
            if (isSlidingOut) {
              onCloseClick();
              setIsSlidingOut(false);
            }
          }}>
          <div className={classNames(THEME.fullWidth, 'flex flex-col h-full')}>
            <Header>
              <Button onClick={() => setIsSlidingOut(true)}>
                <Icon glyph="close" />
              </Button>
            </Header>

            {children}
          </div>
        </div>
      )
    );
  };

export function useIsModalOpen(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  return [isModalOpen, setIsModalOpen];
}

export interface ModalProps {
  isOpen: boolean;
  onCloseClick(): void;
}
